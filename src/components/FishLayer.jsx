import fishBlue from "../assets/fish/fish_blue.png";
import fishPink from "../assets/fish/fish_pink.png";
import fishYellow from "../assets/fish/fish_yellow.png";
import fishGreen from "../assets/fish/fish_green.png";
import "../styles/main.css";

const fishes = [fishBlue, fishPink, fishYellow, fishGreen];

export default function FishLayer() {
  return (
    <div className="fish-layer">
      {fishes.map((fish, i) => (
        <img
          key={i}
          src={fish}
          className={`fish fish-${i}`}
          alt="fish"
        />
      ))}
    </div>
  );
}
