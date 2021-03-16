const { DataTypes } = require('sequelize');
const sequelize  = require('../db/dbInit');

const Dashboard = sequelize.define('Dashboard', {
  user_id: {
    type: DataTypes.INTEGER(11),
    allowNull: false,
  },
  dateFrom: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  dateTo: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  initialAmount: {
    type: DataTypes.DECIMAL(6,2),
    allowNull: false,
  },
});

module.exports = Dashboard;

