import type { SheetProps } from "./sheet.types";
import {
  Sheet as DefaultSheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Sheet = ({
  open,
  onOpenChange,
  trigger,
  side = "right",
  title,
  description,
  children,
  showCloseButton,
  className,
}: SheetProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {trigger && <SheetTrigger render={trigger} />}
      <SheetContent
        side={side}
        showCloseButton={showCloseButton}
        className={className}
      >
        <SheetHeader>
          {title && <SheetTitle>{title}</SheetTitle>}
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
