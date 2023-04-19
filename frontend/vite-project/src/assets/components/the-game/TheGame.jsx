import GameBoard from "./GameBoard";
import { useState } from "react";
import HighscorePopup from "./HighscorePopup";

export default function TheGame(props) {
  const [gameState, setGameState] = useState("playing");

  if (gameState == "won") {
    return (
        <HighscorePopup setGameState={setGameState} gameId={props.gameId} onGameStart={props.onGameStart}/>
    )
  } else {
    return (
      <GameBoard
        wordLength={props.wordLength}
        gameId={props.gameId}
        gameState={gameState}
        setGameState={setGameState}
      />
    );
  }
}
