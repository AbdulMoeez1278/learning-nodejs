// CRUD operations using Mongoose in MongoDB

// import mongoose module
const mongoose = require("mongoose");

// connect to the database using mongoose for security
mongoose.connect("mongodb://localhost:27017/e-com");

// creating a schema  - specifying data types, validation rules
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

// SAVE/CREATE Operation in CRUD using Mongoose
// create an async function to handle data or send static data in database
const saveInDB = async () => {
  // creating a model - connect Node.js with MongoDB
  const product = mongoose.model("products", productSchema);

  // creating data of the product to database
  let data = new product({
    name: "Iphone 13",
    brand: "Apple",
    price: 1399,
    category: "Mobile",
  }); // create a new instance

  // returns a promise so used await
  let result = await data.save();
  console.log(result);
};

// calling a fuction
// saveInDB();

// READ Operation in CRUD using Mongoose
// find the data in mongodb database using mongoose
const findInDB = async () => {
  // creating a model - connect Node.js with MongoDB
  const product = mongoose.model("products", productSchema);

  // find product function
  let data = await product.find(
    { name: "Iphone 13" } // the product you want to find
  );
  console.log(data); // prints the result to the terminal
};

// findInDB();

// UPDATE Operation in CRUD using Mongoose
// update the data in mongodb database using mongoose
const updateInDB = async () => {
  // creating a model - connect Node.js with MongoDB
  const product = mongoose.model("products", productSchema);

  // update single product function
  let data = await product.updateOne(
    { name: "Iphone 13" }, // the product you want to update
    { $set: { price: 1299 } } // the product price you want to set
  );
  console.log(data); // prints the result to the terminal
};

// updateInDB();

// DELETE Operation in CRUD using Mongoose
// delete the data in mongodb database using mongoose
const deleteInDB = async () => {
  // creating a model - connect Node.js with MongoDB
  const product = mongoose.model("products", productSchema);

  // delete single product function
  let data = await product.deleteOne(
    { name: "Iphone 12" } // the product you want to delete
  );
  console.log(data); // prints the result to the terminal
};

// deleteInDB();
