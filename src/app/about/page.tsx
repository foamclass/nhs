
import Image from "next/image";
import PageHeader from "@/components/sections/page-header";
import { ScrollFadeIn } from "@/components/common/scroll-fade-in";
import { Users, Target, Eye, ShieldCheck, Milestone, ScrollText, CalendarCheck, Rocket } from "lucide-react";

const historyMilestones = [
  {
    icon: Eye,
    title: "Conceptualization (Early 2020s)",
    description: "A group of visionary doctors identifies the pressing need for advanced healthcare and medical education in Khyber Pakhtunkhwa.",
  },
  {
    icon: ScrollText,
    title: "Feasibility & Planning (2022-2023)",
    description: "Extensive research, site selection, and initial architectural designs are developed to lay the groundwork for the project.",
  },
  {
    icon: Users,
    title: "Securing Partnerships (2023-2024)",
    description: "Key strategic alliances are formed, and initial investor interest is cultivated to support the project's ambitious goals.",
  },
  {
    icon: Rocket,
    title: "Project Launch (2024)",
    description: "Noble Health Services is officially launched, marking the beginning of a new era for regional healthcare and medical education.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="About Noble Health Services"
        subtitle="Our journey, vision, and the values that drive us to create a new era of healthcare and education in Peshawar."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Our History: The Genesis of a Vision
            </h2>
          </ScrollFadeIn>
          <div className="relative max-w-3xl mx-auto">
            <div className="border-l-4 border-primary pl-8 py-4 space-y-12">
              {historyMilestones.map((milestone, index) => (
                <ScrollFadeIn key={milestone.title} className="relative pl-6 group" delay={`${index * 100}ms`}>
                  <div className="absolute -left-[calc(2rem+10px)] top-1 h-10 w-10 rounded-full bg-primary text-primary-foreground border-4 border-background flex items-center justify-center transition-transform group-hover:scale-110">
                    <milestone.icon className="h-5 w-5" />
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <h3 className="font-headline text-xl font-semibold text-primary mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              This journey is fueled by dedication and a commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
            <ScrollFadeIn className="p-6 rounded-lg" delay="0ms">
              <Eye className="mx-auto md:mx-0 h-12 w-12 text-primary mb-4" />
              <h3 className="font-headline text-2xl font-semibold mb-2">Our Vision</h3>
              <p className="text-muted-foreground">To be a leading center of excellence in healthcare and medical education, transforming lives and communities in Khyber Pakhtunkhwa and beyond.</p>
            </ScrollFadeIn>
            <ScrollFadeIn className="p-6 rounded-lg" delay="100ms">
              <Target className="mx-auto md:mx-0 h-12 w-12 text-primary mb-4" />
              <h3 className="font-headline text-2xl font-semibold mb-2">Our Mission</h3>
              <p className="text-muted-foreground">To provide compassionate, accessible, high-quality, and affordable healthcare services; to educate future healthcare leaders; and to foster research and innovation.</p>
            </ScrollFadeIn>
            <ScrollFadeIn className="p-6 rounded-lg" delay="200ms">
              <ShieldCheck className="mx-auto md:mx-0 h-12 w-12 text-primary mb-4" />
              <h3 className="font-headline text-2xl font-semibold mb-2">Our Values</h3>
              <ul className="text-muted-foreground list-inside list-disc text-left ml-4 md:ml-0">
                <li>Integrity & Ethics</li>
                <li>Patient-Centered Care</li>
                <li>Excellence & Innovation</li>
                <li>Collaboration & Teamwork</li>
                <li>Community Service</li>
              </ul>
            </ScrollFadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
