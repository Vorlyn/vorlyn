import {
  Card as DefaultCard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CardProps } from "./card.types";

export const Card = ({
  title,
  description,
  action,
  children,
  size,
  footer,
  className,
  ...rest
}: CardProps) => {
  return (
    <DefaultCard size={size} className={className} {...rest}>
      <CardHeader>
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        {action && <CardAction>{action}</CardAction>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </DefaultCard>
  );
};
