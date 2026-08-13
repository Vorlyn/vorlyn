import { useId, useMemo } from "react";
import type { GroupCheckboxProps } from "../common-checkbox.types";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";
import { CommonFieldLabel } from "../../label/field-label";
import { cn } from "@/lib/utils";

export const GroupCheckbox = ({
  id,
  label,
  description,
  orientation,
  checked,
  onCheckedChange,
  disabled,
  isInvalid,
  className,
  optionClassName,
  options,
}: GroupCheckboxProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const checkedSet = useMemo(() => {
    return new Set<string>(Array.isArray(checked) ? checked : []);
  }, [checked]);

  const handleGroupChange = (value: string, isChecked: boolean) => {
    const current = Array.isArray(checked) ? checked : [];
    const updated = isChecked
      ? current.includes(value)
        ? current
        : [...current, value]
      : current.filter((v) => v !== value);
    onCheckedChange?.(updated);
  };
  return (
    <FieldSet>
      {label && <FieldLegend>{label}</FieldLegend>}
      {description && <FieldDescription>{description}</FieldDescription>}
      <FieldGroup className={className}>
        {options?.map((option) => {
          const optionId = `${fieldId}-${option.value}`;
          return (
            <Field
              key={optionId}
              orientation={orientation}
              data-invalid={isInvalid}
              className={cn("flex items-center gap-2", optionClassName)}
            >
              <Checkbox
                id={optionId}
                name={fieldId}
                checked={checkedSet.has(option.value)}
                onCheckedChange={(value) =>
                  handleGroupChange(option.value, value as boolean)
                }
                aria-invalid={isInvalid}
                disabled={disabled}
              />
              <CommonFieldLabel htmlFor={optionId} label={option.label} />
            </Field>
          );
        })}
      </FieldGroup>
    </FieldSet>
  );
};
