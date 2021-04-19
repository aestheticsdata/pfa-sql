const prisma = require('../../../db/dbInit');
import { readFile } from "fs/promises";

const uploadPath = process.cwd() + '/src/invoicesUpload/';

module.exports = async (req, res) => {
  try {
    console.log('req.params', req.params);
    const { id: spendingID } = req.params;
    const { userID } = req.query;

    const spendingOrRecurring = await prisma[`${req.query.itemType}s`].findUnique({
      where: { ID: spendingID }
    });
    console.log(spendingOrRecurring);
    if (spendingOrRecurring.invoicefile) {
      const imageFile = await readFile(uploadPath + '/' + userID + '/' + spendingOrRecurring.invoicefile);
      console.log('imageFile', imageFile);
      const base64Image = Buffer.from(imageFile).toString('base64');
      const contentType = `image/${spendingOrRecurring.invoicefile.split('.').pop()}`;
      const invoiceImageString = `data:${contentType};base64,${base64Image}`;
      res.setHeader('content-type', contentType);
      res.send(invoiceImageString);
    } else {
      res.status(200).json(null);
    }
  } catch (e) {
    res.status(500).json('error while reading image : ', e);
  }
};

