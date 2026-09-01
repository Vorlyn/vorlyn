import type { ReactElement, ReactNode } from "react";

export interface HoverCardProps {
  trigger?: ReactElement;
  delay?: number;
  closeDelay?: number;
  children: ReactNode;
  className?: string;
  side?: "bottom" | "inline-start" | "inline-end" | "left" | "top" | "right";
  align?: "center" | "end" | "start";
}
