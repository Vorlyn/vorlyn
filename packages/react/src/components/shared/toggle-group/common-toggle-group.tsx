import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { CommonToggleGroupProps } from "./common-toggle-group.types";
import { Field } from "@/components/ui/field";
import { CommonFieldLabel } from "../label";
import { cn } from "@vorlyn/utils";
import { useCallback } from "react";

function isMultipleProps(
  props: CommonToggleGroupProps,
): props is Extract<CommonToggleGroupProps, { multiple: true }> {
  return props.multiple === true;
}

export const CommonToggleGroup = (props: CommonToggleGroupProps) => {
  const {
    options,
    label,
    variant,
    size,
    orientation,
    disabled = false,
    spacing = 2,
    className,
    itemClassName,
    labelClassName,
  } = props;

  const groupValue = props.multiple
    ? ((props.value as readonly string[]) ?? [])
    : props.value
      ? [props.value as string]
      : [];

  const handleValueChange = useCallback(
    (vals: readonly string[]) => {
      if (isMultipleProps(props)) {
        props.onValueChange([...vals]);
      } else {
        props.onValueChange(vals[0] ?? "");
      }
    },
    [props],
  );

  if (!options.length) return null;
  return (
    <Field>
      {label && (
        <CommonFieldLabel
          label={label}
          className={cn("mb-1", labelClassName)}
        />
      )}
      <ToggleGroup
        variant={variant}
        size={size}
        spacing={spacing}
        orientation={orientation}
        multiple={props.multiple}
        value={groupValue}
        onValueChange={handleValueChange}
        disabled={disabled}
        className={className}
      >
        {options.map((option) => (
          <ToggleGroupItem
            key={option.id}
            value={option.value}
            aria-label={option.ariaLabel ?? `Toggle ${option.id}`}
            disabled={disabled || option.disabled}
            className={itemClassName}
          >
            {option.leftIcon}
            {option.label}
            {option.rightIcon}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </Field>
  );
};
