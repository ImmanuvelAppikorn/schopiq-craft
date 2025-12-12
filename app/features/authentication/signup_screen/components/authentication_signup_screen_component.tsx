"use client";

import { memo } from "react";
import { authenticationSignupScreenInputModel } from "../store/authentication_signup_screen_store";
import { ASSETS } from "@/config/assets";
import { navigate } from "@/core/navigation/simplified_router";
import { InputAppi } from "@/components/appikorn-components/input_appi/input_appi";
import { CheckboxAppi } from "@/components/appikorn-components/checkbox_appi/checkbox_appi";
import { ButtonAppi } from "@/components/appikorn-components/button_appi/button_appi";

/**
 * Authentication_signup_screen Component
 */

export const SignupLayoutField = memo(() => {
  const signupLayout = authenticationSignupScreenInputModel.useSelector(
    (state) => state.authenticationSignupScreenData.signupLayout || ""
  );

  console.log("🔥 SignupLayoutField value changed:", signupLayout);

  return (
    <div
      className="min-h-screen w-full bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${ASSETS.signup_screen.signup_bg})` }}
    >
      {/* Brand name in top left corner */}
      {/* <div className="absolute top-8 left-8">
        <h2 className="text-2xl font-bold text-white">schopiqraft</h2>
      </div> */}

      <div className="bg-gray-200 backdrop-blur-md p-5 rounded-2xl shadow-xl w-full max-w-md space-y-5">
        <h1 className="text-3xl font-bold mb-4 text-black">Sign Up</h1>

        <div className="text-gray-600 mb-2 flex gap-1">
          <p>Already have an account?</p>
          <span
            className="text-[#38cb89] cursor-pointer"
            onClick={() => navigate("/features/authentication/login_screen")}
          >
            Sign In
          </span>
        </div>

        <NameField />

        <UsernameField />

        <EmailField />

        <PasswordField />

        <AgreementField />

        <SignupButtonField />
      </div>
    </div>
  );
});

export const NameField = memo(() => {
  const name = authenticationSignupScreenInputModel.useSelector(
    (state) => state.authenticationSignupScreenData.name || ""
  );

  console.log("🔥 NameField value changed:", name);

  return (
    <div>
      <InputAppi
        label="Name"
        className="text-lg"
        defaultValue={name}
        onChange={(value: string) => {
          authenticationSignupScreenInputModel.update({
            name: value,
          });
        }}
      />
    </div>
  );
});

export const UsernameField = memo(() => {
  const username = authenticationSignupScreenInputModel.useSelector(
    (state) => state.authenticationSignupScreenData.username || ""
  );

  console.log("🔥 UsernameField value changed:", username);

  return (
    <div>
      <InputAppi
        label="Username"
        className="text-lg"
        defaultValue={username}
        onChange={(value: string) => {
          authenticationSignupScreenInputModel.update({
            username: value,
          });
        }}
      />
    </div>
  );
});

export const EmailField = memo(() => {
  const email = authenticationSignupScreenInputModel.useSelector(
    (state) => state.authenticationSignupScreenData.email || ""
  );

  console.log("🔥 EmailField value changed:", email);

  return (
    <div>
      <InputAppi
        label="Email"
        className="text-lg"
        defaultValue={email}
        onChange={(value: string) => {
          authenticationSignupScreenInputModel.update({
            email: value,
          });
        }}
      />
    </div>
  );
});

export const PasswordField = memo(() => {
  const password = authenticationSignupScreenInputModel.useSelector(
    (state) => state.authenticationSignupScreenData.password || ""
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
          authenticationSignupScreenInputModel.update({
            password: value,
          });
        }}
      />
    </div>
  );
});

export const AgreementField = memo(() => {
  const agreement = authenticationSignupScreenInputModel.useSelector(
    (state) => state.authenticationSignupScreenData.agreement || ""
  );

  console.log("🔥 AgreementField value changed:", agreement);

  return (
    <div className="flex items-center justify-between">
      <CheckboxAppi
        size="lg"
        defaultChecked={agreement === "true"}
        onValueChange={(isSelected: boolean) => {
          authenticationSignupScreenInputModel.update({
            agreement: String(isSelected),
          });
        }}
      >
        I agree with Privacy policy and Terms of Use
      </CheckboxAppi>
      <div></div>
    </div>
  );
});

export const SignupButtonField = memo(() => {
  const signupButton = authenticationSignupScreenInputModel.useSelector(
    (state) => state.authenticationSignupScreenData.signupButton || ""
  );

  console.log("🔥 SignupButtonField value changed:", signupButton);

  return (
    <div>
      <ButtonAppi
        onClick={() => navigate("/features/authentication/login_screen")}
        className="w-full h-12"
        bg="#000000"
      >
        Sign Up
      </ButtonAppi>
    </div>
  );
});
