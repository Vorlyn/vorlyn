import { Badge as DefaultBadge } from "@/components/ui/badge";
import type { BadgeProps } from "./badge.types";
import { Spinner } from "@/components/ui/spinner";
import { RenderIcon } from "@/components/shared/icon";

export const Badge = ({
  label,
  variant,
  className,
  leftIcon,
  rightIcon,
  renderLink,
  isLoading,
  ...rest
}: BadgeProps) => {
  if (!label.trim()) return null;
  return (
    <DefaultBadge
      render={variant === "link" ? renderLink : undefined}
      variant={variant}
      className={className}
      {...rest}
    >
      {isLoading ? (
        <Spinner data-icon="inline-start" />
      ) : (
        leftIcon && <RenderIcon src={leftIcon} alt={label} />
      )}
      {label}
      {rightIcon && <RenderIcon src={rightIcon} alt={label} />}
    </DefaultBadge>
  );
};
