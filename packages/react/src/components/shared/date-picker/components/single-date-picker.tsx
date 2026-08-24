import { CommonPopover } from "../../popover";
import { CommonButton } from "../../button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@vorlyn/utils";
import { format } from "date-fns";
import type { SingleDatePickerProps } from "../common-date-picker.types";
import { parseDateFieldValue } from "../common-date-picker.utils";
import { useId } from "react";

export const SingleDatePicker = ({
  id,
  open,
  onOpenChange,
  placeholder,
  value: valueProp,
  onChange,
  onBlur,
  disabled,
  captionLayout,
  showWeekNumber,
  triggerClassName,
}: SingleDatePickerProps) => {
  const selectedDate = parseDateFieldValue(valueProp);
  const generateId = useId();
  const fieldId = id ?? generateId;

  return (
    <CommonPopover
      open={open}
      onOpenChange={onOpenChange}
      trigger={
        <CommonButton
          id={fieldId}
          label={
            selectedDate ? (
              format(selectedDate, "PPP")
            ) : (
              <span>{placeholder}</span>
            )
          }
          variant="outline"
          data-empty={!selectedDate}
          className={cn(
            "w-53 justify-between text-left font-normal data-[empty=true]:text-muted-foreground hover:bg-background",
            triggerClassName,
          )}
          rightIcon={<ChevronDownIcon data-icon="inline-end" />}
          disabled={disabled}
        />
      }
    >
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={(date) => {
          onChange?.(date);
          onBlur?.();
          onOpenChange?.(false);
        }}
        captionLayout={captionLayout}
        defaultMonth={selectedDate}
        showWeekNumber={showWeekNumber}
        disabled={disabled}
      />
    </CommonPopover>
  );
};
