import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", "./templates");

app.get("/", async (req,res) => {
    res.render('index');
});

app.get("/about", async (req,res) => {
	res.render('about');
});

app.get("/highscore", async (req,res) => {
	res.render('highscore');
});


app.use('/static', express.static('./static'));

export default app;