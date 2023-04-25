import GenericPopup from "../the-game/GenericPopup";
import { useState } from "react";

export default function GameStart(props) {
  const [noMatch, setNomatch] = useState(false);
  const [message, setMessage] = useState("");
  const [wordLength, setWordLength] = useState(7);
  const [uniqueChars, setUniqueChars] = useState(2);

  const changeWordLength = event => {
    setWordLength(event.target.value);
  }
  const changeUniqueChars = event => {
    setUniqueChars(event.target.value);
  }

  async function clickHandle() {
    await fetch("/api/games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wordLength: wordLength,
        uniqueChars: uniqueChars,
      }),
    })
      .then((resp) => resp.text())
      .then((gameId) => {
        if (gameId == "404") {
          setMessage("No matching word! \n Please choose a word with less or more characters");
          setNomatch(true);
        } else {
          props.setGameId(gameId);
          props.setGameState("playing");
          props.setWordLength(wordLength);
        }
      });
  }

  return (
    <div className="start-game">
      <h3>How many letters?</h3>
      <label>1</label>
      <input id="word-length" onChange={changeWordLength} value={wordLength} type="range" min="1" max="13"></input>
      <label>13</label>
      <br></br>
      <label className="word-length">{wordLength}</label><br></br>
      <h3>Unique letters?</h3>
      <label>No</label>
      <input id="unique-letters" onChange={changeUniqueChars} type="range" min="1" max="2"></input>
      <label>Yes</label>
      <button onClick={clickHandle} className="play-button">
        Play
      </button>
      <p>Good luck and have fun! &#128525;</p>
      <GenericPopup noMatch={noMatch} setNomatch={setNomatch} message={message}/>
    </div>
  );
}
