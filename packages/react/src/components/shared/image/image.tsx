import { ImageProps } from "./image.types";

export const Image = ({
  src,
  alt,
  loading = "lazy",
  fetchPriority = "auto",
  decoding = "async",
  width,
  height,
  ...rest
}: ImageProps) => {
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
