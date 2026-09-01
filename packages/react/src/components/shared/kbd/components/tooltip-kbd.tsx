import { Kbd, KbdGroup } from "@/components/ui/kbd";
import type { TooltipModeProps } from "../kbd.types";
import { cn } from "@vorlyn/utils";
import { Tooltip } from "../../tooltip";

export const TooltipKbd = ({
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
    <Tooltip
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
    </Tooltip>
  );
};
