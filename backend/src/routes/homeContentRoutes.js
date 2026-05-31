const express = require('express');

const router = express.Router();

const {
  getHomeContent,
  updateHomeContent
} = require('../controllers/homeContentController');

const protect =
  require('../middleware/authMiddleware');

router.get('/', getHomeContent);

router.put(
  '/',
  protect,
  updateHomeContent
);

module.exports = router;