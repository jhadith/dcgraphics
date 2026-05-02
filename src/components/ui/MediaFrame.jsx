export function MediaFrame({ media, className = "", fit = "cover" }) {
  if (!media) return null;

  const objectFit = fit === "contain" ? "object-contain" : "object-cover";
  const sharedClasses = `h-full w-full ${objectFit}`;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/45 bg-white/55 p-2 shadow-[0_18px_55px_rgba(17,19,24,0.12)] backdrop-blur-2xl backdrop-saturate-150 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 scale-110 bg-[linear-gradient(135deg,rgba(255,255,255,0.62)_0%,rgba(244,214,12,0.18)_52%,rgba(255,255,255,0.32)_100%)] blur-2xl"
        aria-hidden="true"
      />
      <div className="relative z-10 h-full overflow-hidden rounded-xl bg-white/45">
        {media.type === "video" ? (
          <video className={sharedClasses} src={media.src} aria-label={media.alt} muted loop playsInline autoPlay />
        ) : (
          <img className={sharedClasses} src={media.src} alt={media.alt} loading="lazy" />
        )}
      </div>
    </div>
  );
}
