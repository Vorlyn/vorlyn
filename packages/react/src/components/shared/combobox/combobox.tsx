import type { ComboboxProps } from "./combobox.types";
import { useId } from "react";
import { cn } from "@vorlyn/utils";
import { Multiple } from "./components/multiple";
import { Grouped } from "./components/grouped";
import { Default } from "./components/default";
import { FieldLabel } from "../label/field-label";
import { Popover } from "./components/popover";

export const Combobox = (props: ComboboxProps) => {
  const generatedId = useId();
  const id = `${generatedId}-combobox`;
  const {
    label,
    labelClassName,
    fallback = "No items found.",
    required,
    disabled,
    showClear,
    icon,
    className,
    contentClassName,
    chipClassName,
    ref,
  } = props;

  const content = (() => {
    switch (props.variant) {
      case "multiple":
        return (
          <Multiple
            ref={ref}
            id={id}
            options={props.options}
            disabled={disabled}
            required={required}
            placeholder={props.placeholder}
            className={className}
            fallback={fallback}
            value={props.value}
            onChange={props.onChange}
            chipClassName={chipClassName}
            contentClassName={contentClassName}
          />
        );
      case "grouped":
        return (
          <Grouped
            ref={ref}
            id={id}
            options={props.options}
            placeholder={props.placeholder}
            fallback={fallback}
            disabled={disabled}
            required={required}
            showClear={showClear}
            className={className}
            icon={icon}
            value={props.value}
            onChange={props.onChange}
            contentClassName={contentClassName}
          />
        );
      case "popover":
        return (
          <Popover
            ref={ref}
            id={id}
            options={props.options}
            placeholder={props.placeholder}
            searchPlaceholder={props.searchPlaceholder}
            fallback={fallback}
            value={props.value}
            onChange={props.onChange}
            searchValue={props.searchValue}
            onSearchChange={props.onSearchChange}
            isLoading={props.isLoading}
            disabled={disabled}
            required={required}
            showClear={showClear}
            className={className}
            contentClassName={contentClassName}
          />
        );
      case "default":
      case undefined:
        return (
          <Default
            ref={ref}
            id={id}
            options={props.options}
            placeholder={props.placeholder}
            disabled={disabled}
            showClear={showClear}
            className={className}
            icon={icon}
            fallback={fallback}
            value={props.value}
            onChange={props.onChange}
            required={required}
            contentClassName={contentClassName}
          />
        );
    }
  })();

  return (
    <>
      {label && (
        <FieldLabel
          htmlFor={id}
          label={label}
          className={cn("font-semibold", labelClassName)}
          required={required}
        />
      )}
      {content}
    </>
  );
};
