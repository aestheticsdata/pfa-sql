const mongoose = require('mongoose');

const DashboardSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  initialAmout: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  }
}, {timestamps: true});

module.exports = Dashboard = mongoose.model('dashboard', DashboardSchema);
