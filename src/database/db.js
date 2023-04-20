import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://admin:41SGy9l9SbWhvBfr@firstcluster.hxneups.mongodb.net/Wordle"
);
/*
try {
  await client.connect();
  console.log("I am connected");
  const databases = await client.db().admin().listDatabases();
  console.log("databases");
  databases.databases.forEach((db) => {
    console.log(db.name);
  });
} catch {
  console.log("i am not");
} finally {
  console.log("closed");
  client.close();
}
*/

export async function addHighscore(highscore){
    try {
        await client.connect();
        const result = await client.db("Wordle").collection("highscores").insertOne(highscore);
        console.log(`new highscore added with the following id: ${result.insertedId}`);
    } catch {

    } finally {
        await client.close();
        console.log("connection closed!");
    }
    
}

export async function viewHighscore(){
    try {
    //    console.log("kommer jag hit");
        await client.connect();
    //    console.log("eller hit");
        const result = await client.db("Wordle").collection("highscores").find({}).toArray();
        return result;
    }  catch {

    } finally {
        await client.close();
   //     console.log("connection closed!");
    }
}