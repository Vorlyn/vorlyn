import { useId, useState } from "react";
import type { InputDatePickerProps } from "../common-date-picker.types";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { CalendarIcon } from "lucide-react";
import { CommonPopover } from "../../popover";
import { Calendar } from "@/components/ui/calendar";
import {
  formatDate,
  isValidDate,
  parseDateFieldValue,
} from "../common-date-picker.utils";

export const InputDatePicker = ({
  id,
  placeholder,
  value: valueProp,
  onChange,
  onBlur,
  date: dateProp,
  onDateChange,
}: InputDatePickerProps) => {
  const rawValue = valueProp ?? dateProp;
  const handleChange = onChange ?? onDateChange;
  const isControlled = valueProp !== undefined || dateProp !== undefined;
  const controlledDate = parseDateFieldValue(rawValue);

  const [open, setOpen] = useState(false);
  const [internalDate, setInternalDate] = useState<Date | undefined>(
    controlledDate,
  );
  const selectedDate = isControlled ? controlledDate : internalDate;

  const [month, setMonth] = useState<Date | undefined>(selectedDate);
  const [inputValue, setInputValue] = useState(() => formatDate(selectedDate));
  const [prevDate, setPrevDate] = useState(selectedDate);
  const dateTime = selectedDate?.getTime();
  const prevDateTime = prevDate?.getTime();
  const generateId = useId();
  const fieldId = id ?? generateId;

  const setDate = (next: Date | undefined, shouldBlur = false) => {
    setPrevDate(next);
    if (!isControlled) setInternalDate(next);
    handleChange?.(next);
    if (shouldBlur) onBlur?.();
  };

  if (dateTime !== prevDateTime) {
    setPrevDate(selectedDate);
    setInputValue(formatDate(selectedDate));
    setMonth(selectedDate);
  }

  return (
    <InputGroup>
      <InputGroupInput
        id={fieldId}
        value={inputValue}
        placeholder={placeholder}
        onChange={(e) => {
          const parsed = new Date(e.target.value);
          setInputValue(e.target.value);
          if (isValidDate(parsed)) {
            setDate(parsed);
            setMonth(parsed);
          }
        }}
        onBlur={onBlur}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      />
      <InputGroupAddon align="inline-end">
        <CommonPopover
          open={open}
          onOpenChange={setOpen}
          trigger={
            <InputGroupButton
              id={id}
              aria-label="Select date"
              variant="ghost"
              size="icon-xs"
            >
              <CalendarIcon />
              <span className="sr-only">Select date</span>
            </InputGroupButton>
          }
        >
          <Calendar
            mode="single"
            selected={selectedDate}
            month={month}
            onMonthChange={setMonth}
            onSelect={(date) => {
              setDate(date, true);
              setInputValue(formatDate(date));
              setOpen(false);
            }}
          />
        </CommonPopover>
      </InputGroupAddon>
    </InputGroup>
  );
};
