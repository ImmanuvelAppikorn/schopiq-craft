"use client";

import React from "react";
import Button from "@mui/material/Button";

/**
 * Global reusable button that accepts any HEX color using `bg` prop.
 * Example:
 *   <ButtonAppi bg="#000" />
 *   <ButtonAppi bg="#ff5733" />
 */
export const ButtonAppi = ({
  children,
  bg = "#000000", // default black
  textColor = "#ffffff",
  hoverBg, // optional hover color
  size = "medium",
  fullWidth = false,
  disabled = false,
  sx = {},
  ...rest
}: any) => {
  const hoverColor = hoverBg || bg; // fallback if hoverBg not given

  return (
    <Button
      variant="contained"
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      sx={{
        textTransform: "none",
        fontWeight: 500,
        borderRadius: "8px",

        backgroundColor: bg, // 🔥 custom background color
        color: textColor, // 🔥 custom text color

        "&:hover": {
          backgroundColor: hoverColor, // 🔥 optional hover override
        },

        "&:disabled": {
          opacity: 0.6,
        },

        ...sx,
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
