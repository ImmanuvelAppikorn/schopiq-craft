"use client";

import React from "react";
import { Checkbox } from "@heroui/checkbox";

interface CheckboxAppiProps {
  label?: string;
  defaultChecked?: boolean;
  children?: React.ReactNode;
  icon?: any;
  value?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  lineThrough?: boolean;
  isSelected?: boolean;
  defaultSelected?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
  isDisabled?: boolean;
  isIndeterminate?: boolean;
  isInvalid?: boolean;
  validationState?: "valid" | "invalid";
  disableAnimation?: boolean;
  classNames?: Partial<Record<"base" | "wrapper" | "icon" | "label", string>>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (isSelected: boolean) => void;
}

export const CheckboxAppi: React.FC<CheckboxAppiProps> = ({
  label = "",
  defaultChecked,
  defaultSelected,
  children,
  classNames,
  size = "md",
  isDisabled,
  ...rest
}) => {
  const checkboxId = React.useId();

  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={checkboxId}
        defaultChecked={defaultSelected ?? defaultChecked}
        disabled={isDisabled}
        className={`
          h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500
          ${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
        onChange={(e) => {
          if (rest.onChange) rest.onChange(e);
          if (rest.onValueChange) rest.onValueChange(e.target.checked);
        }}
      />
      <label
        htmlFor={checkboxId}
        className={`text-sm text-gray-700 ${
          isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        {children || label}
      </label>
    </div>
  );
};
