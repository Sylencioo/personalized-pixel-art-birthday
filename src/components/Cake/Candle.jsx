export default function Candle({ x = 0, color = "#FFD166", lit = true }) {
  const candleStyle = {
    position: "absolute",
    left: `${x}px`,
    bottom: "36px",
    width: "6px",
    height: "18px",
    background: color,
    borderRadius: "2px",
  };

  const flameStyle = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    top: "-10px",
    width: "8px",
    height: "10px",
    borderRadius: "50% 50% 50% 50%",
    background: lit ? "radial-gradient(circle at 30% 30%, #fff3c4, #ffd166)" : "transparent",
    boxShadow: lit ? "0 0 8px rgba(255,200,80,0.7)" : "none",
    animation: lit ? "flicker 900ms infinite" : "none",
  };

  return (
    <div style={candleStyle}>
      <div style={flameStyle} />
    </div>
  );
}
