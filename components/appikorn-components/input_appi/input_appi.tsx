"use client";

import React, { useRef, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const InputAppi = (props: any) => {
  const {
    defaultValue = "",
    onComplete,
    onChange,
    validate,
    isRequired,
    type,
    ...rest
  } = props;
  const [value, setValue] = useState(defaultValue || "");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  const handleValueChange = (val: string) => {
    setValue(val);

    // Handle custom validation
    if (validate && typeof validate === "function") {
      const validationError = validate(val);
      setError(validationError || null);
    }

    if (onChange) onChange(val);

    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (onComplete) onComplete(val);
    }, 500);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // Determine if we should show the password toggle
  const isPasswordField = type === "password";
  const inputType = isPasswordField && showPassword ? "text" : type;

  return (
    <TextField
      {...rest}
      type={inputType}
      variant="standard"
      value={value}
      onChange={(e) => handleValueChange(e.target.value)}
      error={!!error || rest.error}
      helperText={error || rest.helperText}
      fullWidth
      InputProps={{
        ...(isPasswordField && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                size="small"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }),
        ...rest.InputProps,
      }}
      sx={{
        "& .MuiInput-underline:before": {
          borderBottomColor: "#d1d5db", // gray-300
        },
        "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
          borderBottomColor: "#9ca3af", // gray-400
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#4b5563", // gray-600
        },
        "& .MuiInputLabel-root": {
          color: "#6b7280", // gray-500
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: "#6b7280", // gray-500
        },
        "& .MuiInputBase-input": {
          color: "#111827", // gray-900
        },
        ...rest.sx,
      }}
    />
  );
};

// Export InputAppiBase for backward compatibility
export const InputAppiBase = InputAppi;
