import { useState, useRef } from "react";
import Intro from "./components/Intro";

export default function App() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  const handleOpen = () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      const p = audioRef.current.play();
      if (p && p.catch) p.catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} loop src="/src/assets/music.mp3" />
      {!opened ? (
        <Intro onOpen={handleOpen} />
      ) : (
        <div style={{ padding: "20px" }}>
          <VolumeControl audioRef={audioRef} />
          <h1>🎂 Happy Birthday 🎂</h1>
        </div>
      )}
    </>
  );
}

function VolumeControl({ audioRef }) {
  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      defaultValue="0.5"
      onChange={(e) => (audioRef.current.volume = e.target.value)}
      style={{
        position: "fixed",
        top: "16px",
        left: "16px",
      }}
    />
  );
}
