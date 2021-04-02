const { sequelize, Category } = require('../../../db/dbInit');
const { QueryTypes } = require('sequelize');

module.exports = async (req, res) => {
  const { id: ID } = req.params;
  try {
    await Category.destroy({ where: { ID: req.params.id } });
    await sequelize.query(`
      UPDATE Spendings SET categoryID = null WHERE categoryID = '${ID}';
    `,
      { type: QueryTypes.SELECT}
    );
    res.json({ success: true });
  } catch (e) {
    return res.status(500).json(e);
  }
};
