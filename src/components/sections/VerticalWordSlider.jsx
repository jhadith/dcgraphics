const words = ["GRAPH", "SIGNS", "WRAPS", "BRAND", "GRAPH"];

export function VerticalWordSlider() {
  return (
    <span className="vertical-word-slider" aria-label="GRAPH, SIGNS, WRAPS, BRAND">
      <span className="vertical-word-track" aria-hidden="true">
        {words.map((word, index) => (
          <span className="vertical-word" key={`${word}-${index}`}>
            {word}
          </span>
        ))}
      </span>
    </span>
  );
}
