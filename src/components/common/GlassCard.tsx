import { cn } from "@/lib/utils";

const GlassCard = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "bg-card/60 backdrop-blur-lg rounded-2xl border shadow-lg",
        "transition-all duration-300 hover:shadow-2xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default GlassCard;
