export function SectionHeader({ eyebrow, title, text, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-4xl ${alignment}`}>
      {eyebrow ? <p className="text-xs font-black uppercase tracking-[0.22em] text-accent sm:text-sm">{eyebrow}</p> : null}
      <h2 className="mt-4 font-display text-4xl font-black leading-[1.04] text-ink sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 max-w-2xl text-lg leading-8 text-graphite/78">{text}</p> : null}
    </div>
  );
}
