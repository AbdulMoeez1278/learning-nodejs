// middleware - first method
// module.exports = reqFilter = (req, res, next) => {
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

// middleware
const reqFilter = (req, res, next) => {
  //   console.log("reqFilter");

  // we have to check that user is entering their age or not
  if (!req.query.age) {
    res.send("Provide your age");
  } else if (req.query.age < 18) {
    res.send("You cannot access this page");
  } else {
    next();
  }
};

module.exports = reqFilter;
