const { DataTypes } = require('sequelize');

const Spending = sequelize => sequelize.define('Spending', {
  spendingId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  date: {
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
  categoryId: {
    type: DataTypes.UUID,
  },
  currency: {
    type: DataTypes.STRING(3),
  },
  // FOREIGN KEY (user_id) REFERENCES users(user_id),
  // FOREIGN KEY (category_id) REFERENCES categories(category_id)
}, {
  timestamps: false,
});

module.exports = Spending;
