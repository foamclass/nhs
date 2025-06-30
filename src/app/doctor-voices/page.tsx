
import PageHeader from "@/components/sections/page-header";
import VideoEmbed from "@/components/common/video-embed";
import { Button } from "@/components/ui/button";
import { ScrollFadeIn } from "@/components/common/scroll-fade-in";
import { Stethoscope, Mic, Video, Filter, Heart, Users, Baby } from "lucide-react"; // Users for Women, Baby for Children

const doctorVideos = [
  { id: "dv1", title: "Ask a Doctor: Managing High Blood Pressure", series: "Ask a Doctor", topic: "Heart Health", youtubeVideoId: "rokGy0huYEA" },
  { id: "dv2", title: "Health Myths Busted: Cholesterol Facts", series: "Health Myths Busted", topic: "Heart Health", youtubeVideoId: "DLzxrzFCyOs" },
  { id: "dv3", title: "Women's Wellness: Importance of Regular Checkups", series: "Ask a Doctor", topic: "Women's Health", youtubeVideoId: "dQw4w9WgXcQ" },
  { id: "dv4", title: "Childhood Immunizations: What Parents Need to Know", series: "Ask a Doctor", topic: "Children's Health", youtubeVideoId: "6JnGBs88sL0" },
  { id: "dv5", title: "Myth vs. Fact: Antibiotic Resistance", series: "Health Myths Busted", topic: "General Health", youtubeVideoId: "QH2-TGUlwu4" },
  { id: "dv6", title: "Mental Health Matters: Seeking Help", series: "Ask a Doctor", topic: "Mental Health", youtubeVideoId: "G0LIO138Z-A" },
];

const topics = [
  { name: "All Topics", icon: Filter },
  { name: "Heart Health", icon: Heart },
  { name: "Women's Health", icon: Users },
  { name: "Children's Health", icon: Baby },
  { name: "General Health", icon: Stethoscope },
  { name: "Mental Health", icon: Mic },
];


export default function DoctorVoicesPage() {
  // TODO: Implement filtering logic
  // const [activeFilter, setActiveFilter] = useState("All Topics");
  // const filteredVideos = doctorVideos.filter(video => activeFilter === "All Topics" || video.topic === activeFilter);

  return (
    <>
      <PageHeader
        title="Doctor Voices"
        subtitle="Insights, advice, and myth-busting from our team of experienced medical professionals. Empowering you with knowledge for a healthier life."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-4 text-primary flex items-center justify-center gap-3">
            <Video className="h-10 w-10" /> Video Series
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore our series like "Ask a Doctor" and "Health Myths Busted." Click a topic below to filter videos.
          </p>
          </ScrollFadeIn>
          
          <ScrollFadeIn className="flex flex-wrap justify-center gap-3 mb-12">
            {topics.map(topic => (
              <Button 
                key={topic.name} 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10 data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                // data-active={activeFilter === topic.name} // For future filter implementation
                // onClick={() => setActiveFilter(topic.name)}
              >
                <topic.icon className="mr-2 h-5 w-5" /> {topic.name}
              </Button>
            ))}
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctorVideos.map((video, index) => (
              <ScrollFadeIn key={video.id} className="bg-card rounded-xl shadow-lg overflow-hidden group" delay={`${index * 100}ms`}>
                <div className="relative">
                  <VideoEmbed youtubeVideoId={video.youtubeVideoId} title={video.title} />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {/* Play icon or something on hover - video embed already has this */}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs text-accent font-semibold mb-1 block">{video.series} - {video.topic}</span>
                  <h3 className="font-headline text-xl font-semibold mb-2">{video.title}</h3>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
