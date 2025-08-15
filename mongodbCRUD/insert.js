// import the mongodb.js file which is our db connection file
const dbConnect = require("./mongodb");

// insert single data/record in mongoDB
const insertOneData = async () => {
  const db = await dbConnect();
  // insert single record
  const result = await db.insertOne({
    name: "Note 5",
    brand: "Vivo",
    price: "$399",
    category: "Mobile",
  });
  console.log(result);

  if (result.acknowledged) {
    console.log("Data Inserted");
  }
};

// insert many data/records in mongoDB
// const insertManyData = async () => {
//   const db = await dbConnect();
//   // insert mutiple records
//   const result = await db.insertMany([
//     {
//       name: "Note 5",
//       brand: "Vivo",
//       price: "$399",
//       category: "Mobile",
//     },
//     {
//       name: "Note 6",
//       brand: "Vivo",
//       price: "$499",
//       category: "Mobile",
//     },
//     {
//       name: "Note 7",
//       brand: "Vivo",
//       price: "$599",
//       category: "Mobile",
//     },
//   ]);
//   console.log(result);

//   if (result.acknowledged) {
//     console.log("Data Inserted");
//   }
// };

insertOneData();

// insertManyData();
