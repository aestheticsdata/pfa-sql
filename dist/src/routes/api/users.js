"use strict";
var router = require('express').Router();
var signInController = require('../controllers/users/signInController');
var addUserController = require('../controllers/users/addUserController');
var resetPasswordController = require('../controllers/users/resetPasswordController');
var updateUserLangController = require('../controllers/users/updateUserLangController');
var checkToken = require('./helpers/checkToken');
router.post('/', signInController);
router.post('/add', addUserController);
router.post('/resetpassword', resetPasswordController);
router.put('/:id', checkToken, updateUserLangController);
module.exports = router;
// router.get('/all', checkToken, (req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });
// router.get('/:id', (req, res) => {
//   User.findById(req.params.id)
//     .then(user => res.json(user))
//     .catch(() => res.status(500).json('no user with this id'));
// });
// router.delete('/:id', (req, res) => {
//   User.findById(req.params.id)
//     .then(
//       user => user.remove().then(
//         () => res.json({ success: true })
//       )
//     )
//     .catch(() => res.status(500).json({ success: false }));
// });
