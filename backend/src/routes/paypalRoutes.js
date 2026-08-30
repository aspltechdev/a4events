const express = require("express");

const {
  createPayPalOrder,
  capturePayPalOrder,
} = require("../controllers/paypalController");

const router = express.Router();


// Create PayPal order
router.post(
  "/create-order",
  createPayPalOrder
);


// Capture PayPal payment
router.post(
  "/capture-order",
  capturePayPalOrder
);


module.exports = router;