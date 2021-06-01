const signIn = require('./helpers/signInHelper');
const bcrypt = require('bcryptjs');
const prisma = require('../../../db/dbInit');
const { v1: uuidv1 } = require('uuid');


module.exports = async (req, res) => {
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

  try {
    let user = await prisma.users.findUnique({ where: { email } });
    if (user) { return res.status(400).json({ message: 'Email already exists' }); }

    const newUser = {
      ID: uuidv1(),
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
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
          if (err) console.error('There was an error during hash', err);
          else {
            console.log('user password', newUser.password);
            newUser.password = hash;
            user = await prisma.users.create({ data: newUser });
            signIn(res, user);
          }
        });
      }
    });
  } catch (err) {
    res.status(400).json({ message: `Error while saving new user: ${err}` });
  }
};



