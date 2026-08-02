import type { ComponentProps, ReactNode } from "react";
import { CommonButton } from "../button";

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

export type CommonKbdProps =
  | (ComboModeProps & { mode: "combo" })
  | (ButtonModeProps & { mode: "button" });
