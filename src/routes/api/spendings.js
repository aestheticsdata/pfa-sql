const router = require('express').Router();
const { Spending } = require('../../db/dbInit');

router.post('/', (req, res) => {
  const {
    spendingId,
    userId,
    date,
    itemType,
    label,
    amount,
    categoryId,
    currency,
  } = req.body;


  if (!amount || !label) {
    return res.status(400).json({ msg: 'Please enter amount and label' });
  }

  Spending.create(
    {
      spendingId,
      userId,
      date,
      itemType,
      label,
      amount,
      categoryId,
      currency,
    }
  )
    .then(() => res.json('new spending added'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'everything is allright for get'});
})

module.exports = router;
