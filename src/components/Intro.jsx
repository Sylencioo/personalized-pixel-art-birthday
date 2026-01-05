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
    const currentText = dialogue[currentLine] ?? "";
    const chars = Array.from(currentText);
    let charIndex = 0;
    let typingInterval = null;
    let nextTimeout = null;

    setTypedText("");

    if (chars.length === 0) {
      if (currentLine < dialogue.length - 1) {
        nextTimeout = setTimeout(() => setCurrentLine((prev) => prev + 1), 1200);
      } else {
        nextTimeout = setTimeout(() => setShowButton(true), 800);
      }
    } else {
      typingInterval = setInterval(() => {
        if (charIndex < chars.length) {
          setTypedText((prev) => prev + chars[charIndex]);
          charIndex++;
        }

        if (charIndex >= chars.length) {
          clearInterval(typingInterval);

          if (currentLine < dialogue.length - 1) {
            nextTimeout = setTimeout(() => setCurrentLine((prev) => prev + 1), 1200);
          } else {
            nextTimeout = setTimeout(() => setShowButton(true), 800);
          }
        }
      }, 50);
    }

    return () => {
      if (typingInterval) clearInterval(typingInterval);
      if (nextTimeout) clearTimeout(nextTimeout);
    };
  }, [currentLine]);

  return (
    <div style={styles.container}>
      <div style={styles.characterWrapper}>
        <div style={styles.dialogueBox}>
          <p>{typedText}</p>
          <div style={styles.bubbleTail}></div>
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

const bobAnimation = {
  animation: "bob 2s ease-in-out infinite",
};

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
    animation: "bob 2s ease-in-out infinite",
  },
  dialogueBox: {
    position: "relative",
    marginBottom: "8px",
    background: "white",
    padding: "10px 14px",
    borderRadius: "8px",
    maxWidth: "260px",
    textAlign: "center",
    fontFamily: "monospace",
    boxShadow: "0 4px 0 #ccc",
  },
  bubbleTail: {
    position: "absolute",
    bottom: "-8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "0",
    height: "0",
    borderLeft: "8px solid transparent",
    borderRight: "8px solid transparent",
    borderTop: "8px solid white",
  },
  button: {
    marginTop: "12px",
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

// Insert bob keyframes into the first stylesheet if not already present
if (typeof document !== "undefined") {
  try {
    const styleSheet = document.styleSheets[0];
    const keyframes = `
@keyframes bob {
  0% { transform: translateY(0); }
  50% { transform: translateY(6px); }
  100% { transform: translateY(0); }
}
`;
    if (styleSheet) {
      const exists = Array.from(styleSheet.cssRules || []).some((r) => r.name === "bob");
      if (!exists) {
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
      }
    }
  } catch (e) {
    // ignore insertion errors (cross-origin stylesheets, etc.)
  }
}