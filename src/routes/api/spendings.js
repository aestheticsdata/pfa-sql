const router = require('express').Router();
const { Spending, Category, sequelize } = require('../../db/dbInit');
const checkToken = require('./helpers/checkToken');
const { Op, QueryTypes } = require('sequelize');
const { v1: uuidv1 } = require('uuid');


router.get('/', checkToken, (req, res) => {
    sequelize.query(`
        SELECT s.*, c.name, c.color
        FROM Spendings s
        LEFT JOIN Categories c ON s.categoryID = c.ID
        WHERE s.date BETWEEN '2021-03-13' AND '2021-03-15'
        ORDER BY date ASC`,
      { type: QueryTypes.SELECT }
    )
    .then(spendings => {console.log(spendings); res.json(spendings)})
    .catch(err => res.status(404).json(`Error : ${err}`));
});

router.get('/:id', checkToken, (req, res) => {
  Spending.findOne({
    where: { spendingID: req.params.id }
  })
    .then(spending => res.json(spending))
    .catch(() => res.status(404).json('no spending with this id'));
});

router.post('/', (req, res) => {
  const {
    userID,
    date,
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
