const express = require('express');

const router = express.Router();

const {
  getGalleryImages,
  getGalleryImageById,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage
} = require('../controllers/galleryController');

const protect =
  require('../middleware/authMiddleware');

router.get('/', getGalleryImages);

router.get('/:id', getGalleryImageById);

router.post(
  '/',
  protect,
  createGalleryImage
);

router.put(
  '/:id',
  protect,
  updateGalleryImage
);

router.delete(
  '/:id',
  protect,
  deleteGalleryImage
);

module.exports = router;