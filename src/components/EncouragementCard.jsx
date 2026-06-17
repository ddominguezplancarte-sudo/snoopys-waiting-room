import { useState } from "react";
import { encouragements } from "../data/encouragement";

export default function EncouragementCard() {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * encouragements.length)
  );
  const [fading, setFading] = useState(false);

  function next() {
    setFading(true);
    setTimeout(() => {
      setIndex((i) => (i + 1) % encouragements.length);
      setFading(false);
    }, 300);
  }

  const card = encouragements[index];

  return (
    <div className="encouragement-card">
      <div className="encouragement-icon">🌻</div>
      <blockquote
        className="encouragement-text"
        style={{ opacity: fading ? 0 : 1, transition: "opacity 0.3s ease" }}
      >
        "{card.message}"
      </blockquote>
      <div className="encouragement-author">{card.author}</div>
      <button className="btn-soft" onClick={next}>
        Another one ✨
      </button>
    </div>
  );
}
