"use strict";
var router = require('express').Router();
var checkToken = require('./helpers/checkToken');
var getDashboardController = require('../controllers/dashboard/getDashboardController');
var postDashboardController = require('../controllers/dashboard/postDashboardController');
var updateDashboardController = require('../controllers/dashboard/updateDashboardController');
router.get('/', checkToken, getDashboardController);
router.post('/', checkToken, postDashboardController);
router.put('/:id', checkToken, updateDashboardController);
module.exports = router;
// router.delete('/:id', checkToken, (req, res) => {
//   Dashboard.findById(req.params.id)
//     .then(
//       dashboard => dashboard.remove().then(
//         () => res.json({ success: true })
//       )
//     )
//     .catch(() => res.status(500).json({ success: false }));
// });
// module.exports = router;
