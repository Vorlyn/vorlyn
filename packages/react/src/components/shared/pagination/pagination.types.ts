type PaginationBase<T> = {
  records: T[];
  totalRecords?: number;
  currentPage: number;
  limit: number;
  onPageChange: (page: number) => void;
  className?: string;
};

type DefaultPaginationConfig<T> = {
  mode: "default";
  onPageSizeChange?: (value: string | null) => void;
  onPrev?: () => void;
  onNext?: () => void;
  canPrev?: boolean;
  canNext?: boolean;
  disabled?: boolean;
} & PaginationBase<T>;

type NumberedPaginationConfig<T> = {
  mode: "numbered";
  withLabel?: boolean;
  rowsPerPage: { label: string; value: string | null }[];
  onPageSizeChange: (value: string | null) => void;
} & PaginationBase<T>;

export type PaginationProps<T> =
  | DefaultPaginationConfig<T>
  | NumberedPaginationConfig<T>;
