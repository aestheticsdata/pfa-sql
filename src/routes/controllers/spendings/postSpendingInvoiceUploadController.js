const prisma = require('../../../db/dbInit');
import { access } from 'fs/promises';
import { constants } from 'fs';

module.exports = async (req, res) => {
  console.log('req.file', req.file);
  try {
    await access(req.file.path, constants.F_OK);

    console.log('req.body', req.body);
    console.log('oh yeah file exists !');

    console.log('req.body.spendingID', req.body.spendingID);
    console.log('req.file.filename', req.file.filename);


    await prisma[req.body.itemType + 's'].update({
      where: { ID: req.body.spendingID },
      data: {
        invoicefile: req.file.filename,
      },
    });

    res.status(200).json('ok');
  } catch (e) {
    res.status(500).json('error while writing file to db : ', e);
  }
}
