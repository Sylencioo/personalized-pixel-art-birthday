import { useState, useEffect } from "react";
import zhongli from "../assets/zhongli_pixel.png";

export default function Intro({ onOpen }) {
  const dialogue = [
    "Hey there…",
    "I made something special for you.",
    "Ready to see it?"
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const currentText = dialogue[currentLine] || "";
    let charIndex = 0;

    setTypedText("");

    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + currentText[charIndex]);
      charIndex++;

      if (charIndex >= currentText.length) {
        clearInterval(typingInterval);

        if (currentLine < dialogue.length - 1) {
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1);
          }, 1200);
        } else {
          setTimeout(() => setShowButton(true), 800);
        }
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  return (
    <div style={styles.container}>
      <div style={styles.characterWrapper}>
        <div style={styles.dialogueBox}>
          <p>{typedText}</p>
        </div>

        <img src={zhongli} alt="Zhongli" style={styles.character} />
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
  characterWrapper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  character: {
    width: "200px",
    imageRendering: "pixelated",
  },
  dialogueBox: {
    marginBottom: "8px",
    background: "white",
    padding: "10px 14px",
    borderRadius: "8px",
    maxWidth: "260px",
    textAlign: "center",
    fontFamily: "monospace",
    boxShadow: "0 4px 0 #ccc",
  },
  button: {
    marginTop: "12px",
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
};