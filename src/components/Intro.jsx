import { useState, useEffect, useRef } from "react";
import zhongli from "../assets/zhongli_pixel.png";

export default function Intro({ onOpen, onStartAudio }) {
  const dialogue = [
    "Osmanthus wine tastes the same as I remember...",
    "But where are those who share the memory?",
    "Care to assist me?"
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [visible, setVisible] = useState(false);
  const charIndexRef = useRef(0);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const currentText = dialogue[currentLine] || "";
    const chars = Array.from(currentText);
    let typingInterval = null;
    let nextTimeout = null;

    setTypedText("");
    charIndexRef.current = 0;

    if (chars.length === 0) {
      if (currentLine < dialogue.length - 1) {
        nextTimeout = setTimeout(() => setCurrentLine((prev) => prev + 1), 1200);
      } else {
        nextTimeout = setTimeout(() => setShowButton(true), 800);
      }
    } else {
      typingInterval = setInterval(() => {
        if (charIndexRef.current < chars.length) {
          setTypedText(chars.slice(0, charIndexRef.current + 1).join(""));
          charIndexRef.current++;
        } else {
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

  const characterWrapperStyle = {
    ...styles.characterWrapper,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(12px)",
    transition: "all 1.2s ease",
  };

  return (
    <div style={styles.container}>
      <div style={characterWrapperStyle}>
        <div style={styles.dialogueBox}>
          <p>{typedText}</p>
          <div style={styles.bubbleTail}></div>
        </div>

        <div style={styles.characterGlow}></div>
        <div style={styles.frame}>
          <img src={zhongli} alt="Zhongli" style={styles.character} />
        </div>
      </div>

      {showButton && (
        <button
          style={{
            ...styles.button,
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease",
          }}
          onClick={() => {
            // start audio immediately from the user gesture to avoid autoplay blocking
            if (onStartAudio) onStartAudio();

            // fade out intro, then call onOpen to switch to main page
            setVisible(false);
            setShowButton(false);
            setTimeout(() => onOpen(), 800);
          }}
        >
          Venture
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
    display: "block",
    borderRadius: "12px",
  },
  frame: {
    borderRadius: "18px",
    padding: "6px",
    background: "white",
    boxShadow: "0 6px 0 #d0b77a",
    display: "inline-block",
    overflow: "hidden",
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
    fontSize: "10px",
    lineHeight: "1.6",
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
  characterGlow: {
    position: "absolute",
    width: "220px",
    height: "220px",
    background: "rgba(255, 255, 255, 0.35)",
    filter: "blur(18px)",
    borderRadius: "50%",
    zIndex: -1,
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