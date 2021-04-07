const { User } = require('../../../db/dbInit');

module.exports = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    user.language = req.body.lang;
    res.json('User updated');
  } catch (err) {
    res.status(500).json(err);
  }
};
