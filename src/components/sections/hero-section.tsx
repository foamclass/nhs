import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { ScrollFadeIn } from "@/components/common/scroll-fade-in";

export default function HeroSection() {
  return (
    <section
      className="relative flex h-[calc(100vh-5rem)] min-h-[600px] items-center justify-center overflow-hidden bg-cover bg-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop')",
      }}
      data-ai-hint="modern hospital building"
    >
      <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay for text readability */}

      <ScrollFadeIn className="relative z-20 p-4">
        <h1 className="font-headline text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-2xl">
          A World-Class University Hospital
          <br />
          <span className="text-accent">in the Heart of Peshawar</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl opacity-90 drop-shadow-lg">
          Join us in building a healthier future for Khyber Pakhtunkhwa. Discover a landmark project designed for impact and sustainable growth.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg shadow-xl transition-all hover:scale-105">
            <Link href="/project-overview#vision">
              <PlayCircle className="mr-2 h-6 w-6" />
              Watch Our Vision
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-10 py-6 text-lg shadow-xl transition-all hover:scale-105">
            <Link href="/investment-opportunities">
              Explore Investment
            </Link>
          </Button>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
