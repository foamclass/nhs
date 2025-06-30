import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import { ScrollFadeIn } from "./scroll-fade-in";

interface IconWithTextProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
  animationDelay?: string;
}

export function IconWithText({ icon: Icon, title, description, className, iconClassName, animationDelay = '0ms' }: IconWithTextProps) {
  return (
    <ScrollFadeIn className={cn("flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300", className)} delay={animationDelay}>
      <div className={cn("mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground", iconClassName)}>
        <Icon className="h-8 w-8" />
      </div>
      <h3 className="font-headline text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </ScrollFadeIn>
  );
}
