// GET API
const express = require("express");
const dbConnect = require("../mongodbCRUD/mongodb"); // import mongodb.config file || mongodb.js file

// initialize an express app
const app = express();

const port = 5000; // initilaized the port
const hostname = "127.0.0.1"; // initialized the hostname

// GET API Route
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

// listening the server
app.listen(port, hostname, () => {
  console.log(`Server is listening on ${hostname}:${port}`);
});
