const { Recurring, sequelize } = require('../../../db/dbInit');
const { QueryTypes } = require('sequelize');
const { format, subMonths } = require('date-fns');
const { v1: uuidv1 } = require('uuid');

module.exports = async (req, res) => {
  const currentMonth = req.body.month.start;
  const dateFormat = 'yyyy-MM-dd';
  const previousMonthStart = format(subMonths(new Date(currentMonth), 1), dateFormat);
  try {
    const recurringsFromPreviousMonth = await sequelize.query(`
        SELECT label, amount, itemType, currency, userID
        FROM Recurrings
        WHERE dateFrom = '${previousMonthStart}'
          AND userID = '${req.body.userID}'
      `,
      { type: QueryTypes.SELECT }
    );
    const recurringsFromCurrentMonth = recurringsFromPreviousMonth.map(recurring => (
      {
        ID: uuidv1(),
        dateFrom: new Date(currentMonth),
        dateTo: new Date(req.body.month.end),
        ...recurring,
      })
    );
    await Recurring.bulkCreate(recurringsFromCurrentMonth);
    res.status(200).json({msg: 'recurrings copied'});
  } catch (err) {
    res.status(500).json('error copying recurring');
  }
};
