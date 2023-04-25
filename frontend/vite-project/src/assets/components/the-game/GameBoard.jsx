import { useState } from "react";
import Row from "./Row";
import Timer from "./Timer";

export default function GameBoard(props) {
  const [amountOfRows, setAmountOfRows] = useState(1);

  let gameBoard = Array.from({ length: 6 }, (_, index) => {
    return (
      <Row
        amountOfRows={amountOfRows}
        setAmountOfRows={setAmountOfRows}
        wordLength={props.wordLength}
        gameId={props.gameId}
        gameState={props.gameState}
        whenGuessed={props.setCorrectWord}
        setGameState={props.setGameState}
        setInvalidGuess={props.setInvalidGuess}
        setMessage={props.setMessage}
        key={index}
      />
    );
  });
  return props.gameState == "playing" ? (
    <div className="game-board">
      {gameBoard.slice(0, amountOfRows)}
      <Timer
        setGameState={props.setGameState}
        gameState={props.gameState}
        setMessage={props.setMessage}
        setAmountOfRows={setAmountOfRows}
      />
      <h4>You submit a guess by pressing "Enter"</h4>
    </div>
  ) : (
    ""
  );
}
