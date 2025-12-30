import { useState, useEffect } from "react";
import zhongli from "../assets/zhongli_pixel.png";

export default function Intro({ onOpen }) {
  const dialogue = [
    "Hey there…",
    "I made something special for you.",
    "Ready to see it?"
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (currentLine < dialogue.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      const t = setTimeout(() => setShowButton(true), 1000);
      return () => clearTimeout(t);
    }
  }, [currentLine]);

  return (
    <div style={styles.container}>
      <img src={zhongli} alt="Zhongli" style={styles.character} />

      <div style={styles.dialogueBox}>
        <p>{dialogue[currentLine]}</p>
      </div>

      {showButton && (
        <button style={styles.button} onClick={onOpen}>
          Open
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "#f3ede7",
    gap: "16px",
  },
  character: {
    width: "200px",
    imageRendering: "pixelated",
  },
  dialogueBox: {
    background: "white",
    padding: "12px 16px",
    borderRadius: "8px",
    maxWidth: "280px",
    textAlign: "center",
    fontFamily: "monospace",
  },
  button: {
    marginTop: "12px",
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
};