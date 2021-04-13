const prisma = require('../../../db/dbInit');


module.exports = async (req, res) => {
  try {
    const categories = await prisma.categories.findMany({
      where: {
        userID: req.query.userID,
      }
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(`Error : ${err}`);
  }
};
