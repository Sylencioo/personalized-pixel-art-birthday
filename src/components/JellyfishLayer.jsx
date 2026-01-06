import React from "react";
import "./JellyfishLayer.css";

import jellyfishBlue from "../assets/pixel/jellyfish_blue.png";
import jellyfishGlow from "../assets/pixel/jellyfish_glow.png";
import jellyfishPink from "../assets/pixel/jellyfish_pink.png";
import jellyfishYellow from "../assets/pixel/jellyfish_yellow.png";

const jellyfishImages = [
  jellyfishBlue,
  jellyfishGlow,
  jellyfishPink,
  jellyfishYellow
];

// Four positions for the four jellyfish
const jellyfishPositions = [
  { left: "10%", top: "30%" },           // blue
  { right: "5%", bottom: "5%" },        // glow (bottom right)
  { left: "40%", top: "70%" },           // pink
  { left: "80%", top: "20%" }            // yellow
];

export default function JellyfishLayer() {
  return (
    <div className="jellyfish-layer">
      {jellyfishImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={"Jellyfish " + (i + 1)}
          className="jellyfish"
          style={jellyfishPositions[i]}
        />
      ))}
    </div>
  );
}
