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
import { RenderIcon } from "@/components/shared/icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const CommonBreadCrumb = ({
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
                  <DropdownMenu>
                    <DropdownMenuTrigger render={<BreadcrumbEllipsis />} />
                    <DropdownMenuContent>
                      {item.content.map((content) =>
                        content.render ? (
                          <BreadcrumbLink
                            key={content.id}
                            render={content.render}
                            className="flex items-center gap-1"
                          >
                            <DropdownMenuItem className="w-full">
                              {content.icon && (
                                <RenderIcon src={content.icon} />
                              )}
                              {content.label}
                            </DropdownMenuItem>
                          </BreadcrumbLink>
                        ) : (
                          <BreadcrumbLink
                            key={content.id}
                            href={content.href}
                            className="flex items-center gap-1 w-full"
                          >
                            <DropdownMenuItem className="w-full">
                              {content.icon && (
                                <RenderIcon src={content.icon} />
                              )}
                              {content.label}
                            </DropdownMenuItem>
                          </BreadcrumbLink>
                        ),
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
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
                  <BreadcrumbLink href={item.href ?? "#"}>
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
