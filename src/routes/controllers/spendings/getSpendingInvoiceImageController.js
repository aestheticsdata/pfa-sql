const prisma = require('../../../db/dbInit');
import { readFile } from "fs/promises";

const uploadPath = process.cwd() + '/src/invoicesUpload/';

module.exports = async (req, res) => {
  try {
    console.log('req.params', req.params);
    const { id: spendingID } = req.params;
    const { userID } = req.query;

    const spending = await prisma.spendings.findUnique({
      where: { ID: spendingID }
    });

    const imageFile = await readFile(uploadPath + '/' + userID + '/' + spending.invoicefile);
    const base64Image = Buffer.from(imageFile).toString('base64');
    const contentType = `image/${spending.invoicefile.split('.').pop()}`;
    const invoiceImageString = `data:${contentType};base64,${base64Image}`;
    res.setHeader('content-type', contentType);
    res.send(invoiceImageString);
  } catch (e) {
    res.status(500).json('error while reading image : ', e);
  }
};

