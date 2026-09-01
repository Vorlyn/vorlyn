import type { ButtonGroupProps } from "./button-group.types";
import { ButtonGroup as DefaultButtonGroup } from "@/components/ui/button-group";
import {
  renderItem,
  withInjectedSeparators,
} from "./button-group.utils";

export const ButtonGroup = ({
  items,
  widthSeparators = false,
  ...rest
}: ButtonGroupProps) => {
  if (!items?.length) return null;

  const content = widthSeparators
    ? withInjectedSeparators(items)
    : items.map(renderItem);

  return <DefaultButtonGroup {...rest}>{content}</DefaultButtonGroup>;
};
