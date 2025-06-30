import { ScrollFadeIn } from "@/components/common/scroll-fade-in";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function PageHeader({ title, subtitle, className, titleClassName, subtitleClassName }: PageHeaderProps) {
  return (
    <ScrollFadeIn className={cn("py-12 md:py-16 bg-secondary text-center", className)}>
      <div className="container mx-auto px-4">
        <h1 className={cn("font-headline text-4xl md:text-5xl font-bold text-primary", titleClassName)}>
          {title}
        </h1>
        {subtitle && (
          <p className={cn("mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto", subtitleClassName)}>
            {subtitle}
          </p>
        )}
      </div>
    </ScrollFadeIn>
  );
}
