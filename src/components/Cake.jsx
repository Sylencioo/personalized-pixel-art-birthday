import { useState } from "react";
import cakeLit from "../assets/cake/cake_lit.png";
import cakeBlown from "../assets/cake/cake_blown.png";
import "../styles/main.css";

export default function Cake({ onBlown }) {
  const [blown, setBlown] = useState(false);

  const handleClick = () => {
    if (!blown) {
      setBlown(true);
      if (onBlown) onBlown();
    }
  };

  return (
    <img
      src={blown ? cakeBlown : cakeLit}
      alt="Birthday Cake"
      className="cake"
      onClick={handleClick}
    />
  );
}
