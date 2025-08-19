// POST API
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

// POST API Route - send data from postman to db
app.post("/create", async (req, res) => {
  //   // embeding the database in POST method || route || API
  let data = new product(req.body); // db send a response in return - to handle that we use async/await

  // save our data to database using save function
  let result = await data.save(); //  use await because save() method returns the promise as well
  res.send(result); // sends the data from postman to mongodb database

  //   // prints the result on the terminal
  //   console.log(result);
});

// listening the server
app.listen(port, hostname, () => {
  console.log(`Server is listening on ${hostname}:${port}`);
});
