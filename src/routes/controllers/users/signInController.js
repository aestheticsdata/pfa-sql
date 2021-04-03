const signIn = require('./helpers/signInHelper');
const bcrypt = require('bcryptjs');
const { User } = require('../../../db/dbInit');


module.exports = (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ where: { email } })
    .then(user => {
      if (!user) return res.status(400).json({ message: 'User Does not exist' });

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
          signIn(res, user);
        })
        .catch(err => res.status(400).json(`Error while getting user : ${err}`));
    })
};
