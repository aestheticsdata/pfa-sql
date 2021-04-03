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

  const createSpending = async (newCategoryID = null, existingCategory = null) => {
    try {
      await Spending.create({
        spendingID: uuidv1(),
        userID,
        date,
        label,
        amount,
        categoryID: newCategoryID ?? (existingCategory?.ID ?? category?.ID),
        currency,
        itemType: 'spending',
      });
      res.json('new spending added');
    } catch (err) {
      res.status(500).json(`Error: ${err}`)
    }
  };

  if (!amount || !label) {
    return res.status(400).json({ msg: 'Please enter amount and label' });
  }

  if (category.ID === null && category.color !== null) {
    // before creating a new category, we have to check if this user has already a category with this name
    const existingCategory = await Category.findOne({
      where : {
        userID,
        name: category.name
      }
    });
    if (existingCategory) {
      // créer un spending en refusant la creation d'une catégorie qui existe deja pour ce user
      await createSpending(null, existingCategory);
    } else {
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
        res.status(500).json(`Error creating new category: ${err}`);
      }
    }
  } else {
    // no category created, just create a spending
    await createSpending();
  }
};
