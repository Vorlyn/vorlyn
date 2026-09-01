import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LabelList, Pie, PieChart as DefaultPieChart } from "recharts";
import { PieChartProps } from "./pie-chart.types";

export const PieChart = <TData extends Record<string, unknown>>({
  data,
  config,
  indicator = "dot",
  hideLabel = true,
  cursor = false,
  dataKey,
  label = true,
  labelLine = false,
  nameKey,
  innerRadius,
  stroke,
  strokeWidth = 5,
  labelList,
  chartLegend = false,
  chartLegendNameKey,
  chartLegendClassName,
  className,
}: PieChartProps<TData>) => {
  if (!data?.length) return null;
  return (
    <ChartContainer config={config} className={className}>
      <DefaultPieChart>
        <ChartTooltip
          cursor={cursor}
          content={
            <ChartTooltipContent hideLabel={hideLabel} indicator={indicator} />
          }
        />
        <Pie
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          label={label}
          labelLine={labelLine}
          innerRadius={innerRadius}
          stroke={stroke}
          strokeWidth={strokeWidth}
        >
          {labelList?.show && (
            <LabelList
              dataKey={labelList.dataKey}
              position={labelList.position}
              stroke={labelList.stroke ?? "white"}
              fontSize={labelList.fontSize ?? 12}
              formatter={labelList.formatter}
              className={labelList.className}
            />
          )}
        </Pie>
        {chartLegend && (
          <ChartLegend
            content={
              <ChartLegendContent
                nameKey={chartLegendNameKey}
                className={chartLegendClassName}
              />
            }
          />
        )}
      </DefaultPieChart>
    </ChartContainer>
  );
};
