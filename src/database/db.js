import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://Wordle:Testing123@firstcluster.hxneups.mongodb.net/Wordle",
  { useUnifiedTopology: true }
);

export async function addHighscore(highscore) {
  try {
    await client.connect();
    const result = await client
      .db("Wordle")
      .collection("highscores")
      .insertOne(highscore);
  } catch {
  } finally {
    await client.close();
  }
}

export async function viewHighscore() {
  try {
    await client.connect();
    const result = await client
      .db("Wordle")
      .collection("highscores")
      .find({})
      .toArray();
    return result;
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}
