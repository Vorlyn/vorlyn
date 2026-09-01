import {
  Collapsible as DefaultCollapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import type {
  CollapsibleBasicModeConfig,
  CollapsibleComposedModeConfig,
  CollapsibleProps,
} from "./collapsible.types";

const BasicCollapsible = ({
  trigger,
  triggerClassName,
  keepMounted,
  contentClassName,
  children,
}: CollapsibleBasicModeConfig) => {
  return (
    <>
      <CollapsibleTrigger render={trigger} className={triggerClassName} />
      <CollapsibleContent
        keepMounted={keepMounted}
        className={contentClassName}
      >
        {children}
      </CollapsibleContent>
    </>
  );
};

const ComposedCollapsible = ({
  beforeTrigger,
  afterTrigger,
  trigger,
  triggerClassName,
  keepMounted,
  contentClassName,
  children,
}: CollapsibleComposedModeConfig) => {
  return (
    <>
      {beforeTrigger}
      <CollapsibleTrigger render={trigger} className={triggerClassName} />
      {afterTrigger}
      <CollapsibleContent
        keepMounted={keepMounted}
        className={contentClassName}
      >
        {children}
      </CollapsibleContent>
    </>
  );
};

export const Collapsible = (props: CollapsibleProps) => {
  const { open, onOpenChange, defaultOpen, disabled, className, mode } = props;
  return (
    <DefaultCollapsible
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
      disabled={disabled}
      className={className}
    >
      {mode === "basic" ? (
        <BasicCollapsible {...props} />
      ) : (
        <ComposedCollapsible {...props} />
      )}
    </DefaultCollapsible>
  );
};
