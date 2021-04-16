const prisma = require('../../../db/dbInit');


module.exports = async (model, ID, res) => {
  try {
    await model.delete({ where: { ID } });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json(`Error deleting recurring : ${err}`);
  }
};
