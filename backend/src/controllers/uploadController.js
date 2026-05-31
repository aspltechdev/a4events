// const uploadImage = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         message: 'No file uploaded'
//       });
//     }

//     const folder =
//       req.query.type === 'event'
//         ? 'events'
//         : 'products';

//     res.status(200).json({
//       message: 'Upload successful',
//       imageUrl: `/uploads/${folder}/${req.file.filename}`
//     });

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Upload failed'
//     });
//   }
// };

// module.exports = {
//   uploadImage
// };

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: 'No file uploaded'
      });
    }

    let folder = 'products';

    switch (req.query.type) {
      case 'event':
        folder = 'events';
        break;

      case 'hero':
        folder = 'hero';
        break;

      case 'gallery':
        folder = 'gallery';
        break;

      case 'testimonial':
        folder = 'testimonials';
        break;

      case 'product':
      default:
        folder = 'products';
        break;
    }

    res.status(200).json({
      message: 'Upload successful',
      imageUrl: `/uploads/${folder}/${req.file.filename}`
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Upload failed'
    });
  }
};

module.exports = {
  uploadImage
};