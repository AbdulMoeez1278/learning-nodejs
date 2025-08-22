// file upload using an API
const express = require("express"); // include express module
const multer = require("multer"); // include multer  module

// initialize an express as app || import the app in express
const app = express();

// multer function for file upload - middleware
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      // cb - callback function
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      // cb - callback function
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

const port = 5000; // initilaized the port
const hostname = "127.0.0.1"; // initialized the hostname

// use the uplaod function as an middleware in post route
app.post("/uploads", upload, (req, res) => {
  console.log("file uploaded");
  res.send("file uploaded");
});

// listening the server
app.listen(port, hostname, () => {
  console.log(`Server is listening on ${hostname}:${port}`);
});

// interview question
// can we upload files without multer function - YES but we have to use file system of nodejs and write some extra code
// multer is an easy way to upload files
