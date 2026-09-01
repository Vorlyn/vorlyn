import { ButtonGroupSeparator } from "@/components/ui/button-group";
import type { ButtonGroupItem } from "./button-group.types";
import { Button } from "../button/button";
import { Dropdown } from "../dropdown";
import { Popover } from "../popover";
import { Input } from "../input";
import { Fragment, type ReactNode } from "react";

export const renderItem = (item: ButtonGroupItem) => {
  switch (item.type) {
    case "separator":
      return <ButtonGroupSeparator key={item.key} />;

    case "button":
      return <Button key={item.key} {...item.props} />;

    case "dropdown":
      return <Dropdown key={item.key} {...item.props} />;

    case "popover":
      return <Popover key={item.key} {...item.props} />;

    case "input":
      return <Input key={item.key} {...item.props} />;

    case "custom":
      return <Fragment key={item.key}>{item.render()}</Fragment>;

    default: {
      const _exhaustiveCheck: never = item;
      return _exhaustiveCheck;
    }
  }
};

export const withInjectedSeparators = (
  items: ButtonGroupItem[],
): ReactNode[] => {
  return items.flatMap((item, index) => {
    const rendered = renderItem(item);
    if (index === 0) return [rendered];
    const previousItem = items[index - 1];
    return [
      <ButtonGroupSeparator key={`sep-${previousItem.key}-${item.key}`} />,
      rendered,
    ];
  });
};
