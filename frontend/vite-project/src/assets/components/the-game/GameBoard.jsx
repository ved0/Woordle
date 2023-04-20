import GenericPopup from "./GenericPopup";
import HighscorePopup from "./HighscorePopup";
import Row from "./Row";
import { useState } from "react";

export default function GameBoard(props) {
  const [invalidGuess, setInvalidGuess] = useState(false);
  const [message, setMessage] = useState("");
  const [correctWord, setCorrectWord] = useState("");

  let gameBoard = Array.from({ length: 6 }, (_, index) => {
    return (
      <Row
        wordLength={props.wordLength}
        gameId={props.gameId}
        gameState={props.gameState}
        whenGuessed={setCorrectWord}
        setGameState={props.setGameState}
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
      gameState={props.gameState}
      key={gameBoard.length}
      setGameState={props.setGameState}
      gameId={props.gameId}
      correctWord={correctWord}
      onGameStart={props.onGameStart}
    />
  );

  return gameBoard;
}
