import { useState } from "react";
import TheGame from "./assets/components/the-game/TheGame";
import WelcomePage from "./assets/components/welcome-page/WelcomePage";
import "./main.css";

function App() {
  const [isStarted, setStarted] = useState(false);
  const [wordLength, setWordLength] = useState(0);
  const [gameId, setGameId] = useState("");
  return (
    <div className="the-game">
      <h1>Wannabe Wordle</h1>
      {isStarted && <TheGame wordLength={wordLength} onGameStart={setStarted} gameId={gameId} />}
      {!isStarted && (
        <WelcomePage
          onGameStart={setStarted}
          whenStarted={setWordLength}
          whatGame={setGameId}
        />
      )}
    </div>
  );
}

export default App;
