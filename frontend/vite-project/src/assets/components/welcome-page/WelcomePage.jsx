import IntroText from "./IntroText";
import GameStart from "./GameStart";

export default function WelcomePage(props) {
  return (
    <div className="welcome-page">
      <IntroText />
      <GameStart
        onGameStart={props.onGameStart}
        whenStarted={props.whenStarted}
        whatGame={props.whatGame}
        gameId={props.gameId}
      />
    </div>
  );
}
