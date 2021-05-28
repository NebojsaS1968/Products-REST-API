const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true }, // i opted for non numeric type for price since there is no mathematical calculations
  inStock: { type: Boolean, required: true },
  image: { type: String, required: true },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
