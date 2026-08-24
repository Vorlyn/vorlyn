import { Badge } from "@/components/ui/badge";
import { RenderIcon } from "@/components/shared/icon";
import type { ComponentProps } from "react";

type BaseCommonBadgeProps = Omit<
  ComponentProps<typeof Badge>,
  "children" | "variant" | "className"
> & {
  label: string;
  className?: string;
  leftIcon?: ComponentProps<typeof RenderIcon>["src"];
  rightIcon?: ComponentProps<typeof RenderIcon>["src"];
  isLoading?: boolean;
};

export type CommonBadgeProps =
  | (BaseCommonBadgeProps & {
      variant: "link";
      renderLink: NonNullable<ComponentProps<typeof Badge>["render"]>;
    })
  | (BaseCommonBadgeProps & {
      variant?: Exclude<ComponentProps<typeof Badge>["variant"], "link">;
      renderLink?: never;
    });
