// POST API
const express = require("express");
const dbConnect = require("../mongodbCRUD/mongodb"); // import mongodb.config file || mongodb.js file

// initialize an express app
const app = express();

// how to ensure that the data comes in nodejs or not - we use middleware
app.use(express.json());

const port = 5000; // initilaized the port
const hostname = "127.0.0.1"; // initialized the hostname

// POST API Route - send data from postman to db
app.post("/", async (req, res) => {
  // embeding the database in POST method || route || API
  let data = await dbConnect(); // db send a response in return - to handle that we use async/await

  let result = await data.insertOne(req.body); // also use await because insert method returns the promise as well
  res.send(result); // sends the data from postman to mongodb database

  // prints the result on the terminal
  console.log(req.body);
});

// listening the server
app.listen(port, hostname, () => {
  console.log(`Server is listening on ${hostname}:${port}`);
});
