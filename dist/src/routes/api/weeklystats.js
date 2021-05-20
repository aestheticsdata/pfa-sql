"use strict";
var router = require('express').Router();
var weeklystatsController = require('../controllers/weeklystats/weeklystatsController');
router.get('/', weeklystatsController);
module.exports = router;
