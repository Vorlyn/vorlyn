import {
  Progress as DefaultProgress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { ProgressProps } from "./progress.types";

export const Progress = ({
  value,
  label,
  max = 100,
  min = 0,
  className,
}: ProgressProps) => {
  if (value === undefined || value === null) return null;

  return (
    <DefaultProgress value={value} max={max} min={min} className={className}>
      {label && (
        <>
          <ProgressLabel>{label}</ProgressLabel>
          <ProgressValue />
        </>
      )}
    </DefaultProgress>
  );
};
