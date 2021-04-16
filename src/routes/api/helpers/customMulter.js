const multer = require('multer');

const uploadPath = process.cwd() + '/src/public/invoicesUpload/';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // vérifier qu'un repertoire avec le nom de l'id du user existe, sinon le créer
    // et append au uploadPath le répertoire avec ce nom d'id de user
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    console.log('req.file', req.file);
    console.log('file', file);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

module.exports = multer({ storage: storage });
