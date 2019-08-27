const router = require('express').Router();
let User = require('../../models/user.model');

router.get('/', (req, res) => {
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

  const newUser = new User({
    name,
    email,
    password,
    registerDate,
  });

  newUser.save()
    .then(() => res.json('new user added'))
    .catch(err => res.status(400).json(`Error: ${err}`));
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
