const { sequelize, Category } = require('../../../db/dbInit');
const { QueryTypes } = require('sequelize');

module.exports = async (req, res) => {
  const { id: ID } = req.params;
  try {
    await Category.destroy({ where: { ID: req.params.id } });
    await sequelize.query(`
      UPDATE Spendings SET categoryID = null WHERE categoryID = '${ID}';
    `,
      { type: QueryTypes.UPDATE}
    );
    res.json({ success: true });
  } catch (e) {
    res.status(500).json(e);
  }
};
