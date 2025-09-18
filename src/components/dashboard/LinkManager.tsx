import type { LinkItem } from "@/lib/data";
import GlassCard from "../common/GlassCard";
import { CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";
import { FileText, Book, Link as LinkIcon, Library } from "lucide-react";
import { Button } from "../ui/button";

const iconMap: { [key in LinkItem['icon']]: React.ReactNode } = {
  FileText: <FileText className="h-6 w-6 text-primary" />,
  Book: <Book className="h-6 w-6 text-primary" />,
  Link: <LinkIcon className="h-6 w-6 text-primary" />,
  Library: <Library className="h-6 w-6 text-primary" />,
};

const LinkManager = ({ links }: { links: LinkItem[] }) => {
  return (
    <GlassCard className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
      <CardHeader>
        <CardTitle>Quick Links</CardTitle>
        <CardDescription>All TA resources links.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {links.map((link) => (
            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="p-4 rounded-lg border bg-background/50 hover:bg-accent/50 hover:border-primary/50 transition-colors h-full">
                <div className="flex items-start gap-4">
                  <div>{iconMap[link.icon]}</div>
                  <div>
                    <p className="font-semibold">{link.title}</p>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </GlassCard>
  );
};

export default LinkManager;
