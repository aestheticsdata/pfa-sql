const { DataTypes } = require('sequelize');
const sequelize  = require('../db/dbInit');

const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER(11),
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(250),
    allowNull: false,
    unique: true,
  },
  register_date: {
    type: DataTypes.DATETIME,
  },
  language: {
    type: DataTypes.STRING(3),
    defaultValue: 'en',
  },
  baseCurrency: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
}, { timestamps: false });

module.exports = User;
