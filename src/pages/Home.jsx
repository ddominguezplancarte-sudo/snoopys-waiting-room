import { Link } from "react-router-dom";
import EncouragementCard from "../components/EncouragementCard";
import GifCarousel from "../components/GifCarousel";
import Countdown from "../components/Countdown";

const journeySteps = [
  { id: 1, label: "Biopsy", status: "done", emoji: "✓" },
  { id: 2, label: "Oncology Appointment", status: "current", emoji: "⏳" },
  { id: 3, label: "Additional Testing", status: "upcoming", emoji: "○" },
  { id: 4, label: "Treatment Planning", status: "upcoming", emoji: "○" },
  { id: 5, label: "Recovery", status: "upcoming", emoji: "○" },
];

const quickLinks = [
  { to: "/tuesday", label: "Appointment Prep", emoji: "📅", desc: "Checklist + countdown" },
  { to: "/questions", label: "Questions to Ask", emoji: "📝", desc: "For your oncologist" },
  { to: "/biomarkers", label: "Biomarker Explorer", emoji: "🧬", desc: "What your results mean" },
  { to: "/insurance", label: "Insurance Kit", emoji: "🎒", desc: "Coverage + resources" },
];

export default function Home() {
  return (
    <div className="page page-home">

      {/* Hero */}
      <section className="hero">
        <div className="hero-sunflowers" aria-hidden="true">
          🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻🌻
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Hi Sis ❤️</h1>
          <p className="hero-line1">You don't need all the answers today.</p>
          <p className="hero-line2">You only need the next step.</p>
        </div>
        <div className="hero-cloud-row" aria-hidden="true">
          <span className="cloud">☁️</span>
          <span className="cloud cloud-2">☁️</span>
          <span className="cloud cloud-3">☁️</span>
        </div>
      </section>

      {/* Countdown */}
      <section className="section section-countdown">
        <Countdown />
      </section>

      {/* Journey Timeline */}
      <section className="section">
        <h2 className="section-title">Your Journey</h2>
        <div className="timeline">
          {journeySteps.map((step, i) => (
            <div key={step.id} className={`timeline-step status-${step.status}`}>
              <div className="timeline-node">
                <span className="timeline-emoji">{step.emoji}</span>
              </div>
              {i < journeySteps.length - 1 && <div className="timeline-line" />}
              <div className="timeline-label">{step.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Nav */}
      <section className="section">
        <h2 className="section-title">What would help right now?</h2>
        <div className="quick-grid">
          {quickLinks.map(({ to, label, emoji, desc }) => (
            <Link key={to} to={to} className="quick-card">
              <span className="quick-emoji">{emoji}</span>
              <span className="quick-label">{label}</span>
              <span className="quick-desc">{desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Encouragement */}
      <section className="section section-encouragement">
        <h2 className="section-title">Today's Reminder</h2>
        <EncouragementCard />
      </section>

      {/* Snoopy Corner */}
      <section className="section section-snoopy">
        <h2 className="section-title">🐾 Snoopy Corner</h2>
        <p className="section-subtitle">A little joy. Just because.</p>
        <GifCarousel />
      </section>

    </div>
  );
}
