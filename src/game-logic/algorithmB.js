export default function pickOneWord(wordList, wordLength, moreThanOnce) {
  let words = wordList.filter((word) => word.length === wordLength);
  let wordToReturn;
  let random;

  if (words.length == 0) {
    wordToReturn = "Välj ett ord med mindre tecken.";
  } else {
    if (moreThanOnce) {
      words = words.filter((word) => hasMoreThanOneOccurrence(word));
    } else {
      words = words.filter((word) => !hasMoreThanOneOccurrence(word));
    }
    if (words.length > 0) {
      random = Math.floor(Math.random() * words.length);
      wordToReturn = words[random];
    } else {
      wordToReturn = "Finns inget ord med detta kriterium.";
    }
  }
  return wordToReturn;
}

function hasMoreThanOneOccurrence(word) {
  const wordInChar = word.split("");
  let moreThanOnce = false;
  for (let i = 0; i < wordInChar.length; i++) {
    if (wordInChar.filter((c) => c === wordInChar[i]).length == 1) {
      continue;
    } else {
      moreThanOnce = true;
      break;
    }
  }
  return moreThanOnce;
}

//console.log(algoritmB(WORD_LIST, 8, false));
