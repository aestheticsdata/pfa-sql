const router = require('express').Router();
const checkToken = require('./helpers/checkToken');

const getDashboardController = require('../controllers/dashboard/getDashboardController');

router.get('/', checkToken, getDashboardController);

module.exports = router;

// router.get('/', checkToken, (req, res) => {
//   Dashboard.findOne({
//     createdBy: req.query.userID,
//     dateFrom: {"$eq": new Date(req.query.start)},
//   })
//     .then(dashboard => res.json(dashboard))
//     .catch(err => res.status(404).json(`Error : ${err}`));
// });
//
// router.post('/', checkToken, (req, res) => {
//   const {
//     start,
//     end,
//     amount,
//     userID,
//   } = req.body;
//
//   if (!amount || !start) {
//     return res.status(400).json({ msg: 'Please enter amount and a date' });
//   }
//
//   Dashboard.findOne({
//     createdBy: req.body.userID,
//     dateFrom: {"$eq": new Date(req.body.start)},
//   })
//     .then(dashboard => {
//       if (dashboard) {
//         dashboard.initialAmount = amount;
//         dashboard.save()
//           .then(() => res.json(dashboard))
//           .catch(err => res.status(400).json(`Error: ${err}`));
//       } else {
//         const newDashboard = new Dashboard({
//           dateFrom: start,
//           dateTo: end,
//           initialAmount: amount,
//           createdBy: userID,
//         });
//
//         newDashboard.save()
//           .then(dashboard => res.json(dashboard))
//           .catch(err => res.status(400).json(`Error: ${err}`));
//       }
//     })
//     .catch(err => res.status(400).json(err))
//
// });
//
// router.delete('/:id', checkToken, (req, res) => {
//   Dashboard.findById(req.params.id)
//     .then(
//       dashboard => dashboard.remove().then(
//         () => res.json({ success: true })
//       )
//     )
//     .catch(() => res.status(404).json({ success: false }));
// });
//
// router.put('/:id', checkToken, (req, res) => {
//   Dashboard.findById(req.params.id)
//     .then(dashboard => {
//       dashboard.label = req.body.date;
//       dashboard.initialAmount = req.body.initialAmount;
//
//       dashboard.save()
//         .then(() => res.json('dashboard spending updated'))
//         .catch(err => res.status(400).json(`Error: ${err}`));
//     });
// });
//
// module.exports = router;
