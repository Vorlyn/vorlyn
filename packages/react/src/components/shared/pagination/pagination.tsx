import {
  Pagination as DefaultPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import type { PaginationProps } from "./pagination.types";
import { Button } from "../button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@vorlyn/utils";
import { Select } from "../select";
import { getPagination } from "./pagination.utils";

export const Pagination = <T,>(props: PaginationProps<T>) => {
  const {
    records,
    currentPage,
    limit,
    onPageChange,
    onPageSizeChange,
    className,
  } = props;
  const totalRecords = props?.totalRecords ?? records.length;

  if (!totalRecords) return null;

  const safeLimit = Math.max(limit, 1);
  const totalPages = Math.max(1, Math.ceil(totalRecords / safeLimit));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);
  const startRange = (safePage - 1) * safeLimit + 1;
  const endRange = Math.min(safePage * safeLimit, totalRecords);

  const renderPagination = () => {
    if (props.mode === "default") {
      const { onPrev, onNext, canPrev, canNext, disabled } = props;
      return (
        <div
          className={cn(
            "flex items-center justify-end space-x-2 py-4",
            className,
          )}
        >
          <Button
            label="Previous"
            variant="outline"
            size="sm"
            onClick={() => {
              if (onPrev) {
                onPrev();
              } else {
                onPageChange(safePage - 1);
              }
            }}
            disabled={
              disabled || (canPrev !== undefined ? !canPrev : safePage === 1)
            }
          />
          <Button
            label="Next"
            variant="outline"
            size="sm"
            onClick={() => {
              if (onNext) {
                onNext();
              } else {
                onPageChange(safePage + 1);
              }
            }}
            disabled={
              disabled ||
              (canNext !== undefined ? !canNext : safePage === totalPages)
            }
          />
        </div>
      );
    }
    if (props.mode === "numbered") {
      const {
        rowsPerPage = [
          { label: "10", value: "10" },
          { label: "20", value: "20" },
          { label: "30", value: "30" },
        ],
        withLabel = false,
      } = props;
      return (
        <DefaultPagination
          className={cn("flex justify-between items-center", className)}
        >
          <Select
            label="Show per page"
            options={rowsPerPage}
            onValueChange={(value) => {
              onPageSizeChange?.(value);
              onPageChange(1);
            }}
            orientation="horizontal"
            className="w-fit"
            value={String(safeLimit)}
            showClose={false}
          />
          <span>{`${startRange} - ${endRange} of ${totalRecords}`}</span>
          <PaginationContent>
            <PaginationItem>
              <Button
                {...(withLabel && { label: "Previous" })}
                leftIcon={<ChevronLeft />}
                onClick={() => onPageChange(safePage - 1)}
                disabled={safePage === 1}
                variant="ghost"
              />
            </PaginationItem>
            {getPagination(safePage, totalPages).map((page) => {
              const isEllipsis =
                page === "start-ellipsis" || page === "end-ellipsis";
              return (
                <PaginationItem key={page}>
                  {isEllipsis ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      aria-current={safePage === page ? "page" : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        onPageChange(page);
                      }}
                      className={cn(
                        "border",
                        safePage === page
                          ? "bg-black/5 border-black/10"
                          : "border-black/5",
                      )}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <Button
                {...(withLabel && { label: "Next" })}
                rightIcon={<ChevronRight />}
                onClick={() => onPageChange(safePage + 1)}
                disabled={safePage === totalPages}
                variant="ghost"
              />
            </PaginationItem>
          </PaginationContent>
        </DefaultPagination>
      );
    }
  };
  return renderPagination();
};
