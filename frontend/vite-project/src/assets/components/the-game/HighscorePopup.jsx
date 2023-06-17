import { useState } from "react";
import GameStart from "../welcome-page/GameStart";
import GenericPopup from "./GenericPopup";

const HighscorePopup = (props) => {
  const [name, setName] = useState("");

  const handleNewGame = () => {
    props.setGameState("new game");
  };

  const handleHighscore = async () => {
    if (name == "") {
      props.setMessage("Please fill in a valid name before submitting!");
      props.setInvalidGuess(true);
    } else {
      const resp = await fetch("/api/games/" + props.gameId + "/highscore", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });
      props.setInvalidGuess(true);
      props.setMessage("Thank you! \n Your highscore has been added to the list.");
    }
  };

  const handleOnChange = (event) => {
    setName(event.target.value);
  };

  return props.gameState == "won" ? (
    <div className="highscore-popup">
      <h3>Congratulations, you have won!</h3>
      <p>
        The correct word was:{" "}
        <span className="correct-word">{props.correctWord}</span>
        You have guessed it!!<br></br>
        <br></br>
        If you wish to add your score to the Highscore, <br></br>
        Please enter your name down below <br></br>
        &#128071;
      </p>
      <div className="add-highscore">
        <input
          type="text"
          onChange={handleOnChange}
          placeholder={"Your name"}
          id="highscore-name"
        ></input>
        <button className="add-to-highscore-button" onClick={handleHighscore}>
          Add to highscore
        </button>
      </div>
      <span> or pehaps play a new game &#128579;</span>
      <button className="new-game-button" onClick={handleNewGame}>
        New game
      </button>
      <GenericPopup />
    </div>
  ) : props.gameState == "new game" ? (
    <div>
      <h3>Welcome to play a new game</h3>
      <GameStart
        setGameState={props.setGameState}
        setWordLength={props.setWordLength}
        setGameId={props.setGameId}
        wordLength={props.wordLength}
      />
    </div>
  ) : (
    ""
  );
};

export default HighscorePopup;
