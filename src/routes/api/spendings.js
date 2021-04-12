const router = require('express').Router();
const checkToken = require('./helpers/checkToken');

const getSpendingsController = require('../controllers/spendings/getSpendingsController');
const getSpendingController = require('../controllers/spendings/getSpendingController');
// const postSpendingController = require('../controllers/spendings/postSpendingController');
// const updateSpendingController = require('../controllers/spendings/updateSpendingController');
// const deleteSpendingController = require('../controllers/spendings/deleteSpendingController');

router.get('/', checkToken, getSpendingsController);
router.get('/:id', checkToken, getSpendingController);
// router.post('/', checkToken, postSpendingController);
// router.put('/:id', checkToken, updateSpendingController);
// router.delete('/:id', checkToken, deleteSpendingController);

module.exports = router;
