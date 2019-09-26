const router = require('express').Router();
let RecurringSpending = require('../../models/recurringSpending.model');
const checkToken = require('./helpers/checkToken');
const getMonth = require('date-fns/getMonth');
const getYear = require('date-fns/getYear');
const parseISO = require('date-fns/parseISO');

router.get('/', checkToken, (req, res) => {
  RecurringSpending.find({
    createdBy: req.query.userID,
  })
    .sort({ createdAt: 'asc' })
    .then(recurring => res.json(recurring))
    .catch(err => res.status(404).json(`Error : ${err}`));
});

router.post('/', checkToken, (req, res) => {
  const {
    date,
    label,
    amount,
    userID,
  } = req.body;

  if (!amount || !label) {
    return res.status(400).json({ msg: 'Please enter amount and label' });
  }

  const newRecurringSpending = new RecurringSpending({
    date,
    label,
    amount,
    createdBy: userID,
  });

  newRecurringSpending.save()
    .then(() => res.json('new recurring spending added'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.delete('/:id', checkToken, (req, res) => {
  RecurringSpending.findById(req.params.id)
    .then(
      recurring => recurring.remove().then(
        () => res.json({ success: true })
      )
    )
    .catch(() => res.status(404).json({ success: false }));
});

router.put('/:id', checkToken, (req, res) => {
  RecurringSpending.findById(req.params.id)
    .then(recurring => {
      recurring.label = req.body.label;
      recurring.amount = req.body.amount;

      recurring.save()
        .then(() => res.json('recurring spending updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    });
});

module.exports = router;