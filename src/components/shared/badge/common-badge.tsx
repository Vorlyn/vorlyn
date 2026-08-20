import { Badge } from "@/components/ui/badge";
import type { CommonBadgeProps } from "./common-badge.types";
import { Spinner } from "@/components/ui/spinner";
import { RenderIcon } from "@/utils/icon-utils";

export const CommonBadge = ({
  label,
  variant,
  className,
  leftIcon,
  rightIcon,
  renderLink,
  isLoading,
  ...rest
}: CommonBadgeProps) => {
  if (!label.trim()) return null;
  return (
    <Badge
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
    </Badge>
  );
};
