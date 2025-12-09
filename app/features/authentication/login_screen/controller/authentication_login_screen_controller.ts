import React from "react";
import { authenticationLoginScreenFormData, authenticationLoginScreenInputModel } from "../store/authentication_login_screen_store";

export const handleAuthentication_login_screenSubmit = async (
  e: React.FormEvent,
  setErrors: (errors: string[]) => void
) => {
  e.preventDefault();
  const currentData = authenticationLoginScreenInputModel.useStore.getState().authenticationLoginScreenData;
  
  // Validate before submission
  const validationErrors = validateForm(currentData);
  if (validationErrors.length > 0) {
    setErrors(validationErrors);
    return;
  }
  
  setErrors([]);
  try {
    // Log the data for testing purposes
    // console.log("Authentication_login_screen Data Submitted:", currentData);
    
    alert("Authentication_login_screen data saved successfully!");
  } catch (error) {
    setErrors([error instanceof Error ? error.message : "Submission failed"]);
  }
};

export const onInit = () => {
  console.log("Authentication_login_screen page initialized");
};

export const onDestroy = () => {
  console.log("Authentication_login_screen page destroyed");
};

export const resetForm = () => {
  authenticationLoginScreenInputModel.reset();
  console.log("Form reset completed");
};

export const validateForm = (data: Partial<authenticationLoginScreenFormData>): string[] => {
  const errors: string[] = [];

  // Add your validation logic here
  // Example validations (uncomment and modify as needed):
  
  // if (!data.fieldName?.trim()) {
  //   errors.push("Field name is required");
  // }

  

  return errors;
};
