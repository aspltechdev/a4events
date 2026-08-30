
// const prisma = require("../config/db");


// // =====================================================
// // GENERATE ORDER NUMBER
// // =====================================================

// const generateOrderNumber = () => {
//   const date = new Date();

//   const year = date.getFullYear();

//   const month = String(
//     date.getMonth() + 1
//   ).padStart(2, "0");

//   const day = String(
//     date.getDate()
//   ).padStart(2, "0");

//   const random = Math.floor(
//     1000 + Math.random() * 9000
//   );

//   return `A4-${year}${month}${day}-${random}`;
// };


// // =====================================================
// // CREATE CHECKOUT ORDER
// // =====================================================

// const createOrder = async (req, res) => {
//   try {

//     const {
//       sessionId,

//       firstName,
//       lastName,

//       email,

//       countryCode,
//       phone,

//       addressLine1,
//       addressLine2,

//       city,
//       state,
//       postalCode,
//       country,

//       companyName,
//       vatNumber,

//       deliveryInstructions,
//     } = req.body;


//     // =================================================
//     // VALIDATION
//     // =================================================

//     if (!sessionId) {
//       return res.status(400).json({
//         success: false,
//         message: "Session ID is required",
//       });
//     }


//     if (!firstName?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "First name is required",
//       });
//     }


//     if (!lastName?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Last name is required",
//       });
//     }


//     if (!email?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Email is required",
//       });
//     }


//     if (!countryCode?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Country code is required",
//       });
//     }


//     if (!phone?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "WhatsApp / mobile number is required",
//       });
//     }


//     if (!addressLine1?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Delivery address is required",
//       });
//     }


//     if (!city?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "City is required",
//       });
//     }


//     if (!postalCode?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Postal / ZIP code is required",
//       });
//     }


//     if (!country?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Country is required",
//       });
//     }


//     // =================================================
//     // BASIC EMAIL VALIDATION
//     // =================================================

//     const emailRegex =
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//     if (!emailRegex.test(email.trim())) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid email address",
//       });
//     }


//     // =================================================
//     // FIND CART
//     // =================================================

//     const cart = await prisma.cart.findUnique({

//       where: {
//         sessionId,
//       },

//       include: {

//         items: {

//           include: {
//             product: true,
//           },

//           orderBy: {
//             createdAt: "asc",
//           },

//         },

//       },

//     });


//     // =================================================
//     // CART NOT FOUND
//     // =================================================

//     if (!cart) {

//       return res.status(404).json({
//         success: false,
//         message: "Cart not found",
//       });

//     }


//     // =================================================
//     // EMPTY CART
//     // =================================================

//     if (
//       !cart.items ||
//       cart.items.length === 0
//     ) {

//       return res.status(400).json({
//         success: false,
//         message: "Your cart is empty",
//       });

//     }


//     // =================================================
//     // CALCULATE ORDER TOTAL
//     // =================================================

//     let subtotal = 0;

//     let discount = 0;


//     // Order items for Prisma

//     const orderItems =
//       cart.items.map((cartItem) => {

//         const product =
//           cartItem.product;


//         const quantity =
//           Number(cartItem.quantity);


//         const price =
//           Number(product.price);


//         const discountPercent =
//           Number(
//             product.discountPercent || 0
//           );


//         // Original product total

//         const originalTotal =
//           price * quantity;


//         // Product discount

//         const itemDiscount =
//           originalTotal *
//           discountPercent /
//           100;


//         // Final item price

//         const finalPrice =
//           price -
//           (
//             price *
//             discountPercent /
//             100
//           );


//         // Final item total

//         const itemTotal =
//           finalPrice *
//           quantity;


//         subtotal += originalTotal;

//         discount += itemDiscount;


//         return {

//           productId:
//             product.id,

//           productTitle:
//             product.title,

//           // Store the actual
//           // selling price after discount

//           price:
//             Number(
//               finalPrice.toFixed(2)
//             ),

//           quantity,

//         };

//       });


//     // =================================================
//     // FINAL TOTAL
//     // =================================================

//     const total =
//       subtotal - discount;


//     // =================================================
//     // CREATE ORDER
//     // =================================================

//     const order =
//       await prisma.order.create({

//         data: {

//           orderNumber:
//             generateOrderNumber(),

//           sessionId,


//           // -----------------------------
//           // Customer
//           // -----------------------------

//           firstName:
//             firstName.trim(),

//           lastName:
//             lastName.trim(),

//           email:
//             email.trim().toLowerCase(),

//           countryCode:
//             countryCode.trim(),

//           phone:
//             phone.trim(),


//           // -----------------------------
//           // Address
//           // -----------------------------

//           addressLine1:
//             addressLine1.trim(),

//           addressLine2:
//             addressLine2
//               ? addressLine2.trim()
//               : null,

//           city:
//             city.trim(),

//           state:
//             state
//               ? state.trim()
//               : null,

//           postalCode:
//             postalCode.trim(),

//           country:
//             country.trim(),


//           // -----------------------------
//           // Optional business details
//           // -----------------------------

