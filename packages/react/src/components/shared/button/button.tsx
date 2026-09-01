import { RenderIcon } from "@/components/shared/icon";
import { Button as DefaultButton } from "../../ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ButtonProps } from "./button.types";

export const Button = ({
  label,
  leftIcon,
  rightIcon,
  leftIconAlt,
  rightIconAlt,
  ariaLabel,
  variant,
  isLoading,
  size,
  ref,
  spinnerColor = "white",
  labelClassName,
  leftIconClassName,
  rightIconClassName,
  endSlot,
  endSlotClassName,
  ...rest
}: ButtonProps) => {
  const isLabel = label != null && label !== "";
  const typeofLabel = typeof label === "string" ? label : undefined;
  return (
    <DefaultButton
      ref={ref}
      variant={variant}
      size={size}
      disabled={Boolean(rest.disabled || isLoading)}
      aria-busy={isLoading}
      aria-label={ariaLabel ?? typeofLabel}
      type={rest.type ?? "button"}
      {...rest}
    >
      {!isLoading && leftIcon && (
        <RenderIcon
          src={leftIcon}
          alt={leftIconAlt ?? typeofLabel}
          className={leftIconClassName}
        />
      )}
      {isLoading && <Spinner color={spinnerColor} aria-hidden="true" />}
      {isLabel && <span className={labelClassName}>{label}</span>}
      {!isLoading && rightIcon && (
        <RenderIcon
          src={rightIcon}
          alt={rightIconAlt ?? typeofLabel}
          className={rightIconClassName}
        />
      )}
      {!isLoading && endSlot && <span className={endSlotClassName}>{endSlot}</span>}
    </DefaultButton>
  );
};
