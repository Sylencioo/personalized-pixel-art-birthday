import frog from "../assets/frog/frog.png";
import "./FrogSticker.css";

export default function FrogSticker() {
  return (
    <img
      src={frog}
      alt="Frog sticker"
      className="frog-sticker static-frog"
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "520px",
        margin: 0,
        padding: 0,
        zIndex: 10,
        imageRendering: "pixelated",
        display: "block"
      }}
    />
  );
}