//           companyName:
//             companyName
//               ? companyName.trim()
//               : null,

//           vatNumber:
//             vatNumber
//               ? vatNumber.trim()
//               : null,


//           // -----------------------------
//           // Delivery
//           // -----------------------------

//           deliveryInstructions:
//             deliveryInstructions
//               ? deliveryInstructions.trim()
//               : null,


//           // -----------------------------
//           // Amounts
//           // -----------------------------

//           subtotal:
//             Number(
//               subtotal.toFixed(2)
//             ),

//           discount:
//             Number(
//               discount.toFixed(2)
//             ),

//           total:
//             Number(
//               total.toFixed(2)
//             ),


//           // -----------------------------
//           // Payment
//           // -----------------------------

//           status:
//             "PENDING",

//           paymentStatus:
//             "PENDING",


//           // -----------------------------
//           // Order Items
//           // -----------------------------

//           items: {

//             create:
//               orderItems,

//           },

//         },

//         include: {

//           items: true,

//         },

//       });


//     // =================================================
//     // RESPONSE
//     // =================================================

//     return res.status(201).json({

//       success: true,

//       message:
//         "Checkout order created successfully",

//       order: {

//         id:
//           order.id,

//         orderNumber:
//           order.orderNumber,


//         customer: {

//           firstName:
//             order.firstName,

//           lastName:
//             order.lastName,

//           email:
//             order.email,

//           countryCode:
//             order.countryCode,

//           phone:
//             order.phone,

//         },


//         deliveryAddress: {

//           addressLine1:
//             order.addressLine1,

//           addressLine2:
//             order.addressLine2,

//           city:
//             order.city,

//           state:
//             order.state,

//           postalCode:
//             order.postalCode,

//           country:
//             order.country,

//         },


//         subtotal:
//           order.subtotal,

//         discount:
//           order.discount,

//         total:
//           order.total,


//         status:
//           order.status,

//         paymentStatus:
//           order.paymentStatus,


//         items:
//           order.items,

//       },

//     });

//   } catch (error) {

//     console.error(
//       "CREATE ORDER ERROR:",
//       error
//     );


//     return res.status(500).json({

//       success: false,

//       message:
//         "Failed to create checkout order",

//       error:
//         process.env.NODE_ENV === "development"
//           ? error.message
//           : undefined,

//     });

//   }
// };


// // =====================================================
// // GET ORDER
// // =====================================================

// const getOrder = async (req, res) => {

//   try {

//     const {
//       id,
//     } = req.params;


//     const orderId =
//       Number(id);


//     if (
//       !Number.isInteger(orderId) ||
//       orderId <= 0
//     ) {

//       return res.status(400).json({

//         success: false,

//         message:
//           "Invalid order ID",

//       });

//     }


//     const order =
//       await prisma.order.findUnique({

//         where: {
//           id: orderId,
//         },

//         include: {

//           items: {

//             include: {

//               product: true,

//             },

//           },

//         },

//       });


//     if (!order) {

//       return res.status(404).json({

//         success: false,

//         message:
//           "Order not found",

//       });

//     }


//     return res.status(200).json({

//       success: true,

//       order,

//     });

//   } catch (error) {

//     console.error(
//       "GET ORDER ERROR:",
//       error
//     );


//     return res.status(500).json({

//       success: false,

//       message:
//         "Failed to get order",

//     });

//   }

// };


// // =====================================================
// // GET ORDER BY ORDER NUMBER
// // =====================================================

// const getOrderByNumber =
//   async (req, res) => {

//     try {

//       const {
//         orderNumber,
//       } = req.params;


//       if (!orderNumber) {

//         return res.status(400).json({

//           success: false,

//           message:
//             "Order number is required",

//         });

//       }


//       const order =
//         await prisma.order.findUnique({

//           where: {
//             orderNumber,
//           },

//           include: {

//             items: {

//               include: {

//                 product: true,

//               },

//             },

//           },

//         });


//       if (!order) {

//         return res.status(404).json({

//           success: false,

//           message:
//             "Order not found",

//         });

//       }


//       return res.status(200).json({

//         success: true,

//         order,

//       });

//     } catch (error) {

//       console.error(
//         "GET ORDER BY NUMBER ERROR:",
//         error
//       );


//       return res.status(500).json({

//         success: false,

//         message:
//           "Failed to get order",

//       });

//     }

//   };


// // =====================================================
// // EXPORT
// // =====================================================

// module.exports = {

//   createOrder,

//   getOrder,

//   getOrderByNumber,

// };



// const prisma = require("../config/db");

// const {
//   createZohoInvoice,
// } = require("../services/zohoBooksService");


// // =====================================================
// // GENERATE ORDER NUMBER
// // =====================================================

// const generateOrderNumber = () => {
//   const date = new Date();

//   const year = date.getFullYear();

//   const month = String(
//     date.getMonth() + 1
//   ).padStart(2, "0");

//   const day = String(
//     date.getDate()
//   ).padStart(2, "0");

