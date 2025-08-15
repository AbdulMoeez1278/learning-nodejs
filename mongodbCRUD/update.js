// import the mongodb.js file which is our db connection file
const dbConnect = require("./mongodb");

// update single data/record in mongoDB
const updateOneData = async () => {
  let data = await dbConnect();
  // update single record
  let result = await data.updateOne(
    {
      name: "Note 5",
    },
    {
      $set: { name: "Max 5 Pro" },
    }
  );
  console.log(result);
};

// update many data/records in mongoDB
// const updateManyData = async () => {
//   let data = await dbConnect();
//   // update many records
//   let result = await data.updateMany(
//     {
//       name: "Note 5",
//     },
//     {
//       $set: { name: "Max 5 Pro" },
//     }
//   );
//   console.log(result);
// };

updateOnesData();

// updateManyData();
