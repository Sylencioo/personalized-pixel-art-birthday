import { useState } from "react";
import Intro from "./components/Intro";
import birthdayConfig from "./config/birthdayConfig";

function App() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <Intro onStart={() => setStarted(true)} />;
  }

  return (
    <div className="fade-in">
      <h1>{birthdayConfig.name}</h1>
      {birthdayConfig.message.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}

export default App;
