const prisma = require('../../../db/dbInit');
const getImage = require('./helpers/getImage');

module.exports = async (req, res) => {
  try {
    console.log('req.params', req.params);
    const { id: spendingID } = req.params;
    const { userID } = req.query;

    const { invoicefile } = await prisma[`${req.query.itemType}s`].findUnique({
      where: { ID: spendingID }
    });

    if (invoicefile) {
      const [invoiceImageString, contentType] = await getImage(invoicefile, userID);
      res.setHeader('content-type', contentType);
      res.send(invoiceImageString);
    } else {
      res.status(200).json(null);
    }
  } catch (e) {
    res.status(500).json('error while reading image : ', e);
  }
};

