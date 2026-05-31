// const express = require('express');
// const router = express.Router();
// const protect = require('../middleware/authMiddleware');


// const {
//   getProducts,
//   createProduct,
//   getProductById,
//   updateProduct,
//   deleteProduct
// } = require('../controllers/productController');
// router.get('/:id', getProductById);
// router.put('/:id', updateProduct);
// router.get('/', getProducts);
// router.post('/', createProduct);
// router.delete('/:id', deleteProduct);
// router.get('/', getProducts);
// router.get('/:id', getProductById);

// // Protected routes
// router.post('/', protect, createProduct);
// router.put('/:id', protect, updateProduct);
// router.delete('/:id', protect, deleteProduct);

// module.exports = router;


const express = require('express');

const router = express.Router();

const protect =
  require('../middleware/authMiddleware');

const {
  getProducts,
  getFeaturedProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');

// PUBLIC ROUTES
router.get('/', getProducts);

router.get(
  '/featured',
  getFeaturedProducts
);

router.get(
  '/:id',
  getProductById
);

// PROTECTED ROUTES
router.post(
  '/',
  protect,
  createProduct
);

router.put(
  '/:id',
  protect,
  updateProduct
);

router.delete(
  '/:id',
  protect,
  deleteProduct
);

module.exports = router;