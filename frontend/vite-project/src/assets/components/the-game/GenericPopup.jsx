const GenericPopup = (props) => {
  const handleClose = () => {
    if (props.noMatch) {
      props.setNomatch(false);
    } else if (props.message.includes("highscore")) {
      props.setInvalidGuess(false);
      props.setGameState("new game");
    } else {
      props.setInvalidGuess(false);
    }
  };

  return props.invalidGuess || props.noMatch ? (
    <div className="info-popup">
      <h2>{props.message}</h2>
      <button className="generic-button" onClick={handleClose}>
        Understood
      </button>
    </div>
  ) : (
    ""
  );
};

export default GenericPopup;
