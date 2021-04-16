const prisma = require('../../../db/dbInit');
const { v1: uuidv1 } = require('uuid');

module.exports = async (req, res) => {
  const {
    start,
    end,
    amount,
    userID,
  } = req.body;

  let dashboard;

  if (!amount || !start) {
    return res.status(400).json({ msg: 'Please enter amount and a date' });
  }

  try {
    dashboard = await prisma.dashboards.findFirst({
      where: {
        userID,
        dateFrom: new Date(req.body.start),
      }
    });
    if (dashboard) {
      await prisma.dashboards.update({
        where: { ID: dashboard.ID },
        data: {
          initialAmount: amount,
        },
      });
    } else {
      dashboard = await prisma.dashboards.create({
        data: {
          ID: uuidv1(),
          dateFrom: new Date(start),
          dateTo: new Date(end),
          initialAmount: amount,
          userID,
        },
      });
    }
    res.json(dashboard);
  } catch (err) {
    res.status(400).json(`dashboard error : ${err}`);
  }
};

