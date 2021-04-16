// const prisma = require('../../../db/dbInit');

module.exports = async (req, res) => {
  // let invoiceImageUpload;
  // let uploadPath;

  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return res.status(400).send('No files were uploaded.');
  // }

  res.status(200).json('ok');

  // // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  // invoiceImageUpload = req.files.invoiceImageUpload;
  // uploadPath = process.cwd() + '/src/public/invoicesUpload/' + invoiceImageUpload.name;
  // //
  // // Use the mv() method to place the file somewhere on your server
  // invoiceImageUpload.mv(uploadPath, function(err) {
  //   if (err) res.status(500).json(err);
  //   res.status(200).json({ msg: 'file uploaded' });
  // });
}
