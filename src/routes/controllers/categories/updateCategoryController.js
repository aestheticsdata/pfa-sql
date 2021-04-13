const prisma = require('../../../db/dbInit');


module.exports = async (req, res) => {
  const {
    ID: categoryID,
    name,
    color,
    userID,
  } = req.body;

  try {
    await prisma.categories.update({
      where: { ID: categoryID },
      data: {
        name,
        color,
      },
    });
    const categories = await prisma.categories.findMany({
      where: {
        userID,
      },
    });
    res.json(categories);
  } catch (err) {
    return res.status(500).json(err);
  }
};
