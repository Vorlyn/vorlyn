import { Field, FieldDescription, FieldError } from "@/components/ui/field";
import { useId } from "react";
import { FieldLabel } from "../label/field-label";
import { InputGroup as DefaultInputGroup } from "@/components/ui/input-group";
import { InputField } from "./components/input-field";
import { TextareaField } from "./components/textarea-field";
import { InputGroupProps } from "./input-group.types";

export const InputGroup = (props: InputGroupProps) => {
  const generatedId = useId();
  const {
    id,
    label,
    description,
    placeholder = "Your placeholder...",
    startAlign,
    endAlign,
    required,
    disabled,
    value,
    onChange,
    error,
    addonStart,
    addonEnd,
    inputContainerClassName,
    className,
    mode = "input",
  } = props;
  const fieldId = id ?? generatedId;
  const errorId = error ? `${fieldId}-error` : undefined;
  const type = props.mode !== "textarea" ? props.type : undefined;

  const sharedProps = {
    fieldId,
    errorId,
    placeholder,
    startAlign,
    endAlign,
    required,
    disabled,
    value,
    onChange,
    error,
    addonStart,
    addonEnd,
  };

  return (
    <Field data-invalid={!!error} className={className}>
      {label && (
        <FieldLabel htmlFor={fieldId} label={label} required={required} />
      )}
      <DefaultInputGroup className={inputContainerClassName}>
        {mode === "input" ? (
          <InputField type={type} {...sharedProps} />
        ) : (
          <TextareaField {...sharedProps} />
        )}
      </DefaultInputGroup>
      {description && <FieldDescription>{description}</FieldDescription>}
      {error && <FieldError id={errorId}>{error}</FieldError>}
    </Field>
  );
};
