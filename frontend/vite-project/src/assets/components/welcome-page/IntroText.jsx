export default function IntroText() {
  return (
    <div className="intro">
      <h3>How the game works</h3>
      <p>
        You start the game by choosing how long of a word you want to guess
        (E.g. table = 5 letters). <br></br>Additionally you choose if you want
        unique letters in the word or not (E.g. hand vs ball).<br></br>
        Press play and the game starts!
      </p>
      <h3>Game rules</h3>
      <p>
        The game has a timer set for 5 minutes and you get 6 chances to guess
        the word. <br></br>If the time runs out or you run out of guesses, the
        game is over.<br></br>
        Each time you submit a guess, you will recieve feedback for each letter
        in that guess.<br></br>
        If the letter is correct (in the word and on
        right place) it will become <span class="green">green</span>,<br></br>
        If the letter is missplaced (in the word,
        but on the wrong place) it will become  <span class="yellow">yellow</span>,<br></br>
        and if the letter is incorrect (not in the
        word), it will become <span class="red">red</span>.
      </p>
    </div>
  );
}
