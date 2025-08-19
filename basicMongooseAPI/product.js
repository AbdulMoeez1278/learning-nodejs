// Schemas or Models File// import mongoose module
const mongoose = require("mongoose");

// creating a schema  - specifying data types, validation rules
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

// creating a model - connect Node.js with MongoDB
module.exports = mongoose.model("products", productSchema); // products is a collection in e-com db

// // creating a model - connect Node.js with MongoDB
// const product = mongoose.model("products", productSchema); // products is a collection in e-com db

// // export the product
// module.exports = product;
