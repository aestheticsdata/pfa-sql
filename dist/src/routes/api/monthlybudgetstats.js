"use strict";
var router = require('express').Router();
var checkToken = require('./helpers/checkToken');
var getMonthlyBudgetStatsController = require('../controllers/monthlyStats/getMonthlyBudgetStatsController');
router.get('/', checkToken, getMonthlyBudgetStatsController);
module.exports = router;
