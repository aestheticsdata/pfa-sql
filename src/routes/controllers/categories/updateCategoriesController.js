const { Category } = require('../../../db/dbInit');

module.exports = async (req, res) => {
  const {
    ID: categoryID,
    name,
    color,
    userID,
  } = req.body;

  try {
    const category = await Category.findByPk(categoryID);
    await category.update({
      name,
      color,
    });
    const categories = await Category.findAll({
      where: {
        userID,
      },
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(`Error : ${err}`);
  }
};
