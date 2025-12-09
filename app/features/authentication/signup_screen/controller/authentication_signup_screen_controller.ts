import React from "react";
import { authenticationSignupScreenFormData, authenticationSignupScreenInputModel } from "../store/authentication_signup_screen_store";

export const handleAuthentication_signup_screenSubmit = async (
  e: React.FormEvent,
  setErrors: (errors: string[]) => void
) => {
  e.preventDefault();
  const currentData = authenticationSignupScreenInputModel.useStore.getState().authenticationSignupScreenData;
  
  // Validate before submission
  const validationErrors = validateForm(currentData);
  if (validationErrors.length > 0) {
    setErrors(validationErrors);
    return;
  }
  
  setErrors([]);
  try {
    // Log the data for testing purposes
    // console.log("Authentication_signup_screen Data Submitted:", currentData);
    
    alert("Authentication_signup_screen data saved successfully!");
  } catch (error) {
    setErrors([error instanceof Error ? error.message : "Submission failed"]);
  }
};

export const onInit = () => {
  console.log("Authentication_signup_screen page initialized");
};

export const onDestroy = () => {
  console.log("Authentication_signup_screen page destroyed");
};

export const resetForm = () => {
  authenticationSignupScreenInputModel.reset();
  console.log("Form reset completed");
};

export const validateForm = (data: Partial<authenticationSignupScreenFormData>): string[] => {
  const errors: string[] = [];

  // Add your validation logic here
  // Example validations (uncomment and modify as needed):
  
  // if (!data.fieldName?.trim()) {
  //   errors.push("Field name is required");
  // }

  

  return errors;
};