//   const random = Math.floor(
//     1000 + Math.random() * 9000
//   );

//   return `A4-${year}${month}${day}-${random}`;
// };


// // =====================================================
// // CREATE CHECKOUT ORDER
// // =====================================================

// const createOrder = async (req, res) => {
//   try {

//     const {
//       sessionId,

//       firstName,
//       lastName,

//       email,

//       countryCode,
//       phone,

//       addressLine1,
//       addressLine2,

//       city,
//       state,
//       postalCode,
//       country,

//       companyName,
//       vatNumber,

//       deliveryInstructions,
//     } = req.body;


//     // =================================================
//     // VALIDATION
//     // =================================================

//     if (!sessionId) {
//       return res.status(400).json({
//         success: false,
//         message: "Session ID is required",
//       });
//     }


//     if (!firstName?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "First name is required",
//       });
//     }


//     if (!lastName?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Last name is required",
//       });
//     }


//     if (!email?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Email is required",
//       });
//     }


//     if (!countryCode?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Country code is required",
//       });
//     }


//     if (!phone?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message:
//           "WhatsApp / mobile number is required",
//       });
//     }


//     if (!addressLine1?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message:
//           "Delivery address is required",
//       });
//     }


//     if (!city?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "City is required",
//       });
//     }


//     if (!postalCode?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message:
//           "Postal / ZIP code is required",
//       });
//     }


//     if (!country?.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Country is required",
//       });
//     }


//     // =================================================
//     // EMAIL VALIDATION
//     // =================================================

//     const emailRegex =
//       /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


//     if (!emailRegex.test(email.trim())) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid email address",
//       });
//     }


//     // =================================================
//     // FIND CART
//     // =================================================

//     const cart =
//       await prisma.cart.findUnique({

//         where: {
//           sessionId,
//         },

//         include: {

//           items: {

//             include: {
//               product: true,
//             },

//             orderBy: {
//               createdAt: "asc",
//             },

//           },

//         },

//       });


//     // =================================================
//     // CART NOT FOUND
//     // =================================================

//     if (!cart) {

//       return res.status(404).json({
//         success: false,
//         message: "Cart not found",
//       });

//     }


//     // =================================================
//     // EMPTY CART
//     // =================================================

//     if (
//       !cart.items ||
//       cart.items.length === 0
//     ) {

//       return res.status(400).json({
//         success: false,
//         message: "Your cart is empty",
//       });

//     }


//     // =================================================
//     // CALCULATE ORDER
//     // =================================================

//     let subtotal = 0;

//     let discount = 0;


//     const orderItems =
//       cart.items.map((cartItem) => {

//         const product =
//           cartItem.product;

//         const quantity =
//           Number(cartItem.quantity);

//         const price =
//           Number(product.price);

//         const discountPercent =
//           Number(
//             product.discountPercent || 0
//           );


//         // Original total

//         const originalTotal =
//           price * quantity;


//         // Discount

//         const itemDiscount =
//           originalTotal *
//           discountPercent /
//           100;


//         // Selling price

//         const finalPrice =
//           price -
//           (
//             price *
//             discountPercent /
//             100
//           );


//         subtotal +=
//           originalTotal;

//         discount +=
//           itemDiscount;


//         return {

//           productId:
//             product.id,

//           productTitle:
//             product.title,

//           price:
//             Number(
//               finalPrice.toFixed(2)
//             ),

//           quantity,

//         };

//       });


//     // =================================================
//     // FINAL TOTAL
//     // =================================================

//     const total =
//       subtotal - discount;


//     // =================================================
//     // CREATE ORDER
//     // =================================================

//     const order =
//       await prisma.order.create({

//         data: {

//           orderNumber:
//             generateOrderNumber(),

//           sessionId,


//           // -----------------------------
//           // Customer
//           // -----------------------------

//           firstName:
//             firstName.trim(),

//           lastName:
//             lastName.trim(),

//           email:
//             email.trim().toLowerCase(),

//           countryCode:
//             countryCode.trim(),

//           phone:
//             phone.trim(),


//           // -----------------------------
//           // Address
//           // -----------------------------

//           addressLine1:
//             addressLine1.trim(),

//           addressLine2:
//             addressLine2
//               ? addressLine2.trim()
//               : null,

//           city:
//             city.trim(),

//           state:
//             state
//               ? state.trim()
//               : null,

//           postalCode:
//             postalCode.trim(),

//           country:
//             country.trim(),


//           // -----------------------------
//           // Optional
//           // -----------------------------

//           companyName:
//             companyName
//               ? companyName.trim()
//               : null,

//           vatNumber:
//             vatNumber
//               ? vatNumber.trim()
//               : null,


//           // -----------------------------
//           // Delivery
//           // -----------------------------

//           deliveryInstructions:
//             deliveryInstructions
//               ? deliveryInstructions.trim()
//               : null,


//           // -----------------------------
//           // Amounts
//           // -----------------------------

//           subtotal:
//             Number(
//               subtotal.toFixed(2)
//             ),

