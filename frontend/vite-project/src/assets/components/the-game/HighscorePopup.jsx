import React, { useState } from "react";

const HighscorePopup = (props) => {
  const [name, setName] = useState("");

  const handleNewGame = () => {
    props.onGameStart(false);
    props.setGameState("playing");
  };

  const handleHighscore = async () => {
    console.log("kommer jag hit");
    console.log(props.gameId);
    console.log(name);
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
    console.log("kommer jag hitt efter post då")
    const data = await resp.json();
    console.log(data);
  };

  const handleOnChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className="highscore-popup">
      <h2>Congratulations, you have won!</h2>
      <p>
        If you wish to add your score to the Highscore, please enter your name
        down below
      </p>
      <div className="add-highscore">
        <input type="text" onChange={handleOnChange} id="highscore-name"></input>
        <button onClick={handleHighscore}>Add to highscore</button>
      </div>
      <span> or pehaps play a new game</span>
      <button onClick={handleNewGame}>New game</button>
    </div>
  );
};

export default HighscorePopup;
