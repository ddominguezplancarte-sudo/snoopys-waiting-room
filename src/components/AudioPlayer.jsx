import { useState, useRef, useEffect } from "react";

const tracks = [
  { id: "rain", label: "Rain", emoji: "🌧️", file: "/audio/rain.mp3" },
  { id: "fireplace", label: "Fireplace", emoji: "🔥", file: "/audio/fireplace.mp3" },
  { id: "coffee", label: "Coffee Shop", emoji: "☕", file: "/audio/coffee-shop.mp3" },
  { id: "piano", label: "Gentle Piano", emoji: "🎹", file: "/audio/piano.mp3" },
  { id: "lofi", label: "Lofi", emoji: "🎵", file: "/audio/lofi.mp3" },
];

export default function AudioPlayer() {
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(null);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  function selectTrack(track) {
    if (playing?.id === track.id) {
      audioRef.current?.pause();
      setPlaying(null);
      return;
    }
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setPlaying(track);
    // Audio will start when src changes via useEffect
  }

  useEffect(() => {
    if (playing && audioRef.current) {
      audioRef.current.load();
      audioRef.current.volume = volume;
      audioRef.current.play().catch(() => {
        // Autoplay blocked — user must interact first
      });
    }
  }, [playing]);

  return (
    <div className="audio-widget">
      <button
        className={`audio-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
        title="Cozy sounds"
      >
        {playing ? "🎵" : "🎵"} Cozy Mode {open ? "▲" : "▼"}
      </button>

      {open && (
        <div className="audio-panel">
          <div className="audio-tracks">
            {tracks.map((track) => (
              <button
                key={track.id}
                className={`audio-track ${playing?.id === track.id ? "active" : ""}`}
                onClick={() => selectTrack(track)}
              >
                <span className="track-emoji">{track.emoji}</span>
                <span className="track-label">{track.label}</span>
                {playing?.id === track.id && <span className="track-playing">▶</span>}
              </button>
            ))}
          </div>

          {playing && (
            <div className="audio-volume">
              <span>🔈</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="volume-slider"
              />
              <span>🔊</span>
            </div>
          )}

          <p className="audio-note">
            Add .mp3 files to <code>/public/audio/</code> to enable sounds.
          </p>
        </div>
      )}

      {playing && (
        <audio ref={audioRef} loop>
          <source src={playing.file} type="audio/mpeg" />
        </audio>
      )}
    </div>
  );
}
