/**
 * Authentication_login_screen Store
 * Simplified store with only used exports
 */
"use client";

import { z } from "zod";
import { createCompleteStore } from "@/core/utility";
import { 
  authenticationLoginScreenDataSchema,
  authenticationLoginScreenPersistenceConfig,
} from "../model/authentication_login_screen_input_model";

// Create complete store with data schema and persistence configuration
export const authenticationLoginScreenStore = createCompleteStore(authenticationLoginScreenDataSchema, {
  name: "authentication_login_screen_storage",
  dataPath: "authenticationLoginScreenData",
  persistenceConfig: authenticationLoginScreenPersistenceConfig, // Use new boolean persistence mechanism
});

// Extract only the used exports from the store object:
export const {
  model: authenticationLoginScreenInputModel,
  formSchema: authenticationLoginScreenFormSchema,
} = authenticationLoginScreenStore;

// Export only the used type definitions
export type authenticationLoginScreenFormData = z.infer<typeof authenticationLoginScreenFormSchema>;
