const router = require('express').Router();
const Spending = require('../../models/spending.model')

router.post('/', (req, res) => {
  const {
    spending_id,
    user_id,
    date,
    item_type,
    label,
    amount,
    category_id,
    currency,
  } = req.body;


  if (!amount || !label) {
    return res.status(400).json({ msg: 'Please enter amount and label' });
  }

  Spending.create(
    {
      spending_id,
      user_id,
      date,
      item_type,
      label,
      amount,
      category_id,
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
