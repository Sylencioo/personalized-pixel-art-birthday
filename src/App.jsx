import { useState, useRef } from "react";
import Intro from "./components/Intro";
import MainPage from "./pages/MainPage";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const lastVolumeRef = useRef(0.5);
  const audioRef = useRef(null);

  const startAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = muted;
      const p = audioRef.current.play();
      if (p && p.catch) p.catch(() => {});
    }
  };

  const handleOpen = () => {
    setOpened(true);
    // audio playback should have been started by startAudio (user gesture)
  };

  return (
    <>
      <audio ref={audioRef} loop src="/src/assets/music.mp3" />
      {!opened ? (
        <Intro onOpen={handleOpen} onStartAudio={startAudio} />
      ) : (
        <>
          <VolumeControl
            audioRef={audioRef}
            volume={volume}
            setVolume={setVolume}
            muted={muted}
            setMuted={setMuted}
            lastVolumeRef={lastVolumeRef}
          />
          <MainPage />
        </>
      )}
    </>
  );
}

function VolumeControl({ audioRef, volume, setVolume, muted, setMuted, lastVolumeRef }) {
  const containerStyle = {
    position: "fixed",
    top: "16px",
    left: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    zIndex: 9999,
  };

  const iconStyle = {
    fontSize: "18px",
    cursor: "pointer",
    userSelect: "none",
  };

  const onToggleMute = () => {
    if (!audioRef.current) return;

    if (muted) {
      // unmute
      setMuted(false);
      const last = lastVolumeRef.current || 0.5;
      setVolume(last);
      audioRef.current.muted = false;
      audioRef.current.volume = last;
    } else {
      // mute
      setMuted(true);
      lastVolumeRef.current = volume;
      setVolume(0);
      audioRef.current.muted = true;
      audioRef.current.volume = 0;
    }
  };

  return (
    <div style={containerStyle}>
      <div style={iconStyle} onClick={onToggleMute} aria-label={muted ? "Unmute" : "Mute"}>
        {muted || volume === 0 ? "🔇" : "🔊"}
      </div>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => {
          const v = parseFloat(e.target.value);
          setVolume(v);
          if (audioRef.current) {
            audioRef.current.volume = v;
            if (v > 0) {
              audioRef.current.muted = false;
              setMuted(false);
            }
          }
        }}
        style={{
          width: "120px",
        }}
      />
    </div>
  );
}
