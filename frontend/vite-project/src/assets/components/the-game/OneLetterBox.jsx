export default function OneLetterBox(props) {
  async function submitGuess(guess) {
    const resp = await fetch("/api/games/" + props.gameId + "/guesses", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        guess: guess,
      }),
    });
    const data = await resp.json();
    props.setResult(data);
    if (data.result == "won") {
      props.setGuessed(true);
      props.setAmountOfRows(1);
      props.setGameState("won");
    } else {
      props.setGuessed(true);
      if (props.amountOfRows < 7) {
        if (props.amountOfRows == 6) {
          setTimeout(() => {
            props.setGameState("no more guesses");
            props.setMessage(
              "That was the last guess.  \n Unfortunatly you haven't guessed the word and this game is over.  \n You are welcome to play a new one!"
            );
            props.setAmountOfRows(1);
          }, 1000);
        } else {
          props.setAmountOfRows(props.amountOfRows + 1);
        }
      }
    }
  }

  const handleKeyUp = (event) => {
    const input = event.target;
    if (
      input.value.length == input.maxLength &&
      input.nextSibling &&
      input.nextSibling.value.length == 0
    ) {
      input.nextSibling.focus();
    }
  };

  const handleClick = (event) => {
    if (event.target.disabled) {
      return;
    } else {
      props.setInvalidGuess(false);
      event.target.value = "";
    }
  };

  const handleKeyDown = async (event) => {
    const input = event.target;
    const inputValue = input.value;
    if (event.keyCode == 8) {
      if (inputValue.length > 0) {
        return;
      } else if (input.previousSibling) {
        input.previousSibling.focus();
      }
    } else if (event.keyCode == 13) {
      const inputs = input.parentNode.children;
      let temp = Array.from(inputs).filter((inpu) => inpu.value.length == 1);
      if (temp.length == inputs.length) {
        let word = temp.map((inpu) => inpu.value).join("");
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].disabled = true;
        }
        props.whenGuessed(word);
        submitGuess(word);
      } else {
        props.setMessage('Fill all the fields before pressing "Enter"!');
        props.setInvalidGuess(true);
      }
    }
  };

  return props.first ? (
    <input
      className={props.color}
      autoFocus
      type="text"
      minLength="1"
      maxLength="1"
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    ></input>
  ) : (
    <input
      className={props.color}
      type="text"
      minLength="1"
      maxLength="1"
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    ></input>
  );
}
