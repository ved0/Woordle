import { useState, useEffect } from "react";

const Timer = (props) => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);

  const endTime = Date.now() + minutes * 60 * 1000 + 1000;


  const getTime = () => {
    const time = endTime - Date.now();
    if (time > 0) {
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    } else {
      props.setGameState("time is up");
      props.setMessage(
        "You ran out of time and you lost. \n You can always play another game!"
      );
      props.setAmountOfRows(1);
    }
  };


  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return props.gameState == "playing" ? (
    <div className="timer" role="timer">
      <span className="text">Time left</span>
      <p id="minute">{minutes < 10 ? "0" + minutes : minutes}:</p>
      <p id="second">{seconds < 10 ? "0" + seconds : seconds}</p>
    </div>
  ) : (
    ""
  );
};

export default Timer;
