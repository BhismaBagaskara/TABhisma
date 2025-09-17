import Header from '@/components/common/Header';
import GanttChart from '@/components/dashboard/GanttChart';
import LinkManager from '@/components/dashboard/LinkManager';
import ProgressDashboard from '@/components/dashboard/ProgressDashboard';
import { ganttData, links } from '@/lib/data';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 w-full p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <GanttChart data={ganttData} />
            </div>
            <div className="space-y-8 lg:col-span-2">
              <ProgressDashboard data={ganttData} />
              <LinkManager links={links} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
