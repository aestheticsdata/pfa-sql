const mongoose = require('mongoose');

const SpendingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    default: null,
  },
  catID: {
    type: String,
    default: null,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }
}, {timestamps: true});

module.exports = Spending = mongoose.model('spending', SpendingSchema);
