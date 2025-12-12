"use client";

import React, { memo } from "react";
import { authenticationLoginScreenInputModel } from "../store/authentication_login_screen_store";
import { authenticationLoginScreenData } from "../model/authentication_login_screen_input_model";
import { ASSETS } from "@/config/assets";
import {
  InputAppi,
  InputAppiBase,
} from "@/components/appikorn-components/input_appi/input_appi";
import { ButtonAppi } from "@/components/appikorn-components/button_appi/button_appi";
import { CheckboxAppi } from "@/components/appikorn-components/checkbox_appi/checkbox_appi";
import { navigate } from "@/core/navigation/simplified_router";

/**
 * Authentication_login_screen Component
 */

export const LoginLayoutField = memo(() => {
  const loginLayout = authenticationLoginScreenInputModel.useSelector(
    (state: { authenticationLoginScreenData: authenticationLoginScreenData }) =>
      state.authenticationLoginScreenData.loginLayout || ""
  );

  console.log("🔥 LoginLayoutField value changed:", loginLayout);

  return (
    <div
      className="min-h-screen w-full bg-center bg-no-repeat flex items-center justify-center relative"
      style={{ backgroundImage: `url(${ASSETS.login_screen.login_bg})` }}
    >
      {/* Top Left Corner Text */}
      <div className="absolute top-5 left-5 text-2xl font-bold text-white">
        schopiqcraft
      </div>

      {/* Centered Form */}
      <div className="bg-gray-200 backdrop-blur-md p-5 rounded-2xl shadow-xl w-full max-w-md space-y-5">
        <h1 className="text-3xl font-bold mb-4 text-black">Sign In</h1>

        <p className="text-gray-600 mb-2">
          Don't have an account yet?{" "}
          <span
            className="text-[#38cb89] cursor-pointer"
            onClick={() => navigate("/features/authentication/signup_screen")}
          >
            Sign Up
          </span>
        </p>

        <UsernameField />

        <PasswordField />

        <CheckField />

        <LoginButtonField />
      </div>
    </div>
  );
});
export const UsernameField = memo(() => {
  const username = authenticationLoginScreenInputModel.useSelector(
    (state) => state.authenticationLoginScreenData.username || ""
  );

  console.log("🔥 UsernameField value changed:", username);

  return (
    <div>
      <InputAppi
        isRequired
        defaultValue={username}
        label="Your username or email address"
        onChange={(value: string) => {
          authenticationLoginScreenInputModel.update({
            username: value,
          });
        }}
      />
    </div>
  );
});

export const PasswordField = memo(() => {
  const password = authenticationLoginScreenInputModel.useSelector(
    (state) => state.authenticationLoginScreenData.password || ""
  );

  console.log("🔥 PasswordField value changed:", password);

  return (
    <div>
      <InputAppi
        type="password"
        label="Password"
        className="text-lg"
        defaultValue={password}
        onChange={(value: string) => {
          authenticationLoginScreenInputModel.update({
            password: value,
          });
        }}
      />
    </div>
  );
});

export const CheckField = memo(() => {
  const check = authenticationLoginScreenInputModel.useSelector(
    (state) => state.authenticationLoginScreenData.check || ""
  );

  console.log("🔥 CheckField value changed:", check);

  return (
    <div className="flex items-center justify-between">
      <CheckboxAppi
        key={check} // This forces re-render when check changes
        size="lg"
        defaultChecked={check === "true"}
        onValueChange={(isSelected: boolean) => {
          authenticationLoginScreenInputModel.update({
            check: String(isSelected),
          });
        }}
      >
        Remember me
      </CheckboxAppi>

      <p className="text-black cursor-pointer">Forgot Password?</p>
    </div>
  );
});

export const LoginButtonField = memo(() => {
  const loginButton = authenticationLoginScreenInputModel.useSelector(
    (state) => state.authenticationLoginScreenData.loginButton || ""
  );

  console.log("🔥 LoginButtonField value changed:", loginButton);

  return (
    <div>
      <ButtonAppi
        onClick={() => navigate("")}
        className="w-full h-12"
        bg="#000000"
      >
        Sign In
      </ButtonAppi>
    </div>
  );
});
