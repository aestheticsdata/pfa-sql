const mongoose = require('mongoose');

const RecurringSpendingSchema = new mongoose.Schema({
  dateFrom: {
    type: Date,
    required: true,
  },
  dateTo: {
    type: Date,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  itemType: {
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
