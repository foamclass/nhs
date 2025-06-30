import HeroSection from "@/components/sections/hero-section";
import CtaBlock from "@/components/sections/cta-block";
import { ScrollFadeIn } from "@/components/common/scroll-fade-in";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Placeholder for social feed component
function SocialFeedPlaceholder() {
  const socialPosts = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1592096626141-3c7ef0472fdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxzb2NpYWwlMjBtZWRpYSUyMGhvc3BpdGFsJTIwcG9zdHxlbnwwfHx8fDE3NTA0MTUxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      aiHint: "social media post hospital"
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1694878981815-d643689e51fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzb2NpYWwlMjBtZWRpYSUyMGhvc3BpdGFsJTIwcG9zdHxlbnwwfHx8fDE3NTA0MTUxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      aiHint: "social media post"
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1705544363562-cdf94dd458cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxM3x8c29jaWFsJTIwbWVkaWElMjBwb3N0JTIwfGVufDB8fHx8MTc1MDQxNTIwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      aiHint: "social media post"
    }
  ];

  return (
    <ScrollFadeIn className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-primary">
          Stay Connected
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {socialPosts.map((post) => (
            <div key={post.id} className="bg-card p-6 rounded-lg shadow-md">
              <Image
                src={post.imageUrl}
                alt={`Social Media Post ${post.id}`}
                width={400}
                height={300}
                className="rounded-md mb-4 w-full h-auto object-cover"
                data-ai-hint={post.aiHint}
              />
              <p className="text-muted-foreground">Placeholder for a social media post. Follow us for live updates!</p>
            </div>
          ))}
        </div>
        <Button asChild className="mt-12 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
          <Link href="#social-media-links">Follow Our Journey</Link>
        </Button>
      </div>
    </ScrollFadeIn>
  );
}

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <CtaBlock />
      
      {/* Project Highlights Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Project Highlights
            </h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollFadeIn delay="0ms">
              <div className="flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1626204717650-96d57481eeb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxOXx8SG9zcGl0YWwlMjBTdGF0ZSUyMG9mJTIwdGhlJTIwYXJ0JTIwZmFjaWxpdGllcyUyMGltYWdlJTIwfGVufDB8fHx8MTc1MDQxNTA1NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="University Hospital Concept"
                  width={450}
                  height={320}
                  className="rounded-xl shadow-2xl w-full max-w-sm md:max-w-md h-48 md:h-64 object-cover"
                  data-ai-hint="modern hospital exterior"
                />
              </div>
            </ScrollFadeIn>
            <ScrollFadeIn delay="200ms" className="space-y-6">
              <h3 className="font-headline text-2xl font-semibold text-primary">An Integrated University Hospital</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our project establishes a premier university hospital, integrating a multi-specialty medical center with a modern academic campus. This synergistic approach combines patient-centric care with the mission to nurture the next generation of healthcare professionals.
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Advanced diagnostics and specialized treatment centers.</li>
                <li>Comprehensive clinical care and patient services.</li>
                <li>Integrated research facilities and medical training institute.</li>
                <li>Eco-friendly and sustainable campus design.</li>
              </ul>
              <Button asChild variant="link" className="text-accent p-0 hover:underline">
                <Link href="/project-overview">Learn More About The Project &rarr;</Link>
              </Button>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <SocialFeedPlaceholder />
    </>
  );
}
