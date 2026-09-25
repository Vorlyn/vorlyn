import type { ReactNode, Ref } from "react";

export type SimpleItem = string;

export interface OptionItem<TValue extends string = string> {
  label: string;
  value: TValue;
}

export interface GroupItem<TGroup extends string = string> {
  value: TGroup;
  items: readonly string[];
}

export type SelectableItem = SimpleItem | OptionItem;

export type SimpleList = SimpleItem[];
export type OptionList<TValue extends string = string> = readonly OptionItem<TValue>[];
export type GroupedList<TGroup extends string = string> = readonly GroupItem<TGroup>[];

export type AnyList = SimpleList | OptionList | GroupedList;

interface BaseComboboxProps {
  placeholder?: string;
  fallback?: string;
  label?: string;
  icon?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  showClear?: boolean;
  className?: string;
  labelClassName?: string;
  contentClassName?: string;
  chipClassName?: string;
  ref?: Ref<HTMLInputElement>;
}

export type DefaultVariantProps = BaseComboboxProps & {
  variant?: "default";
  options: SimpleList | OptionList;
  value?: string;
  onChange?: (value: string) => void;
};

export type MultipleVariantProps = BaseComboboxProps & {
  variant: "multiple";
  options: SimpleList | OptionList;
  value?: string[];
  onChange?: (values: string[]) => void;
};

export type GroupedVariantProps = BaseComboboxProps & {
  variant: "grouped";
  options: GroupedList;
  value?: string;
  onChange?: (value: string) => void;
};

interface PopoverInternalSearchProps {
  searchValue?: undefined;
  onSearchChange?: undefined;
}

interface PopoverExternalSearchProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export type PopoverVariantProps = BaseComboboxProps & {
  variant: "popover";
  options: SimpleList | OptionList;
  value?: string;
  onChange?: (value: string) => void;
  searchPlaceholder?: string;
  isLoading?: boolean;
} & (PopoverInternalSearchProps | PopoverExternalSearchProps);

export type ComboboxProps =
  | DefaultVariantProps
  | MultipleVariantProps
  | GroupedVariantProps
  | PopoverVariantProps;

export type DefaultComboboxProps = Omit<DefaultVariantProps, "variant"> & {
  id: string;
};

export type MultipleComboboxProps = Omit<MultipleVariantProps, "variant"> & {
  id: string;
};

export type GroupedComboboxProps = Omit<GroupedVariantProps, "variant"> & {
  id: string;
};

export type PopoverComboboxProps = Omit<PopoverVariantProps, "variant"> & {
  id: string;
};