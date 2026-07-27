import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type {
  BreadcrumbItemsConfig,
  CommonBreadCrumbsProps,
  EllipsisItemConfig,
} from "./common-breadcrumb.types";
import { Fragment } from "react";
import { RenderIcon } from "@/utils/icon-utils";

const CommonBreadCrumb = ({
  items,
  maxVisible = 4,
}: CommonBreadCrumbsProps) => {
  if (!items?.length) return null;
  const hiddenItems = items.slice(1, items.length - 1);
  const hiddenItemObj = {
    id: "ellipses-box",
    isEllipses: true,
    content: hiddenItems,
  };
  const newList: (BreadcrumbItemsConfig | EllipsisItemConfig)[] =
    items.length <= maxVisible
      ? items
      : [items[0], hiddenItemObj, items[items.length - 1]];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {newList.map((item, index) => {
          if ("isEllipses" in item) {
            return (
              <Fragment key={item.id}>
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </Fragment>
            );
          }
          return (
            <Fragment key={item.id}>
              <BreadcrumbItem>
                {index === newList.length - 1 ? (
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
              {index < newList.length - 1 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default CommonBreadCrumb;
