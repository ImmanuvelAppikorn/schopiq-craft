/**
 * Authentication_signup_screen Store
 * Simplified store with only used exports
 */
"use client";

import { z } from "zod";
import { createCompleteStore } from "@/core/utility";
import { 
  authenticationSignupScreenDataSchema,
  authenticationSignupScreenPersistenceConfig,
} from "../model/authentication_signup_screen_input_model";

// Create complete store with data schema and persistence configuration
export const authenticationSignupScreenStore = createCompleteStore(authenticationSignupScreenDataSchema, {
  name: "authentication_signup_screen_storage",
  dataPath: "authenticationSignupScreenData",
  persistenceConfig: authenticationSignupScreenPersistenceConfig, // Use new boolean persistence mechanism
});

// Extract only the used exports from the store object:
export const {
  model: authenticationSignupScreenInputModel,
  formSchema: authenticationSignupScreenFormSchema,
} = authenticationSignupScreenStore;

// Export only the used type definitions
export type authenticationSignupScreenFormData = z.infer<typeof authenticationSignupScreenFormSchema>;
