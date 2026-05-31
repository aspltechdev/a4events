const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder =
      req.query.type === 'event'
        ? 'src/uploads/events'
        : 'src/uploads/products';

    cb(null, folder);
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({
  storage
});

module.exports = upload;