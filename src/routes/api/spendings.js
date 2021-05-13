const router = require('express').Router();
const checkToken = require('./helpers/checkToken');
const uploadMiddleware = require('./helpers/customMulter');


const getSpendingsController = require('../controllers/spendings/getSpendingsController');
const getSpendingController = require('../controllers/spendings/getSpendingController');
const getSpendingInvoiceImageController = require('../controllers/spendings/getSpendingInvoiceImageController');
const getSpendingsChartsController = require('../controllers/spendings/getSpendingsChartsController');
const postSpendingController = require('../controllers/spendings/postSpendingController');
const postSpendingInvoiceUploadController = require('../controllers/spendings/postSpendingInvoiceUploadController');
const deleteSpendingInvoiceImageController = require('../controllers/spendings/deleteSpendingInvoiceImageController');
const updateSpendingController = require('../controllers/spendings/updateSpendingController');
const deleteSpendingController = require('../controllers/spendings/deleteSpendingController');

router.get('/', checkToken, getSpendingsController);
router.get('/charts', checkToken, getSpendingsChartsController);
router.get('/upload/:id', checkToken, getSpendingInvoiceImageController);
router.get('/:id', checkToken, getSpendingController);

router.post('/', checkToken, postSpendingController);
router.post('/upload', [checkToken, uploadMiddleware.single('invoiceImageUpload')], postSpendingInvoiceUploadController);

router.put('/upload', checkToken, deleteSpendingInvoiceImageController);
router.put('/:id', checkToken, updateSpendingController);

router.delete('/:id', checkToken, deleteSpendingController);

module.exports = router;
