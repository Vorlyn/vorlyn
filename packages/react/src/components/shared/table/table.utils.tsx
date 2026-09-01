import { cn } from "@vorlyn/utils";
import { Input } from "../input";
import { Select } from "../select";
import type { FiltersConfig } from "./table.types";
import type { ColumnDef, Table } from "@tanstack/react-table";
import { Button } from "../button";
import { ChevronDown } from "lucide-react";
import { Dropdown } from "../dropdown";
import { Checkbox } from "../checkbox";

export const renderFilters = <TData,>(
  item: FiltersConfig,
  table: Table<TData>,
  selectedValue: string[],
  onSelectValue: (value: string[]) => void,
  className?: string,
) => {
  if (item.type === "search") {
    return (
      <Input
        placeholder={item.placeholder}
        value={(table.getColumn(item.key)?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn(item.key)?.setFilterValue(event.target.value)
        }
        className={cn("max-w-sm", className)}
      />
    );
  }
  if (item.type === "status") {
    return (
      <Select
        options={item?.options}
        value={(table.getColumn(item?.key)?.getFilterValue() as string) ?? ""}
        onValueChange={(event) =>
          table.getColumn(item?.key)?.setFilterValue(event)
        }
        className={cn("max-w-sm", className)}
      />
    );
  }
  if (item?.type === "multi-select") {
    const selectedSet = new Set(selectedValue);
    return (
      <Dropdown
        mode="checkboxes"
        trigger={
          <Button
            label="Select Options"
            variant="outline"
            rightIcon={<ChevronDown />}
          />
        }
        options={[
          {
            id: item.key,
            items: item.options.map((option) => ({
              label: option.label,
              value: option.value,
              checked: selectedSet.has(option.value),
              onCheckedChange: (checked: boolean) => {
                const updated = checked
                  ? [...selectedValue, option.value]
                  : selectedValue.filter((val) => val !== option.value);
                onSelectValue(updated);
                table
                  .getColumn(item.key)
                  ?.setFilterValue(updated?.length ? updated : undefined);
              },
            })),
          },
        ]}
      />
    );
  }
};

const getSelectionColumn = <TData,>(): ColumnDef<TData> => ({
  id: "select",
  header: ({ table }) => (
    <Checkbox
      label=""
      checked={table.getIsAllPageRowsSelected()}
      onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      className="ml-2"
    />
  ),
  cell: ({ row }) => (
    <Checkbox
      label=""
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      className="ml-2"
    />
  ),
  enableSorting: false,
  enableHiding: false,
});

export const getTableColumns = <TData, TValue>(
  columns: ColumnDef<TData, TValue>[],
  enableRowSelection: boolean,
): ColumnDef<TData, TValue>[] =>
  enableRowSelection
    ? [getSelectionColumn<TData>() as ColumnDef<TData, TValue>, ...columns]
    : columns;
