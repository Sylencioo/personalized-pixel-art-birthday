export default function WaterOverlay() {
  const bubblePositions = [10, 25, 40, 55, 70, 85]; // percent from left
  return (
    <div className="water-overlay">
      {bubblePositions.map((left, i) => (
        <span key={i} className="bubble" style={{ left: `${left}%` }} />
      ))}
    </div>
  );
}
