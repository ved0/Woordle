const GenericPopup = (props) => {
  const handleClose = () => {
    props.setInvalidGuess(false);
  };

  return props.invalidGuess ? (
    <div className="popup">
      <h2>{props.message}</h2>
      <button onClick={handleClose}>Understood</button>
    </div>
  ) : (
    ""
  )
}

export default GenericPopup;
