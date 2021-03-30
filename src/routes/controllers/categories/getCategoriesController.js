const { Category } = require('../../../db/dbInit');

module.exports = async (req, res) => {
  try {
    const categories = await Category.findAll({
      where: {
        userID: req.query.userID,
      }
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(`Error : ${err}`);
  }
};
