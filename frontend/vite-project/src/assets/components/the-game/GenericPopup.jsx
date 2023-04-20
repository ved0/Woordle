const GenericPopup = (props) => {
  const handleClose = () => {
    if(props.noMatch){
      props.setNomatch(false);
    }else {
      props.setInvalidGuess(false);
    }
  };

  return props.invalidGuess || props.noMatch ? (
    <div className="popup">
      <h2>{props.message}</h2>
      <button onClick={handleClose}>Understood</button>
    </div>
  ) : (
    ""
  );
};

export default GenericPopup;
