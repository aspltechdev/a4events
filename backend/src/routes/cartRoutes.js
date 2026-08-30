// import express from "express";

// import {
//   getCart,
//   addToCart,
//   updateCartItem,
//   removeFromCart,
//   clearCart,
// } from "../controllers/cartController.js";

// const router = express.Router();

// router.get("/:sessionId", getCart);

// router.post("/add", addToCart);

// router.put("/:sessionId/:productId", updateCartItem);

// router.delete("/:sessionId/:productId", removeFromCart);

// router.delete("/:sessionId/clear", clearCart);

// export default router;


const express = require('express');

const {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart
} = require('../controllers/cartController');

const router = express.Router();

router.get('/:sessionId', getCart);

router.post('/add', addToCart);

router.put('/:sessionId/:productId', updateCartItem);

router.delete('/:sessionId/:productId', removeFromCart);

router.delete('/:sessionId/clear', clearCart);

module.exports = router;