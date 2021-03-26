const { Spending } = require('../../../db/dbInit');

module.exports = async (req, res) => {
  try {
    const spending = await Spending.findOne({
      where: {
        spendingID: req.params.id,
        userID: req.params.userID,
      }
    });
    res.json(spending);
  } catch (err) {
    res.status(404).json('no spending with this id');
  }
};
