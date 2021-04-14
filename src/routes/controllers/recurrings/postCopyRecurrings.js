const prisma = require('../../../db/dbInit');
const { format, subMonths } = require('date-fns');
const { v1: uuidv1 } = require('uuid');

module.exports = async (req, res) => {
  const currentMonth = req.body.month.start;
  const dateFormat = 'yyyy-MM-dd';
  const previousMonthStart = format(subMonths(new Date(currentMonth), 1), dateFormat);

  try {
    const recurringsFromPreviousMonth = await prisma.$queryRaw(`
        SELECT label, amount, itemType, currency, userID
        FROM Recurrings
        WHERE dateFrom = '${previousMonthStart}'
          AND userID = '${req.body.userID}';
      `
    );
    const recurringsFromCurrentMonth = recurringsFromPreviousMonth.map(recurring => (
      {
        ID: uuidv1(),
        dateFrom: new Date(currentMonth),
        dateTo: new Date(req.body.month.end),
        ...recurring,
      })
    );
    await prisma.recurrings.createMany({ data: recurringsFromCurrentMonth });
    res.status(200).json({msg: 'recurrings copied'});
  } catch (err) {
    res.status(500).json('error copying recurring : ', err);
  }
};
