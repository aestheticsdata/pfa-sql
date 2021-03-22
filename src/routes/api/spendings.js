const router = require('express').Router();
const { Spending, Category } = require('../../db/dbInit');
const checkToken = require('./helpers/checkToken');
const { Op } = require('sequelize');
const { v1: uuidv1 } = require('uuid');


router.get('/', checkToken, (req, res) => {
  Spending.findAll({
    where: {
      userID: req.query.userID,
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
    where: { spendingID: req.params.id }
  })
    .then(spending => res.json(spending))
    .catch(() => res.status(404).json('no spending with this id'));
});

router.post('/', (req, res) => {
  console.log('spending post req.body : ', req.body);
  const {
    userID,
    date,
    itemType,
    label,
    amount,
    category,
    currency,
  } = req.body;

  const createSpending = () => {
    Spending.create({
      spendingID: uuidv1(),
      userID,
      date,
      label,
      amount,
      categoryID: category.ID,
      currency,
      itemType: 'spending',
    })
      .then(() => res.json('new spending added'))
      .catch(err => res.status(400).json(`Error: ${err}`));
  }

  if (!amount || !label) {
    return res.status(400).json({ msg: 'Please enter amount and label' });
  }

  if (category.ID === null) {
    Category.create({
      ID: uuidv1(),
      userID,
      name: category.name,
      color: category.color,
    })
      .then(() => {
        console.log('new category added');
        createSpending();
      })
      .catch(() => res.status(400).json(`Error creating new category: ${err}`));
  } else {
    createSpending();
  }
});

router.get('/', (req, res) => {
  res.status(200).json({ msg: 'everything is allright for get'});
})

module.exports = router;
