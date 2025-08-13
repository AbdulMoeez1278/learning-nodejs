// Read Data from mongoDB
const { MongoClient } = require("mongodb"); // modern concept - first method official
// const MongoClient = require("mongodb").MongoClient; - second method

// mongodb path - connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// specifying database name
const database = "e-com";

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);

  return db.collection("products");
}

module.exports = dbConnect;
