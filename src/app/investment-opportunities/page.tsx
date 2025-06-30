
import Image from "next/image";
import PageHeader from "@/components/sections/page-header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, BarChart3, TrendingUp, Users, Briefcase, ShieldCheck, KeyRound, PieChart, Settings } from "lucide-react";
import Link from "next/link";
import { ScrollFadeIn } from "@/components/common/scroll-fade-in";
import { IconWithText } from "@/components/common/icon-with-text";

const investmentModels = [
  {
    value: "lease",
    title: "Lease Model",
    icon: KeyRound,
    description: "Secure long-term returns by leasing state-of-the-art medical facilities or commercial spaces within the complex. Ideal for stable, predictable income.",
    details: [
      "Fixed annual lease income.",
      "Long-term lease agreements (10-20 years).",
      "Options for medical equipment, clinics, pharmacies, and retail units.",
      "Minimal operational involvement required."
    ]
  },
  {
    value: "equity",
    title: "Equity Partnership",
    icon: PieChart,
    description: "Become a shareholder in specific hospital departments, the university, or the overall project. Participate in profit-sharing and long-term value appreciation.",
    details: [
      "Direct ownership stake.",
      "Potential for high capital growth.",
      "Voting rights and strategic involvement (depending on stake).",
      "Opportunities in specialized centers (e.g., Cardiac, Oncology)."
    ]
  },
  {
    value: "operations",
    title: "Operational Ventures",
    icon: Settings,
    description: "Invest in and manage specific operational units like diagnostic labs, specialized clinics, or auxiliary services. Leverage your expertise for higher returns.",
    details: [
      "Joint ventures or fully-owned operations.",
      "Higher potential returns linked to operational success.",
      "Opportunities in radiology, pathology, physiotherapy, etc.",
      "Requires operational expertise and management."
    ]
  }
];

export default function InvestmentOpportunitiesPage() {
  return (
    <>
      <PageHeader
        title="Investment Opportunities"
        subtitle="Partner with Noble Health Services to capitalize on the growing healthcare and education sectors in Pakistan. Explore diverse pathways tailored to your investment goals."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Why Invest With Us?
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Tap into a market with substantial demand and growth potential, backed by a project with strong fundamentals and a dedicated team.
          </p>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <IconWithText icon={BarChart3} title="High Healthcare Demand" description="KPK has a significant gap in quality healthcare services, presenting a large, underserved market." animationDelay="0ms" />
            <IconWithText icon={TrendingUp} title="Strong Educational ROI" description="Medical education is a high-value sector with consistent demand for skilled professionals." animationDelay="150ms" />
            <IconWithText icon={ShieldCheck} title="Robust Project Governance" description="Transparent processes and experienced leadership ensure your investment is secure and well-managed." animationDelay="300ms"/>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              ROI Models & Investor Pathways
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
          <Tabs defaultValue="lease" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto md:h-12 mb-8">
              {investmentModels.map(model => (
                <TabsTrigger key={model.value} value={model.value} className="py-3 md:py-2 text-base md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <model.icon className="mr-2 h-5 w-5 hidden md:inline-block"/> {model.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {investmentModels.map(model => (
              <TabsContent key={model.value} value={model.value}>
                <div className="bg-card p-6 md:p-10 rounded-xl shadow-xl">
                  <div className="flex items-center mb-6">
                    <model.icon className="h-10 w-10 text-primary mr-4"/>
                    <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary">{model.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">{model.description}</p>
                  <ul className="space-y-3 text-muted-foreground list-disc list-inside mb-8">
                    {model.details.map((detail, i) => <li key={i}>{detail}</li>)}
                  </ul>
                   <p className="text-sm text-accent font-semibold mb-2">Projected ROI: Varies (Details in Brochure)</p>
                   <p className="text-sm text-accent font-semibold">Minimum Investment: [Placeholder]</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
          </ScrollFadeIn>
          
          <ScrollFadeIn className="mt-16 text-center">
             <h3 className="font-headline text-2xl font-semibold mb-6 text-primary">Investor Categories</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                <div className="bg-card p-6 rounded-lg shadow-md">
                    <Users className="h-10 w-10 text-accent mx-auto mb-3"/>
                    <h4 className="font-headline text-xl font-medium mb-2">Institutional Investors</h4>
                    <p className="text-sm text-muted-foreground">Opportunities for venture capital, private equity, banks, and development financial institutions.</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                    <Briefcase className="h-10 w-10 text-accent mx-auto mb-3"/>
                    <h4 className="font-headline text-xl font-medium mb-2">Individual Investors</h4>
                    <p className="text-sm text-muted-foreground">Pathways for high-net-worth individuals, expatriates, and philanthropists looking for impact investments.</p>
                </div>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 text-primary">
            Project Timeline & Launch Phases
          </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
          <div className="relative max-w-4xl mx-auto">
            {/* Simplified Timeline Graphic Placeholder */}
            <div className="border-l-4 border-primary pl-8 py-4 space-y-12">
              {["Phase 1: Groundbreaking & Infrastructure (Q4 2024)", "Phase 2: Hospital Core Construction (2025-2026)", "Phase 3: University Buildings & Specialized Centers (2026-2027)", "Grand Launch & Full Operations (Q1 2028)"].map((item, index) => (
                <div key={index} className="relative pl-4">
                  <div className="absolute -left-[calc(2rem+2px)] top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
                  <h4 className="font-semibold text-lg text-primary">{item.split(":")[0]}</h4>
                  <p className="text-muted-foreground">{item.split(":")[1]?.trim()}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">(Detailed timeline available in the investor brochure)</p>
          </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            Ready to Invest in the Future of Healthcare?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
            Download our comprehensive investor brochure for detailed financial projections, risk analysis, and partnership terms.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg shadow-xl transition-all hover:scale-105">
            <Link href="/brochure.pdf">
              <Download className="mr-2 h-6 w-6" />
              Download Investor Brochure
            </Link>
          </Button>
          <p className="mt-6 text-sm opacity-80">
            Or, <Link href="/contact?reason=investment_inquiry" className="underline hover:opacity-100">contact our investment team</Link> for a personalized consultation.
          </p>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
