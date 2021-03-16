const { DataTypes } = require('sequelize');
const sequelize  = require('../db/dbInit');

const Category = sequelize.define('Category', {
  category_id: {
    type: DataTypes.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
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
}, { timestamps: false });

module.exports = Category;

