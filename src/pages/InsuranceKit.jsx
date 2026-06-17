import { useState, useEffect } from "react";
import { insuranceChecklist, insuranceQuestions, financialResources } from "../data/insurance";

const STORAGE_KEY = "insurance-checklist";

export default function InsuranceKit() {
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

  const completedCount = Object.values(checked).filter(Boolean).length;
  const total = insuranceChecklist.length;

  return (
    <div className="page page-insurance">
      <div className="page-header">
        <h1 className="page-title">🎒 Insurance Kit</h1>
        <p className="page-subtitle">
          Insurance navigation is genuinely confusing. This is your checklist.
        </p>
      </div>

      {/* Coverage Checklist */}
      <section className="section">
        <div className="checklist-header">
          <h2 className="section-title">Coverage Checklist</h2>
          <div className="checklist-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${(completedCount / total) * 100}%` }}
              />
            </div>
            <span className="progress-label">{completedCount} / {total} confirmed</span>
          </div>
        </div>

        <p className="section-note">
          Call the member services number on the back of your insurance card to verify each item.
        </p>

        <div className="checklist">
          {insuranceChecklist.map(({ id, label }) => (
            <label key={id} className={`checklist-item ${checked[id] ? "checked" : ""}`}>
              <input
                type="checkbox"
                checked={!!checked[id]}
                onChange={() => toggle(id)}
                className="checklist-checkbox"
              />
              <span className="checklist-label">{label}</span>
              {checked[id] && <span className="checklist-check">✓</span>}
            </label>
          ))}
        </div>
      </section>

      {/* Questions to ask */}
      <section className="section">
        <h2 className="section-title">Questions to Ask Your Insurance</h2>
        <p className="section-note">
          When you call, have your member ID ready and ask to speak with a benefits specialist.
        </p>
        <div className="insurance-questions">
          {insuranceQuestions.map((q) => (
            <div key={q} className="insurance-question">
              <span className="question-bullet">→</span>
              <p>{q}</p>
            </div>
          ))}
        </div>
        <div className="tip-callout">
          <strong>💡 Pro tip:</strong> Write down the name of the rep you speak with,
          the date, and a reference number for the call. This matters if anything is later
          disputed.
        </div>
      </section>

      {/* Financial Resources */}
      <section className="section">
        <h2 className="section-title">Financial Resources</h2>
        <p className="section-note">
          You don't have to figure out the cost side alone. These organizations exist for exactly this.
        </p>
        <div className="resources-grid">
          {financialResources.map(({ name, description, url, emoji }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <span className="resource-emoji">{emoji}</span>
              <div className="resource-content">
                <div className="resource-name">{name}</div>
                <div className="resource-desc">{description}</div>
              </div>
              <span className="resource-arrow">→</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
