import type { ReactElement, ReactNode } from "react";
import type { ButtonProps } from "../button";

export interface DrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: ReactElement;
  title?: string;
  description?: string;
  children: ReactNode;
  nested?: ReactNode;
  direction?: "up" | "right" | "down" | "left";
  modal?: boolean;
  className?: string;
  contentClassName?: string;
  confirm?: Partial<ButtonProps> & {
    label: string;
    onClick: () => void;
  };
  cancel?: Partial<ButtonProps> & {
    label: string;
    onClick?: () => void;
  };
}
