import type { ReactElement, ReactNode } from "react";

export interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactElement;
  side?: "top" | "bottom" | "left" | "right";
  title?: string;
  description?: string;
  children?: ReactNode;
  showCloseButton?: boolean;
  className?: string;
}
