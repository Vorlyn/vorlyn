import type { ComponentProps, ReactElement, ReactNode } from "react";
import { CommonButton } from "../button";
import { CommonToolTip } from "../tooltip";
import { CommonInputGroup } from "../input-group";

type ComboPart =
  | { type: "text"; content: ReactNode }
  | { type: "keys"; keys: string[] };

export type ComboModeProps = {
  parts: ComboPart[];
  wrapperClassName?: string;
  className?: string;
};

export type ButtonModeProps = {
  label: ReactNode;
  keys: string[];
  onClick: () => void;
  buttonProps?: Omit<
    ComponentProps<typeof CommonButton>,
    "label" | "onClick" | "children"
  >;
  wrapperClassName?: string;
  kbdClassName?: string;
};

export type TooltipModeProps = {
  trigger: ReactElement;
  keys: string[];
  label?: ReactNode;
  side?: ComponentProps<typeof CommonToolTip>["side"];
  sideOffset?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  contentClassName?: string;
  triggerClassName?: string;
  kbdClassName?: string;
};

type ButtonGroupItem = {
  id: string;
  buttonProps: ComponentProps<typeof CommonButton>;
  keys?: string[];
  tooltipLabel?: ReactNode;
};

export type ButtonGroupModeProps = {
  items: ButtonGroupItem[];
  wrapperClassName?: string;
};

export type InputKbdProps = {
  label?: ReactNode;
  keys: string[];
  kbdClassName?: string;
  inputProps: Omit<
    ComponentProps<typeof CommonInputGroup>,
    "addonEnd" | "mode" | "label"
  >;
};

export type CommonKbdProps =
  | (ComboModeProps & { mode: "combo" })
  | (ButtonModeProps & { mode: "button" })
  | (TooltipModeProps & { mode: "tooltip" })
  | (ButtonGroupModeProps & { mode: "button-group" })
  | (InputKbdProps & { mode: "input-group" });
