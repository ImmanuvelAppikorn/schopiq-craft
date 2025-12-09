/**
 * Core Utility Functions
 * Provides schema bundle creation for form data management with persistence
 */

import { z } from "zod";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

/**
 * Configuration options for schema bundle creation
 */
export interface SchemaBundleOptions {
  dataPath: string;
  persistenceConfig: Record<string, boolean>;
}

/**
 * Configuration options for complete store creation
 */
export interface CompleteStoreOptions {
  name: string;
  dataPath: string;
  persistenceConfig: Record<string, boolean>;
}

/**
 * Creates a complete schema bundle with persistence and meta schemas
 * @param dataSchema - The main Zod schema for the data
 * @param options - Configuration options including dataPath and persistenceConfig
 * @returns An object containing the complete schema bundle
 */
export function createSchemaBundle<T extends z.ZodTypeAny>(
  dataSchema: T,
  options: SchemaBundleOptions
) {
  const { dataPath, persistenceConfig } = options;

  // Create persistence schema based on the persistence config
  const persistenceShape: Record<string, z.ZodTypeAny> = {};

  Object.entries(persistenceConfig).forEach(([key, shouldPersist]) => {
    if (shouldPersist) {
      // Get the field schema from the data schema
      const fieldSchema = (dataSchema as any).shape?.[key];
      if (fieldSchema) {
        persistenceShape[`persist${capitalize(dataPath)}${capitalize(key)}`] =
          fieldSchema;
      }
    }
  });

  const persistenceSchema = z.object(persistenceShape);

  // Create meta schema that includes persistence config
  const metaSchema = z.object({
    persistenceConfig: persistenceSchema,
  });

  // Create the complete model schema
  const modelSchema = z.object({
    [dataPath]: dataSchema,
    _meta: metaSchema,
  });

  return {
    dataSchema,
    persistenceSchema,
    metaSchema,
    modelSchema,
  };
}

/**
 * Creates a complete Zustand store with persistence and schema validation
 * @param dataSchema - The main Zod schema for the data
 * @param options - Configuration options including name, dataPath, and persistenceConfig
 * @returns A complete store object with model, formSchema, and other utilities
 */
export function createCompleteStore<T extends z.ZodTypeAny>(
  dataSchema: T,
  options: CompleteStoreOptions
) {
  const { name, dataPath, persistenceConfig } = options;

  // Get default values from schema
  const getDefaultValues = () => {
    const shape = (dataSchema as any).shape || {};
    const defaults: any = {};

    Object.keys(shape).forEach((key) => {
      const fieldSchema = shape[key];
      // Try to get default value or use undefined
      try {
        defaults[key] = fieldSchema._def?.defaultValue?.() ?? undefined;
      } catch {
        defaults[key] = undefined;
      }
    });

    return defaults;
  };

  // Create the store with persistence
  const useStore = create(
    persist(
      (set, get) => ({
        [dataPath]: getDefaultValues(),
        update: (updates: Partial<z.infer<T>>) =>
          set((state: any) => ({
            [dataPath]: { ...state[dataPath], ...updates },
          })),
        reset: () =>
          set({
            [dataPath]: getDefaultValues(),
          }),
      }),
      {
        name,
        storage: createJSONStorage(() => localStorage),
        partialize: (state: any) => {
          // Only persist fields marked for persistence
          const persistedData: any = {};
          Object.entries(persistenceConfig).forEach(([key, shouldPersist]) => {
            if (shouldPersist && state[dataPath]?.[key] !== undefined) {
              persistedData[key] = state[dataPath][key];
            }
          });
          return { [dataPath]: persistedData };
        },
      }
    )
  );

  // Create form schema (same as data schema for now)
  const formSchema = dataSchema;

  // Create model object with common methods
  const model = {
    useStore,
    useSelector: <R>(selector: (state: any) => R): R => {
      return useStore(selector);
    },
    update: (updates: Partial<z.infer<T>>) => {
      useStore.getState().update(updates);
    },
    reset: () => {
      useStore.getState().reset();
    },
    getData: () => {
      return useStore.getState()[dataPath];
    },
  };

  return {
    model,
    formSchema,
    useStore,
  };
}

/**
 * Capitalizes the first letter of a string
 */
function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
