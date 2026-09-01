import {
  HoverCard as DefaultHoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import type { HoverCardProps } from "./hover-card.types";

export const HoverCard = ({
  trigger,
  delay = 10,
  closeDelay = 10,
  children,
  className,
  side,
  align,
}: HoverCardProps) => {
  return (
    <DefaultHoverCard>
      <HoverCardTrigger
        render={trigger}
        delay={delay}
        closeDelay={closeDelay}
      />
      <HoverCardContent side={side} align={align} className={className}>
        {children}
      </HoverCardContent>
    </DefaultHoverCard>
  );
};
