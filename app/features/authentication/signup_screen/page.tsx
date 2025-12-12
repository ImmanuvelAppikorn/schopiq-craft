"use client";

import { useEffect, useState } from "react";
import { Form } from "@heroui/form";
import { authenticationSignupScreenInputModel } from "./store/authentication_signup_screen_store";
import {
  handleAuthentication_signup_screenSubmit,
  onInit,
  onDestroy,
  resetForm,
  validateForm,
} from "./controller/authentication_signup_screen_controller";
import { SignupLayoutField } from "./components/authentication_signup_screen_component";

export default function Authentication_signup_screenPage() {
  const [errors, setErrors] = useState<string[]>([]);

  // Initialize page on mount
  useEffect(() => {
    onInit();
    return () => {
      onDestroy();
    };
  }, []);

  return (
    <div className="">
      <div className="w-full space-y-4">
        <Form
          className="space-y-4"
          onSubmit={(e) =>
            handleAuthentication_signup_screenSubmit(e, setErrors)
          }
        >
          {errors.length > 0 && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}

          <div className="w-full">
            <SignupLayoutField />
          </div>
        </Form>
      </div>
    </div>
  );
}
