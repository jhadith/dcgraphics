export function SectionHeader({ eyebrow, title, text, align = "left" }) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-graphite">{text}</p> : null}
    </div>
  );
}
