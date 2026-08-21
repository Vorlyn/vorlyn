import {
  AlertDialog,
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
import { RenderIcon } from "@/utils/icon-utils";
import type { CommonAlertDialogProps } from "./common-alert-dialog.types";

export const CommonAlertDialog = ({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  icon,
  size = "default",
  cancel,
  confirm,
}: CommonAlertDialogProps) => {
  const { label, isLoading, variant, ...confirmProps } = confirm ?? {};
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
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
    </AlertDialog>
  );
};
