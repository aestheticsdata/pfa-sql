const signIn = require('./helpers/signInHelper');
const bcrypt = require('bcryptjs');
const prisma = require('../../../db/dbInit');


module.exports = async (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  try {
    const user = await prisma.users.findUnique({ where: { email } })
    if (!user) return res.status(400).json({ message: 'User Does not exist' });

    // Validate password
    const isMatchPassword = await bcrypt.compare(password, user.password);
    if (!isMatchPassword) return res.status(400).json({ message: 'Invalid credentials' });
    signIn(res, user);

  } catch (err) {
    res.status(400).json(`Error while getting user : ${err}`)
  }
};
