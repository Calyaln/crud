const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  brand: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;

//  one product structure :  { name: "foo", brand: "bar", price: "200" },
