import type { CommonKbdProps } from "./common-kbd.types";
import { ButtonGroupKbd } from "./components/button-group-kbd";
import { ButtonKbd } from "./components/button-kbd";
import { ComboKbd } from "./components/combo-kbd";
import { InputKbd } from "./components/input-kbd";
import { TooltipKbd } from "./components/tooltip-kbd";

export const CommonKbd = (props: CommonKbdProps) => {
  const content = () => {
    switch (props.mode) {
      case "combo":
        return <ComboKbd {...props} />;

      case "button":
        return <ButtonKbd {...props} />;

      case "tooltip":
        return <TooltipKbd {...props} />;

      case "button-group":
        return <ButtonGroupKbd {...props} />;

      case "input-group":
        return <InputKbd {...props} />;

      default:
        return props satisfies never;
    }
  };
  return content();
};
