const prisma = require('../../../db/dbInit');
const sharp = require('sharp');
import { access, unlink } from 'fs/promises';
import { constants } from 'fs';
const getImage = require('./helpers/getImage');


module.exports = async (req, res) => {
  const {
    path: filepath,
    filename,
  } = req.file;
console.log('req.body', req.body);
  sharp.cache(false);

  try {
    // check if the file has been written on disk by multer middleware just before
    await access(filepath, constants.F_OK);

    // get image size
    const imageMetadata = await sharp(filepath).metadata();
    const biggerSide = imageMetadata.width > imageMetadata.height ? 'width' : 'height';
    const biggerSideSize = biggerSide === 'width' ? 1125 : 1500;

    // resize file
    const splittedFilename = (filepath).split('.');
    const resizedPathAndFilename = splittedFilename.shift() + '-r.';
    const fileExtension = splittedFilename.pop();
    const outputPath = resizedPathAndFilename + fileExtension;

    await sharp(filepath)
      .resize({
        fit: sharp.fit.contain,
        [biggerSide]: biggerSideSize,
      })
      .toFile(outputPath);

    // delete original file
    await unlink(filepath);

    // save filename to db
    const resizedFilename = filename.slice(0, filename.search(/\./)) + '-r.' + fileExtension;
    if (req.body.itemType === 'spending') {
      await prisma.spendings.update({
        where: { ID: req.body.spendingID },
        data: {
          invoicefile: resizedFilename,
        },
      });
    }
    if (req.body.itemType === 'recurring') {
      await prisma.recurrings.updateMany({
        where: { label: req.body.label},
        data: {
          invoicefile: resizedFilename,
        },
      })
    }

    const [invoiceImageString, contentType] = await getImage(resizedFilename, req.body.userID);
    res.setHeader('content-type', contentType);
    res.send(invoiceImageString);
  } catch (e) {
    res.status(500).json('error while writing file to db : ', e);
  }
}
