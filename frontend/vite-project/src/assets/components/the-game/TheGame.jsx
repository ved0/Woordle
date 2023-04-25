import GameBoard from "./GameBoard";
import { useState } from "react";
import GenericPopup from "./GenericPopup";
import HighscorePopup from "./HighscorePopup";
import WelcomePage from "../welcome-page/WelcomePage";
import LostPopup from "./LostPopup";

export default function TheGame(props) {
  const [gameState, setGameState] = useState("choosing");
  const [invalidGuess, setInvalidGuess] = useState(false);
  const [message, setMessage] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  const [wordLength, setWordLength] = useState(0);
  const [gameId, setGameId] = useState("");

  return (
    <div className="the-game">
      <WelcomePage
        gameState={gameState}
        setGameState={setGameState}
        setWordLength={setWordLength}
        wordLength={wordLength}
        setGameId={setGameId}
      />
      <GameBoard
        wordLength={wordLength}
        gameId={gameId}
        gameState={gameState}
        setCorrectWord={setCorrectWord}
        setGameState={setGameState}
        setInvalidGuess={setInvalidGuess}
        setMessage={setMessage}
      />
      <GenericPopup
        invalidGuess={invalidGuess}
        setInvalidGuess={setInvalidGuess}
        gameState={gameState}
        setGameState={setGameState}
        message={message}
      />
      <LostPopup
        message={message}
        gameState={gameState}
        setGameState={setGameState}
        setWordLength={setWordLength}
        setGameId={setGameId}
        wordLength={wordLength}
      />
      <HighscorePopup
        gameState={gameState}
        setGameState={setGameState}
        gameId={gameId}
        correctWord={correctWord}
        setWordLength={setWordLength}
        setGameId={setGameId}
        wordLength={wordLength}
        setMessage={setMessage}
        setInvalidGuess={setInvalidGuess}
      />
    </div>
  );
}
