const signIn = require('./helpers/signInHelper');
const bcrypt = require('bcryptjs');
const { User } = require('../../../db/dbInit');

module.exports = (req, res) => {
  const {
    name,
    email,
    password,
    baseCurrency,
    registerDate,
    language,
  } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({msg: 'Please enter all fields'});
  }

  User.findOne({where: {email}}).then(user => {
    if (user) {
      return res.status(400).json({message: 'Email already exists'});
    } else {
      const newUser = {
        name,
        email,
        password,
        baseCurrency,
        registerDate,
        language,
      };

      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error('There was an error during salt', err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.error('There was an error during hash', err);
            else {
              newUser.password = hash;
              User
                .create(newUser)
                .then(user => {
                  signIn(res, user);
                })
                .catch(err => res.status(400).json({message: `Error while saving new user: ${err}`}));
            }
          });
        }
      });
    }
  });
};


