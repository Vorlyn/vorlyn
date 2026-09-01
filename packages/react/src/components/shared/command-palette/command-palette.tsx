import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { RenderIcon } from "@/components/shared/icon";
import type { CommandPaletteProps } from "./command-palette.types";
import { Fragment } from "react";

export const CommandPalette = ({
  open,
  onOpenChange,
  placeholder,
  fallback = "No results found.",
  options,
  className,
}: CommandPaletteProps) => {
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <Command className={className}>
        <CommandInput placeholder={placeholder} />
        <CommandList>
          {!options?.length ? (
            <CommandEmpty>{fallback}</CommandEmpty>
          ) : (
            options.map((option, index) => (
              <Fragment key={option.heading}>
                <CommandGroup heading={option.heading}>
                  {option.items.map((item) => (
                    <CommandItem
                      key={`${option.heading}-${item.label}`}
                      value={item.value}
                      onSelect={item.onSelect}
                    >
                      {item.icon && <RenderIcon src={item.icon} />}
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <CommandShortcut>{item.shortcut}</CommandShortcut>
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
                {index !== options.length - 1 && <CommandSeparator />}
              </Fragment>
            ))
          )}
        </CommandList>
      </Command>
    </CommandDialog>
  );
};
