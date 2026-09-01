import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart as DefaultBarChart, CartesianGrid, LabelList } from "recharts";
import { BarChartProps } from "./bar-chart.types";
import { BarChartHorizontalAxis } from "./components/horizontal-axis";
import { BarChartVerticalAxis } from "./components/vertical-axis";

export const BarChart = <TData extends Record<string, unknown>>({
  data,
  config,
  bars,
  accessibilityLayer = true,
  showVerticalGridLines = false,
  cursor = false,
  hideLabel = true,
  tickLine = false,
  axisLine = false,
  tickMargin = 10,
  xAxisDataKey = "month",
  yAxisDataKey = "month",
  tickFormatter,
  className,
  type = "category",
  layout = "horizontal",
  indicator = "dot",
  chartLegend = false,
}: BarChartProps<TData>) => {
  if (!data?.length || !bars?.length) return null;

  return (
    <ChartContainer config={config} className={className}>
      <DefaultBarChart
        accessibilityLayer={accessibilityLayer}
        data={data}
        layout={layout}
      >
        <CartesianGrid vertical={showVerticalGridLines} />
        {layout === "horizontal" ? (
          <BarChartHorizontalAxis<TData>
            xAxisDataKey={xAxisDataKey}
            tickLine={tickLine}
            tickMargin={tickMargin}
            axisLine={axisLine}
            tickFormatter={tickFormatter}
            type={type}
          />
        ) : (
          <BarChartVerticalAxis<TData>
            xAxisDataKey={xAxisDataKey}
            yAxisDataKey={yAxisDataKey}
            tickLine={tickLine}
            tickMargin={tickMargin}
            axisLine={axisLine}
            tickFormatter={tickFormatter}
          />
        )}
        <ChartTooltip
          cursor={cursor}
          content={
            <ChartTooltipContent indicator={indicator} hideLabel={hideLabel} />
          }
        />
        {bars.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey as string}
            fill={bar.fill ?? `var(--color-${bar.dataKey})`}
            radius={bar.radius}
          >
            {bar.label?.show && (
              <LabelList
                dataKey={bar.dataKey}
                position={bar.label?.position ?? "top"}
                offset={bar.label?.offset}
                fontSize={bar.label?.fontSize}
                className={bar.label?.className}
              />
            )}
          </Bar>
        ))}
        {chartLegend && <ChartLegend content={<ChartLegendContent />} />}
      </DefaultBarChart>
    </ChartContainer>
  );
};
