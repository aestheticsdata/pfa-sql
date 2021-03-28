const router = require('express').Router();
const checkToken = require('./helpers/checkToken');

const getMonthlyBudgetStatsController = require('../controllers/monthlyStats/getMonthlyBudgetStatsController');

router.get('/', checkToken, getMonthlyBudgetStatsController);

module.exports = router;
