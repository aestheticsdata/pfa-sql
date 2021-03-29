const { Recurring } = require('../../../db/dbInit');

module.exports = async (req, res) => {
  const {
    label,
    amount,
  } = req.body;

  try {
    const recurring = await Recurring.findByPk(req.params.id);
    await recurring.update({
      label,
      amount,
    });
    res.json({ success: true });
  } catch (err) {
    res.status(400).json(`Error updating recurring : ${err}`);
  }
};
