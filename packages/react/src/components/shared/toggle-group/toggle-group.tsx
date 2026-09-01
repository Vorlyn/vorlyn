import { ToggleGroup as DefaultToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Field } from "@/components/ui/field";
import { FieldLabel } from "../label";
import { cn } from "@vorlyn/utils";
import { useCallback } from "react";
import { ToggleGroupProps } from "./toggle-group.types";

function isMultipleProps(
  props: ToggleGroupProps,
): props is Extract<ToggleGroupProps, { multiple: true }> {
  return props.multiple === true;
}

export const ToggleGroup = (props: ToggleGroupProps) => {
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
        <FieldLabel
          label={label}
          className={cn("mb-1", labelClassName)}
        />
      )}
      <DefaultToggleGroup
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
      </DefaultToggleGroup>
    </Field>
  );
};
