import { useState, useEffect } from "react";
import Cake from "./Cake/Cake";
import FishLayer from "./FishLayer/FishLayer";
import "./MainPage.css";

export default function MainPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const containerStyle = {
    minHeight: "100vh",
    padding: "24px",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(12px)",
    transition: "all 600ms ease",
  };

  return (
    <div className="main-layout" style={containerStyle}>
      <FishLayer />

      <div className="left">
        <h1>Happy Birthday 🎉🎉</h1>
        <p className="subtitle">
          the force is strong with this one 🐸
        </p>
      </div>

      <div className="right">
        <Cake
          cakeColor="#f7b7c8"
          icingColor="#fff1f5"
          candlesLit={true}
        />
        <p className="cake-hint">Click the cake</p>
      </div>
    </div>
  );
}
