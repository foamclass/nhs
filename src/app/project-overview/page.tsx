import Image from "next/image";
import PageHeader from "@/components/sections/page-header";
import FaqSection from "@/components/sections/faq-section";
import InteractiveMap from "@/components/common/interactive-map";
import { ScrollFadeIn } from "@/components/common/scroll-fade-in";
import { School, Users, MapPin, TestTube2, BriefcaseMedical } from "lucide-react"; // Example icons

export default function ProjectOverviewPage() {
  return (
    <>
      <PageHeader
        title="Project Overview"
        subtitle="Discover the comprehensive vision behind Noble Health Services – a state-of-the-art university hospital set to redefine regional standards."
      />

      <section className="py-16 md:py-24 bg-background" id="vision">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              The University Hospital Concept
            </h2>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn delay="0ms">
              <Image
                src="https://images.unsplash.com/photo-1623261742887-e23376d50b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHx1bml2ZXJzaXR5JTIwaG9zcGl0YWwlMjBpbWFnZXxlbnwwfHx8fDE3NTA5NTI1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="University Hospital Concept Graphic"
                width={600}
                height={450}
                className="rounded-xl shadow-xl w-full h-auto object-cover"
                data-ai-hint="architectural rendering blueprint"
              />
            </ScrollFadeIn>
            <ScrollFadeIn delay="200ms" className="space-y-6">
              <div className="flex items-start gap-4">
                <BriefcaseMedical className="h-10 w-10 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-2xl font-semibold text-primary">Integrated Clinical Care</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A multi-specialty tertiary care hospital offering comprehensive medical services, advanced diagnostics, and specialized treatment units, all designed for patient comfort and efficient care delivery.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <School className="h-10 w-10 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-2xl font-semibold text-primary">Advanced Medical Education</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A premier medical education center with programs for doctors, nurses, and allied health professionals. The curriculum focuses on practical training within the hospital, fostering future healthcare leaders.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TestTube2 className="h-10 w-10 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-2xl font-semibold text-primary">Cutting-Edge Research</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dedicated research facilities will be at the core of our mission, enabling clinical trials, innovation in treatment, and contributing to global medical knowledge.
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              3D Master Plan
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn className="aspect-video bg-muted rounded-xl shadow-xl overflow-hidden flex items-center justify-center">
            {/* Placeholder for embedded 3D master plan viewer or video */}
            <Image
              src="https://images.unsplash.com/photo-1698222472029-7ebef66ad90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHwzZCUyMG1hdGVyJTIwcGxhbiUyMHZpZXclMjBob3NwaXRhbHxlbnwwfHx8fDE3NTA5NTI0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="3D Master Plan"
              width={1200}
              height={675}
              className="w-full h-full object-cover"
              data-ai-hint="3d architectural model"
            />
          </ScrollFadeIn>
          <p className="text-center mt-6 text-muted-foreground">
            Explore the visionary layout of our integrated campus. (Interactive 3D model coming soon)
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Project Location & Demographics
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Strategically located on Ring Road, Peshawar, ensuring accessibility for a vast population in KPK and neighboring regions.
            </p>
          </ScrollFadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ScrollFadeIn delay="0ms" className="rounded-xl shadow-xl overflow-hidden aspect-video">
              <InteractiveMap />
            </ScrollFadeIn>
            <ScrollFadeIn delay="200ms" className="space-y-6 bg-card p-8 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-xl font-semibold text-primary">Strategic Location</h3>
                  <p className="text-muted-foreground">Easy access via Ring Road, connecting major urban and rural areas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-xl font-semibold text-primary">KPK Demographics</h3>
                  <p className="text-muted-foreground">Serving a population of over 40 million in Khyber Pakhtunkhwa, with significant demand for quality healthcare and education.</p>
                </div>
              </div>
               <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-accent shrink-0 mt-1" />
                <div>
                  <h3 className="font-headline text-xl font-semibold text-primary">Regional Hub</h3>
                  <p className="text-muted-foreground">Poised to become a medical hub for Northern Pakistan and potentially attract patients from neighboring Afghanistan.</p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
