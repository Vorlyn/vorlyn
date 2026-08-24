import type { SelectableItem } from "./common-combobox.types";

export const getOptionValue = (option: SelectableItem) => {
  return typeof option === "string" ? option : option.value;
};

export const getOptionLabel = (option: SelectableItem) => {
  return typeof option === "string" ? option : option.label;
};

export const internalFilter = (
  item: SelectableItem,
  query: string,
  itemToString?: (item: SelectableItem) => string,
) => {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  const label = (itemToString?.(item) ?? getOptionLabel(item)).toLowerCase();
  return label.includes(q) || getOptionValue(item).toLowerCase().includes(q);
};
