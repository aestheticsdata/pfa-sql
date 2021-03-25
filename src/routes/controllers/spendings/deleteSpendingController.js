const { Spending } = require('../../../db/dbInit');

module.exports = async (req, res) => {
  try {
    await Spending.destroy({ where: { ID: req.params.id } });
    res.json({ success: true });
  } catch (err) {
    res.status(404).json({ success: false });
  }
};
