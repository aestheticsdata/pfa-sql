const { Category } = require('../../../db/dbInit');

module.exports = async (req, res) => {
  const {
    ID: categoryID,
    name,
    color,
  } = req.body;

  try {
    const categories = await Category.findByPk(categoryID);
    await categories.update({
      name,
      color,
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(`Error : ${err}`);
  }
};
