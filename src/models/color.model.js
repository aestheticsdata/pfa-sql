const mongoose = require('mongoose');

const ColorSchema = new mongoose.Schema({
  catID: {
    type: String,
    default: null,
  },
  color: {
    type: String,
  },
});

module.exports = Color = mongoose.model('color', ColorSchema);
