import { useState, useEffect } from "react";

// Snoopy & Peanuts GIF IDs from Giphy (public embeds)
const gifs = [
  { id: "l0MYt5jPR6QX5pnqM", label: "Snoopy Dancing 💃" },
  { id: "l3q2K5jinAlChoCLS", label: "Snoopy Reading 📚" },
  { id: "d2YVk2ZRuQuqvVlu", label: "Snoopy Happy 🌻" },
  { id: "xT5LMzIK1AdZJ4cYW8", label: "Woodstock 🐤" },
  { id: "l0MYEqEzwMWFCg8rm", label: "Snoopy Sleeping 💤" },
  { id: "3oriO04qxVReXCFuhy", label: "Snoopy Flying Ace ✈️" },
];

export default function GifCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % gifs.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [autoplay]);

  function prev() {
    setAutoplay(false);
    setCurrent((i) => (i - 1 + gifs.length) % gifs.length);
  }

  function next() {
    setAutoplay(false);
    setCurrent((i) => (i + 1) % gifs.length);
  }

  const gif = gifs[current];

  return (
    <div className="gif-carousel">
      <div className="gif-label">{gif.label}</div>
      <div className="gif-frame">
        <iframe
          src={`https://giphy.com/embed/${gif.id}`}
          width="240"
          height="240"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          title={gif.label}
        />
      </div>
      <div className="gif-controls">
        <button className="btn-icon" onClick={prev}>‹</button>
        <div className="gif-dots">
          {gifs.map((_, i) => (
            <button
              key={i}
              className={`gif-dot ${i === current ? "active" : ""}`}
              onClick={() => { setAutoplay(false); setCurrent(i); }}
            />
          ))}
        </div>
        <button className="btn-icon" onClick={next}>›</button>
      </div>
      <p className="gif-credit">via Giphy 🐾</p>
    </div>
  );
}
