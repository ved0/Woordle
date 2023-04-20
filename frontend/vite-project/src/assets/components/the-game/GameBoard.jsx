import GenericPopup from "./GenericPopup";
import HighscorePopup from "./HighscorePopup";
import Row from "./Row";
import { useState } from "react";

export default function GameBoard(props) {
  const [gameState, setGameState] = useState("playing");
  const [invalidGuess, setInvalidGuess] = useState(false);
  const [message, setMessage] = useState("");
  const [correctWord, setCorrectWord] = useState("");

  let gameBoard = Array.from({ length: 6 }, (_, index) => {
    return (
      <Row
        wordLength={props.wordLength}
        gameId={props.gameId}
        gameState={gameState}
        whenGuessed={setCorrectWord}
        setGameState={setGameState}
        setInvalidGuess={setInvalidGuess}
        setMessage={setMessage}
        key={index}
      />
    );
  });
  gameBoard.push(
    <GenericPopup
      invalidGuess={invalidGuess}
      key={gameBoard.length}
      setInvalidGuess={setInvalidGuess}
      message={message}
    />
  );
  gameBoard.push(
    <HighscorePopup
      gameState={gameState}
      key={gameBoard.length}
      setGameState={setGameState}
      gameId={props.gameId}
      correctWord={correctWord}
      onGameStart={props.onGameStart}
    />
  );

  return <div className="game-board">{gameBoard}</div>;
}
