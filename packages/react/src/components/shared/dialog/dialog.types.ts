import type { ReactElement, ReactNode } from "react";
import type { ButtonProps } from "../button";

export interface DialogProps {
  trigger: ReactElement;
  title?: ReactNode;
  description?: ReactNode;
  cancel?: Partial<ButtonProps> & { label: string };
  confirm?: Partial<ButtonProps> & { label: string };
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  showCloseControls?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
