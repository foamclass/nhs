import Image from "next/image";
import PageHeader from "@/components/sections/page-header";
import VideoEmbed from "@/components/common/video-embed";
import { ScrollFadeIn } from "@/components/common/scroll-fade-in";
import { CalendarDays, Camera, ListChecks, Construction, CheckCircle } from "lucide-react";

const progressVideos = [
  { id: "vid1", title: "Drone Footage - August 2024", youtubeVideoId: "_l1xkfnk9yY", description: "Monthly aerial view of site development." },
  { id: "vid2", title: "Site Clearing - July 2024", youtubeVideoId: "9-ySAjAl2sU", description: "Initial groundwork and site preparation activities." },
  { id: "vid3", title: "Foundation Work Update - September 2024", youtubeVideoId: "w_38i021erw", description: "Progress on the main hospital building foundation." },
];

const milestones = [
  { date: "June 2024", event: "Project Approval & Land Acquisition Finalized", status: "Completed", icon: CheckCircle },
  { date: "July 2024", event: "Site Clearing and Preparation Commenced", status: "Completed", icon: CheckCircle },
  { date: "Q4 2024", event: "Groundbreaking Ceremony & Phase 1 Infrastructure Start", status: "Upcoming", icon: CalendarDays },
  { date: "Q2 2025", event: "Completion of Foundation Works for Main Hospital", status: "Upcoming", icon: CalendarDays },
  { date: "Q4 2025", event: "Structural Framework of Hospital Block A", status: "Upcoming", icon: CalendarDays },
  { date: "2026", event: "Exterior Cladding and University Block Foundation", status: "Planned", icon: CalendarDays },
  { date: "2027", event: "Interior Works, Equipment Installation", status: "Planned", icon: CalendarDays },
  { date: "Q1 2028", event: "Projected Soft Launch", status: "Target", icon: CalendarDays },
];

export default function ProgressUpdatesPage() {
  return (
    <>
      <PageHeader
        title="Project Progress Updates"
        subtitle="Follow the journey of Noble Health Services from vision to reality. Stay informed with our latest developments, milestones, and upcoming work."
      />

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <Camera className="h-10 w-10" /> Video & Photo Gallery
          </h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {progressVideos.map((video, index) => (
              <ScrollFadeIn key={video.id} className="bg-card rounded-xl shadow-lg overflow-hidden" delay={`${index * 100}ms`}>
                <VideoEmbed youtubeVideoId={video.youtubeVideoId} title={video.title} />
                <div className="p-6">
                  <h3 className="font-headline text-xl font-semibold mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </ScrollFadeIn>
            ))}
             {/* Placeholder for photos */}
            {[1,2,3].map(i => (
                 <ScrollFadeIn key={`photo-${i}`} className="bg-card rounded-xl shadow-lg overflow-hidden" delay={`${(progressVideos.length + i -1) * 100}ms`}>
                    <Image src={`https://placehold.co/600x400.png?text=Site+Photo+${i}`} alt={`Site Photo ${i}`} width={600} height={400} className="w-full h-auto object-cover" data-ai-hint="construction site progress"/>
                    <div className="p-6">
                        <h3 className="font-headline text-xl font-semibold mb-2">Construction Update - Phase {i}</h3>
                        <p className="text-sm text-muted-foreground">Key developments from the current construction phase on site.</p>
                    </div>
                </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary" id="timeline">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <CalendarDays className="h-10 w-10" /> Interactive Timeline
          </h2>
          </ScrollFadeIn>
          <ScrollFadeIn className="relative max-w-3xl mx-auto">
            <div className="border-l-4 border-primary pl-8 py-4 space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-6 group">
                  <div className="absolute -left-[calc(2rem+10px)] top-1 h-6 w-6 rounded-full bg-primary border-4 border-secondary flex items-center justify-center transition-transform group-hover:scale-125">
                     <milestone.icon className={`h-3 w-3 ${milestone.status === 'Completed' ? 'text-green-300' : 'text-secondary'}`} />
                  </div>
                  <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full mb-2 inline-block ${
                      milestone.status === "Completed" ? "bg-green-100 text-green-700" : 
                      milestone.status === "Upcoming" ? "bg-yellow-100 text-yellow-700" : 
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {milestone.status}
                    </span>
                    <h4 className="font-headline text-lg font-semibold text-primary mb-1">{milestone.event}</h4>
                    <p className="text-sm text-muted-foreground">{milestone.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollFadeIn>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-12 text-primary flex items-center justify-center gap-3">
            <ListChecks className="h-10 w-10" /> Roadmap of Upcoming Work
          </h2>
          </ScrollFadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Detailed Design Finalization (Hospital & University Blocks)", "Procurement of Medical Equipment & Technology", "Hiring Key Medical and Administrative Staff", "Community Engagement & Outreach Programs", "Establishing Academic Partnerships", "Finalizing Operational Frameworks"].map((task, index) => (
              <ScrollFadeIn key={task} className="bg-card p-6 rounded-xl shadow-lg" delay={`${index * 100}ms`}>
                <Construction className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-headline text-xl font-semibold mb-2 text-primary">Next Up: Q{Math.floor(index/2)+1} Focus</h3>
                <p className="text-muted-foreground">{task}</p>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
