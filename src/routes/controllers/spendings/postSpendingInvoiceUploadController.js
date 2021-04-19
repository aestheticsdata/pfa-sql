const prisma = require('../../../db/dbInit');
const sharp = require('sharp');
import { access, unlink } from 'fs/promises';
import { constants } from 'fs';

module.exports = async (req, res) => {
  console.log('req.file', req.file);
  console.log('req.file.path', req.file.path);
  const {
    path: filepath,
    filename,
  } = req.file;

  try {
    // check if the file has been written on disk by multer middleware just before
    await access(filepath, constants.F_OK);
    console.log('oh yeah file exists !');


    // resize file
    const splittedFilename = (filepath).split('.');
    const resizedPathAndFilename = splittedFilename.shift() + '-r.';
    const fileExtension =  splittedFilename.pop();
    const outputPath =  resizedPathAndFilename + fileExtension;

    await sharp(filepath)
      .resize(1000)
      .toFile(outputPath);

    await unlink(filepath);

    console.log('req.body.spendingID', req.body.spendingID);
    console.log('filename', filename);

    const resizedFilename = filename.slice(0, filename.search(/\./)) + '-r.' + fileExtension;

    await prisma[req.body.itemType + 's'].update({
      where: { ID: req.body.spendingID },
      data: {
        invoicefile: resizedFilename,
      },
    });

    res.status(200).json('ok');
  } catch (e) {
    res.status(500).json('error while writing file to db : ', e);
  }
}
