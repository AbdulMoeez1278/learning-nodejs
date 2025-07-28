// Basic server
const http = require("http"); // http module handles the req and response data
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  const data = fs.readFileSync("data.txt", "utf8");
  res.end(data);

  //   res.write("<h1>Hello World!</h1>");
  //   res.write("<b>Abdul Moeez</b>");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening on 127.0.0.1:3000"); // server is listening at 127.0.0.1:3000 PORT
}); // createServer takes functions as a parameter

// Simple function --- if we create a function then pass it as a parameter in node
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
