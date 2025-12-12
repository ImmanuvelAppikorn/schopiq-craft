/**
 * Authentication_login_screen Input Model
 * Defines data schema and security rules for authentication_login_screen feature
 */
"use client";

import { z } from "zod";
import { createSchemaBundle } from "@/core/utility";


// Define nested schemas for complex objects (internal use only)



// Define the main authentication_login_screen data schema with persistence flags
export const authenticationLoginScreenDataSchema = z.object({
  loading: z.boolean().optional(),
  loginLayout: z.string().optional(),
  username: z.string(),
  password: z.string(),
  signInButton: z.string().optional(),
  check: z.string(),
  loginButton: z.string().optional(),
});


// Define persistence configuration for each field
export const authenticationLoginScreenPersistenceConfig = {
  loading: false,
  loginLayout: true,
  username: true,
  password: true,
  signInButton: true,
  check: true,
  loginButton: true,
};


// Create complete schema bundle with auto-generated persistence, meta, and model schemas
export const authenticationLoginScreenSchemas = createSchemaBundle(authenticationLoginScreenDataSchema, {
  dataPath: "authenticationLoginScreenData",
  persistenceConfig: authenticationLoginScreenPersistenceConfig,
});


// Export types for TypeScript usage (only used types)
export type authenticationLoginScreenData = z.infer<typeof authenticationLoginScreenDataSchema>;
