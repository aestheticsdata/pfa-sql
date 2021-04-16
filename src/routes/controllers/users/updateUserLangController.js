const prisma = require('../../../db/dbInit');


module.exports = async (req, res) => {
  try {
    const user = await prisma.users.findUnique({ where: {ID: req.params.id}});
    user.language = req.body.lang;
    res.json('User updated');
  } catch (err) {
    res.status(500).json(err);
  }
};
