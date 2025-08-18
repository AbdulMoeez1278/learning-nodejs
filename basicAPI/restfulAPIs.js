// GET API
const express = require("express");
const dbConnect = require("../mongodbCRUD/mongodb"); // import mongodb.config file || mongodb.js file
const mongodb = require("mongodb"); // use mongodb module

// initialize an express app
const app = express();

const port = 5000; // initilaized the port
const hostname = "127.0.0.1"; // initialized the hostname

// GET API Route - read data from database usig postman
app.get("/", async (req, res) => {
  // embeding the database in GET method || route || API
  let data = await dbConnect(); // db send a response in return - to handle that we use async/await
  data = await data.find({}).toArray(); // also use await because it returns the promise as well
  console.log(data);

  // send the db data || respone to the Home route
  res.send(data); // sends the database data in json format

  console.log("Home Page");
  //   res.send("<h1>Home Page</h1>");
});

// POST API Route - send data from postman to db
app.post("/", async (req, res) => {
  // embeding the database in POST method || route || API
  let data = await dbConnect(); // db send a response in return - to handle that we use async/await

  let result = await data.insertOne(req.body); // also use await because insert method returns the promise as well
  res.send(result); // sends the data from postman to mongodb database

  // prints the result on the terminal
  console.log(req.body);
});

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
