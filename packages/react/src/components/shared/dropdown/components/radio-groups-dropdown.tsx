import {
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { cn } from "@vorlyn/utils";
import { RenderIcon } from "@/components/shared/icon";
import { Fragment } from "react";
import type { RadioGroupDropdownModeProps } from "../dropdown-types";

export const RadioGroupsDropdown = ({
  options,
  value,
  onValueChange,
  itemClassName,
}: RadioGroupDropdownModeProps) => {
  return (
    <>
      <DropdownMenuGroup>
        {options.map((option) => {
          const items = option.items || [];
          return (
            <Fragment key={option.id}>
              <DropdownMenuLabel>{option.label}</DropdownMenuLabel>
              <DropdownMenuRadioGroup
                value={value}
                onValueChange={onValueChange}
              >
                {items.map((item) => {
                  const { label, value, icon } = item;
                  const itemKey = value;
                  return (
                    <DropdownMenuRadioItem key={itemKey} value={value}>
                      {icon && <RenderIcon src={icon} />}
                      <span
                        className={cn("truncate min-w-0 flex-1", itemClassName)}
                      >
                        {label}
                      </span>
                    </DropdownMenuRadioItem>
                  );
                })}
              </DropdownMenuRadioGroup>
            </Fragment>
          );
        })}
      </DropdownMenuGroup>
    </>
  );
};
