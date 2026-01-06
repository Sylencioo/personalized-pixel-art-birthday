import Cake from "../components/Cake";
import FishLayer from "../components/FishLayer";
import FrogSticker from "../components/FrogSticker";
import WaterOverlay from "../components/WaterOverlay";
import JellyfishLayer from "../components/JellyfishLayer";
import "../styles/main.css";
import "../components/WaterOverlay.css";

import { useState } from "react";
// ...existing imports...

export default function MainPage() {
  const [cakeBlown, setCakeBlown] = useState(false);
  return (
    <div className="main-page" style={{ position: 'relative' }}>
      <WaterOverlay />
      <JellyfishLayer />
      <div className="left-panel" style={{ marginLeft: '120px', paddingTop: '64px', position: 'relative' }}>
        <h1 className="title">Happy</h1>
        <h1 className="title">Birthday 🎉🎉</h1>
        <p className="subtitle">
          the force is strong with this one 🐸
        </p>
        <FrogSticker />
      </div>

      <div className="right-panel">
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Cake onBlown={() => setCakeBlown(true)} />
          <p className="cake-hint">
            {cakeBlown ? "FIREE" : "Click the cake maybe?"}
          </p>
        </div>
      </div>

      <FishLayer />
    </div>
  );
}
