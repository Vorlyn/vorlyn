import {
  NavigationMenu as DefaultNavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@vorlyn/utils";
import { RenderIcon } from "@/components/shared/icon";
import type {
  NavigationMenuProps,
  NavigationMenuRenderLinkProps,
} from "./navigation-menu.types";

const defaultRenderLink = ({
  href,
  className,
  children,
}: NavigationMenuRenderLinkProps) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export const NavigationMenu = ({
  trigger,
  options,
  renderLink = defaultRenderLink,
  className,
  contentClassName,
  titleClassName,
  descriptionClassName,
}: NavigationMenuProps) => {
  if (!options?.length) return null;
  return (
    <DefaultNavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger render={trigger} />
          <NavigationMenuContent>
            <div className={className}>
              {options.map((option) => (
                <NavigationMenuLink
                  key={option.id}
                  render={renderLink({
                    href: option.href,
                    className: cn(
                      "flex flex-col gap-1 items-start text-sm h-fit",
                      contentClassName,
                    ),
                    children: (
                      <>
                        <div
                          className={cn(
                            "flex items-center gap-2",
                            "leading-none font-medium",
                            titleClassName,
                          )}
                        >
                          {option.icon && <RenderIcon src={option.icon} />}
                          {option.title}
                        </div>
                        {option.description && (
                          <div
                            className={cn(
                              "line-clamp-2 text-muted-foreground",
                              descriptionClassName,
                            )}
                          >
                            {option.description}
                          </div>
                        )}
                      </>
                    ),
                  })}
                />
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </DefaultNavigationMenu>
  );
};
