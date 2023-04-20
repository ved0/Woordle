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
    console.log(data);
    props.setResult(data);
    if (data.result == "won") {
      props.setGuessed(true);
      props.setGameState("won");
    } else {
      props.setGuessed(true);
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
        if (input.parentElement.nextSibling) {
          input.parentElement.nextSibling.childNodes[0].focus();
          props.setGuessed(false);
        }
      } else {
        props.setMessage("Fill all the fields before pressing enter");
        props.setInvalidGuess(true);
      }
    }
  };

  return (
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