//           discount:
//             Number(
//               discount.toFixed(2)
//             ),

//           total:
//             Number(
//               total.toFixed(2)
//             ),


//           // -----------------------------
//           // Payment
//           // -----------------------------

//           status:
//             "PENDING",

//           paymentStatus:
//             "PENDING",

//           paymentMethod:
//             "BANK_TRANSFER",


//           // -----------------------------
//           // Order Items
//           // -----------------------------

//           items: {

//             create:
//               orderItems,

//           },

//         },

//         include: {

//           items: true,

//         },

//       });


//     // =================================================
//     // RESPONSE
//     // =================================================

//     return res.status(201).json({

//       success: true,

//       message:
//         "Checkout order created successfully",

//       order: {

//         id:
//           order.id,

//         orderNumber:
//           order.orderNumber,


//         customer: {

//           firstName:
//             order.firstName,

//           lastName:
//             order.lastName,

//           email:
//             order.email,

//           countryCode:
//             order.countryCode,

//           phone:
//             order.phone,

//         },


//         deliveryAddress: {

//           addressLine1:
//             order.addressLine1,

//           addressLine2:
//             order.addressLine2,

//           city:
//             order.city,

//           state:
//             order.state,

//           postalCode:
//             order.postalCode,

//           country:
//             order.country,

//         },


//         subtotal:
//           order.subtotal,

//         discount:
//           order.discount,

//         total:
//           order.total,


//         status:
//           order.status,

//         paymentStatus:
//           order.paymentStatus,


//         paymentMethod:
//           order.paymentMethod,


//         items:
//           order.items,

//       },

//     });

//   } catch (error) {

//     console.error(
//       "CREATE ORDER ERROR:",
//       error
//     );


//     return res.status(500).json({

//       success: false,

//       message:
//         "Failed to create checkout order",

//       error:
//         process.env.NODE_ENV === "development"
//           ? error.message
//           : undefined,

//     });

//   }
// };


// // =====================================================
// // GET ORDER
// // =====================================================

// const getOrder = async (req, res) => {

//   try {

//     const {
//       id,
//     } = req.params;


//     const orderId =
//       Number(id);


//     if (
//       !Number.isInteger(orderId) ||
//       orderId <= 0
//     ) {

//       return res.status(400).json({

//         success: false,

//         message:
//           "Invalid order ID",

//       });

//     }


//     const order =
//       await prisma.order.findUnique({

//         where: {
//           id: orderId,
//         },

//         include: {

//           items: {

//             include: {

//               product: true,

//             },

//           },

//         },

//       });


//     if (!order) {

//       return res.status(404).json({

//         success: false,

//         message:
//           "Order not found",

//       });

//     }


//     return res.status(200).json({

//       success: true,

//       order,

//     });

//   } catch (error) {

//     console.error(
//       "GET ORDER ERROR:",
//       error
//     );


//     return res.status(500).json({

//       success: false,

//       message:
//         "Failed to get order",

//     });

//   }

// };


// // =====================================================
// // GET ORDER BY ORDER NUMBER
// // =====================================================

// const getOrderByNumber =
//   async (req, res) => {

//     try {

//       const {
//         orderNumber,
//       } = req.params;


//       if (!orderNumber) {

//         return res.status(400).json({

//           success: false,

//           message:
//             "Order number is required",

//         });

//       }


//       const order =
//         await prisma.order.findUnique({

//           where: {
//             orderNumber,
//           },

//           include: {

//             items: {

//               include: {

//                 product: true,

//               },

//             },

//           },

//         });


//       if (!order) {

//         return res.status(404).json({

//           success: false,

//           message:
//             "Order not found",

//         });

//       }


//       return res.status(200).json({

//         success: true,

//         order,

//       });

//     } catch (error) {

//       console.error(
//         "GET ORDER BY NUMBER ERROR:",
//         error
//       );


//       return res.status(500).json({

//         success: false,

//         message:
//           "Failed to get order",

//       });

//     }

//   };


// // =====================================================
// // UPLOAD PAYMENT PROOF
// // =====================================================

// const uploadPaymentProof =
//   async (req, res) => {

//     try {

//       const orderId =
//         Number(req.params.id);


//       // ===============================================
//       // VALIDATE ORDER ID
//       // ===============================================

//       if (
//         !Number.isInteger(orderId) ||
//         orderId <= 0
//       ) {

//         return res.status(400).json({

//           success: false,

//           message:
//             "Invalid order ID",

//         });

//       }


//       // ===============================================
//       // CHECK FILE
//       // ===============================================

//       if (!req.file) {

//         return res.status(400).json({

//           success: false,

//           message:
//             "Payment proof is required",

//         });

//       }


//       // ===============================================
//       // FIND ORDER
//       // ===============================================

//       const order =
//         await prisma.order.findUnique({

//           where: {
//             id: orderId,
//           },

//           include: {

//             items: true,

//           },

//         });


//       if (!order) {

//         return res.status(404).json({

//           success: false,

//           message:
//             "Order not found",

//         });

//       }


