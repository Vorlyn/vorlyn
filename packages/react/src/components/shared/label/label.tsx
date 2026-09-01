import { cn } from "@vorlyn/utils";
import { Label as DefaultLabel } from "@/components/ui/label";
import { LabelProps } from "./label.types";

export const Label = ({
  htmlFor,
  label,
  required,
  helper,
  className,
  ref,
  ...rest
}: LabelProps) => {
  return (
    <DefaultLabel
      ref={ref}
      htmlFor={htmlFor}
      aria-required={required}
      className={cn(
        "flex items-center gap-0.5 text-sm! font-normal leading-4",
        className,
      )}
      {...rest}
    >
      <span className="text-secondary-900">{label}</span>

      {required && <span className="font-normal text-error-500">*</span>}

      {helper && (
        <span className="text-xs text-secondary-800 ml-0.5">{helper}</span>
      )}
    </DefaultLabel>
  );
};
