import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CommonTabsProps } from "./common-tabs.types";
import { RenderIcon } from "@/components/shared/icon";
import { cn } from "@vorlyn/utils";

export const CommonTabs = ({
  options,
  children,
  defaultValue,
  value,
  onValueChange,
  className,
  listClassName,
  lisWrapperClassName,
  contentClassName,
  variant = "default",
  orientation = "horizontal",
}: CommonTabsProps) => {
  if (!options?.length) return null;

  return (
    <Tabs
      value={value}
      onValueChange={onValueChange}
      defaultValue={defaultValue}
      orientation={orientation}
      className={cn("min-w-0", className)}
    >
      <div
        className={cn(
          "w-full overflow-x-auto overflow-y-hidden overscroll-x-contain",
          lisWrapperClassName,
        )}
      >
        <TabsList
          variant={variant}
          className={cn(
            "w-max max-w-none justify-start flex-nowrap",
            listClassName,
          )}
        >
          {options.map((option) => (
            <TabsTrigger
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className="shrink-0 flex-none"
            >
              <RenderIcon src={option.icon} alt={option.label} />
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <TabsContent value={value} className={contentClassName}>
        {children}
      </TabsContent>
    </Tabs>
  );
};
