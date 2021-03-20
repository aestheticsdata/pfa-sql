const router = require('express').Router();
const { Spending } = require('../../db/dbInit');
const checkToken = require('./helpers/checkToken');
const { Op } = require('sequelize');


router.get('/', checkToken, (req, res) => {
  Spending.findAll({
    where: {
      userId: req.query.userID,
      date: {
        [Op.between]: [new Date(req.query.from), new Date(req.query.to)],
      },
    },
    order: [['date', 'ASC']],
  })
    .then(spendings => res.json(spendings))
    .catch(err => res.status(404).json(`Error : ${err}`));
});

router.get('/:id', checkToken, (req, res) => {
  console.log('ici ca passe');
  Spending.findOne({
    where: { spendingId: req.params.id }
  })
    .then(spending => res.json(spending))
    .catch(() => res.status(404).json('no spending with this id'));
});

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
