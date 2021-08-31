const { unlink } = require('fs').promises;
const prisma = require('../../../db/dbInit');
const { uploadPath } = require('./helpers/constants');


module.exports = async (req, res, _next) => {
  const {
    ID: spendingID,
    itemType,
    userID,
    invoicefile,
  } = req.body;

  await unlink(uploadPath + userID + '/' + invoicefile);

  if (itemType === 'spending') {
    await prisma['spendings'].update({
      where: { ID: spendingID },
      data: {
        invoicefile: null,
      },
    });
  }

  // could have used updateMany instead of raw query
  if (itemType === 'recurring') {
    await prisma.$queryRaw(`
      UPDATE Recurrings
      SET invoicefile = NULL
      WHERE invoicefile = '${invoicefile}';
  `);
  }

  res.status(200).json({ msg: 'INVOICE_IMAGE_DELETED'});
}
