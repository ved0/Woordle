export default function GameStart(props) {
  function clickHandle() {
    const wordLength = parseInt(document.querySelector("#word-length").value);
    fetch("/api/games", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        wordLength: wordLength,
        uniqueChars: document.querySelector("#unique-letters").value,
      }),
    })
      .then((resp) => resp.text())
      .then((gameId) => props.whatGame(gameId));
    props.onGameStart(true);
    props.whenStarted(wordLength);
  }

  return (
    <div className="start-game">
      <h2>How many letters?</h2>
      <label>1</label>
      <input id="word-length" type="range" min="1" max="13"></input>
      <label>13</label>
      <h2>Unique letters?</h2>
      <label>No</label>
      <input id="unique-letters" type="range" min="1" max="2"></input>
      <label>Yes</label>
      <button onClick={clickHandle} className="play-button">
        Play
      </button>
      <p>Good luck and have fun! &#128525;</p>
    </div>
  );
}