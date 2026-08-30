
// // const express = require("express");

// // const {
// //   createOrder,
// //   getOrder,
// //   getOrderByNumber,
// // } = require("../controllers/orderController");

// // const router = express.Router();


// // // =====================================================
// // // CREATE CHECKOUT ORDER
// // // =====================================================

// // router.post(
// //   "/",
// //   createOrder
// // );


// // // =====================================================
// // // GET ORDER BY ID
// // // =====================================================

// // router.get(
// //   "/id/:id",
// //   getOrder
// // );


// // // =====================================================
// // // GET ORDER BY ORDER NUMBER
// // // =====================================================

// // router.get(
// //   "/number/:orderNumber",
// //   getOrderByNumber
// // );


// // module.exports = router;


// const express = require("express");

// const {
//   createOrder,
//   getOrder,
//   getOrderByNumber,
//   uploadPaymentProof,
// } = require("../controllers/orderController");

// const paymentUpload =
//   require("../middleware/paymentUpload");

// const router = express.Router();


// // =====================================================
// // CREATE CHECKOUT ORDER
// // =====================================================

// router.post(
//   "/",
//   createOrder
// );


// // =====================================================
// // GET ORDER BY ID
// // =====================================================

// router.get(
//   "/id/:id",
//   getOrder
// );


// // =====================================================
// // GET ORDER BY ORDER NUMBER
// // =====================================================

// router.get(
//   "/number/:orderNumber",
//   getOrderByNumber
// );


// // =====================================================
// // UPLOAD PAYMENT PROOF
// // =====================================================

// router.post(
//   "/:id/payment-proof",
//   paymentUpload.single("paymentProof"),
//   uploadPaymentProof
// );


// module.exports = router;


const express = require("express");

const {
  createOrder,
  getOrder,
  getOrderByNumber,
  uploadPaymentProof,

  // Admin payment verification
  getPaymentProofOrders,
  verifyPayment,
  rejectPayment,

} = require("../controllers/orderController");

const paymentUpload =
  require("../middleware/paymentUpload");

const router = express.Router();


// =====================================================
// CREATE CHECKOUT ORDER
// =====================================================

router.post(
  "/",
  createOrder
);


// =====================================================
// GET ORDER BY ID
// =====================================================

router.get(
  "/id/:id",
  getOrder
);


// =====================================================
// GET ORDER BY ORDER NUMBER
// =====================================================

router.get(
  "/number/:orderNumber",
  getOrderByNumber
);


// =====================================================
// CUSTOMER - UPLOAD PAYMENT PROOF
// =====================================================

router.post(
  "/:id/payment-proof",
  paymentUpload.single("paymentProof"),
  uploadPaymentProof
);


// =====================================================
// ADMIN - GET PAYMENT PROOF ORDERS
// =====================================================

router.get(
  "/admin/payment-proofs",
  getPaymentProofOrders
);


// =====================================================
// ADMIN - VERIFY PAYMENT
// =====================================================

router.put(
  "/admin/:id/verify-payment",
  verifyPayment
);


// =====================================================
// ADMIN - REJECT PAYMENT PROOF
// =====================================================

router.put(
  "/admin/:id/reject-payment",
  rejectPayment
);


module.exports = router;