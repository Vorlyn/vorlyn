import type { ButtonGroupModeProps } from "../kbd.types";
import { ButtonGroup } from "@/components/ui/button-group";
import { TooltipKbd } from "./tooltip-kbd";
import { Button } from "../../button";

export const ButtonGroupKbd = ({
  items,
  wrapperClassName,
}: ButtonGroupModeProps) => {
  return (
    <ButtonGroup className={wrapperClassName}>
      {items.map((item) =>
        item.keys ? (
          <TooltipKbd
            key={item.id}
            trigger={<Button {...item.buttonProps} />}
            keys={item.keys}
            label={item.tooltipLabel}
          />
        ) : (
          <Button key={item.id} {...item.buttonProps} />
        ),
      )}
    </ButtonGroup>
  );
};
