const { Spending, Category } = require('../../../db/dbInit');
const { v1: uuidv1 } = require('uuid');

module.exports = async (req, res) => {
  const {
    userID,
    date,
    label,
    amount,
    category,
    currency,
  } = req.body;

  const createSpending = async (newCategoryID = null) => {
    try {
      await Spending.create({
        spendingID: uuidv1(),
        userID,
        date,
        label,
        amount,
        categoryID: newCategoryID ?? category.ID,
        currency,
        itemType: 'spending',
      });
      res.json('new spending added');
    } catch (err) {
      res.status(400).json(`Error: ${err}`)
    }
  };

  if (!amount || !label) {
    return res.status(400).json({ msg: 'Please enter amount and label' });
  }

  if (category.ID === null && category.color !== null) {
    const newCategoryID = uuidv1();
    try {
      await Category.create({
        ID: newCategoryID,
        userID,
        name: category.name,
        color: category.color,
      });
      await createSpending(newCategoryID);
    } catch (err) {
      res.status(400).json(`Error creating new category: ${err}`);
    }
  } else {
    await createSpending();
  }
};
