// Read Data from mongoDB
const { MongoClient } = require("mongodb"); // modern concept - first method official
// const MongoClient = require("mongodb").MongoClient; - second method

// mongodb path - connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// specifying database name
const database = "e-com";

// // first method to create a function - simple function
// async function dbConnect() {
//   let result = await client.connect();
//   let db = result.db(database);

//   return db.collection("products");
// }

// second method to create a function - arrow function
const dbConnect = async () => {
  let result = await client.connect();
  let db = result.db(database);

  // specifying collection inside database
  return db.collection("products");
};

// export the file
module.exports = dbConnect;
