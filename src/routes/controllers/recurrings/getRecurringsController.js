const { Recurring } = require('../../../db/dbInit');
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  try {
    const recurrings = await Recurring.findAll({
      where: {
        userID: req.query.userID,
        dateFrom: {
          [Op.eq]: req.query.start,
        }
      },
      order: [['amount', 'DESC']],
    });
    res.json(recurrings);
  } catch (err) {
    res.status(404).json(`Error : ${err}`);
  }
};
