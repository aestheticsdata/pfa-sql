import { unlink } from "fs/promises";
const prisma = require('../../../db/dbInit');
const { uploadPath } = require('./helpers/constants');


module.exports = async (req, res) => {
  const {
    ID: spendingID,
    itemType,
    userID,
  } = req.body;

  try {
    const spendingRecurring = await prisma[itemType + 's'].findFirst({
      where: { ID: spendingID }
    });

    await unlink(uploadPath + userID + '/' + spendingRecurring.invoicefile);

    await prisma[itemType + 's'].update({
      where: { ID: spendingID },
      data: {
        invoicefile: null,
      },
    });

    res.status(200).json({ msg: 'INVOICE_IMAGE_DELETED'});
  } catch (e) {
    res.status(500).json('error while deleting invoice image : ', e);
  }
}