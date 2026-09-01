import type { ReactElement, ReactNode } from "react";

interface NavigationMenuOption {
  id: string;
  title: string;
  description?: string;
  href: string;
  icon?: ReactNode;
}

export interface NavigationMenuProps {
  trigger: ReactElement;
  options: NavigationMenuOption[];
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}
