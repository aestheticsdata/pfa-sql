const mongoose = require('mongoose');

const RecurringSpendingSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: null,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }
}, {timestamps: true});

module.exports = RecurringSpending = mongoose.model('recurring_spending', RecurringSpendingSchema);
