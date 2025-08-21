// Search API
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

// SEARCH API Route - search single or multiple field data from postman to db
app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);

  // find() method returns a promise so we use async/await to handle the data
  let data = await product.find({
    // for multiple field search
    $or: [
      { name: { $regex: req.params.key } }, // for single field search
      { brand: { $regex: req.params.key } },
      { price: { $regex: req.params.key } },
      { category: { $regex: req.params.key } },
    ],
  });
  res.send(data);
});

// listening the server
app.listen(port, hostname, () => {
  console.log(`Server is listening on ${hostname}:${port}`);
});

// interview question
// can we use POST, PUT or DELETE method to search the fields - YES but they have their own purpose like POST: send data, PUT: update data, DELETE: for deleting the data
