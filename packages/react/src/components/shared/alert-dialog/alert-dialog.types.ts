import type { ReactElement, ReactNode } from "react";
import type { ButtonProps } from "../button";

export interface AlertDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ReactElement;
  title: string;
  description?: string;
  icon?: ReactNode;
  size?: "default" | "sm";
  cancel?: Partial<ButtonProps> & { label: string };
  confirm?: Partial<ButtonProps> & {
    label: string;
    variant?: "default" | "destructive";
  };
}
