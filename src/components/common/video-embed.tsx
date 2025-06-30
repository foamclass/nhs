interface VideoEmbedProps {
  youtubeVideoId: string;
  title: string;
  className?: string;
}

export default function VideoEmbed({ youtubeVideoId, title, className }: VideoEmbedProps) {
  return (
    <div className={`aspect-video overflow-hidden ${className}`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=0&modestbranding=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="border-0"
      ></iframe>
    </div>
  );
}
