// DELETE API
const express = require("express");
const dbConnect = require("../mongodbCRUD/mongodb"); // import mongodb.config file || mongodb.js file
const mongodb = require("mongodb"); // use mongodb module

// initialize an express app
const app = express();

// how to ensure that the data comes in nodejs or not - we use middleware
app.use(express.json());

const port = 5000; // initilaized the port
const hostname = "127.0.0.1"; // initialized the hostname

// DELETE API Route - delete data from postman to db
app.delete("/:id", async (req, res) => {
  // embeding the database in DELETE method || route || API
  let data = await dbConnect(); // db send a response in return - to handle that we use async/await

  let result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  }); // also use await because insert method returns the promise as well
  res.send(result); // delete data from postman to mongodb database

  // prints the result on the terminal
  console.log(result);
});

// listening the server
app.listen(port, hostname, () => {
  console.log(`Server is listening on ${hostname}:${port}`);
});
