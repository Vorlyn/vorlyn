import { CartesianGrid, LabelList, Line, LineChart as DefaultLineChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChartProps } from "./line-chart.types";

export const LineChart = <TData extends Record<string, unknown>>({
  data,
  config,
  line,
  axisLine = false,
  cursor = false,
  showVerticalGridLines = false,
  tickFormatter,
  tickLine = false,
  tickMargin = 8,
  xAxisDataKey,
  hideLabel = true,
  indicator = "line",
  className,
}: LineChartProps<TData>) => {
  if (!data?.length || !line?.length) return null;
  return (
    <ChartContainer config={config} className={className}>
      <DefaultLineChart accessibilityLayer data={data}>
        <CartesianGrid vertical={showVerticalGridLines} />
        <XAxis
          dataKey={xAxisDataKey as string}
          tickLine={tickLine}
          axisLine={axisLine}
          tickMargin={tickMargin}
          tickFormatter={tickFormatter}
        />
        <ChartTooltip
          cursor={cursor}
          content={
            <ChartTooltipContent indicator={indicator} hideLabel={hideLabel} />
          }
        />
        {line.map((l) => (
          <Line
            key={l.dataKey}
            dataKey={l.dataKey}
            type={l.type ?? "natural"}
            stroke={l.stroke}
            strokeWidth={l.strokeWidth}
            dot={l.dot}
            activeDot={l.activeDot}
          >
            {l.label?.show && (
              <LabelList
                dataKey={l.dataKey}
                position={l.label.position}
                offset={l.label.offset}
                fontSize={l.label.fontSize}
                className={l.label.className}
              />
            )}
          </Line>
        ))}
      </DefaultLineChart>
    </ChartContainer>
  );
};
