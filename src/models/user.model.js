const { DataTypes } = require('sequelize');

const User = sequelize => sequelize.define('User', {
  user_id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV1,
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
    type: DataTypes.DATE,
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
