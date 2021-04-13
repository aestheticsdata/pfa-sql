const prisma = require('../../../db/dbInit');

const startOfMonth = require('date-fns/startOfMonth');
const endOfMonth = require('date-fns/endOfMonth');
const format = require('date-fns/format');


module.exports = async (req, res) => {
  const { userID } = req.query;
  const start = new Date(format(startOfMonth(new Date(req.query.from)), 'yyyy-MM-dd'));
  const end = new Date(format(endOfMonth(new Date(req.query.from)), 'yyyy-MM-dd'));

  try {
    const recurringsSum = await prisma.recurrings.aggregate({
      sum: {
        amount: true,
      },
      where: {
        userID,
        dateFrom: start,
        dateTo: end,
      },
    })

    const spendingsSum = await prisma.spendings.aggregate({
      sum: {
        amount: true,
      },
      where: {
        userID,
        date: {
          gte: start,
          lte: end,
        }
      }
    })

    res.json({ spendingsSum, recurringsSum });
  } catch (err) {
    res.status(500).json(`Error : ${err}`);
  }
}
