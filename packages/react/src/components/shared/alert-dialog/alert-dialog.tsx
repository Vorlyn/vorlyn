import {
  AlertDialog as DefaultAlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RenderIcon } from "@/components/shared/icon";
import type { AlertDialogProps } from "./alert-dialog.types";

export const AlertDialog = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  icon,
  size = "default",
  cancel,
  confirm,
}: AlertDialogProps) => {
  const { label, isLoading, variant, ...confirmProps } = confirm ?? {};
  return (
    <DefaultAlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger render={trigger} />
      <AlertDialogContent size={size}>
        <AlertDialogHeader>
          {icon && (
            <AlertDialogMedia>
              <RenderIcon src={icon} alt={title} />
            </AlertDialogMedia>
          )}
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description && (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          )}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={"cursor-pointer"}>
            {cancel?.label ?? "Cancel"}
          </AlertDialogCancel>
          <AlertDialogAction
            {...confirmProps}
            variant={variant}
            className={"cursor-pointer"}
          >
            {label ?? "Proceed"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </DefaultAlertDialog>
  );
};
