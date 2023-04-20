import { useState } from "react";
import OneLetterBox from "./OneLetterBox";

export default function Row(props) {
  const [result, setResult] = useState([{}]);
  const [guessed, setGuessed] = useState(false);

  let row = [];

  if (guessed) {
    let counter = 0;
    for (let i = 0; i < props.wordLength; i++) {
      row.push(<OneLetterBox color={whatColor(result[i].result)} key={i} />);
      if (whatColor(result[i].result) == "green") {
        counter++;
        if (counter == props.wordLength) {
          let temp = "";
          result.forEach(element => {
            temp += element.letter;
          })
          setTimeout(() => {
            props.whenGuessed(temp);
            props.setGameState("won");
          }, 50);
        }
      }
    }
  } else {
    for (let i = 0; i < props.wordLength; i++) {
      row.push(
        <OneLetterBox
          gameId={props.gameId}
          setInvalidGuess={props.setInvalidGuess}
          setMessage={props.setMessage}
          setResult={setResult}
          setGuessed={setGuessed}
          color={"white"}
          key={i}
        />
      );
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
  }
}
