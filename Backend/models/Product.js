const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String, required: true } // 👈 ADD THIS
});

module.exports = mongoose.model("Product", ProductSchema);
