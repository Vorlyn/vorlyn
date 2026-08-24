import type { CommonImageProps } from "./common-image.types";

export const CommonImage = ({
  src,
  alt,
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  width,
  height,
  ...rest
}: CommonImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      {...rest}
    />
  );
};
