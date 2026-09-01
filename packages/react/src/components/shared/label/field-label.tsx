import type { FieldLabelProps } from "./label.types";
import { FieldLabel as DefaultFieldLabel } from "@/components/ui/field";

export const FieldLabel = ({
  htmlFor,
  label,
  required,
  className,
  ref,
  ...rest
}: FieldLabelProps) => {
  return (
    <div className="flex items-start gap-1">
      <DefaultFieldLabel
        htmlFor={htmlFor}
        aria-required={required}
        ref={ref}
        className={className}
        {...rest}
      >
        {label}
      </DefaultFieldLabel>
      {required && <span aria-hidden="true" className="text-destructive">*</span>}
    </div>
  );
};
