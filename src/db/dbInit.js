// const Sequelize = require('sequelize');
//
// const UserModel = require('../models/user.model');
// const SpendingModel = require('../models/spending.model');
// const RecurringModel = require('../models/recurringSpending.model');
// const CategoryModel = require('../models/category.model');
// const DashboardModel = require('../models/dashboard.model');
//
// require('dotenv').config();
//
// const dbConfig = {
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
// };
//
// const sequelize = new Sequelize(
//   process.env.DB,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.HOST,
//     dialect: dbConfig.dialect,
//     // logging: (...msg) => console.log(msg),
//
//     pool: {
//       max: dbConfig.pool.max,
//       min: dbConfig.pool.min,
//       acquire: dbConfig.pool.acquire,
//       idle: dbConfig.pool.idle
//     }
//   }
// );
//
// const User = UserModel(sequelize);
// const Category = CategoryModel(sequelize);
// const Spending = SpendingModel(sequelize);
// const Recurring = RecurringModel(sequelize);
// const Dashboard = DashboardModel(sequelize);
//
// (async () => {
//   try {
//     await sequelize.sync();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();
//
// module.exports = {
//   User,
//   Spending,
//   Recurring,
//   Category,
//   Dashboard,
//   sequelize,
// };
//
