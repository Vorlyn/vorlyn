import {
  Tooltip as DefaultTooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProps } from "./tooltip.types";

export const Tooltip = ({
  trigger,
  children,
  side,
  open,
  onOpenChange,
  sideOffset,
  contentClassName,
  triggerClassName
}: TooltipProps) => {
  return (
    <DefaultTooltip open={open} onOpenChange={onOpenChange}>
      <TooltipTrigger render={trigger} className={triggerClassName} />
      <TooltipContent
        side={side}
        sideOffset={sideOffset}
        className={contentClassName}
      >
        {children}
      </TooltipContent>
    </DefaultTooltip>
  );
};
