import GameStart from "../welcome-page/GameStart";

const LostPopup = (props) => {

  return props.gameState == "time is up" || props.gameState =="no more guesses" ? (
    <div className="lost-popup">
      <h3>{props.message}</h3>
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

export default LostPopup;
