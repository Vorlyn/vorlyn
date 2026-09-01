import type { ComponentProps, ReactElement, ReactNode } from "react";
import { Button } from "../button";
import { InputGroup } from "../input-group";
import { Tooltip } from "../tooltip";

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
    ComponentProps<typeof Button>,
    "label" | "onClick" | "children"
  >;
  wrapperClassName?: string;
  kbdClassName?: string;
};

export type TooltipModeProps = {
  trigger: ReactElement;
  keys: string[];
  label?: ReactNode;
  side?: ComponentProps<typeof Tooltip>["side"];
  sideOffset?: number;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  contentClassName?: string;
  triggerClassName?: string;
  kbdClassName?: string;
};

type ButtonGroupItem = {
  id: string;
  buttonProps: ComponentProps<typeof Button>;
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
    ComponentProps<typeof InputGroup>,
    "addonEnd" | "mode" | "label"
  >;
};

export type KbdProps =
  | (ComboModeProps & { mode: "combo" })
  | (ButtonModeProps & { mode: "button" })
  | (TooltipModeProps & { mode: "tooltip" })
  | (ButtonGroupModeProps & { mode: "button-group" })
  | (InputKbdProps & { mode: "input-group" });
