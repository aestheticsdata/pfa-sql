const router = require('express').Router();
const weeklystatsController = require('../controllers/weeklystats/weeklystatsController');

router.get('/', weeklystatsController);

module.exports = router;

