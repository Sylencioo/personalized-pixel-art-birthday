function Intro({ onStart }) {
  return (
    <div style={{ textAlign: "center", marginTop: "40vh" }}>
      <p>For someone special</p>
      <button onClick={onStart}>Open</button>
    </div>
  );
}

export default Intro;
