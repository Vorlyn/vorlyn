import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field";
import type { DefaultCheckboxProps } from "../checkbox.types";
import { Checkbox } from "@/components/ui/checkbox";
import { FieldLabel } from "../../label/field-label";
import { useId } from "react";
import { cn } from "@vorlyn/utils";

export const DefaultCheckbox = ({
  id,
  label,
  description,
  checked,
  onCheckedChange,
  orientation,
  required,
  disabled,
  isInvalid,
  className,
  optionClassName,
}: DefaultCheckboxProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  return (
    <FieldGroup className={className}>
      <Field
        orientation={orientation}
        data-invalid={isInvalid}
        className={cn("flex items-center gap-2", optionClassName)}
      >
        <Checkbox
          id={fieldId}
          name={fieldId}
          checked={!!checked}
          onCheckedChange={(value) => onCheckedChange?.(value as boolean)}
          required={required}
          aria-required={required}
          aria-invalid={isInvalid}
          disabled={disabled}
        />
        <FieldContent>
          <FieldLabel htmlFor={fieldId} label={label} />
          {description && <FieldDescription>{description}</FieldDescription>}
        </FieldContent>
      </Field>
    </FieldGroup>
  );
};
