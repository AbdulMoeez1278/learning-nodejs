// static data using Mongoose

// import mongoose module
const mongoose = require("mongoose");

// create an async function to handle the data in database
const main = async () => {
  // connect to the database using mongoose for security
  await mongoose.connect("mongodb://localhost:27017/e-com");

  // creating a schema  - specifying data types, validation rules
  const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
  });

  // creating a model - connect Node.js with MongoDB
  const productsModel = mongoose.model("products", productSchema);

  // send a custom data to the database
  //   let data = new productsModel({ name: "Iphone 13" });
  //   let result = await data.save();
  //   console.log(result);

  // if we create a Schema for just name and we are sending name and price to db - what will happen - only name will store in db because we create a Schema related to name not other fields

  // sending name and price of the product to database
  let data = new productsModel({
    name: "Iphone 13",
    brand: "Apple",
    price: 1399,
    category: "Mobile",
  }); // create a new instance
  let result = await data.save(); // returns a promise so used await
  console.log(result);
};

// calling a fuction
main();
