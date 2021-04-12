const router = require('express').Router();
const checkToken = require('./helpers/checkToken');

const getRecurringsController = require('../controllers/recurrings/getRecurringsController');
// const postRecurringController = require('../controllers/recurrings/postRecurringController');
// const updateRecurringController = require('../controllers/recurrings/updateRecurringController');
// const deleteRecurringController = require('../controllers/recurrings/deleteRecurringController');
// const postCopyRecurrings = require('../controllers/recurrings/postCopyRecurrings');

router.get('/', checkToken, getRecurringsController);
// router.post('/', checkToken, postRecurringController);
// router.post('/copy', checkToken, postCopyRecurrings);
// router.put('/:id', checkToken, updateRecurringController);
// router.delete('/:id', checkToken, deleteRecurringController);

module.exports = router;