//       // ===============================================
//       // CHECK PAYMENT STATUS
//       // ===============================================

//       if (
//         order.paymentStatus ===
//         "PAID"
//       ) {

//         return res.status(400).json({

//           success: false,

//           message:
//             "This order has already been paid",

//         });

//       }


//       if (
//         order.paymentStatus ===
//         "PROOF_SUBMITTED"
//       ) {

//         return res.status(400).json({

//           success: false,

//           message:
//             "Payment proof has already been submitted",

//         });

//       }


//       // ===============================================
//       // PAYMENT PROOF URL
//       // ===============================================

//       const proofUrl =
//         `/uploads/payment-proofs/${req.file.filename}`;


//       // ===============================================
//       // UPDATE ORDER
//       // ===============================================

//       const updatedOrder =
//         await prisma.order.update({

//           where: {
//             id: order.id,
//           },

//           data: {

//             paymentProof:
//               proofUrl,

//             paymentProofUploadedAt:
//               new Date(),

//             paymentMethod:
//               "BANK_TRANSFER",

//             paymentStatus:
//               "PROOF_SUBMITTED",

//           },

//           include: {

//             items: true,

//           },

//         });


//       // ===============================================
//       // CREATE ZOHO INVOICE
//       // ===============================================

//       let zohoResult =
//         null;


//       try {

//         zohoResult =
//           await createZohoInvoice(
//             updatedOrder
//           );


//         // =============================================
//         // SAVE ZOHO INFORMATION
//         // =============================================

//         await prisma.order.update({

//           where: {
//             id: order.id,
//           },

//           data: {

//             zohoCustomerId:
//               String(
//                 zohoResult.customer
//                   .contact_id
//               ),

//             zohoInvoiceId:
//               String(
//                 zohoResult.invoice
//                   .invoice_id
//               ),

//           },

//         });

//       } catch (zohoError) {

//         console.error(
//           "ZOHO INVOICE ERROR:",
//           zohoError.response?.data ||
//           zohoError.message
//         );


//         /*
//          * Payment proof is already saved.
//          *
//          * We do NOT mark payment as failed.
//          *
//          * Zoho invoice can be generated
//          * later/retried.
//          */

//         const latestOrder =
//           await prisma.order.findUnique({

//             where: {
//               id: order.id,
//             },

//             include: {
//               items: true,
//             },

//           });


//         return res.status(201).json({

//           success: true,

//           message:
//             "Payment proof submitted successfully. Invoice generation is pending.",

//           invoiceGenerated:
//             false,

//           verificationTime:
//             "2–3 working days",

//           order:
//             latestOrder,

//         });

//       }


//       // ===============================================
//       // GET FINAL ORDER
//       // ===============================================

//       const finalOrder =
//         await prisma.order.findUnique({

//           where: {
//             id: order.id,
//           },

//           include: {

//             items: true,

//           },

//         });


//       // ===============================================
//       // SUCCESS RESPONSE
//       // ===============================================

//       return res.status(201).json({

//         success: true,

//         message:
//           "Payment proof submitted successfully. Invoice generated.",

//         invoiceGenerated:
//           true,

//         verificationTime:
//           "2–3 working days",

//         invoice: {

//           id:
//             zohoResult.invoice
//               .invoice_id,

//           number:
//             zohoResult.invoice
//               .invoice_number,

//           status:
//             zohoResult.invoice
//               .status,

//         },

//         order:
//           finalOrder,

//       });

//     } catch (error) {

//       console.error(
//         "PAYMENT PROOF ERROR:",
//         error
//       );


//       return res.status(500).json({

//         success: false,

//         message:
//           "Failed to submit payment proof",

//         error:
//           process.env.NODE_ENV === "development"
//             ? error.message
//             : undefined,

//       });

//     }

//   };


// // =====================================================
// // EXPORT
// // =====================================================

// module.exports = {

//   createOrder,

//   getOrder,

//   getOrderByNumber,

//   uploadPaymentProof,

// };


const prisma = require("../config/db");

const {
  createZohoInvoice,
} = require("../services/zohoBooksService");


// =====================================================
// GENERATE ORDER NUMBER
// =====================================================

const generateOrderNumber = () => {
  const date = new Date();

  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  const random = Math.floor(
    1000 + Math.random() * 9000
  );

  return `A4-${year}${month}${day}-${random}`;
};


// =====================================================
// CREATE CHECKOUT ORDER
// =====================================================

