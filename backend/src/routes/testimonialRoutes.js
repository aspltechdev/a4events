const express = require('express');

const router = express.Router();

const {
  getTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
} = require('../controllers/testimonialController');

const protect =
  require('../middleware/authMiddleware');

// PUBLIC
router.get('/', getTestimonials);

router.get(
  '/:id',
  getTestimonialById
);

// ADMIN
router.post(
  '/',
  protect,
  createTestimonial
);

router.put(
  '/:id',
  protect,
  updateTestimonial
);

router.delete(
  '/:id',
  protect,
  deleteTestimonial
);

module.exports = router;