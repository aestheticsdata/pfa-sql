import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

module.exports = async (req, res) => {
  try {
    const dashboard = await prisma.dashboards.findFirst({
      where: {
        userID: req.query.userID,
        dateFrom: new Date(req.query.start),
      }
    });
    console.log(dashboard);
    res.json(dashboard);
  } catch (err) {
    res.status(500).json(`Error getting dashboard : ${err}`);
  }
};
