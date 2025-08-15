// import the mongodb.js file which is our db connection file
const dbConnect = require("./mongodb");

// read data from mongodb

// handle the promises that returns the data from the database

// using promises
// dbConnect().then((res) => {
//   res
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

// using async function
const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();
  console.log(data);
  // return data;
};

main();
