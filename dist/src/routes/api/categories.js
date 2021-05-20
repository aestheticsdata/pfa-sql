"use strict";
var router = require('express').Router();
var checkToken = require('./helpers/checkToken');
var getCategoriesController = require('../controllers/categories/getCategoriesController');
var updateCategoryController = require('../controllers/categories/updateCategoryController');
var deleteCategoryController = require('../controllers/categories/deleteCategoryController');
router.get('/', checkToken, getCategoriesController);
router.put('/:id', checkToken, updateCategoryController);
router.delete('/:id', checkToken, deleteCategoryController);
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
module.exports = router;
