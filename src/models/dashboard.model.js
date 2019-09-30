const mongoose = require('mongoose');

const DashboardSchema = new mongoose.Schema({
  dateFrom: {
    type: Date,
    required: true,
  },
  dateTo: {
    type: Date,
    required: true,
  },
  initialAmount: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }
}, {timestamps: true});

module.exports = Dashboard = mongoose.model('dashboard', DashboardSchema);
