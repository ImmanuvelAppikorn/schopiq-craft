"use client";

import React from "react";
import { Checkbox } from "@heroui/checkbox";

interface CheckboxAppiProps {
  // Custom convenience props
  label?: string;
  defaultChecked?: boolean;

  // HeroUI Checkbox props
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

  // Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onValueChange?: (isSelected: boolean) => void;
}

export const CheckboxAppi: React.FC<CheckboxAppiProps> = ({
  label = "",
  defaultChecked,
  defaultSelected,
  children,
  classNames,
  ...rest
}) => {
  return (
    <Checkbox
      defaultSelected={defaultSelected ?? defaultChecked}
      classNames={{
        base: "inline-flex flex-row items-center gap-2 max-w-full cursor-pointer",
        wrapper: "before:border-gray-400 shrink-0 order-1",
        label: "text-gray-700 whitespace-nowrap text-left order-2",
        ...classNames,
      }}
      {...rest}
    >
      {children || label}
    </Checkbox>
  );
};
