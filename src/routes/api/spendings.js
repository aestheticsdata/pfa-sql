const router = require('express').Router();
const { Spending, Category, sequelize } = require('../../db/dbInit');
const checkToken = require('./helpers/checkToken');
const { QueryTypes } = require('sequelize');
const { v1: uuidv1 } = require('uuid');
const { format } = require('date-fns');


router.get('/', checkToken, (req, res) => {
  const dateFormat = 'yyyy-MM-dd';
  const from = format(new Date(req.query.from), dateFormat);
  const to = format(new Date(req.query.to), dateFormat);

  sequelize.query(`
      SELECT s.*, c.name as category, c.color as categoryColor
      FROM Spendings s
      LEFT JOIN Categories c ON s.categoryID = c.ID
      WHERE s.date BETWEEN '${from}' AND '${to}'
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

router.post('/', checkToken, (req, res) => {
  const {
    userID,
    date,
    label,
    amount,
    category,
    currency,
  } = req.body;

  const createSpending = (newCategoryID = null) => {
    console.log('create spending category : ', category);
    Spending.create({
      spendingID: uuidv1(),
      userID,
      date,
      label,
      amount,
      categoryID: newCategoryID ?? category.ID,
      currency,
      itemType: 'spending',
    })
      .then(() => res.json('new spending added'))
      .catch(err => res.status(400).json(`Error: ${err}`));
  }

  if (!amount || !label) {
    return res.status(400).json({ msg: 'Please enter amount and label' });
  }

  if (category.ID === null && category.color !== null) {
    const newCategoryID = uuidv1();

    Category.create({
      ID: newCategoryID,
      userID,
      name: category.name,
      color: category.color,
    })
      .then(() => {
        console.log('new category added');
        createSpending(newCategoryID);
      })
      .catch(err => res.status(400).json(`Error creating new category: ${err}`));
  } else {
    createSpending();
  }
});

router.put('/:id', checkToken, async (req, res) => {
  console.log('put req.body : ', req.body);
  const {
    userID,
    label,
    amount,
    id: spendingID,
    category: {
      ID: categoryID,
    },
  } = req.body;

  try {
    const currentSpending = await Spending.findByPk(spendingID);
    const spendingCurrentCategoryID = currentSpending.categoryID;
    const spending = await Spending.findByPk(spendingID);
    console.log('wtf spending : ', spending);

    if (categoryID !== null && spendingCurrentCategoryID !== categoryID) {
      const category = await Category.findByPk(categoryID);
      // les deux ids de categories sont differents alors
      // si la nouvelle catégorie existe deja, changer l'id category du spending
      if (categoryID === category.ID) {
        spending.update(
          {
            label,
            amount,
            categoryID,
          },
          { where: { ID: spendingID } },
        );
      } else {
        // si la nouvelle catégorie n'existe pas, créér la nouvelle catégorie, et mettre à jour l'id category du spending
        const newCategory = await Category.create({
          ID: uuidv1(),
          userID,
          name: category.name,
          color: category.color,
        });
        await Spending.update(
          {
            label,
            amount,
            categoryID: newCategory.ID,
          },
          { where: { ID: spendingID } },
        );
      }
    } else {
      // la catégorie est null
      // mettre à jourle label et/ou l'amount, et mettre à null l'id de la catégorie du spending
      if (categoryID === null) {
        if (color)
        await spending.update(
          {
            label,
            amount,
            categoryID,
          },
          {where: {ID: spendingID}},
        );
      } else {
        // mettre à jour le label et/ou l'amount du spending uniquement et ne pas toucher à la catégorie
        await spending.update(
          {
            label,
            amount,
          },
          { where: { ID: spendingID } },
        );
      }
    }
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(404).json({ success: false });
  }
});

router.delete('/:id', checkToken, (req, res) => {
  Spending.destroy({ where: { ID: req.params.id } })
    .then(() => res.json({ success: true }))
    .catch(() => res.status(404).json({ success: false }));
});

module.exports = router;
