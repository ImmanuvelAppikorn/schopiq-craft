"use client";

import React, { memo } from "react";
import { authenticationLoginScreenInputModel } from "../store/authentication_login_screen_store";
import { authenticationLoginScreenData } from "../model/authentication_login_screen_input_model";
import { ASSETS } from "@/config/assets";

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
      className="min-h-screen w-full bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${ASSETS.login_screen.login_bg})` }}
    >
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-black">Sign In</h1>

        <p className="text-gray-600 mb-6">
          Don’t have an account yet?{" "}
          <span className="text-[#38cb89] cursor-pointer">Sign Up</span>
        </p>

        <input
          type="text"
          placeholder="Email"
          className="w-full border rounded-lg px-3 py-2 mb-4 text-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg px-3 py-2 mb-4 text-black"
        />

        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Sign In
        </button>
      </div>
    </div>
  );
});

export const UsernameField = memo(() => {
  const username = authenticationLoginScreenInputModel.useSelector(
    (state: { authenticationLoginScreenData: authenticationLoginScreenData }) =>
      state.authenticationLoginScreenData.username || ""
  );

  console.log("🔥 UsernameField value changed:", username);

  return <div></div>;
});

export const PasswordField = memo(() => {
  const password = authenticationLoginScreenInputModel.useSelector(
    (state: { authenticationLoginScreenData: authenticationLoginScreenData }) =>
      state.authenticationLoginScreenData.password || ""
  );

  console.log("🔥 PasswordField value changed:", password);

  return <div></div>;
});
