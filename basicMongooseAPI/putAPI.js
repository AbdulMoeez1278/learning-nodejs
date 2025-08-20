// PUT API
const express = require("express");
require("./mongoConfig"); // import mongoConfig file

// import our Schemas or Models file
const product = require("./product");

// initialize an express as app || import the app in express
const app = express();

// how to ensure that the data comes in nodejs or not - we use middleware
app.use(express.json()); // parse the string data into json

const port = 5000; // initilaized the port
const hostname = "127.0.0.1"; // initialized the hostname

// PUT API Route - update data from postman to db
app.put("/update/:_id", async (req, res) => {
  // use updateOne() method to update the single product from the database
  let data = await product.updateOne(req.params, {
    $set: req.body,
  }); // updateOne() method also returns the promise - to handle that promise we use async/await

  // send the data as an response
  res.send(data); // read the data from mongodb database

  //   // prints the result on the terminal
  //   console.log(data);
});

// listening the server
app.listen(port, hostname, () => {
  console.log(`Server is listening on ${hostname}:${port}`);
});
