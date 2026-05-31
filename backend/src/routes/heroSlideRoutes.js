const express = require('express');

const router = express.Router();

const {
  getHeroSlides,
  getHeroSlideById,
  createHeroSlide,
  updateHeroSlide,
  deleteHeroSlide
} = require('../controllers/heroSlideController');

const protect =
  require('../middleware/authMiddleware');

router.get('/', getHeroSlides);

router.get(
  '/:id',
  getHeroSlideById
);

router.post(
  '/',
  protect,
  createHeroSlide
);

router.put(
  '/:id',
  protect,
  updateHeroSlide
);

router.delete(
  '/:id',
  protect,
  deleteHeroSlide
);

module.exports = router;