const { sequelize } = require('../../../db/dbInit');
const { QueryTypes } = require('sequelize');
const { format } = require('date-fns');

module.exports = async (req, res) => {
  const dateFormat = 'yyyy-MM-dd';
  const from = format(new Date(req.query.from), dateFormat);
  const to = format(new Date(req.query.to), dateFormat);

  try {
    const spendings = await sequelize.query(`
        SELECT s.*, c.name as category, c.color as categoryColor
        FROM Spendings s
        LEFT JOIN Categories c ON s.categoryID = c.ID
        WHERE s.date BETWEEN '${from}' AND '${to}'
        ORDER BY date ASC`,
      {type: QueryTypes.SELECT}
    );
    res.json(spendings);
  } catch (err) {
    res.status(404).json(`Error : ${err}`);
  }
};

