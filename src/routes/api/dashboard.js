const router = require('express').Router();
const checkToken = require('./helpers/checkToken');

const getDashboardController = require('../controllers/dashboard/getDashboardController');
const postDashboardController = require('../controllers/dashboard/postDashboardController');
const updateDashboardController = require('../controllers/dashboard/updateDashboardController');

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
