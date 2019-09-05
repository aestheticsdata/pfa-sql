const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const checkToken = require('./helpers/checkToken');

let User = require('../../models/user.model');


const signIn = (res, user) => {
  jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1m' },
    (err, token) => {
      if (err) throw err;
      // console.log('token : ', token);
      res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    })
};

router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if(!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'User Does not exist' });

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
          signIn(res, user);
        })
        .catch(err => res.status(400).json(`Error while getting user : ${err}`));
    })
});

router.get('/all', checkToken, (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(`Error: ${err}`));
});


router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(() => res.status(404).json('no user with this id'));
});

router.post('/add', (req, res) => {
  const { name, email, password, registerDate } = req.body;

  if(!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  User.findOne({
    email
  }).then(user => {
    if (user) {
      return res.status(400).json({ message: 'Email already exists' });
    } else {
      const newUser = new User({
        name,
        email,
        password,
        registerDate,
      });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) console.error('There was an error during salt', err);
        else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) console.error('There was an error during hash', err);
            else {
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  signIn(res, user);
                })
                .catch(err => res.status(400).json({message: `Error while saving new user: ${err}`}));
            }
          });
        }
      });
    }
  })

});

router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(
      user => user.remove().then(
        () => res.json({ success: true })
      )
    )
    .catch(() => res.status(404).json({ success: false }));
});

router.put('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.name = req.body.name;
      user.password = req.body.password;
      // user.registerDate = Date.parse(req.body.registerDate);

      user.save()
        .then(() => res.json('User updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    });
});

module.exports = router;
