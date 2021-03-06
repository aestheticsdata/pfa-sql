const prisma = require('../../../db/dbInit');


module.exports = async (req, res) => {
  try {
    const spending = await prisma.spendings.findUnique({
      where: {
        spendingID: req.params.id,
        userID: req.params.userID,
      }
    });
    res.json(spending);
  } catch (err) {
    res.status(500).json('no spending with this id');
  }
};
