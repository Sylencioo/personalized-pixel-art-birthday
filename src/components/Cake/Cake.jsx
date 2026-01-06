import { useState } from "react";
import Candle from "./Candle";
import "./cake.css";

export default function Cake({ cakeColor = "#f7b7c8", icingColor = "#fff1f5", candlesLit = true, onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    if (onClick) onClick();

    setTimeout(() => setClicked(false), 600);
  };

  // candle positions (px) relative to top tier
  const candleXs = [ -28, -10, 10, 28 ];

  return (
    <div className={`cake-root ${clicked ? "bumped" : ""}`} onClick={handleClick} role="button" aria-label="Cake" tabIndex={0}>
      <div className="cake-shadow" />

      <div className="cake-top" style={{ background: cakeColor }}>
        <div className="icing" style={{ background: icingColor }} />
        <div className="candles">
          {candleXs.map((x, i) => (
            <Candle key={i} x={x + 64} lit={candlesLit} />
          ))}
        </div>
      </div>

      <div className="cake-bottom" style={{ background: cakeColor }} />

      <div className="cake-sparkles" aria-hidden={!clicked}>
        <div className="sparkle" style={{ left: "10%", top: "10%" }} />
        <div className="sparkle" style={{ left: "70%", top: "20%" }} />
        <div className="sparkle" style={{ left: "40%", top: "60%" }} />
      </div>
    </div>
  );
}
