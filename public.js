const express = require("express");
const path = require("path");

const app = express();

// directory path
const publicPath = path.join(__dirname, "public");

// EJS template engine
app.set("view engine", "ejs");

const port = 5000; // specifies the port
const hostname = "127.0.0.1"; // specifies the hostname

// if we have to remove extentions from the url's then we don't have to use express.static method
// app.use(express.static(publicPath));

// we use app.get method with res.send file inside it, to remove the  extentions from the url's we have to use sendFile
app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`); // remove the extension from the URL + shows the static content
  console.log("Home Page");
});

// serve EJS file using dynamic routing - sending data from the server
app.get("/profile", (req, res) => {
  // create an object of a user to make the profile page dynamic
  const user = {
    name: "Moeez",
    email: "moeez@gmail.com",
    city: "Lahore",
    // iterating using loop
    skills: ["php", "js", "python", "node", "java"],
  };
  res.render("profile", { user }); // passed it as an object
  console.log("Profile Page");
});

app.get("/login", (req, res) => {
  res.render("Login");
});

// about page
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`); // remove the extension from the URL + shows the static content
  console.log("About Page");
});

// blog page
app.get("/blog", (req, res) => {
  res.sendFile(`${publicPath}/blog.html`); // remove the extension from the URL + shows the static content
  console.log("Blog Page");
});

// contact page
app.get("/contact", (req, res) => {
  res.sendFile(`${publicPath}/contact.html`); // remove the extension from the URL + shows the static content
  console.log("Contact Page");
});

// 404 page
// Express v5+ — valid wildcard - first method to use the *splat
// the term "splat" refers to the use of a wildcard character (*) in a route path to capture any sequence of characters that follow a certain point in the URL.
app.get("/*splat", (req, res) => {
  res.sendFile(`${publicPath}/404.html`); // remove the extension from the URL + shows the static content
  console.log("Page Not Found!");
});

// Express v5+ — valid wildcard - second method to use the *catchcall
// app.get("/*catchall", (req, res) => {
//   res.sendFile(`${publicPath}/404.html`);
//   console.log("Page Not Found!");
// });

// server listening the port
app.listen(port, hostname, () => {
  console.log(`Server is listening on ${hostname}:${port}`);
});
