// rendering HTML and  JSON

const express = require("express");
const app = express();

const hostname = "127.0.0.1"; // specifies the hostname
const port = 3000; // specifies the port

app.get("/", (req, res) => {
  // console.log("Data send by browser =>) ", req.query.name); // if we have this query or request from client : 127.0.0.1:3000?name=moeez

  // we can also send that query or request from the server
  // res.send("Welcome " + req.query.name);

  console.log("Home Page");
  res.send(`<h1>Home page</h1>
    <a href="/about">About Page</a>
    `);
});

app.get("/about", (req, res) => {
  console.log("About Page");
  // res.send("<h1>About page</h1>");

  // rendering html
  // res.send(`
  //   <input type = "text" placeholder = "Enter your text" />
  //   <button>Click Me</button>
  // `);

  // Interview question  (<----
  // if we have to send or get the query parameters data inside the input tag
  res.send(`
    <input type = "text" placeholder = "Enter your text" value= "${req.query.name}" />
    <button>Click Me</button>
    `);
});

app.get("/blog", (req, res) => {
  console.log("Blog Page");
  res.send("<h1>Blog page</h1>");
});

app.get("/contact", (req, res) => {
  console.log("Contact Page");
  res.send("<h1>Contact Page</h1>");
});

// rendering json
app.get("/help", (req, res) => {
  res.send([
    {
      name: "Moeez",
      email: "moeez@gmail.com",
    },
    {
      name: "Sohaib",
      email: "sohaib@gmail.com",
    },
  ]);
});

// using slug
// app.get("/users/:userId/posts/:postId", (req, res) => {
//   const userId = req.params.userId; // Access the userId parameter
//   const postId = req.params.postId; // Access the postId parameter
//   // ... further processing using userId and postId
//   res.send(`User ID: ${userId}, Post ID: ${postId}`);
// });

app.listen(port, hostname, () => {
  console.log(`Server is listening on this port: ${hostname}:${port}`);
});
