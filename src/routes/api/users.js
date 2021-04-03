const router = require('express').Router();
const signInController = require('../controllers/users/signInController');
const addUserController = require('../controllers/users/addUserController');
const resetPasswordController = require('../controllers/users/resetPasswordController');


router.post('/', signInController);
router.post('/add', addUserController);
router.post('/resetpassword', resetPasswordController);

module.exports = router;


// router.get('/all', checkToken, (req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });


// router.get('/:id', (req, res) => {
//   User.findById(req.params.id)
//     .then(user => res.json(user))
//     .catch(() => res.status(404).json('no user with this id'));
// });


// router.delete('/:id', (req, res) => {
//   User.findById(req.params.id)
//     .then(
//       user => user.remove().then(
//         () => res.json({ success: true })
//       )
//     )
//     .catch(() => res.status(404).json({ success: false }));
// });

// router.put('/:id', (req, res) => {
//   User.findById(req.params.id)
//     .then(user => {
//       user.language = req.body.lang;
//
//       user.save()
//         .then(() => res.json('User updated'))
//         .catch(err => res.status(400).json(`Error: ${err}`));
//     });
// });


