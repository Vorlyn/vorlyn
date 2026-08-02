import type { CommonKbdProps } from "./common-kbd.types";
import ButtonKbd from "./components/button-kbd";
import ComboKbd from "./components/combo-kbd";

const CommonKbd = (props: CommonKbdProps) => {
  const content = () => {
    switch (props.mode) {
      case "combo":
        return <ComboKbd {...props} />;

      case "button":
        return <ButtonKbd {...props} />;

      default:
        return props satisfies never;
    }
  };
  return content();
};

export default CommonKbd;
