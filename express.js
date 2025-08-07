const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Data send by browser =>) ", req.query.name); // if we have this query or request from client : 127.0.0.1:3000?name=moeez

  // we can also send that query or request from the server
  res.send("Welcome " + req.query.name);

  //   console.log("Hello World");
  //   res.send("<h1>Home page</h1>");
});

app.get("/about", (req, res) => {
  console.log("About Page");
  res.send("<h1>About page</h1>");
});

app.get("/blog", (req, res) => {
  console.log("Blog Page");
  res.send("<h1>Blog page</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on this port ${port}`);
});
