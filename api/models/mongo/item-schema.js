const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: false },
  stock: { type: Number, required: false },
  weight: { type: Number, required: false },
});

module.exports = itemSchema;
