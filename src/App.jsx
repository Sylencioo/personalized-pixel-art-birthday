import { useState } from "react";
import Intro from "./components/Intro";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened ? (
        <Intro onOpen={() => setOpened(true)} />
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "40vh" }}>
          🎉 Main App Goes Here 🎉
        </h1>
      )}
    </>
  );
}
