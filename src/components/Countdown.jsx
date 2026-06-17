import { useState, useEffect } from "react";

// UPDATE THIS DATE to the actual appointment
const APPOINTMENT_DATE = new Date("2026-06-23T09:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = APPOINTMENT_DATE - now;
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="countdown-card">
        <div className="countdown-title">🌻 Today is the day</div>
        <p className="countdown-subtitle">You've got this. One question at a time.</p>
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="countdown-card">
      <div className="countdown-title">⏳ Oncology Appointment</div>
      <div className="countdown-grid">
        {units.map(({ value, label }) => (
          <div key={label} className="countdown-unit">
            <div className="countdown-number">{String(value).padStart(2, "0")}</div>
            <div className="countdown-label">{label}</div>
          </div>
        ))}
      </div>
      <p className="countdown-subtitle">You have time to prepare. Let's use it well.</p>
    </div>
  );
}
