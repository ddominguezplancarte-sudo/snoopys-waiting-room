import { useState } from "react";
import { questionCategories } from "../data/questions";

export default function Questions() {
  const [selected, setSelected] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");

  function toggle(catId, question) {
    const key = `${catId}::${question}`;
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function isSelected(catId, question) {
    return !!selected[`${catId}::${question}`];
  }

  function selectAll(catId) {
    const cat = questionCategories.find((c) => c.id === catId);
    if (!cat) return;
    const updates = {};
    cat.questions.forEach((q) => (updates[`${catId}::${q}`] = true));
    setSelected((prev) => ({ ...prev, ...updates }));
  }

  const selectedList = Object.entries(selected)
    .filter(([, v]) => v)
    .map(([key]) => {
      const [catId, question] = key.split("::");
      const cat = questionCategories.find((c) => c.id === catId);
      return { category: cat?.label || catId, question };
    });

  function handlePrint() {
    window.print();
  }

  const visibleCategories =
    activeCategory === "all"
      ? questionCategories
      : questionCategories.filter((c) => c.id === activeCategory);

  return (
    <div className="page page-questions">
      <div className="page-header">
        <h1 className="page-title">📝 Questions to Ask</h1>
        <p className="page-subtitle">
          Check the ones that feel right. Print or save before Tuesday.
        </p>
      </div>

      {/* Category Filter */}
      <div className="category-tabs">
        <button
          className={`tab ${activeCategory === "all" ? "active" : ""}`}
          onClick={() => setActiveCategory("all")}
        >
          All
        </button>
        {questionCategories.map((cat) => (
          <button
            key={cat.id}
            className={`tab ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      {/* Questions */}
      <div className="questions-layout">
        <div className="questions-list">
          {visibleCategories.map((cat) => (
            <section key={cat.id} className="question-section">
              <div className="question-section-header">
                <h2 className="question-category-title">
                  {cat.emoji} {cat.label}
                </h2>
                <button
                  className="btn-tiny"
                  onClick={() => selectAll(cat.id)}
                >
                  Select all
                </button>
              </div>
              <div className="question-items">
                {cat.questions.map((q) => (
                  <label
                    key={q}
                    className={`question-item ${isSelected(cat.id, q) ? "selected" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected(cat.id, q)}
                      onChange={() => toggle(cat.id, q)}
                      className="question-checkbox"
                    />
                    <span className="question-text">{q}</span>
                  </label>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Selected sidebar */}
        {selectedList.length > 0 && (
          <aside className="questions-sidebar">
            <div className="sidebar-header">
              <h3 className="sidebar-title">Your Questions ({selectedList.length})</h3>
              <button className="btn-soft print-btn" onClick={handlePrint}>
                🖨️ Print
              </button>
            </div>
            <div className="sidebar-list">
              {selectedList.map(({ category, question }) => (
                <div key={question} className="sidebar-item">
                  <span className="sidebar-category">{category}</span>
                  <p className="sidebar-question">{question}</p>
                </div>
              ))}
            </div>
            <p className="sidebar-note">
              💛 It's okay if you don't get through all of them. Prioritize what feels most urgent.
            </p>
          </aside>
        )}
      </div>

      {selectedList.length === 0 && (
        <div className="empty-state">
          <p>Check any questions above to build your list. 📋</p>
        </div>
      )}
    </div>
  );
}
