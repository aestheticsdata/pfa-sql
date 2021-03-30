const router = require('express').Router();
const checkToken = require('./helpers/checkToken');
const getCategoriesController = require('../controllers/categories/getCategoriesController');


router.get('/', checkToken, getCategoriesController);

// router.get('/', (req, res) => {
//   Category.find()
//     .then(categories => res.json(categories))
//     .catch(err => res.status(404).json(`Error : ${err}`));
// });
//
// router.get('/:id', (req, res) => {
//   Category.find({ catID: req.params.catID })
//     .then(category => res.json(category))
//     .catch(() => res.status(404).json('no spending with this id'));
// });
//
// router.post('/add', (req, res) => {
//   const {
//     name,
//     color,
//   } = req.body;
//
//   if(!name) {
//     return res.status(400).json({ msg: 'Please enter a name' });
//   }
//
//   const newCategory = new Category({
//     name,
//     color,
//   });
//
//   newCategory.save()
//     .then(() => res.json('new category added'))
//     .catch(err => res.status(400).json(`Error: ${err}`));
// });
//
// router.delete('/:id', (req, res) => {
//   Category.findById(req.params.id)
//     .then(
//       category => category.remove().then(
//         () => res.json({ success: true })
//       )
//     )
//     .catch(() => res.status(404).json({ success: false }));
// });
//
// router.put('/:id', (req, res) => {
//   Category.findById(req.params.id)
//     .then(category => {
//       category.name = req.body.name;
//       category.color = req.body.color;
//
//       category.save()
//         .then(() => res.json('category updated'))
//         .catch(err => res.status(400).json(`Error: ${err}`));
//     });
// });

module.exports = router;
