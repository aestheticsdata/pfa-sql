import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

module.exports = async (req, res) => {
  const { id: ID } = req.params;
  try {
    await prisma.categories.delete({ where: { ID: req.params.id } });
    // UPDATE Spendings SET categoryID = null WHERE categoryID = '${ID}';
    await prisma.spendings.update({
      where: {
        categoryID: ID,
      },
      data: {
        categoryID: null,
      }
    })
    res.json({ success: true });
  } catch (e) {
    res.status(500).json(e);
  }
};
