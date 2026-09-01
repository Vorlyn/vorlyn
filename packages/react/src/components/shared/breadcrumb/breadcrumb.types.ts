import type { ReactElement, ReactNode } from "react";

export type BreadcrumbItemsConfig =
  | {
      id: string | number;
      label: string;
      href: string;
      render?: never;
      icon?: ReactNode;
    }
  | {
      id: string | number;
      label: string;
      href?: never;
      render: ReactElement;
      icon?: ReactNode;
    };

export type EllipsisItemConfig = {
  id: string;
  isEllipses: boolean;
  content: BreadcrumbItemsConfig[];
};

export interface BreadCrumbsProps {
  items: BreadcrumbItemsConfig[];
  maxVisible?: number;
}
