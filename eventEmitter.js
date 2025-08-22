// Event & EventEmitters
const express = require("express");
const EventEmitter = require("events");

const app = express();

// create a new event object
const event = new EventEmitter();

// declare a variable
let count = 0;

// capture the event - event handler
event.on("countAPI", () => {
  count++;
  console.log("Event called", count);
});

app.get("/", (req, res) => {
  res.send("API Called");
  event.emit("countAPI"); // event generation
});

app.get("/search", (req, res) => {
  res.send("Search API Called");
  event.emit("countAPI"); // event generation
});

app.get("/update", (req, res) => {
  res.send("Update API Called");
  event.emit("countAPI"); // event generation
});

app.listen(5000);
