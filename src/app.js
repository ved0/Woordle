import express from "express";
import * as uuid from "uuid";
import { addHighscore, viewHighscore } from "./database/db.js";
import pickOneWord from "./game-logic/algorithmB.js";
import guessWord from "./game-logic/algorithmA.js";
import wordList from "./wordList.js";

const app = express();
const GAMES = [];

app.set("view engine", "pug");
app.set("views", "./templates");

//för att starta spelet
app.post("/api/games", (req, res) => {
  const game = {
    gameId: uuid.v4(),
    correctWord: pickOneWord(wordList, 6, false),
    guesses: [],
    startTime: new Date(),
  };
  res.status(201).send(game);
  GAMES.push(game);
});

//för att gissa ordet
app.post("/api/games/:gameId/guesses", express.json(), (req, res) => {
  const game = GAMES.find(
    (existingGame) => existingGame.gameId == req.params.gameId
  );
  const guess = req.body.guess;
  game.guesses.push(guess);
  if (guess == game.correctWord) {
    game.endTime = new Date();
    res.status(201).send("Grattis du vann");
  } else {
    res.status(201).send(guessWord(guess, game.correctWord));
  }
});

//för att posta highscore
app.post("/api/games/:gameId/highscore", express.json(), async (req, res) => {
  const game = GAMES.find(
    (existingGame) => existingGame.gameId == req.params.gameId
  );
  /* to be used instead
  const highscore = {
    name: req.body.name,
    time: endTime - startTime,
    wordLength: game.correctWord.length,
    guesses: game.guesses.length,
  };*/
  const highscore = {
    gameId: game.gameId,
    name: "Vedad",
    time: 38,
    wordLength: 6,
    guesses: 3,
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
        " antalet gissningar " +
        game.guesses.length
    );
});

app.get("/api/highscores", async (req, res) => {
  viewHighscore();
  res.status(201).send("Need to fix this");
});

app.get("/", async (req, res) => {
  res.render("index");
});

app.get("/about", async (req, res) => {
  res.render("about");
});

app.get("/highscore", async (req, res) => {
  res.render("highscore");
});

app.use("/static", express.static("./static"));

export default app;