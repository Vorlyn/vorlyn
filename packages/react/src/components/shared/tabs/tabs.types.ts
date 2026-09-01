import type { ReactNode } from "react";

export interface TabsProps {
  options: {
    label: string;
    value: string;
    disabled?: boolean;
    icon?: string | ReactNode;
  }[];
  children: ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  listClassName?: string;
  lisWrapperClassName?: string;
  contentClassName?: string;
  variant?: "default" | "line";
  orientation?: "horizontal" | "vertical";
}
