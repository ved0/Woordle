import { useState } from "react";
import OneLetterBox from "./OneLetterBox";

export default function Row(props) {
  const [result, setResult] = useState([{}]);
  const [guessed, setGuessed] = useState(false);

  let row = [];

  if (guessed) {
    for (let i = 0; i < props.wordLength; i++) {
      if (result.result == "won") {
        row.push(<OneLetterBox color={"green"} key={i} />);
      } else {
        row.push(<OneLetterBox color={whatColor(result[i].result)} key={i} />);
      }
    }
  } else {
    for (let i = 0; i < props.wordLength; i++) {
      if (i == 0) {
        row.push(
          <OneLetterBox
            gameId={props.gameId}
            first={true}
            whenGuessed={props.whenGuessed}
            setGameState={props.setGameState}
            setInvalidGuess={props.setInvalidGuess}
            setMessage={props.setMessage}
            setNewRow={props.setNewRow}
            amountOfRows={props.amountOfRows}
            setAmountOfRows={props.setAmountOfRows}
            setResult={setResult}
            setGuessed={setGuessed}
            color={"white"}
            key={i}
          />
        );
      } else {
        row.push(
          <OneLetterBox
            gameId={props.gameId}
            whenGuessed={props.whenGuessed}
            setGameState={props.setGameState}
            setInvalidGuess={props.setInvalidGuess}
            setMessage={props.setMessage}
            setNewRow={props.setNewRow}
            amountOfRows={props.amountOfRows}
            setAmountOfRows={props.setAmountOfRows}
            setResult={setResult}
            setGuessed={setGuessed}
            color={"white"}
            key={i}
          />
        );
      }
    }
  }

  return <div className="row">{row}</div>;
}

function whatColor(result) {
  switch (result) {
    case "correct":
      return "green";
      break;
    case "incorrect":
      return "red";
      break;
    case "misplaced":
      return "yellow";
      break;
    default:
      return "white";
      break;
  }
}
