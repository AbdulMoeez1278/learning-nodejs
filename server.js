// Basic server
const http = require("http"); // http module handles the req and response data

http
  .createServer((req, res) => {
    res.write("<h1>Hello World!</h1>");
    res.end();
  })
  .listen(4500); // createServer takes functions as a parameter

// Simple function - if we create a function then pass it as a parameter in node
// function dataControl(req, res) {
//   res.write("<h1>Abdul Moeez</h1>");
//   res.end();
// }

// http.createServer(dataControl).listen(4500);

// Arrow function - if we create a function then pass it as a parameter in node
// const dataControl = (req, res) => {
//   res.write("<h1>Abdul Moeez</h1>");
//   res.end();
// }

// http.createServer(dataControl).listen(4500);

// interview question
// 1. function as a parameter in Node
// 2. arrow function
// 3. what http module handle in Node
