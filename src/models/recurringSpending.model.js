const { DataTypes } = require('sequelize');

const Recurring = sequelize => sequelize.define('Recurring', {
  recurringId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  userId: {
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
  itemType: {
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
}, {
  timestamps: false,
});

module.exports = Recurring;
