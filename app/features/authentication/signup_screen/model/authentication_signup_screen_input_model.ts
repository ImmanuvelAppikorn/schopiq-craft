/**
 * Authentication_signup_screen Input Model
 * Defines data schema and security rules for authentication_signup_screen feature
 */
"use client";

import { z } from "zod";
import { createSchemaBundle } from "@/core/utility";


// Define nested schemas for complex objects (internal use only)



// Define the main authentication_signup_screen data schema with persistence flags
export const authenticationSignupScreenDataSchema = z.object({
  loading: z.boolean().optional(),
});


// Define persistence configuration for each field
export const authenticationSignupScreenPersistenceConfig = {
  loading: false,
};


// Create complete schema bundle with auto-generated persistence, meta, and model schemas
export const authenticationSignupScreenSchemas = createSchemaBundle(authenticationSignupScreenDataSchema, {
  dataPath: "authenticationSignupScreenData",
  persistenceConfig: authenticationSignupScreenPersistenceConfig,
});


// Export types for TypeScript usage (only used types)
export type authenticationSignupScreenData = z.infer<typeof authenticationSignupScreenDataSchema>;