const createOrder = async (req, res) => {
  try {

    const {
      sessionId,

      firstName,
      lastName,

      email,

      countryCode,
      phone,

      addressLine1,
      addressLine2,

      city,
      state,
      postalCode,
      country,

      companyName,
      vatNumber,

      deliveryInstructions,
    } = req.body;


    // =================================================
    // VALIDATION
    // =================================================

    if (!sessionId) {
      return res.status(400).json({
        success: false,
        message: "Session ID is required",
      });
    }


    if (!firstName?.trim()) {
      return res.status(400).json({
        success: false,
        message: "First name is required",
      });
    }


    if (!lastName?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Last name is required",
      });
    }


    if (!email?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }


    if (!countryCode?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Country code is required",
      });
    }


    if (!phone?.trim()) {
      return res.status(400).json({
        success: false,
        message:
          "WhatsApp / mobile number is required",
      });
    }


    if (!addressLine1?.trim()) {
      return res.status(400).json({
        success: false,
        message:
          "Delivery address is required",
      });
    }


    if (!city?.trim()) {
      return res.status(400).json({
        success: false,
        message: "City is required",
      });
    }


    if (!postalCode?.trim()) {
      return res.status(400).json({
        success: false,
        message:
          "Postal / ZIP code is required",
      });
    }


    if (!country?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Country is required",
      });
    }


    // =================================================
    // EMAIL VALIDATION
    // =================================================

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }


    // =================================================
    // FIND CART
    // =================================================

    const cart =
      await prisma.cart.findUnique({

        where: {
          sessionId,
        },

        include: {

          items: {

            include: {
              product: true,
            },

            orderBy: {
              createdAt: "asc",
            },

          },

        },

      });


    // =================================================
    // CART NOT FOUND
    // =================================================

    if (!cart) {

      return res.status(404).json({
        success: false,
        message: "Cart not found",
      });

    }


    // =================================================
    // EMPTY CART
    // =================================================

    if (
      !cart.items ||
      cart.items.length === 0
    ) {

      return res.status(400).json({
        success: false,
        message: "Your cart is empty",
      });

    }


    // =================================================
    // CALCULATE ORDER
    // =================================================

    let subtotal = 0;

    let discount = 0;


    const orderItems =
      cart.items.map((cartItem) => {

        const product =
          cartItem.product;

        const quantity =
          Number(cartItem.quantity);

        const price =
          Number(product.price);

        const discountPercent =
          Number(
            product.discountPercent || 0
          );


        // Original total

        const originalTotal =
          price * quantity;


        // Discount

        const itemDiscount =
          originalTotal *
          discountPercent /
          100;


        // Selling price

        const finalPrice =
          price -
          (
            price *
            discountPercent /
            100
          );


        subtotal +=
          originalTotal;

        discount +=
          itemDiscount;


        return {

          productId:
            product.id,

          productTitle:
            product.title,

          price:
            Number(
              finalPrice.toFixed(2)
            ),

          quantity,

        };

      });


    // =================================================
    // FINAL TOTAL
    // =================================================

    const total =
      subtotal - discount;


    // =================================================
    // CREATE ORDER
    // =================================================

    const order =
      await prisma.order.create({

        data: {

          orderNumber:
            generateOrderNumber(),

          sessionId,


          // -----------------------------
          // Customer
          // -----------------------------

          firstName:
            firstName.trim(),

          lastName:
            lastName.trim(),

          email:
            email.trim().toLowerCase(),

          countryCode:
            countryCode.trim(),

          phone:
            phone.trim(),


          // -----------------------------
          // Address
          // -----------------------------

          addressLine1:
            addressLine1.trim(),

          addressLine2:
            addressLine2
              ? addressLine2.trim()
              : null,

          city:
            city.trim(),

          state:
            state
              ? state.trim()
              : null,

          postalCode:
            postalCode.trim(),

          country:
            country.trim(),


          // -----------------------------
          // Optional
          // -----------------------------

          companyName:
            companyName
              ? companyName.trim()
              : null,

          vatNumber:
            vatNumber
              ? vatNumber.trim()
              : null,


          // -----------------------------
          // Delivery
          // -----------------------------

          deliveryInstructions:
            deliveryInstructions
              ? deliveryInstructions.trim()
              : null,


          // -----------------------------
          // Amounts
          // -----------------------------

          subtotal:
            Number(
              subtotal.toFixed(2)
            ),

          discount:
            Number(
              discount.toFixed(2)
            ),

          total:
            Number(
              total.toFixed(2)
            ),


          // -----------------------------
          // Payment
          // -----------------------------

          status:
            "PENDING",

          paymentStatus:
            "PENDING",

          paymentMethod:
            "BANK_TRANSFER",


          // -----------------------------
          // Order Items
          // -----------------------------

          items: {

            create:
              orderItems,

          },

        },

        include: {

          items: true,

        },

      });


    // =================================================
    // RESPONSE
    // =================================================

    return res.status(201).json({

      success: true,

      message:
        "Checkout order created successfully",

      order: {

        id:
          order.id,

        orderNumber:
          order.orderNumber,


        customer: {

          firstName:
            order.firstName,

          lastName:
            order.lastName,

          email:
            order.email,

          countryCode:
            order.countryCode,

          phone:
            order.phone,

        },


        deliveryAddress: {

          addressLine1:
            order.addressLine1,

          addressLine2:
            order.addressLine2,

          city:
            order.city,

          state:
            order.state,

          postalCode:
            order.postalCode,

          country:
            order.country,

        },


        subtotal:
          order.subtotal,

        discount:
          order.discount,

        total:
          order.total,


        status:
          order.status,

        paymentStatus:
          order.paymentStatus,


        paymentMethod:
          order.paymentMethod,


        items:
          order.items,

      },

    });

  } catch (error) {

    console.error(
      "CREATE ORDER ERROR:",
      error
    );


    return res.status(500).json({

      success: false,

      message:
        "Failed to create checkout order",

      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,

    });

  }
};


