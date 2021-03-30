const { Recurring } = require('../../../db/dbInit');
const { v1: uuidv1 } = require('uuid');

module.exports = async (req, res) => {
  const {
    userID,
    start: dateFrom,
    end: dateTo,
    label,
    amount,
    currency,
  } = req.body;

  if (!amount || !label) {
    return res.status(400).json({ msg: 'Please enter amount and label' });
  }

  try {
    await Recurring.create({
      ID: uuidv1(),
      userID,
      dateFrom,
      dateTo,
      label,
      amount,
      currency,
      itemType: 'recurring',
    });
    res.json('new category added');
  } catch (err) {
    res.status(500).json(`Error creating new recurring: ${err}`);
  }
};
