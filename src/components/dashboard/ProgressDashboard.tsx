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
  const { completed, notComplete, total } = useMemo(() => {
    const completed = data.filter((task) => task.status === "Completed").length;
    const notComplete = data.filter((task) => task.status !== "Completed").length;
    return { completed, notComplete, total: data.length };
  }, [data]);

  const chartData = [
    { name: "Completed", value: completed, fill: "#FBBF24" },
    { name: "Not Complete", value: notComplete, fill: "#09090B" },
  ];

  // Pastikan blok ini memiliki kurung kurawal penutup yang benar
  const chartConfig = {
    "Completed": {
      label: "Completed",
    },
    "Not Complete": {
      label: "Not Complete",
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
                data={chartData.sort((a, b) => (a.name === 'Completed' ? 1 : -1))}
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