// =====================================================
// GET ORDER BY ID
// =====================================================

const getOrder = async (req, res) => {

  try {

    const {
      id,
    } = req.params;


    const orderId =
      Number(id);


    if (
      !Number.isInteger(orderId) ||
      orderId <= 0
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Invalid order ID",

      });

    }


    const order =
      await prisma.order.findUnique({

        where: {
          id: orderId,
        },

        include: {

          items: {

            include: {

              product: true,

            },

          },

        },

      });


    if (!order) {

      return res.status(404).json({

        success: false,

        message:
          "Order not found",

      });

    }


    return res.status(200).json({

      success: true,

      order,

    });

  } catch (error) {

    console.error(
      "GET ORDER ERROR:",
      error
    );


    return res.status(500).json({

      success: false,

      message:
        "Failed to get order",

    });

  }

};


// =====================================================
// GET ORDER BY ORDER NUMBER
// =====================================================

const getOrderByNumber =
  async (req, res) => {

    try {

      const {
        orderNumber,
      } = req.params;


      if (!orderNumber) {

        return res.status(400).json({

          success: false,

          message:
            "Order number is required",

        });

      }


      const order =
        await prisma.order.findUnique({

          where: {
            orderNumber,
          },

          include: {

            items: {

              include: {

                product: true,

              },

            },

          },

        });


      if (!order) {

        return res.status(404).json({

          success: false,

          message:
            "Order not found",

        });

      }


      return res.status(200).json({

        success: true,

        order,

      });

    } catch (error) {

      console.error(
        "GET ORDER BY NUMBER ERROR:",
        error
      );


      return res.status(500).json({

        success: false,

        message:
          "Failed to get order",

      });

    }

  };


// =====================================================
// CUSTOMER - UPLOAD PAYMENT PROOF
// =====================================================

const uploadPaymentProof =
  async (req, res) => {

    try {

      const orderId =
        Number(req.params.id);


      // ===============================================
      // VALIDATE ORDER ID
      // ===============================================

      if (
        !Number.isInteger(orderId) ||
        orderId <= 0
      ) {

        return res.status(400).json({

          success: false,

          message:
            "Invalid order ID",

        });

      }


      // ===============================================
      // CHECK FILE
      // ===============================================

      if (!req.file) {

        return res.status(400).json({

          success: false,

          message:
            "Payment proof is required",

        });

      }


      // ===============================================
      // FIND ORDER
      // ===============================================

      const order =
        await prisma.order.findUnique({

          where: {
            id: orderId,
          },

          include: {

            items: true,

          },

        });


      if (!order) {

        return res.status(404).json({

          success: false,

          message:
            "Order not found",

        });

      }


      // ===============================================
      // CHECK PAYMENT STATUS
      // ===============================================

      if (
        order.paymentStatus ===
        "PAID"
      ) {

        return res.status(400).json({

          success: false,

          message:
            "This order has already been paid",

        });

      }


      if (
        order.paymentStatus ===
        "PROOF_SUBMITTED"
      ) {

        return res.status(400).json({

          success: false,

          message:
            "Payment proof has already been submitted",

        });

      }


      // ===============================================
      // PAYMENT PROOF URL
      // ===============================================

      const proofUrl =
        `/uploads/payment-proofs/${req.file.filename}`;


      // ===============================================
      // UPDATE ORDER
      // ===============================================

      const updatedOrder =
        await prisma.order.update({

          where: {
            id: order.id,
          },

          data: {

            paymentProof:
              proofUrl,

            paymentProofUploadedAt:
              new Date(),

            paymentMethod:
              "BANK_TRANSFER",

            paymentStatus:
              "PROOF_SUBMITTED",

          },

          include: {

            items: true,

          },

        });


      // ===============================================
      // CREATE ZOHO INVOICE
      // ===============================================

      let zohoResult =
        null;


      try {

        zohoResult =
          await createZohoInvoice(
            updatedOrder
          );


        // =============================================
        // SAVE ZOHO INFORMATION
        // =============================================

        await prisma.order.update({

          where: {
            id: order.id,
          },

          data: {

            zohoCustomerId:
              String(
                zohoResult.customer
                  .contact_id
              ),

            zohoInvoiceId:
              String(
                zohoResult.invoice
                  .invoice_id
              ),

          },

        });

      } catch (zohoError) {

        console.error(
          "ZOHO INVOICE ERROR:",
          zohoError.response?.data ||
          zohoError.message
        );


        /*
         * Payment proof is already saved.
         *
         * We do NOT mark payment as failed.
         *
         * Zoho invoice can be generated
         * later/retried.
         */

        const latestOrder =
          await prisma.order.findUnique({

            where: {
              id: order.id,
            },

            include: {
              items: true,
            },

          });


        return res.status(201).json({

          success: true,

          message:
            "Payment proof submitted successfully. Invoice generation is pending.",

          invoiceGenerated:
            false,

          verificationTime:
            "2–3 working days",

          order:
            latestOrder,

        });

      }


      // ===============================================
      // GET FINAL ORDER
      // ===============================================

      const finalOrder =
        await prisma.order.findUnique({

          where: {
            id: order.id,
          },

          include: {

            items: true,

          },

        });


      // ===============================================
      // SUCCESS RESPONSE
      // ===============================================

      return res.status(201).json({

        success: true,

        message:
          "Payment proof submitted successfully. Invoice generated.",

        invoiceGenerated:
          true,

        verificationTime:
          "2–3 working days",

        invoice: {

          id:
            zohoResult.invoice
              .invoice_id,

          number:
            zohoResult.invoice
              .invoice_number,

          status:
            zohoResult.invoice
              .status,

        },

        order:
          finalOrder,

      });

    } catch (error) {

      console.error(
        "PAYMENT PROOF ERROR:",
        error
      );


      return res.status(500).json({

        success: false,

        message:
          "Failed to submit payment proof",

        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : undefined,

      });

    }

  };


