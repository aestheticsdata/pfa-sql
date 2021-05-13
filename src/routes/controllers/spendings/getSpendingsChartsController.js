const prisma = require('../../../db/dbInit');
const dateFormatter = require('./helpers/dateFormatter');

module.exports = async (req, res) => {
  const {
    from,
    to,
  } = dateFormatter(req);

  try {
    const chartsStats = await prisma.$queryRaw(`
      SELECT amount as value, name as label, color as bgcolor
      FROM 
        (
          SELECT categoryID, SUM(amount) as amount
          FROM Spendings
          LEFT JOIN Categories ON Spendings.categoryID = Categories.ID
          WHERE Spendings.userID = '${req.query.userID}'
          AND Spendings.date BETWEEN '${from}' AND '${to}'
          GROUP BY categoryID
        ) as TableTemp
        LEFT JOIN Categories on TableTemp.categoryID = Categories.ID
        ORDER BY amount DESC;
    `);
    res.status(200).json(chartsStats);
  } catch (e) {
    res.status(500).json({ msg: 'error while getting charts : ', e});
  }
};
