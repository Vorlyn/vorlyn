import {
  Drawer as DefaultDrawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import type { DrawerProps } from "./drawer.types";
import { cn } from "@vorlyn/utils";
import { Button } from "../button";

export const Drawer = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  nested,
  direction = "right",
  modal = true,
  className,
  contentClassName,
  confirm,
  cancel,
}: DrawerProps) => {
  const confirmLabel = confirm?.label || "Submit";
  const cancelLabel = cancel?.label || "Cancel";
  return (
    <DefaultDrawer
      open={open}
      onOpenChange={onOpenChange}
      swipeDirection={direction}
      showSwipeHandle={direction === "down" ? true : false}
      modal={modal}
    >
      <DrawerTrigger render={trigger} />
      <DrawerContent className={className}>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>
        <div
          className={cn("no scrollbar overflow-y-auto px-4", contentClassName)}
        >
          {children}
        </div>
        <DrawerFooter>
          {nested}
          {confirm && (
            <Button
              {...confirm}
              label={confirmLabel}
              onClick={confirm.onClick}
            />
          )}
          <DrawerClose
            render={
              <Button {...cancel} label={cancelLabel} variant="outline" />
            }
          />
        </DrawerFooter>
      </DrawerContent>
    </DefaultDrawer>
  );
};
