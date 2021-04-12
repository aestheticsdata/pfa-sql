import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

module.exports = async (req, res) => {
  try {
    const recurrings = await prisma.recurrings.findMany({
      where: {
        AND: [
          { userID: req.query.userID},
          {
            dateFrom: { equals: new Date(req.query.start) }
          },
        ]
      },
      orderBy: {
        amount: 'desc',
      },
    });
    res.json(recurrings);
  } catch (err) {
    res.status(404).json(`Error : ${err}`);
  }
};
