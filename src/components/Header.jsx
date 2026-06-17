import { Link, useLocation } from "react-router-dom";
import AudioPlayer from "./AudioPlayer";

const navLinks = [
  { to: "/", label: "Home", emoji: "🏠" },
  { to: "/tuesday", label: "Appointment", emoji: "📅" },
  { to: "/questions", label: "Questions", emoji: "📝" },
  { to: "/biomarkers", label: "Biomarkers", emoji: "🧬" },
  { to: "/insurance", label: "Insurance Kit", emoji: "🎒" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="site-logo">
          <span className="logo-icon">🐾</span>
          <span className="logo-text">Snoopy's Waiting Room</span>
        </Link>

        <nav className="site-nav">
          {navLinks.map(({ to, label, emoji }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${location.pathname === to ? "active" : ""}`}
            >
              <span className="nav-emoji">{emoji}</span>
              <span className="nav-label">{label}</span>
            </Link>
          ))}
        </nav>

        <div className="header-audio">
          <AudioPlayer />
        </div>
      </div>
    </header>
  );
}
