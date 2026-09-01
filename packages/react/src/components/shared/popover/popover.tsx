import {
  Popover as DefaultPopover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverProps } from "./popover.types";

export const Popover = ({
  trigger,
  children,
  open,
  onOpenChange,
  align = "center",
  side = "bottom",
  className,
}: PopoverProps) => {
  if (!trigger || !children) return null;
  return (
    <DefaultPopover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger render={trigger} />
      <PopoverContent align={align} side={side} className={className}>
        {children}
      </PopoverContent>
    </DefaultPopover>
  );
};
