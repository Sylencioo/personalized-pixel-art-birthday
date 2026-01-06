import { useState } from "react";
import Intro from "./components/Intro";
import MainPage from "./pages/MainPage";
import BackgroundMusic from "./components/BackgroundMusic";

export default function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      {!opened ? (
        <Intro onOpen={() => setOpened(true)} />
      ) : (
        <>
          <BackgroundMusic play={opened} />
          <MainPage />
        </>
      )}
    </>
  );
}
