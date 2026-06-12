// // const multer = require('multer');
// // const path = require('path');

// // const storage = multer.diskStorage({
// //   destination: (req, file, cb) => {
// //     const folder =
// //       req.query.type === 'event'
// //         ? 'src/uploads/events'
// //         : 'src/uploads/products';

// //     cb(null, folder);
// //   },

// //   filename: (req, file, cb) => {
// //     cb(
// //       null,
// //       Date.now() + path.extname(file.originalname)
// //     );
// //   }
// // });

// // const upload = multer({
// //   storage
// // });

// // module.exports = upload;


// const multer = require('multer');
// const path = require('path');

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     let folder = 'src/uploads/products';

//     switch (req.query.type) {
//       case 'event':
//         folder = 'src/uploads/events';
//         break;

//       case 'hero':
//         folder = 'src/uploads/hero';
//         break;

//       case 'gallery':
//         folder = 'src/uploads/gallery';
//         break;

//       case 'testimonial':
//         folder = 'src/uploads/testimonials';
//         break;

//       case 'product':
//       default:
//         folder = 'src/uploads/products';
//         break;
//     }

//     cb(null, folder);
//   },

//   filename: (req, file, cb) => {
//     cb(
//       null,
//       Date.now() + path.extname(file.originalname)
//     );
//   }
// });

// const upload = multer({
//   storage
// });

// module.exports = upload;



const multer = require('multer');
const path = require('path');

// FIXED: use root-level uploads folder (NOT src/uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = 'uploads/products';

    switch (req.query.type) {
      case 'event':
        folder = 'uploads/events';
        break;

      case 'hero':
        folder = 'uploads/hero';
        break;

      case 'gallery':
        folder = 'uploads/gallery';
        break;

      case 'testimonial':
        folder = 'uploads/testimonials';
        break;

      case 'product':
      default:
        folder = 'uploads/products';
        break;
    }

    cb(null, folder);
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

module.exports = upload;