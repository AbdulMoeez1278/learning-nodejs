// PUT API
const express = require("express");
const dbConnect = require("../mongodbCRUD/mongodb"); // import mongodb.config file || mongodb.js file

// initialize an express app
const app = express();

// how to ensure that the data comes in nodejs or not - we use middleware
app.use(express.json());

const port = 5000; // initilaized the port
const hostname = "127.0.0.1"; // initialized the hostname

// PUT API Route - update data from postman to db
app.put("/", async (req, res) => {
  // embeding the database in PUT method || route || API
  let data = await dbConnect(); // db send a response in return - to handle that we use async/await

  // also use await because update method returns the promise as well
  // for dynamic data to update
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: req.body }
  );

  // for static data to update
  // let result = await data.updateOne({ name: "Iphone 13" },{ $set {price: "$1199"}});
  //   res.send(result); // sends the data from postman to mongodb database

  // prints the result on the terminal
  console.log(req.body);
  res.send({ result: "Updated" }); // dummy data
});

// if you want to update data through query parameters - like u want to change the name so we create this specific route for name
app.put("/:name", async (req, res) => {
  // embeding the database in PUT method || route || API
  let data = await dbConnect(); // db send a response in return - to handle that we use async/await

  // also use await because update method returns the promise as well
  // for dynamic data to update
  let result = await data.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );

  // prints the result on the terminal
  res.send({ result: "Updated" }); // dummy data
  console.log(req.body);
});

// listening the server
app.listen(port, hostname, () => {
  console.log(`Server is listening on ${hostname}:${port}`);
});
