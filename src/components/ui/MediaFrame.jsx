export function MediaFrame({ media, className = "" }) {
  if (!media) return null;

  const sharedClasses = "h-full w-full object-cover";

  return (
    <div className={`overflow-hidden rounded-lg bg-ink shadow-soft ${className}`}>
      {media.type === "video" ? (
        <video className={sharedClasses} src={media.src} aria-label={media.alt} muted loop playsInline autoPlay />
      ) : (
        <img className={sharedClasses} src={media.src} alt={media.alt} loading="lazy" />
      )}
    </div>
  );
}
