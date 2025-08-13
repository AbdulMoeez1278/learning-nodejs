const { MongoClient } = require("mongodb"); // modern concept - first method official
// const MongoClient = require("mongodb").MongoClient; - second method

// mongodb path - connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// specifying database name
const database = "e-com";

async function getData() {
  let result = await client.connect();
  let db = result.db(database);

  let collection = db.collection("products");

  let response = await collection.find({}).toArray();
  console.log(response);

  // data get from the database
  return response;

  //custom data
  //   return [
  //     {
  //       //   _id: new ObjectId("689b77676b51b34eda982d16"),
  //       name: "Tecno Spark",
  //       brand: "Tecno",
  //       price: "$1200",
  //       category: "Mobile",
  //     },
  //   ];
}

// calling the function
// getData();

// handle the promises that returns the data from the database
// using promises
// getData().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

// using async function
// const main = async () => {
//   let data = await getData();
//   data = await data.find().toArray();
//   console.log(data);
//   // return data;
// };

// main();

// export file and import it mainServer.js file
module.exports = getData;
