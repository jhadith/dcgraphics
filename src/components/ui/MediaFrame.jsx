export function MediaFrame({ media, className = "", fit = "cover" }) {
  if (!media) return null;

  const objectFit = fit === "contain" ? "object-contain" : "object-cover";
  const sharedClasses = `h-full w-full ${objectFit}`;

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
