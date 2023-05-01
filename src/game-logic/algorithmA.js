export default function guessWord(guess, answer) {
  let answerInChar = answer.split("");
  let arrayToReturn = [];

  for (let i = 0; i < guess.length; i++) {
    const char = guess.charAt(i);
    if (answerInChar.includes(char)) {
      if (char === answer.charAt(i)) {
        arrayToReturn.push({ letter: char, result: "correct" });
        answerInChar.splice(answerInChar.indexOf(char), 1);
        if (!answerInChar.includes(char)) {
          arrayToReturn.filter((c) => {
            if (c.letter === char && c.result === "misplaced") {
              c.result = "incorrect";
            }
          });
        } else {
          for (
            let i = arrayToReturn.filter(
              (c) => c.letter == char && c.result == "misplaced"
            ).length;
            i > answerInChar.filter((c) => c == char).length;
            i--
          ) {
            const position = arrayToReturn.findIndex(
              (i) => i.letter == char && i.result == "misplaced"
            );
            arrayToReturn[position].result = "incorrect";
          }
        }
      } else {
        if (
          arrayToReturn.filter((c) => {
            return c.letter === char;
          }).length == answer.split("").filter((c) => c === char).length
        ) {
          arrayToReturn.push({ letter: char, result: "incorrect" });
        } else {
          arrayToReturn.push({ letter: char, result: "misplaced" });
        }
      }
    } else {
      arrayToReturn.push({ letter: char, result: "incorrect" });
    }
  }
  return arrayToReturn;
}
