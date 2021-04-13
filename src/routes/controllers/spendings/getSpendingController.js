import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

module.exports = async (req, res) => {
  try {
    const spending = await prisma.spengins.findUnique({
      where: {
        spendingID: req.params.id,
        userID: req.params.userID,
      }
    });
    res.json(spending);
  } catch (err) {
    res.status(404).json('no spending with this id');
  }
};
