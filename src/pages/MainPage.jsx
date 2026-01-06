import Cake from "../components/Cake";
import FishLayer from "../components/FishLayer";
import "../styles/main.css";

export default function MainPage() {
  return (
    <div className="main-page">
      <div className="left-panel">
        <h1 className="title">Happy Birthday 🎉🎉</h1>
        <p className="subtitle">
          the force is strong with this one 🐸
        </p>
      </div>

      <div className="right-panel">
        <Cake />
      </div>

      <FishLayer />
    </div>
  );
}
