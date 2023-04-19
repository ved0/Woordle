import Row from "./Row";

export default function GameBoard(props) {
  if (props.gameState == "playing") {
    return Array.from({ length: 6 }, (_, index) => {
      return (
        <Row
          wordLength={props.wordLength}
          gameId={props.gameId}
          gameState={props.gameState}
          setGameState={props.setGameState}
          key={index}
        />
      );
    });
  } else {
    return (
      <div>
        <h1>Testar bara</h1>
        <p>hoppas att det funkar dock</p>
      </div>
    )
  }
}
