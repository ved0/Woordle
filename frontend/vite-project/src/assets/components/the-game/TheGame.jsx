import GameBoard from "./GameBoard";
import { useState } from "react";

export default function TheGame(props) {
  const [gameState, setGameState] = useState("playing");

  return (
    <GameBoard
      wordLength={props.wordLength}
      gameId={props.gameId}
      gameState={gameState}
      setGameState={setGameState}
    />
  );
}
