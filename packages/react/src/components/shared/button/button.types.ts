import type { ButtonProps as DefaultButtonProps } from "@base-ui/react";
import type { ReactNode, Ref } from "react";

export interface ButtonProps extends Omit<DefaultButtonProps, "children"> {
  label?: ReactNode;
  leftIcon?: string | ReactNode;
  rightIcon?: string | ReactNode;
  leftIconAlt?: string;
  rightIconAlt?: string;
  ariaLabel?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg";
  isLoading?: boolean;
  ref?: Ref<HTMLButtonElement>;
  labelClassName?: string;
  leftIconClassName?: string;
  rightIconClassName?: string;
  spinnerColor?: string;
  endSlot?: ReactNode;
  endSlotClassName?: string;
}
