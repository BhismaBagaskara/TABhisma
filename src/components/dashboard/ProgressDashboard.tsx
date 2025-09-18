"use client";

import type { GanttTask } from "@/lib/data";
import { useMemo } from "react";
import { PieChart, Pie, Cell } from "recharts";
import GlassCard from "../common/GlassCard";
import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const ProgressDashboard = ({ data }: { data: GanttTask[] }) => {
  const { completed, inProgress, notStarted, total } = useMemo(() => {
    const completed = data.filter((task) => task.status === "Completed").length;
    const inProgress = data.filter((task) => task.status === "In Progress").length;
    const notStarted = data.filter((task) => task.status === "Not Started").length;
    return { completed, inProgress, notStarted, total: data.length };
  }, [data]);

  const chartData = [
    { name: "Completed", value: completed, fill: "var(--color-completed)" },
    { name: "In Progress", value: inProgress, fill: "var(--color-in-progress)" },
    { name: "Not Started", value: notStarted, fill: "var(--color-not-started)" },
  ];

  const chartConfig = {
    value: {
      label: "Tasks",
    },
    "Completed": {
      label: "Completed",
      color: "hsl(var(--chart-2))",
    },
    "In Progress": {
      label: "In Progress",
      color: "hsl(var(--chart-1))",
    },
    "Not Started": {
      label: "Not Started",
      color: "hsl(var(--muted))",
    },
  } satisfies ChartConfig;

  const progressPercentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <GlassCard className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <CardHeader>
        <CardTitle>TA Bhisma's Progress</CardTitle>
        <CardDescription>{`You've completed ${completed} of ${total} tasks.`}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative mx-auto w-fit">
          <ChartContainer
            config={chartConfig}
            className="h-48 w-48"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel nameKey="name" />}
              />
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={60}
                outerRadius={80}
                strokeWidth={5}
              >
                 {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                 ))}
              </Pie>
            </PieChart>
          </ChartContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-primary">
              {Math.round(progressPercentage)}%
            </span>
            <span className="text-sm text-muted-foreground">Done</span>
          </div>
        </div>
      </CardContent>
    </GlassCard>
  );
};

export default ProgressDashboard;
