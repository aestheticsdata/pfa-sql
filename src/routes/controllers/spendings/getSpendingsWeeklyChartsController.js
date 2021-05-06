const prisma = require('../../../db/dbInit');
const { format } = require('date-fns');

module.exports = async (req, res) => {
  const dateFormat = 'yyyy-MM-dd';
  const from = format(new Date(req.query.from), dateFormat);
  const to = format(new Date(req.query.to), dateFormat);
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
        LEFT JOIN Categories on TableTemp.categoryID = Categories.ID;
    `);
    res.status(200).json(chartsStats);
  } catch (e) {
    res.status(500).json({ msg: 'error while getting charts : ', e});
  }
};
