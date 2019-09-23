const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  registerDate: {
    type: Date,
    default: Date.now
  },
  language: {
    type: String,
    default: 'en',
  },
  baseCurrency: {
    type: String,
    // default: 'EUR',
  }
}, {timestamps: true});

module.exports = User = mongoose.model('user', UserSchema);