import { useEffect, useState } from "react";

export function TopicImageSlider({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, 3200);

    return () => window.clearInterval(intervalId);
  }, [items.length]);

  const activeItem = items[activeIndex];

  if (!activeItem) return null;

  return (
    <article className="overflow-hidden rounded-lg border border-line bg-white shadow-[0_12px_34px_rgba(17,19,24,0.08)]">
      <div className="relative h-full min-h-[180px]">
        <img
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          src={activeItem.src}
          alt={activeItem.alt}
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/78 via-ink/28 to-transparent p-5 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-accent">Featured work</p>
          <h3 className="mt-2 font-display text-2xl font-bold">{activeItem.label}</h3>
        </div>
        <div className="absolute right-4 top-4 flex gap-1.5">
          {items.map((item, index) => (
            <span
              key={item.label}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
