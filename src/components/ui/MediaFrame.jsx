export function MediaFrame({ media, className = "", fit = "cover" }) {
  if (!media) return null;

  const objectFit = fit === "contain" ? "object-contain" : "object-cover";
  const sharedClasses = `h-full w-full ${objectFit}`;

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-ink/5 shadow-[0_18px_44px_rgba(17,19,24,0.10)] ${className}`}
    >
      <div className="relative z-10 h-full overflow-hidden rounded-xl bg-ink/5">
        {media.type === "video" ? (
          <video className={sharedClasses} src={media.src} aria-label={media.alt} muted loop playsInline autoPlay />
        ) : (
          <img className={sharedClasses} src={media.src} alt={media.alt} loading="lazy" />
        )}
      </div>
    </div>
  );
}
