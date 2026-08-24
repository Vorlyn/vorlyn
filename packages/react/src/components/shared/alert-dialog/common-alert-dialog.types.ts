import type { ReactElement, ReactNode } from "react";
import type { CommonButtonProps } from "../button";

export interface CommonAlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ReactElement;
  title: string;
  description?: string;
  icon?: ReactNode;
  size?: "default" | "sm";
  cancel?: Partial<CommonButtonProps> & { label: string };
  confirm?: Partial<CommonButtonProps> & {
    label: string;
    variant?: "default" | "destructive";
  };
}
