const express = require("express");
const jwt = require("jsonwebtoken");
const secretKey = "secretkey";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "A sample API",
  });
});

// login API Route
app.post("/login", (req, res) => {
  const user = {
    id: 1,
    username: "Abdul Moeez",
    email: "moeez@gmail.com",
  };
  jwt.sign({ user }, secretKey, { expiresIn: "300s" }, (err, token) => {
    res.json({
      token,
    });
  });
});

// profile API Route
app.post("/profile", verifyToken, (req, res) => {
  // verifying the token using verify() method
  jwt.verify(req.token, secretKey, (err, authData) => {
    if (err) {
      res.send({
        result: "Invalid Token",
      });
    } else {
      res.json({
        message: "Profile Accessed",
        authData,
      });
    }
  });
});

// middleware function - to get the incoming JWT token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.send({
      result: "Token is not valid",
    });
  }
}

app.listen(5000, () => {
  console.log("App is running on 5000 port");
});
