const router = require('express').Router();
const checkToken = require('./helpers/checkToken');

const getRecurrings = require('../controllers/recurrings/getRecurringsController');
const postRecurring = require('../controllers/recurrings/postRecurringController');
const deleteRecurring = require('../controllers/recurrings/deleteRecurringController');

router.get('/', checkToken, getRecurrings);
router.post('/', checkToken, postRecurring);
router.delete('/:id', checkToken, deleteRecurring);


// router.put('/:id', checkToken, (req, res) => {
//   RecurringSpending.findById(req.params.id)
//     .then(recurring => {
//       recurring.label = req.body.label;
//       recurring.amount = req.body.amount;
//
//       recurring.save()
//         .then(() => res.json('recurring spending updated'))
//         .catch(err => res.status(400).json(`Error: ${err}`));
//     });
// });

module.exports = router;
