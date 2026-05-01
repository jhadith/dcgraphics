export function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full border border-line bg-white px-3 py-1 text-sm font-semibold text-graphite">
          {item}
        </span>
      ))}
    </div>
  );
}
