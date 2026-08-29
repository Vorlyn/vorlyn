import { ToggleGroup } from "@/components/ui/toggle-group";
import type { ComponentProps, ReactNode } from "react";

interface ToggleGroupItemConfig {
  id: string | number;
  label: ReactNode;
  ariaLabel?: string;
  value: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
}

type ToggleGroupBaseProps = {
  options: ToggleGroupItemConfig[];
  label?: ReactNode;
  variant?: ComponentProps<typeof ToggleGroup>["variant"];
  size?: ComponentProps<typeof ToggleGroup>["size"];
  orientation?: ComponentProps<typeof ToggleGroup>["orientation"];
  spacing?: number;
  disabled?: boolean;
  className?: string;
  itemClassName?: string;
  labelClassName?: string;
};

export type CommonToggleGroupProps =
  | (ToggleGroupBaseProps & {
      multiple?: false;
      value: string;
      onValueChange: (value: string) => void;
    })
  | (ToggleGroupBaseProps & {
      multiple: true;
      value: readonly string[];
      onValueChange: (value: string[]) => void;
    });
