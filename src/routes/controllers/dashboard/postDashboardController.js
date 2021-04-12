// const { Dashboard } = require('../../../db/dbInit');
// const { v1: uuidv1 } = require('uuid');
//
// module.exports = async (req, res) => {
//   const {
//     start,
//     end,
//     amount,
//     userID,
//   } = req.body;
//
//   let dashboard;
//
//   if (!amount || !start) {
//     return res.status(400).json({ msg: 'Please enter amount and a date' });
//   }
//
//   try {
//     dashboard = await Dashboard.findOne({
//       where: {
//         userID,
//         dateFrom: new Date(req.body.start),
//       }
//     });
//     if (dashboard) {
//       await dashboard.update({
//         initialAmount: amount,
//       });
//     } else {
//       dashboard = await Dashboard.create({
//         ID: uuidv1(),
//         dateFrom: start,
//         dateTo: end,
//         initialAmount: amount,
//         userID,
//       });
//     }
//     res.json(dashboard);
//   } catch (err) {
//     res.status(400).json(`dashboard error : ${err}`);
//   }
// };
//
