import { cn } from "@/lib/utils";
import { CommonButton } from "../../button";
import type { ButtonModeProps } from "../common-kbd.types";
import { Kbd, KbdGroup } from "@/components/ui/kbd";

export const ButtonKbd = ({
  label,
  keys,
  onClick,
  buttonProps,
  kbdClassName,
  wrapperClassName,
}: ButtonModeProps) => {
  return (
    <CommonButton
      label={label}
      onClick={onClick}
      className={cn("gap-2", wrapperClassName)}
      endSlot={
        <KbdGroup className={kbdClassName}>
          {keys.map((key) => (
            <Kbd key={key}>{key}</Kbd>
          ))}
        </KbdGroup>
      }
      {...buttonProps}
    />
  );
};
