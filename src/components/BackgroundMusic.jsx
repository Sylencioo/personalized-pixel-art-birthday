import { useEffect, useRef, useState } from "react";
import music from "../assets/music/music.mp3.mp3";

export default function BackgroundMusic({ play }) {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.4);

  useEffect(() => {
    if (!audioRef.current || !play) return;
    const audio = audioRef.current;
    audio.volume = 0;
    audio.loop = true;
    audio.play().catch(() => {});
    const fade = setInterval(() => {
      if (audio.volume < volume) audio.volume = Math.min(audio.volume + 0.02, volume);
      else clearInterval(fade);
    }, 100);
    return () => clearInterval(fade);
  }, [play, volume]);

  // Update volume when slider changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <div style={{ position: "absolute", top: 16, left: 16, zIndex: 10, background: "rgba(0,0,0,0.3)", borderRadius: 8, padding: 8 }}>
      <audio ref={audioRef} src={music} />
      <label style={{ color: "#fff", fontSize: 12, marginRight: 8 }} htmlFor="music-volume">Music Volume</label>
      <input
        id="music-volume"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={e => setVolume(Number(e.target.value))}
        style={{ verticalAlign: "middle" }}
      />
    </div>
  );
}
