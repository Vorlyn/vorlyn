import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { CommonBreadCrumbsProps } from "./common-breadcrumb.types";
import { Fragment } from "react";
import { RenderIcon } from "@/utils/icon-utils";

const CommonBreadCrumb = ({ items }: CommonBreadCrumbsProps) => {
  if (!items?.length) return null;
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={item.id}>
            <BreadcrumbItem>
              {index === items.length - 1 ? (
                <BreadcrumbPage className="flex items-center gap-1">
                  {item.icon && <RenderIcon src={item.icon} />}
                  {item.label}
                </BreadcrumbPage>
              ) : item.render ? (
                <BreadcrumbLink
                  render={item.render}
                  className="flex items-center gap-1"
                >
                  {item.icon && <RenderIcon src={item.icon} />}
                  {item.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbLink
                  href={item.href ?? "#"}
                  className="flex items-center gap-1"
                >
                  {item.icon && <RenderIcon src={item.icon} />}
                  {item.label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CommonBreadCrumb;
