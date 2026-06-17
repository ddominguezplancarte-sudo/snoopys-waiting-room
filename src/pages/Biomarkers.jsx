import { useState } from "react";
import { biomarkers } from "../data/biomarkers";

const signalColors = {
  green: { bg: "#3d4f3d", border: "#8ec07c", label: "#b8bb26" },
  yellow: { bg: "#4d4520", border: "#d79921", label: "#fabd2f" },
  blue: { bg: "#2d3d45", border: "#83a598", label: "#8ec07c" },
};

export default function Biomarkers() {
  const [flipped, setFlipped] = useState({});

  function flip(id) {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="page page-biomarkers">
      <div className="page-header">
        <h1 className="page-title">🧬 Biomarker Explorer</h1>
        <p className="page-subtitle">
          Tap any card to learn what it means — in plain language, no medical degree required.
        </p>
      </div>

      <div className="biomarker-intro">
        <p>
          After a biopsy, your pathology report will include several biomarker results.
          These aren't scary — they're <strong>information</strong>, and each one helps
          your care team find the most targeted treatment for you specifically.
        </p>
      </div>

      <div className="biomarker-grid">
        {biomarkers.map((b) => {
          const isFlipped = flipped[b.id];
          const signal = signalColors[b.signal];

          return (
            <div
              key={b.id}
              className={`biomarker-card ${isFlipped ? "is-flipped" : ""}`}
              onClick={() => flip(b.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && flip(b.id)}
              style={{ "--signal-border": signal.border, "--signal-bg": signal.bg }}
            >
              {!isFlipped ? (
                <div className="card-front">
                  <div className="card-emoji">{b.emoji}</div>
                  <div className="card-name">{b.name}</div>
                  <div className="card-fullname">{b.fullName}</div>
                  <div className="card-tagline">{b.tagline}</div>
                  <div
                    className="card-signal"
                    style={{ color: signal.label, borderColor: signal.border }}
                  >
                    {b.signalLabel}
                  </div>
                  <div className="card-hint">Tap to learn more →</div>
                </div>
              ) : (
                <div className="card-back">
                  <div className="card-back-name">{b.name}</div>
                  <div className="card-section">
                    <h4>What it is</h4>
                    <p>{b.explanation}</p>
                  </div>
                  <div className="card-section">
                    <h4>Why it matters</h4>
                    <p>{b.whyItMatters}</p>
                  </div>
                  <div className="card-section">
                    <h4>Next steps</h4>
                    <p>{b.nextSteps}</p>
                  </div>
                  <div className="card-hint">Tap to flip back ←</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="biomarker-footer">
        <p>
          💛 Remember: no single biomarker tells the whole story. Your oncologist reads
          all of these together to build a complete picture and a plan that's right for you.
        </p>
        <a
          href="https://www.breastcancer.org/pathology-report"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-soft"
        >
          How to read a pathology report →
        </a>
      </div>
    </div>
  );
}
