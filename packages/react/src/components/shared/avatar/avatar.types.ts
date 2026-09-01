export interface AvatarProps {
  src?: string;
  fallback?: string;
  badge?: boolean;
  className?: string;
  badgeClassName?: string;
  variant?: "default" | "group";
  avatarList?: { id: string; src?: string; fallback?: string }[];
  size?: "default" | "lg" | "sm";
}

export type SingleAvatarProps = Pick<
  AvatarProps,
  "src" | "fallback" | "badge" | "className" | "badgeClassName" | "size"
>;

export type GroupAvatarProps = Pick<
  AvatarProps,
  "avatarList" | "className"
>;
