const { Recurring } = require('../../../db/dbInit');

module.exports = async (req, res) => {
  console.log('userID : ', req.query.userID);
  try {
    const recurrings = await Recurring.findAll({
      where: { userID: req.query.userID },
      order: [['amount', 'DESC']],
    });
    res.json(recurrings);
  } catch (err) {
    res.status(404).json(`Error : ${err}`);
  }
};

