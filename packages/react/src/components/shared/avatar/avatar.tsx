import type {
  AvatarProps,
  GroupAvatarProps,
  SingleAvatarProps,
} from "./avatar.types";
import {
  Avatar as DefaultAvatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

const SingleAvatar = ({
  size,
  src,
  className,
  fallback,
  badge,
  badgeClassName,
}: SingleAvatarProps) => {
  return (
    <DefaultAvatar size={size}>
      <AvatarImage src={src} alt={fallback ?? "Avatar"} className={className} />
      {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
      {badge && <AvatarBadge className={badgeClassName} />}
    </DefaultAvatar>
  );
};

const GroupAvatar = ({ avatarList, className }: GroupAvatarProps) => {
  return (
    <AvatarGroup>
      {avatarList?.map((avatar) => (
        <DefaultAvatar key={avatar.id}>
          <AvatarImage
            src={avatar.src}
            alt={avatar.fallback ?? "Avatar"}
            className={className}
          />
          {avatar.fallback && (
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          )}
        </DefaultAvatar>
      ))}
    </AvatarGroup>
  );
};

export const Avatar = ({
  src,
  fallback,
  badge,
  className,
  badgeClassName,
  variant = "default",
  avatarList,
  size = "default",
}: AvatarProps) => {
  if (!src && variant === "default") return null;
  if (variant === "group" && !avatarList?.length) return null;

  if (variant === "group") {
    return <GroupAvatar avatarList={avatarList} className={className} />;
  }

  return (
    <SingleAvatar
      src={src}
      fallback={fallback}
      badge={badge}
      className={className}
      badgeClassName={badgeClassName}
      size={size}
    />
  );
};
