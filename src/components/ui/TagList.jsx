export function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full bg-ink/[0.07] px-4 py-2 text-sm font-bold text-graphite">
          {item}
        </span>
      ))}
    </div>
  );
}
