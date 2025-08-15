// import the mongodb.js file which is our db connection file
const dbConnect = require("./mongodb");

// delete single data/record in mongoDB
const deleteOneData = async () => {
  const data = await dbConnect();
  // delete the single record
  const result = await data.deleteOne({
    name: "Note 7",
  });
  if (result.acknowledged) {
    console.log("Record Delete");
  }
  console.log(result);
};

// delete many data/records in mongoDB
// const deleteManyData = async () => {
//   const data = await dbConnect();
//   // delete many records
//   const result = await data.deleteMany({
//     name: "Note 7",
//   });
//   if (result.acknowledged) {
//     console.log("Record Delete");
//   }
//   console.log(result);
// };

deleteOneData();
// deleteManyData();
