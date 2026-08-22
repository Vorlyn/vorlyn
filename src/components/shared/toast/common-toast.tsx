import { toast } from "@/components/ui/toast";
import type { CommonSonnerProps } from "./common-toast.types";

const createToast =
  (type?: "default" | "success" | "info" | "warning" | "error" | "loading") =>
  ({ message, description, action }: CommonSonnerProps) =>
    toast.add({
      title: message,
      description,
      ...(type ? { type } : {}),
      ...(action
        ? {
            actionProps: {
              children: action.label,
              onClick: action.onClick,
            },
          }
        : {}),
    });

export const showToast = createToast();
export const showSuccessToast = createToast("success");
export const showInfoToast = createToast("info");
export const showWarningToast = createToast("warning");
export const showErrorToast = createToast("error");
export const showLoadingToast = createToast("loading");
