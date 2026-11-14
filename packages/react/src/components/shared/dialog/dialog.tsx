import {
  Dialog as DefaultDialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { DialogProps } from "./dialog.types";
import { cn } from "@vorlyn/utils";
import { Button } from "../button";

export const Dialog = ({
  trigger,
  title,
  description,
  cancel,
  confirm,
  children,
  className,
  headerClassName,
  bodyClassName,
  contentClassName,
  footerClassName,
  showCloseButton,
  open,
  onOpenChange,
}: DialogProps) => {
  const hasFooter = cancel !== undefined || confirm !== undefined;
  return (
    <DefaultDialog open={open} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger render={trigger} />}
      <DialogContent
        className={cn(
          "flex max-h-[90vh] min-w-full md:min-w-2xl flex-col gap-0 overflow-hidden p-0",
          className,
        )}
        showCloseButton={showCloseButton}
      >
        <DialogHeader className={cn("shrink-0 px-4 pt-4", headerClassName)}>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div
          className={cn("min-h-0 flex-1 overflow-y-auto px-4", bodyClassName)}
        >
          <div className={cn("py-4", contentClassName)}>{children}</div>
        </div>
        {hasFooter && (
          <DialogFooter className={cn("mx-0 mb-0 shrink-0", footerClassName)}>
            <DialogClose
              render={
                <Button
                  {...cancel}
                  label={cancel?.label ?? "Cancel"}
                  variant="outline"
                />
              }
            />
            {confirm && <Button variant="default" {...confirm} />}
          </DialogFooter>
        )}
      </DialogContent>
    </DefaultDialog>
  );
};
