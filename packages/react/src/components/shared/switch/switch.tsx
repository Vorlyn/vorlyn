import { Switch as DefaultSwitch } from "@/components/ui/switch";
import { Label } from "../label";
import { useId } from "react";
import { cn } from "@vorlyn/utils";
import { SwitchProps } from "./switch.types";

export const Switch = ({
  id,
  label,
  disabled,
  checked,
  onCheckedChange,
  containerClassName,
  className,
  labelClassName,
  size = "default",
  required,
  invalid,
  ...rest
}: SwitchProps) => {
  const generatedId = useId();
  const switchId = id ?? generatedId;
  return (
    <div
      data-invalid={invalid}
      className={cn("flex items-center space-x-2", containerClassName)}
    >
      <DefaultSwitch
        id={switchId}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={className}
        disabled={disabled}
        size={size}
        required={required}
        aria-invalid={invalid}
        {...rest}
      />
      <Label
        htmlFor={switchId}
        label={label}
        className={labelClassName}
      />
    </div>
  );
};
