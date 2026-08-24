import type { InputKbdProps } from "../common-kbd.types";
import { CommonInputGroup } from "../../input-group";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@vorlyn/utils";

export const InputKbd = ({ inputProps, label, keys, kbdClassName }: InputKbdProps) => {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <CommonInputGroup
        {...inputProps}
        label={label}
        mode="input"
        addonEnd={keys.map((key) => (
          <Kbd key={key} className={cn("pointer-events-none", kbdClassName)}>
            {key}
          </Kbd>
        ))}
      />
    </div>
  );
};
