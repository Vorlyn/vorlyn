import type { ButtonGroupModeProps } from "../common-kbd.types";
import { ButtonGroup } from "@/components/ui/button-group";
import TooltipKbd from "./tooltip-kbd";
import { CommonButton } from "../../button";

const ButtonGroupKbd = ({ items, wrapperClassName }: ButtonGroupModeProps) => {
  return (
    <ButtonGroup className={wrapperClassName}>
      {items.map((item) =>
        item.keys ? (
          <TooltipKbd
            key={item.id}
            trigger={<CommonButton {...item.buttonProps} />}
            keys={item.keys}
            label={item.tooltipLabel}
          />
        ) : (
          <CommonButton key={item.id} {...item.buttonProps} />
        ),
      )}
    </ButtonGroup>
  );
};

export default ButtonGroupKbd;
