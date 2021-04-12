// const { Category } = require('../../../db/dbInit');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

module.exports = async (req, res) => {
  const {
    ID: categoryID,
    name,
    color,
    userID,
  } = req.body;

  try {
    const category = await prisma.categories.findUnique({ where: { ID: categoryID } });
    await category.update({
      name,
      color,
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
