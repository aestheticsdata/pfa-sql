const router = require('express').Router();
let Spending = require('../../models/spending.model');

router.get('/', (req, res) => {
  Spending.find({
    createdBy: req.query.userID,
    date: {"$gte": new Date(req.query.from), "$lte": new Date(req.query.to)},
  })
    .sort({ date: 'asc' })
    .then(spendings => res.json(spendings))
    .catch(err => res.status(404).json(`Error : ${err}`));
});

router.get('/:id', (req, res) => {
  Spending.findById(req.params.id)
    .then(spending => res.json(spending))
    .catch(() => res.status(404).json('no spending with this id'));
});

router.post('/add', (req, res) => {
  const {
    date,
    label,
    amount,
    category,
    catID,
    currency,
    userID,
  } = req.body;

  if(!amount || !label) {
    return res.status(400).json({ msg: 'Please enter amount and label' });
  }

  const newSpending = new Spending({
    date,
    label,
    amount,
    category,
    currency,
    catID,
    createdBy: userID,
  });

  newSpending.save()
    .then(() => res.json('new spending added'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.delete('/:id', (req, res) => {
  Spending.findById(req.params.id)
    .then(
      spending => spending.remove().then(
        () => res.json({ success: true })
      )
    )
    .catch(() => res.status(404).json({ success: false }));
});

router.put('/:id', (req, res) => {
  Spending.findById(req.params.id)
    .then(spending => {
      spending.date = req.body.date;
      spending.label = req.body.label;
      spending.amount = req.body.amount;
      spending.category = req.body.category;
      spending.catID = req.body.catID;

      spending.save()
        .then(() => res.json('spending updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    });
});

module.exports = router;
