import { useState, useEffect } from "react";
import Countdown from "../components/Countdown";

const CHECKLIST_ITEMS = [
  { id: "insurance", label: "Insurance Card", emoji: "💳" },
  { id: "medications", label: "Medication List", emoji: "💊" },
  { id: "support", label: "Support Person Arranged", emoji: "🤝" },
  { id: "questions", label: "Questions Printed or Saved", emoji: "📝" },
  { id: "notebook", label: "Notebook or App to Take Notes", emoji: "📓" },
  { id: "water", label: "Water Bottle", emoji: "💧" },
  { id: "snack", label: "Snack (appointments can run long)", emoji: "🍎" },
  { id: "id", label: "Photo ID", emoji: "🪪" },
  { id: "referral", label: "Referral (if required by insurance)", emoji: "📄" },
  { id: "records", label: "Biopsy / Pathology Report Copies", emoji: "📋" },
];

const STORAGE_KEY = "tuesday-checklist";

export default function TuesdayVisit() {
  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(checked));
  }, [checked]);

  function toggle(id) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function clearAll() {
    setChecked({});
  }

  const completedCount = Object.values(checked).filter(Boolean).length;
  const total = CHECKLIST_ITEMS.length;
  const allDone = completedCount === total;

  return (
    <div className="page page-tuesday">
      <div className="page-header">
        <h1 className="page-title">📅 Appointment Prep</h1>
        <p className="page-subtitle">Let's get you ready for Tuesday.</p>
      </div>

      {/* Countdown */}
      <section className="section">
        <Countdown />
      </section>

      {/* Checklist */}
      <section className="section">
        <div className="checklist-header">
          <h2 className="section-title">What to Bring</h2>
          <div className="checklist-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(completedCount / total) * 100}%` }}
              />
            </div>
            <span className="progress-label">
              {completedCount} / {total}
            </span>
          </div>
        </div>

        {allDone && (
          <div className="checklist-complete">
            🌻 You're ready. That's something to feel good about.
          </div>
        )}

        <div className="checklist">
          {CHECKLIST_ITEMS.map(({ id, label, emoji }) => (
            <label key={id} className={`checklist-item ${checked[id] ? "checked" : ""}`}>
              <input
                type="checkbox"
                checked={!!checked[id]}
                onChange={() => toggle(id)}
                className="checklist-checkbox"
              />
              <span className="checklist-emoji">{emoji}</span>
              <span className="checklist-label">{label}</span>
              {checked[id] && <span className="checklist-check">✓</span>}
            </label>
          ))}
        </div>

        <button className="btn-ghost" onClick={clearAll}>
          Reset checklist
        </button>
      </section>

      {/* Day-of tips */}
      <section className="section">
        <h2 className="section-title">Day-Of Reminders</h2>
        <div className="tips-grid">
          {[
            { emoji: "⏰", tip: "Arrive 15–20 min early for paperwork." },
            { emoji: "🧘", tip: "It's okay to feel nervous. That's normal." },
            { emoji: "📝", tip: "Take notes, or ask your support person to." },
            { emoji: "🙋", tip: "No question is too small or too basic." },
            { emoji: "🔁", tip: "Ask them to repeat or rephrase anything confusing." },
            { emoji: "📞", tip: "Ask who to call with follow-up questions." },
          ].map(({ emoji, tip }) => (
            <div key={tip} className="tip-card">
              <span className="tip-emoji">{emoji}</span>
              <p className="tip-text">{tip}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
