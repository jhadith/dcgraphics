import { useEffect, useState } from "react";

export function HeroProductSlider({ items, className = "" }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, [items.length]);

  if (!items.length) return null;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/45 bg-white/55 p-2 shadow-[0_18px_55px_rgba(17,19,24,0.12)] backdrop-blur-2xl backdrop-saturate-150 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 scale-110 bg-[linear-gradient(135deg,rgba(255,255,255,0.62)_0%,rgba(244,214,12,0.18)_52%,rgba(255,255,255,0.32)_100%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="relative z-10 h-full overflow-hidden rounded-xl bg-white/45">
        {items.map((item, index) => (
          <img
            key={item.src}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
              index === activeIndex
                ? "translate-y-0 opacity-100"
                : index < activeIndex
                  ? "-translate-y-full opacity-0"
                  : "translate-y-full opacity-0"
            }`}
            src={item.src}
            alt={item.alt}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/72 via-ink/22 to-transparent p-5 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Products</p>
          <h2 className="mt-2 font-display text-2xl font-bold">{items[activeIndex].label}</h2>
        </div>
      </div>

      <div className="absolute right-5 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-2">
        {items.map((item, index) => (
          <button
            key={item.src}
            className={`h-7 w-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-accent" : "bg-white/75"
            }`}
            type="button"
            aria-label={`Show ${item.label}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
