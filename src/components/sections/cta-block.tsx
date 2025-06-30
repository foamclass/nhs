import { DollarSign, Activity, Rocket } from "lucide-react";
import { IconWithText } from "@/components/common/icon-with-text";
import { ScrollFadeIn } from "../common/scroll-fade-in";

export default function CtaBlock() {
  const features = [
    {
      icon: DollarSign,
      title: "Strong ROI Potential",
      description: "Benefit from a growing healthcare market and diverse revenue streams including specialized treatments and medical tourism.",
      animationDelay: "0ms",
    },
    {
      icon: Activity, // Representing health impact
      title: "Transformative Health Impact",
      description: "Contribute to elevating healthcare standards in KPK, providing accessible, quality medical services to millions.",
      animationDelay: "200ms",
    },
    {
      icon: Rocket, // Representing future potential
      title: "Future-Proof Investment",
      description: "Invest in a state-of-the-art university hospital, fostering medical innovation, research, and education for generations.",
      animationDelay: "400ms",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
            Why Invest in This Project?
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Noble Health Services offers a unique opportunity to achieve significant financial returns while making a lasting positive impact on society.
          </p>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <IconWithText
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              animationDelay={feature.animationDelay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
