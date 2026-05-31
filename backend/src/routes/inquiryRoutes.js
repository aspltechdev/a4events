const express = require('express');
const router = express.Router();

const {
  createInquiry,
  getInquiries,
  getInquiryById,
  deleteInquiry
} = require('../controllers/inquiryController');

const authMiddleware =
  require('../middleware/authMiddleware');

router.post('/', createInquiry);

router.get(
  '/',
  authMiddleware,
  getInquiries
);

router.get(
  '/:id',
  authMiddleware,
  getInquiryById
);

router.delete(
  '/:id',
  authMiddleware,
  deleteInquiry
);

module.exports = router;