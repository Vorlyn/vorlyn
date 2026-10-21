import {
  Accordion as DefaultAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { AccordionProps } from "./accordion.types";

function isMultipleProps(
  props: AccordionProps,
): props is Extract<AccordionProps, { multiple: true }> {
  return props.multiple === true;
}

export const Accordion = (props: AccordionProps) => {
  const { options, ...rest } = props;

  if (!options.length) return null;

  const normalizedValue =
    props.value === undefined
      ? undefined
      : typeof props.value === "string"
        ? [props.value]
        : props.value;

  const handleValueChange = (vals: readonly string[]) => {
    if (isMultipleProps(props)) {
      props.onValueChange?.([...vals]);
    } else {
      props.onValueChange?.(vals[0] ?? "");
    }
  };

  return (
    <DefaultAccordion
      {...rest}
      value={normalizedValue}
      onValueChange={handleValueChange}
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