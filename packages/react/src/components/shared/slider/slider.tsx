import { Slider as DefaultSlider } from "@/components/ui/slider";
import { SliderProps } from "./slider.types";

export const Slider = ({
  min,
  max,
  step,
  value,
  onValueChange,
  orientation = "horizontal",
  disabled,
  className,
}: SliderProps) => {
  return (
    <DefaultSlider
      min={min}
      max={max}
      step={step}
      className={className}
      value={value}
      onValueChange={(val) => onValueChange?.(val as number[])}
      orientation={orientation}
      disabled={disabled}
    />
  );
};
