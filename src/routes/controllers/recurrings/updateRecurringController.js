const prisma = require('../../../db/dbInit');


module.exports = async (req, res) => {
  const {
    label,
    amount,
  } = req.body;

  try {
    await prisma.recurrings.update({
      where: { ID: req.params.id},
      data: {
        label,
        amount,
      },
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json(`Error updating recurring : ${err}`);
  }
};
