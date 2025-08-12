const express = require("express");
// import database file
const getData = require("./database");

// express app
const app = express();

const port = 8000;
const hostname = "127.0.0.1";

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
  console.log("Home Page");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
  console.log("About Page");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
  console.log("Contact Page");
});

// handling data from database and print the data on blog route
app.get("/blogs", async (req, res) => {
  try {
    const data = await getData(); // assuming getData is async
    res.send(data); // send the retrieved data
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Internal Server Error");
  }
  // res.send("<h1>Blog Page</h1>"); // does'nt work and crash the server as well
  console.log("Blog Page");
});

// create server
app.listen(port, hostname, () => {
  console.log(`Server is listening at ${hostname}:${port}`);
});
