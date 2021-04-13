const prisma = require('../../../db/dbInit');

module.exports = async (req, res) => {
  try {
    const dashboard = await prisma.dashboards.update({
      where: {
        ID: req.params.id,
      },
      data: {
        initialAmount: req.body.amount,
      },
    });
    res.json(dashboard);
  } catch (err) {
    res.status(500).json(`Error updating dashboard initial amount : ${err}`);
  }
}
