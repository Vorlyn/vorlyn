import { Badge } from "@/components/ui/badge";
import { RenderIcon } from "@/components/shared/icon";
import type { ComponentProps } from "react";

type BaseBadgeProps = Omit<
  ComponentProps<typeof Badge>,
  "children" | "variant" | "className"
> & {
  label: string;
  className?: string;
  leftIcon?: ComponentProps<typeof RenderIcon>["src"];
  rightIcon?: ComponentProps<typeof RenderIcon>["src"];
  isLoading?: boolean;
};

export type BadgeProps =
  | (BaseBadgeProps & {
      variant: "link";
      renderLink: NonNullable<ComponentProps<typeof Badge>["render"]>;
    })
  | (BaseBadgeProps & {
      variant?: Exclude<ComponentProps<typeof Badge>["variant"], "link">;
      renderLink?: never;
    });
