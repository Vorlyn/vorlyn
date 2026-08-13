import type { InputHTMLAttributes, ReactNode, Ref } from "react";

export interface CommonInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  labelClassName?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftIconClassName?: string;
  rightIconClassName?: string;
  descriptionClassName?: string;
  error?: string;
  ref?: Ref<HTMLInputElement>;
}
