import {
  Accordion as DefaultAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { AccordionProps } from "./accordion.types";

export const Accordion = ({
  options,
  value,
  onValueChange,
  multiple,
  className,
  ...rest
}: AccordionProps) => {
  if (!options?.length) return null;

  const normalizeValue =
    value === undefined ? undefined : Array.isArray(value) ? value : [value];

  const handleValueChange = (newValue: string | string[]) => {
    if (multiple) {
      onValueChange?.(newValue as string[]);
    } else {
      onValueChange?.(newValue as string);
    }
  };
  return (
    <DefaultAccordion
      multiple={multiple}
      value={normalizeValue}
      onValueChange={handleValueChange}
      className={className}
      {...rest}
    >
      {options.map((option) => (
        <AccordionItem key={option.value} value={option.value}>
          <AccordionTrigger render={option.trigger} />
          <AccordionContent>
            <p>{option.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </DefaultAccordion>
  );
};
