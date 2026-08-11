import { Kbd, KbdGroup } from "@/components/ui/kbd";
import type { ComboModeProps } from "../common-kbd.types";
import { cn } from "@/lib/utils";

export const ComboKbd = ({ parts, wrapperClassName, className }: ComboModeProps) => {
  return (
    <div className={cn("flex flex-col items-center gap-4", wrapperClassName)}>
      <p className={cn("text-sm text-muted-foreground", className)}>
        {parts.map((part, i) =>
          part.type === "keys" ? (
            <KbdGroup key={i} className="mx-1 inline-flex align-middle">
              {part.keys.map((command) => (
                <Kbd key={command}>{command}</Kbd>
              ))}
            </KbdGroup>
          ) : (
            <span key={i}>{part.content}</span>
          ),
        )}
      </p>
    </div>
  );
};
