import IntroText from "./IntroText";
import GameStart from "./GameStart";

export default function WelcomePage(props) {
  return props.gameState=="choosing"?(
    <div className="welcome-page">
      <IntroText />
      <GameStart
        setGameState={props.setGameState}
        setWordLength={props.setWordLength}
        setGameId={props.setGameId}
        wordLength={props.wordLength}
      />
    </div>
  ):("");
}
