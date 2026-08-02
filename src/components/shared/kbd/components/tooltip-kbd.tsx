import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { CommonToolTip } from "../../tooltip";
import type { TooltipModeProps } from "../common-kbd.types";
import { cn } from "@/lib/utils";

const TooltipKbd = ({
  trigger,
  label,
  keys,
  side,
  sideOffset,
  open,
  onOpenChange,
  contentClassName,
  triggerClassName,
  kbdClassName,
}: TooltipModeProps) => {
  return (
    <CommonToolTip
      trigger={trigger}
      side={side}
      sideOffset={sideOffset}
      open={open}
      onOpenChange={onOpenChange}
      triggerClassName={triggerClassName}
      contentClassName={cn("flex items-center gap-1.5", contentClassName)}
    >
      {label && <span>{label}</span>}
      <KbdGroup className={kbdClassName}>
        {keys.map((key) => (
          <Kbd key={key}>{key}</Kbd>
        ))}
      </KbdGroup>
    </CommonToolTip>
  );
};

export default TooltipKbd;
