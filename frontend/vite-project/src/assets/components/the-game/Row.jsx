import { useState } from "react";
import OneLetterBox from "./OneLetterBox";

export default function Row(props) {
  const [result, setResult] = useState([{}]);
  const [guessed, setGuessed] = useState(false);

  let row = [];

  if (guessed) {
    console.log("kommer jag in hit när jag gissat");
    console.log(result);
  /*  if (props.gameState == "won") {
      for (let i = 0; i < props.wordLength; i++) {
        console.log("grattis du vann");
        row.push(<OneLetterBox color={"green"} key={i} />);
      }
    } else {*/
      for (let i = 0; i < props.wordLength; i++) {
        if(result.result=="won"){
          row.push(<OneLetterBox color={"green"} key={i} />);
        }else{
          row.push(<OneLetterBox color={whatColor(result[i].result)} key={i} />);
        }
        console.log("grattis du gissade");
      }
/*    }*/
  } else {
    for (let i = 0; i < props.wordLength; i++) {
      row.push(
        <OneLetterBox
          gameId={props.gameId}
          whenGuessed={props.whenGuessed}
          setGameState={props.setGameState}
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
    default:
      return "white";
      break;
  }
}
