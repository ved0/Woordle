import { useState } from "react";
import TheGame from "./assets/components/the-game/TheGame";

function App() {
  return (
    <div className="the-app">
      <h1>Wannabe Wordle</h1>
        <TheGame />
    </div>
  );
}

export default App;
