export interface BreadcrumbItemsConfig {
  id: string | number;
  label: string;
  href: string;
}

export interface CommonBreadCrumbsProps {
  items: BreadcrumbItemsConfig[];
}
