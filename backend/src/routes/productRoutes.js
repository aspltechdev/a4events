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


// const express = require('express');

// const router = express.Router();

// const protect =
//   require('../middleware/authMiddleware');

// const {
//   getProducts,
//   getFeaturedProducts,
//   createProduct,
//   getProductById,
//   updateProduct,
//   deleteProduct
// } = require('../controllers/productController');

// // PUBLIC ROUTES
// router.get('/', getProducts);

// router.get(
//   '/featured',
//   getFeaturedProducts
// );

// router.get(
//   '/:id',
//   getProductById
// );

// // PROTECTED ROUTES
// router.post(
//   '/',
//   protect,
//   createProduct
// );

// router.put(
//   '/:id',
//   protect,
//   updateProduct
// );

// router.delete(
//   '/:id',
//   protect,
//   deleteProduct
// );

// module.exports = router;

// const express = require('express');

// const router = express.Router();

// const protect =
//   require('../middleware/authMiddleware');

// const {
//   getProducts,
//   getFeaturedProducts,
//   createProduct,
//   getProductById,
//   updateProduct,
//   toggleProductStatus,
//   deleteProduct
// } = require('../controllers/productController');

// // PUBLIC ROUTES

// router.get('/', getProducts);

// router.get(
//   '/featured',
//   getFeaturedProducts
// );

// router.get(
//   '/:id',
//   getProductById
// );

// // PROTECTED ROUTES

// router.post(
//   '/',
//   protect,
//   createProduct
// );

// router.put(
//   '/:id',
//   protect,
//   updateProduct
// );

// // ACTIVE / OUT OF STOCK
// router.patch(
//   '/:id/status',
//   protect,
//   toggleProductStatus
// );

// router.delete(
//   '/:id',
//   protect,
//   deleteProduct
// );

// module.exports = router;

const express = require('express');

const router = express.Router();

const protect = require('../middleware/authMiddleware');

const {
  getProducts,
  getFeaturedProducts,
  createProduct,
  getProductById,
  updateProduct,
  updateProductOrder,
  updateProductOrders,
  toggleProductStatus,
  deleteProduct
} = require('../controllers/productController');


// =====================================================
// PUBLIC ROUTES
// =====================================================

// GET ALL PRODUCTS
router.get(
  '/',
  getProducts
);


// GET FEATURED PRODUCTS
router.get(
  '/featured',
  getFeaturedProducts
);


// =====================================================
// PROTECTED ROUTES
// IMPORTANT:
// These MUST come before /:id
// =====================================================


// UPDATE ALL PRODUCT ORDERS
router.patch(
  '/orders',
  protect,
  updateProductOrders
);


// UPDATE SINGLE PRODUCT ORDER
router.patch(
  '/order',
  protect,
  updateProductOrder
);


// CREATE PRODUCT
router.post(
  '/',
  protect,
  createProduct
);


// UPDATE PRODUCT
router.put(
  '/:id',
  protect,
  updateProduct
);


// ACTIVE / OUT OF STOCK
router.patch(
  '/:id/status',
  protect,
  toggleProductStatus
);


// DELETE PRODUCT
router.delete(
  '/:id',
  protect,
  deleteProduct
);


// GET PRODUCT BY ID
// IMPORTANT: Keep this LAST
router.get(
  '/:id',
  getProductById
);


module.exports = router;