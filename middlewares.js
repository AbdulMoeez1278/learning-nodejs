const express = require("express");
const reqFilter = require("./middleware2");
const app = express();

// routed middleware
const router = express.Router();

// if we have to use routed middleware than we have to access the middleware also
router.use(reqFilter);

// access middleware from a seperate file
// const reqFilter = require("./middleware2");

// middleware
// const reqFilter = (req, res, next) => {
//   //   console.log("reqFilter");

//   // we have to check that user is entering their age or not
//   if (!req.query.age) {
//     res.send("Provide your age");
//   } else if (req.query.age < 18) {
//     res.send("You cannot access this page");
//   } else {
//     next();
//   }
// };

// // application level middleware
// app.use(reqFilter);

// if we use a middleware to the single file routes or route-level middleware then we have to use it like this and to remove this app.use(reqFilter);
// app.get("/profile", reqFilter, (req, res) => {
//   res.send("Profile Page");
// }); // This is route - level middleware

// the application level middleware applies to the entire express application - so the routes that are written below, the middleware applied to all of them
app.get("/", (req, res) => {
  res.send("Home Page ");
});

app.get("/users", (req, res) => {
  res.send("Users Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

router.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.use("/", router); // router instance

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
