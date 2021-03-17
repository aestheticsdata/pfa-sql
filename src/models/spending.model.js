const { DataTypes } = require('sequelize');

const Spending = sequelize => sequelize.define('Spending', {
  spending_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  date: {
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
  category_id: {
    type: DataTypes.INTEGER(11),
  },
  currency: {
    type: DataTypes.STRING(3),
  },
  // FOREIGN KEY (user_id) REFERENCES users(user_id),
  // FOREIGN KEY (category_id) REFERENCES categories(category_id)
}, { timestamps: false });

module.exports = Spending;
