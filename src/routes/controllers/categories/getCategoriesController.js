import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

module.exports = async (req, res) => {
  try {
    const categories = await prisma.categories.findUnique({
      where: {
        userID: req.query.userID,
      }
    });
    res.json(categories);
  } catch (err) {
    res.status(500).json(`Error : ${err}`);
  }
};
