import guessWord from "../src/game-logic/algorithmA.js";

describe("guessWord() - various inputs", () => {
  /*
  Testar så att två likadan ord ger tillabaka "correct" på varje bokstav.
  */
  test("Correct guess!", () => {
    const result = guessWord("word", "word");
    expect(result).toEqual([
      { letter: "w", result: "correct" },
      { letter: "o", result: "correct" },
      { letter: "r", result: "correct" },
      { letter: "d", result: "correct" },
    ]);
  });

  /*
  Testar så att två ord, utan gemensamma bokstäver, ger "incorrect" på varje bokstav.
  */
  test("No matching characters", () => {
    const result = guessWord("words", "hjälm");
    expect(result).toEqual([
      { letter: "w", result: "incorrect" },
      { letter: "o", result: "incorrect" },
      { letter: "r", result: "incorrect" },
      { letter: "d", result: "incorrect" },
      { letter: "s", result: "incorrect" },
    ]);
  });

  /*
  Testar så att bokstäver på "rätt" plats returerar "correct". Andra bokstäver som inte finns med i svaret blir "incorrect" och bokstäver som finns med i svaret, men är på fel plats, blir misplaced.
  */
  test("First character is on right position and two other characters are misplaced ", () => {
    const result = guessWord("flaskor", "frågade");
    expect(result).toEqual([
      { letter: "f", result: "correct" },
      { letter: "l", result: "incorrect" },
      { letter: "a", result: "misplaced" },
      { letter: "s", result: "incorrect" },
      { letter: "k", result: "incorrect" },
      { letter: "o", result: "incorrect" },
      { letter: "r", result: "misplaced" },
    ]);
  });

  /*
  Testar så att "rätta" bokstäver (dvs. samma plats och samma bokstav) returerar "correct" och deras dubbletter returera incorrect (ifall de inte upprepas i svaret). Bokstäver som finns med i svaret men på fel plats blir misplaced. De som inte finns blir incorrect.
  */
  test("Same character is both misplaced and on right positon => misplaced should be incorrect", () => {
    const result = guessWord("llcl", "call");
    expect(result).toEqual([
      { letter: "l", result: "incorrect" },
      { letter: "l", result: "misplaced" },
      { letter: "c", result: "misplaced" },
      { letter: "l", result: "correct" },
    ]);
  });

  /*
  Testar så att "rätta" bokstäver (dvs. samma plats och samma bokstav) returerar "correct" och deras dubbletter returera incorrect (ifall de inte upprepas i svaret). Bokstäver som finns med i svaret men på fel plats blir misplaced. De som inte finns blir incorrect.
  */
  test("Same character is both misplaced and on right positon => misplaced should be incorrect", () => {
    const result = guessWord("hallå", "cykla");
    expect(result).toEqual([
      { letter: "h", result: "incorrect" },
      { letter: "a", result: "misplaced" },
      { letter: "l", result: "incorrect" },
      { letter: "l", result: "correct" },
      { letter: "å", result: "incorrect" },
    ]);
  });

  /*
  Här testar jag när alla ord i gissningen finns med i svaret, men alla är på fel plats.
  Förväntas få tillbaka misplaced på alla.
  */
  test("Both words have the same characters, but they all are misplaced", () => {
    const result = guessWord("datskrevne", "enverkstad");
    expect(result).toEqual([
      { letter: "d", result: "misplaced" },
      { letter: "a", result: "misplaced" },
      { letter: "t", result: "misplaced" },
      { letter: "s", result: "misplaced" },
      { letter: "k", result: "misplaced" },
      { letter: "r", result: "misplaced" },
      { letter: "e", result: "misplaced" },
      { letter: "v", result: "misplaced" },
      { letter: "n", result: "misplaced" },
      { letter: "e", result: "misplaced" },
    ]);
  });
});
