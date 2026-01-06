import Cake from "../components/Cake";
import FishLayer from "../components/FishLayer";
import FrogSticker from "../components/FrogSticker";
import WaterOverlay from "../components/WaterOverlay";
import "../styles/main.css";
import "../components/WaterOverlay.css";

export default function MainPage() {
  return (
    <div className="main-page" style={{ position: 'relative' }}>
      <WaterOverlay />
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
          <Cake />
          <p className="cake-hint">
            Click the cake maybe?
          </p>
        </div>
      </div>

      <FishLayer />
    </div>
  );
}
