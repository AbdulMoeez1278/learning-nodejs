// Basic server
const http = require("http"); // in nodejs, http module handles the req and response of servers in nodejs
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const hostname = "127.0.0.1";

const server = http.createServer((req, res) => {
  let filePath = req.url === "/" ? "/index.html" : req.url;
  let ext = path.extname(filePath);
  let contentType = "text/html";

  switch (ext) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    // You can add more cases for images etc.
  }

  const fullPath = "." + filePath;
  fs.readFile(fullPath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("404 - File Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(PORT, hostname, () => {
  console.log("Listening on 127.0.0.1:3000"); // server is listening at 127.0.0.1:3000 PORT
}); // createServer takes functions as a parameter

// creating a server that is listening on server 3000 - Basic nodejs server
// http.createServer((req, res) => {
// res.write("NodeJS Learning");
// res.end();
// }).listen(3000);

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   const data = fs.readFileSync("index.html", "utf8");
//   res.end(data);

//   //   res.write("<h1>Hello World!</h1>");
//   //   res.write("<b>Abdul Moeez</b>");
// });

// Function as a parameter
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
