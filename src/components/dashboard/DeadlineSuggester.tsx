"use client";

import { useState } from "react";
import { suggestDeadlinesAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Loader2, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "../ui/scroll-area";

export default function DeadlineSuggester() {
  const [projectInfo, setProjectInfo] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectInfo.trim()) {
      toast({
        title: "Input required",
        description: "Please provide some project information.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setSuggestion("");

    try {
      const result = await suggestDeadlinesAction({ projectInfo });
      setSuggestion(result.suggestedDeadlines);
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred",
        description: "Sorry, I couldn't generate suggestions. Please try again later.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button>
          <Sparkles className="mr-2 h-4 w-4" />
          Suggest Deadlines
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>AI Deadline Suggester</SheetTitle>
          <SheetDescription>
            Describe your project components, status, and dependencies. Our AI will suggest an optimal timeline.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 h-[calc(100%-8rem)]">
          <div className="h-full flex flex-col gap-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder="e.g., 'Chapter 1 is a draft, needs review. Chapter 2 literature review is 50% done. Chapter 3 methodology not started. Dependency: Chapter 3 depends on feedback from Chapter 1.'"
                value={projectInfo}
                onChange={(e) => setProjectInfo(e.target.value)}
                rows={8}
                className="bg-background"
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                Generate Suggestions
              </Button>
            </form>

            {isLoading && (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Loader2 className="mx-auto h-8 w-8 animate-spin mb-2" />
                  <p>Analyzing your project...</p>
                </div>
              </div>
            )}
            
            {suggestion && !isLoading && (
              <div className="flex-1 min-h-0">
                <p className="font-semibold mb-2 text-foreground">Suggested Deadlines:</p>
                <ScrollArea className="h-full rounded-md border bg-muted/50 p-4">
                  <p className="text-sm text-foreground whitespace-pre-wrap">{suggestion}</p>
                </ScrollArea>
              </div>
            )}
          </div>
        </div>
        <SheetFooter>
            <Button variant="outline" onClick={() => setIsOpen(false)}>Close</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
