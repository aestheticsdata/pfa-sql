const { Recurring } = require('../../../db/dbInit');
const { Spending } = require('../../../db/dbInit');
const { Op } = require("sequelize");
const startOfMonth = require('date-fns/startOfMonth');
const endOfMonth = require('date-fns/endOfMonth');
const format = require('date-fns/format');

module.exports = async (req, res) => {
  const { userID } = req.query;
  const start = new Date(format(startOfMonth(new Date(req.query.from)), 'yyyy-MM-dd'));
  const end = new Date(format(endOfMonth(new Date(req.query.from)), 'yyyy-MM-dd'));

  try {
    const recurringsSum = await Recurring.sum('amount', {
      where: {
        userID,
        dateFrom: start,
        dateTo: end,
      }
    });

    const spendingsSum = await Spending.sum('amount', {
      where: {
        userID,
        date: {
          [Op.between]: [start, end],
        },
      }
    });

    res.json({ spendingsSum, recurringsSum });
  } catch (err) {
    res.status(404).json(`Error : ${err}`);
  }
}
