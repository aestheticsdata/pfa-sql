import { readFile } from "fs/promises";


module.exports = async (invoicefile, userID) => {
  const uploadPath = process.cwd() + '/src/invoicesUpload/';
  const imageFile = await readFile(uploadPath + '/' + userID + '/' + invoicefile);
  console.log('imageFile', imageFile);
  const base64Image = Buffer.from(imageFile).toString('base64');
  const contentType = `image/${invoicefile.split('.').pop()}`;
  const invoiceImageString = `data:${contentType};base64,${base64Image}`;
  return [invoiceImageString, contentType];
}
