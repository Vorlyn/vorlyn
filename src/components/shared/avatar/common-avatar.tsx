import type {
  CommonAvatarProps,
  GroupAvatarProps,
  SingleAvatarProps,
} from "./common-avatar.types";
import {
  Avatar,
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
    <Avatar size={size}>
      <AvatarImage src={src} alt={fallback ?? "Avatar"} className={className} />
      {fallback && <AvatarFallback>{fallback}</AvatarFallback>}
      {badge && <AvatarBadge className={badgeClassName} />}
    </Avatar>
  );
};

const GroupAvatar = ({ avatarList, className }: GroupAvatarProps) => {
  return (
    <AvatarGroup>
      {avatarList?.map((avatar) => (
        <Avatar key={avatar.id}>
          <AvatarImage
            src={avatar.src}
            alt={avatar.fallback ?? "Avatar"}
            className={className}
          />
          {avatar.fallback && (
            <AvatarFallback>{avatar.fallback}</AvatarFallback>
          )}
        </Avatar>
      ))}
    </AvatarGroup>
  );
};

const CommonAvatar = ({
  src,
  fallback,
  badge,
  className,
  badgeClassName,
  variant = "default",
  avatarList,
  size = "default",
}: CommonAvatarProps) => {
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

export default CommonAvatar;
