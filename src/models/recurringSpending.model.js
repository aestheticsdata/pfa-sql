const { DataTypes } = require('sequelize');
const sequelize  = require('../db/dbInit');

const Recurring = sequelize.define('Recurring', {
  recurring_id: {
    type: DataTypes.INTEGER(11),
    autoIncrement: true,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  date_from: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  date_to: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  item_type: {
    type: DataTypes.STRING(11),
    allowNull: false,
  },
  label: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(6,2),
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING(3),
  },
  // FOREIGN KEY (user_id) REFERENCES users(user_id),
}, { timestamps: false });

module.exports = Recurring;
