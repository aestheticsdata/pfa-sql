const router = require('express').Router();
const checkToken = require('./helpers/checkToken');

const getRecurringsController = require('../controllers/recurrings/getRecurringsController');
const postRecurringController = require('../controllers/recurrings/postRecurringController');
const updateRecurringController = require('../controllers/recurrings/updateRecurringController');
const postCopyRecurrings = require('../controllers/recurrings/postCopyRecurrings');
const deleteRecurringController = require('../controllers/recurrings/deleteRecurringController');

router.get('/', checkToken, getRecurringsController);
router.post('/', checkToken, postRecurringController);
router.put('/:id', checkToken, updateRecurringController);
router.post('/copy', checkToken, postCopyRecurrings);
router.delete('/:id', checkToken, deleteRecurringController);

module.exports = router;
