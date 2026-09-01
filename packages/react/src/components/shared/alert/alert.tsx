import {
  Alert as DefaultAlert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import type { AlertProps } from "./alert.type";
import { RenderIcon } from "@/components/shared/icon";

export const Alert = ({
  icon,
  title,
  description,
  className,
  variant = "default",
  action,
}: AlertProps) => {
  return (
    <DefaultAlert variant={variant} className={className}>
      {icon && <RenderIcon src={icon} alt={title} />}
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription>}
      {action && <AlertAction>{action}</AlertAction>}
    </DefaultAlert>
  );
};
