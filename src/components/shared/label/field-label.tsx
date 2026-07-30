import { cn } from "@/lib/utils";
import type { CommonFieldLabelProps } from "./common-label.types";
import { FieldLabel } from "@/components/ui/field";

const CommonFieldLabel = ({
  htmlFor,
  label,
  required,
  className,
  ref,
  ...rest
}: CommonFieldLabelProps) => {
  return (
    <FieldLabel
      htmlFor={htmlFor}
      aria-required={required}
      ref={ref}
      className={cn(
        "flex items-center gap-1 text-sm p-0",
        className,
      )}
      {...rest}
    >
      {label}
      {required && (
        <span aria-hidden="true" className="text-destructive">
          *
        </span>
      )}
    </FieldLabel>
  );
};

export default CommonFieldLabel;
