import type { ReactElement, ReactNode } from "react";

interface NavigationMenuOption {
  id: string;
  title: string;
  description?: string;
  href: string;
  icon?: ReactNode;
}

export interface NavigationMenuRenderLinkProps {
  href: string;
  className: string;
  children: ReactNode;
}

export interface NavigationMenuProps {
  trigger: ReactElement;
  options: NavigationMenuOption[];
  renderLink?: (props: NavigationMenuRenderLinkProps) => ReactElement;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}
