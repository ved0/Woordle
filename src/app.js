import express from "express";
import * as uuid from "uuid";
import { addHighscore, viewHighscore } from "./database/db.js";
import pickOneWord from "./game-logic/algorithmB.js";
import guessWord from "./game-logic/algorithmA.js";
import wordList from "./game-logic/wordList.js";

const app = express();
const GAMES = [];

app.set("view engine", "pug");
app.set("views", "./templates");

//för att starta spelet
app.post("/api/games", express.json(), (req, res) => {
  const word = pickOneWord(
    wordList,
    parseInt(req.body.wordLength),
    parseInt(req.body.uniqueChars) == 2 ? false : true
  );
  const game = {
    gameId: word.length > parseInt(req.body.wordLength) ? "404" : uuid.v4(),
    correctWord: word,
    guesses: [],
    startTime: new Date(),
  };
  /* För att testa spelet, vilket ord och gameID det är
  console.log(game.correctWord);
  console.log(game.gameId);
  */
  res.status(201).send(game.gameId);
  if (game.gameId == "404") {
    return;
  } else {
    GAMES.push(game);
  }
});

//för att gissa ordet
app.post("/api/games/:gameId/guesses", express.json(), (req, res) => {
  const game = GAMES.find(
    (existingGame) => existingGame.gameId == req.params.gameId
  );
  if (game.guesses.length < 6) {
    const guess = req.body.guess;
    let objectToReturn = {
      gameId: game.gameId,
      amountOfGuesses: game.guesses.length,
    };
    game.guesses.push(guess);
    if (guess.toLowerCase() == game.correctWord.toLowerCase()) {
      game.endTime = new Date();
      objectToReturn.time = (game.endTime - game.startTime) / 1000;
      objectToReturn.result = "won";
      res.status(201).send(objectToReturn);
    } else {
      res.status(201).send(guessWord(guess, game.correctWord));
    }
  } else {
    objectToReturn.result = "This game is over";
    res.status(400).send(objectToReturn);
  }
});

//för att posta highscore
app.post("/api/games/:gameId/highscore", express.json(), async (req, res) => {
  const game = GAMES.find(
    (existingGame) => existingGame.gameId == req.params.gameId
  );
  const highscore = {
    gameId: game.gameId,
    name: req.body.name,
    time: (game.endTime - game.startTime) / 1000,
    wordLength: game.correctWord.length,
    guesses: game.guesses.length,
  };
  await addHighscore(highscore);

  res
    .status(201)
    .send(
      "Spelet " +
        game.gameId +
        " spelaren " +
        req.body.name +
        " time 36s wordLength " +
        game.correctWord.length +
        "s   antalet gissningar " +
        game.guesses.length
    );
});

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/about", async (req, res) => {
  res.render("about");
});

app.get("/highscore", async (req, res) => {
  const temp = await viewHighscore();
  let highscores = temp
    .sort((a, b) => {
      if (a.wordLength == b.wordLength) {
        if (a.guesses == b.guesses) {
          return a.time - b.time;
        } else {
          return a.guess - b.guess;
        }
      } else {
        return b.wordLength - a.wordLength;
      }
    })
    .map((item) => item);
  if (highscores.length > 10) {
    highscores = highscores.slice(0, 10);
  }
  res.render("highscore", {
    highscores: highscores,
  });
});

app.use("/static", express.static("./static"));

export default app;
