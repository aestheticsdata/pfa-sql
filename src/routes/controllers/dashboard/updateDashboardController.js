const { Dashboard } = require('../../../db/dbInit');

module.exports = async (req, res) => {
  try {
    const dashboard = await Dashboard.findByPk(req.params.id);
    await dashboard.update({
      initialAmount: req.body.amount,
    });
    res.json(dashboard);
  } catch (err) {
    res.status(500).json(`Error updating dashboard initial amount : ${err}`);
  }
}
