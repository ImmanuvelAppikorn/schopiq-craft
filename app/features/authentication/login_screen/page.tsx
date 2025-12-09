"use client";

import { useEffect, useState, FormEvent } from "react";
import { Form } from "@heroui/form";
import { authenticationLoginScreenInputModel } from "./store/authentication_login_screen_store";
import {
  handleAuthentication_login_screenSubmit,
  onInit,
  onDestroy,
  resetForm,
  validateForm,
} from "./controller/authentication_login_screen_controller";
import { LoginLayoutField } from "./components/authentication_login_screen_component";

export default function Authentication_login_screenPage() {
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
          onSubmit={(e: FormEvent) =>
            handleAuthentication_login_screenSubmit(e, setErrors)
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
            <LoginLayoutField />
          </div>
        </Form>
      </div>
    </div>
  );
}
