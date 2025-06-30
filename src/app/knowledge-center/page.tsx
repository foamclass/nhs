import PageHeader from "@/components/sections/page-header";
import VideoEmbed from "@/components/common/video-embed";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollFadeIn } from "@/components/common/scroll-fade-in";
import { Lightbulb, BookOpenText, Newspaper, Filter } from "lucide-react";

const healthArticles = [
  { id: 1, title: "Understanding Common Heart Conditions", excerpt: "An overview of prevalent heart diseases and their early symptoms...", date: "September 5, 2024", category: "Heart Health", slug: "understanding-heart-conditions", image: "https://placehold.co/400x250.png?text=Heart+Article", aiHint: "heart health medical" },
  { id: 2, title: "Preventive Healthcare for Women", excerpt: "Key screenings and lifestyle choices for women's long-term health...", date: "September 2, 2024", category: "Women's Health", slug: "preventive-care-women", image: "https://placehold.co/400x250.png?text=Women+Health", aiHint: "women health checkup" },
  { id: 3, title: "Childhood Nutrition: Building a Strong Foundation", excerpt: "Essential nutrients and dietary guidelines for growing children...", date: "August 28, 2024", category: "Children's Health", slug: "childhood-nutrition", image: "https://placehold.co/400x250.png?text=Child+Nutrition", aiHint: "child eating vegetables" },
];

const kpkNews = [
    { title: "KPK Launches New Vaccination Drive", source: "KPK Health Dept.", date: "Sep 3, 2024", image: "https://placehold.co/300x200.png?text=Vaccination+Drive", aiHint: "vaccination public health" },
    { title: "Awareness Campaign for Maternal Health", source: "Local NGO", date: "Aug 30, 2024", image: "https://placehold.co/300x200.png?text=Maternal+Health", aiHint: "mother child health" },
    { title: "Updates on Polio Eradication Efforts", source: "WHO Pakistan", date: "Aug 25, 2024", image: "https://placehold.co/300x200.png?text=Polio+Eradication", aiHint: "health worker polio" },
];

export default function KnowledgeCenterPage() {
  return (
    <>
      <PageHeader
        title="Knowledge Center"
        subtitle="Empowering our community with valuable health information, insights from experts, and updates on healthcare in Khyber Pakhtunkhwa."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4 text-primary flex items-center justify-center gap-3">
            <Lightbulb className="h-10 w-10" /> Doctor Interviews & Insights
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Hear directly from leading medical professionals on various health topics. (Filter by topic coming soon)
          </p>
          </ScrollFadeIn>
          {/* Placeholder for filter buttons */}
          <ScrollFadeIn className="flex justify-center gap-3 mb-8">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent/10"><Filter className="mr-2 h-4 w-4"/>All Topics</Button>
            <Button variant="ghost" className="text-muted-foreground hover:bg-primary/10">Heart Health</Button>
            <Button variant="ghost" className="text-muted-foreground hover:bg-primary/10">Women's Health</Button>
            <Button variant="ghost" className="text-muted-foreground hover:bg-primary/10">Children's Health</Button>
          </ScrollFadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Dr. Ayesha on Heart Disease Prevention", youtubeVideoId: "rokGy0huYEA" , aiHint: "doctor interview cardiology"},
              { title: "Understanding Diabetes with Dr. Usman", youtubeVideoId: "DLzxrzFCyOs" , aiHint: "doctor interview endocrinology"}
            ].map((video, index) => (
              <ScrollFadeIn key={video.title} className="bg-card rounded-xl shadow-lg overflow-hidden" delay={`${index * 100}ms`}>
                <VideoEmbed youtubeVideoId={video.youtubeVideoId} title={video.title} />
                 <div className="p-6">
                  <h3 className="font-headline text-xl font-semibold">{video.title}</h3>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/doctor-voices">More from Doctor Voices &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <BookOpenText className="h-10 w-10" /> Health Education Articles
          </h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthArticles.map((article, index) => (
              <ScrollFadeIn key={article.id} className="bg-card rounded-xl shadow-lg overflow-hidden flex flex-col" delay={`${index * 100}ms`}>
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                  data-ai-hint={article.aiHint}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs text-accent font-semibold mb-1">{article.category}</span>
                  <h3 className="font-headline text-xl font-semibold mb-2 hover:text-primary transition-colors">
                    <Link href={`/knowledge-center/articles/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 flex-grow">{article.excerpt}</p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground mt-auto">
                    <span>{article.date}</span>
                    <Link href={`/knowledge-center/articles/${article.slug}`} className="text-primary hover:underline">Read More &rarr;</Link>
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <Newspaper className="h-10 w-10" /> KPK Health News Carousel
          </h2>
          </ScrollFadeIn>
          {/* Placeholder for Carousel */}
          <ScrollFadeIn className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {kpkNews.map((newsItem, index) => (
                 <div key={index} className="bg-card rounded-lg shadow-md p-4 flex items-start gap-4">
                    <Image src={newsItem.image} alt={newsItem.title} width={100} height={75} className="rounded object-cover" data-ai-hint={newsItem.aiHint}/>
                    <div>
                        <h4 className="text-sm font-semibold mb-1 hover:text-primary"><Link href="#">{newsItem.title}</Link></h4>
                        <p className="text-xs text-muted-foreground">{newsItem.source} - {newsItem.date}</p>
                    </div>
                 </div>
            ))}
          </ScrollFadeIn>
          <p className="text-center mt-8 text-muted-foreground">(Interactive news carousel coming soon)</p>
        </div>
      </section>
    </>
  );
}

// TODO: Create a dynamic route for articles: src/app/knowledge-center/articles/[slug]/page.tsx