// =====================================================
// ADMIN - GET PAYMENT PROOF ORDERS
// =====================================================

const getPaymentProofOrders = async (
  req,
  res
) => {

  try {

    const orders =
      await prisma.order.findMany({

        where: {
          paymentStatus:
            "PROOF_SUBMITTED",
        },

        include: {

          items: {

            include: {
              product: true,
            },

          },

        },

        orderBy: {

          paymentProofUploadedAt:
            "desc",

        },

      });


    return res.status(200).json({

      success: true,

      count:
        orders.length,

      orders,

    });

  } catch (error) {

    console.error(
      "GET PAYMENT PROOF ORDERS ERROR:",
      error
    );


    return res.status(500).json({

      success: false,

      message:
        "Failed to get payment proof orders",

    });

  }

};


// =====================================================
// ADMIN - VERIFY PAYMENT
// =====================================================

const verifyPayment = async (
  req,
  res
) => {

  try {

    const orderId =
      Number(req.params.id);


    if (
      !Number.isInteger(orderId) ||
      orderId <= 0
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Invalid order ID",

      });

    }


    const order =
      await prisma.order.findUnique({

        where: {
          id: orderId,
        },

      });


    if (!order) {

      return res.status(404).json({

        success: false,

        message:
          "Order not found",

      });

    }


    if (
      order.paymentStatus !==
      "PROOF_SUBMITTED"
    ) {

      return res.status(400).json({

        success: false,

        message:
          "This order is not waiting for payment verification",

      });

    }


    const updatedOrder =
      await prisma.order.update({

        where: {
          id: orderId,
        },

        data: {

          paymentStatus:
            "PAID",

          status:
            "CONFIRMED",

        },

        include: {

          items: {

            include: {
              product: true,
            },

          },

        },

      });


    return res.status(200).json({

      success: true,

      message:
        "Payment verified successfully",

      order:
        updatedOrder,

    });

  } catch (error) {

    console.error(
      "VERIFY PAYMENT ERROR:",
      error
    );


    return res.status(500).json({

      success: false,

      message:
        "Failed to verify payment",

    });

  }

};


// =====================================================
// ADMIN - REJECT PAYMENT PROOF
// =====================================================

const rejectPayment = async (
  req,
  res
) => {

  try {

    const orderId =
      Number(req.params.id);


    if (
      !Number.isInteger(orderId) ||
      orderId <= 0
    ) {

      return res.status(400).json({

        success: false,

        message:
          "Invalid order ID",

      });

    }


    const order =
      await prisma.order.findUnique({

        where: {
          id: orderId,
        },

      });


    if (!order) {

      return res.status(404).json({

        success: false,

        message:
          "Order not found",

      });

    }


    if (
      order.paymentStatus !==
      "PROOF_SUBMITTED"
    ) {

      return res.status(400).json({

        success: false,

        message:
          "This order is not waiting for payment verification",

      });

    }


    const updatedOrder =
      await prisma.order.update({

        where: {
          id: orderId,
        },

        data: {

          paymentStatus:
            "PAYMENT_REJECTED",

          status:
            "PENDING",

        },

        include: {

          items: {

            include: {
              product: true,
            },

          },

        },

      });


    return res.status(200).json({

      success: true,

      message:
        "Payment proof rejected",

      order:
        updatedOrder,

    });

  } catch (error) {

    console.error(
      "REJECT PAYMENT ERROR:",
      error
    );


    return res.status(500).json({

      success: false,

      message:
        "Failed to reject payment proof",

    });

  }

};


// =====================================================
// EXPORT
// =====================================================

module.exports = {

  createOrder,

  getOrder,

  getOrderByNumber,

  uploadPaymentProof,

  // Admin
  getPaymentProofOrders,

  verifyPayment,

  rejectPayment,

};