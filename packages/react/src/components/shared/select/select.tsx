import {
  Select as DefaultSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useId } from "react";
import { Field, FieldError } from "@/components/ui/field";
import { FieldLabel } from "../label/field-label";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@vorlyn/utils";
import { Spinner } from "@/components/ui/spinner";
import { preventTriggerPointerDown } from "@/lib";
import { SelectProps } from "./select.types";

export const Select = ({
  id,
  options,
  value,
  onValueChange,
  label,
  selectLabel,
  className,
  labelClassName,
  triggerClassName,
  error,
  required,
  disabled,
  orientation = "vertical",
  fallback = "No option available!",
  isLoading = false,
  showClose = true,
}: SelectProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;
  const isInvalid = !!error && !value;
  const hasValue = !!value;

  const placeholderOption =
    options.find((opt) => opt.value === null)?.label ?? "Select option...";
  const renderOptions =
    options.filter(
      (opt): opt is { label: string; value: string } => opt.value !== null,
    ) ?? [];

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onValueChange?.(null);
  };

  return (
    <Field
      data-invalid={isInvalid}
      orientation={orientation}
      className={cn("gap-1.5", className)}
    >
      {label && (
        <FieldLabel
          htmlFor={fieldId}
          label={label}
          required={required}
          className={labelClassName}
        />
      )}
      <DefaultSelect
        items={renderOptions}
        value={value ?? ""}
        onValueChange={(v) => onValueChange?.(v || null)}
        disabled={disabled || isLoading}
      >
        <SelectTrigger
          id={fieldId}
          aria-invalid={isInvalid}
          aria-required={required}
          aria-busy={isLoading}
          className={cn("[&>svg:last-child]:hidden", triggerClassName)}
        >
          <SelectValue placeholder={placeholderOption} />

          {isLoading ? (
            <Spinner className="ml-auto size-4 shrink-0 opacity-50" />
          ) : hasValue && showClose ? (
            <span
              role="button"
              tabIndex={0}
              onPointerDown={preventTriggerPointerDown}
              onClick={handleClear}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleClear;
                }
              }}
              className="ml-auto flex size-6 items-center justify-center rounded-full hover:bg-muted"
              aria-label="Clear selection"
            >
              <X className="size-4 shrink-0 opacity-50" />
            </span>
          ) : (
            <ChevronDown className="ml-auto size-4 shrink-0 opacity-50" />
          )}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {isLoading ? (
              <div className="flex justify-center items-center py-4">
                <Spinner />
              </div>
            ) : !renderOptions?.length ? (
              <SelectItem disabled value="__no_options__">
                {fallback}
              </SelectItem>
            ) : (
              <>
                {selectLabel && <SelectLabel>{selectLabel}</SelectLabel>}
                {renderOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </>
            )}
          </SelectGroup>
        </SelectContent>
      </DefaultSelect>
      {isInvalid && <FieldError>{error}</FieldError>}
    </Field>
  );
};
