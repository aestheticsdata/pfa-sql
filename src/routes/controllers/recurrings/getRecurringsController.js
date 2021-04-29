const prisma = require('../../../db/dbInit');

module.exports = async (req, res) => {
  try {
    const recurrings = await prisma.recurrings.findMany({
      where: {
        AND: [
          { userID: req.query.userID },
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
    res.status(500).json(`Error : ${err}`);
  }
};
