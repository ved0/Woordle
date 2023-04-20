import GameBoard from "./GameBoard";
import { useState } from "react";

export default function TheGame(props) {

  return (
    <GameBoard
      wordLength={props.wordLength}
      gameId={props.gameId}
      onGameStart={props.onGameStart}
    />
  );
}
