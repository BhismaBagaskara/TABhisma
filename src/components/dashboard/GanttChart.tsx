import type { GanttTask } from "@/lib/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import GlassCard from "../common/GlassCard";
import { CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

const statusStyles = {
  'Completed': 'bg-green-500/20 text-green-700 border-green-500/30 hover:bg-green-500/30 dark:text-green-400 dark:border-green-500/40 dark:bg-green-500/10',
  'In Progress': 'bg-blue-500/20 text-blue-700 border-blue-500/30 hover:bg-blue-500/30 dark:text-blue-400 dark:border-blue-500/40 dark:bg-blue-500/10',
  'Not Started': 'bg-gray-500/20 text-gray-700 border-gray-500/30 hover:bg-gray-500/30 dark:text-gray-400 dark:border-gray-500/40 dark:bg-gray-500/10'
};

const GanttChart = ({ data }: { data: GanttTask[] }) => {
  return (
    // 1. UBAH DI SINI: Tambahkan flex flex-col
    <GlassCard className="h-full animate-fade-in-up flex flex-col">
      <CardHeader>
        <CardTitle>TA Bhisma Timeline</CardTitle>
        <CardDescription>An overview of Bhisma's project tasks and deadlines.</CardDescription>
      </CardHeader>
      
      {/* 2. UBAH DI SINI: Tambahkan className="flex-1" untuk membuat konten tumbuh */}
      <CardContent className="flex-1">
        
        {/* 3. UBAH DI SINI: Ganti h-[450px] menjadi h-full */}
        <ScrollArea className="h-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Process</TableHead>
                <TableHead>Start Date</TableHead>
                <TableHead>End Date</TableHead>
                <TableHead className="text-right">Duration</TableHead>
                <TableHead className="text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((task) => (
                <TableRow key={task.id}>
                  <TableCell className="font-medium">{task.process}</TableCell>
                  <TableCell>{task.startDate}</TableCell>
                  <TableCell>{task.endDate}</TableCell>
                  <TableCell className="text-right">{task.duration} days</TableCell>
                  <TableCell className="text-center">
                    <Badge variant="outline" className={statusStyles[task.status]}>
                      {task.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </CardContent>
    </GlassCard>
  );
};

export default GanttChart;