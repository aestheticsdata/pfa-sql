const router = require('express').Router();
const checkToken = require('./helpers/checkToken');
const uploadMiddleware = require('./helpers/customMulter');


const getSpendingsController = require('../controllers/spendings/getSpendingsController');
const getSpendingController = require('../controllers/spendings/getSpendingController');
const getSpendingInvoiceImageController = require('../controllers/spendings/getSpendingInvoiceImageController');
const postSpendingController = require('../controllers/spendings/postSpendingController');
const postSpendingInvoiceUploadController = require('../controllers/spendings/postSpendingInvoiceUploadController');
const updateSpendingController = require('../controllers/spendings/updateSpendingController');
const deleteSpendingController = require('../controllers/spendings/deleteSpendingController');

router.get('/', checkToken, getSpendingsController);
router.get('/:id', checkToken, getSpendingController);
router.get('/upload/:id', checkToken, getSpendingInvoiceImageController);
router.post('/', checkToken, postSpendingController);
router.post('/upload', [checkToken, uploadMiddleware.single('invoiceImageUpload')], postSpendingInvoiceUploadController)
router.put('/:id', checkToken, updateSpendingController);
router.delete('/:id', checkToken, deleteSpendingController);

module.exports = router;
