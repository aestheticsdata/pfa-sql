const { DataTypes } = require('sequelize');

const Category = sequelize => sequelize.define('Category', {
  categoryId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
  },
  userID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  color:{
    type: DataTypes.STRING(20),
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Category;

