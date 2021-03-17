const { DataTypes } = require('sequelize');

const Dashboard = sequelize => sequelize.define('Dashboard', {
  user_id: {
    type: DataTypes.UUID,
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

