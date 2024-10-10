const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  ingredients: [{
    type: String
  }],
  price: {
    type: Number,
    required: true
  },
  averageRating: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Food', foodSchema);