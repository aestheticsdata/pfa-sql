const router = require('express').Router();
const checkToken = require('./helpers/checkToken');
const getCategoriesController = require('../controllers/categories/getCategoriesController');
const updateCategoriesController = require('../controllers/categories/updateCategoriesController');


router.get('/', checkToken, getCategoriesController);
router.put('/:id', checkToken, updateCategoriesController)

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

module.exports = router;
