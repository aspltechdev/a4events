
// // // import { useEffect, useState } from "react";
// // // import { Link, useSearchParams } from "react-router-dom";
// // // import PublicLayout from "../layouts/PublicLayout";
// // // import "./Payment.css";

// // // const API_URL =
// // //   import.meta.env.VITE_API_URL || "http://localhost:5000";

// // // const formatCurrency = (amount) => {
// // //   return new Intl.NumberFormat("en-IN", {
// // //     style: "currency",
// // //     currency: "EUR",
// // //     minimumFractionDigits: 2,
// // //   }).format(Number(amount) || 0);
// // // };

// // // function Payment() {
// // //   const [searchParams] = useSearchParams();

// // //   const orderId = searchParams.get("order");

// // //   const [order, setOrder] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState("");

// // //   useEffect(() => {
// // //     const fetchOrder = async () => {
// // //       try {
// // //         if (!orderId) {
// // //           setError("Order ID is missing.");
// // //           setLoading(false);
// // //           return;
// // //         }

// // //         const response = await fetch(
// // //           `${API_URL}/orders/id/${orderId}`
// // //         );

// // //         const data = await response.json();

// // //         if (!response.ok) {
// // //           throw new Error(
// // //             data?.message || "Unable to load order."
// // //           );
// // //         }

// // //         setOrder(data.order);
// // //       } catch (err) {
// // //         console.error("Payment order error:", err);

// // //         setError(
// // //           err.message || "Unable to load your order."
// // //         );
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchOrder();
// // //   }, [orderId]);

// // //   if (loading) {
// // //     return (
// // //       <PublicLayout>
// // //         <main className="payment-page">
// // //           <div className="payment-loading">
// // //             <div className="payment-spinner" />
// // //             <p>Loading payment...</p>
// // //           </div>
// // //         </main>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   if (error || !order) {
// // //     return (
// // //       <PublicLayout>
// // //         <main className="payment-page">
// // //           <div className="payment-error">
// // //             <span className="payment-eyebrow">
// // //               PAYMENT
// // //             </span>

// // //             <h1>
// // //               Unable to load payment
// // //             </h1>

// // //             <p>
// // //               {error ||
// // //                 "We could not find your order."}
// // //             </p>

// // //             <Link
// // //               to="/cart"
// // //               className="payment-back-button"
// // //             >
// // //               Back to Cart
// // //               <span>→</span>
// // //             </Link>
// // //           </div>
// // //         </main>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   return (
// // //     <PublicLayout>
// // //       <main className="payment-page">

// // //         <div className="payment-container">

// // //           {/* HEADER */}

// // //           <header className="payment-header">

// // //             <div>

// // //               <span className="payment-eyebrow">
// // //                 PAYMENT
// // //               </span>

// // //               <h1>
// // //                 Complete your payment
// // //               </h1>

// // //               <p>
// // //                 Your order has been created.
// // //                 Complete the payment to confirm
// // //                 your purchase.
// // //               </p>

// // //             </div>

// // //             <div className="payment-order-number">

// // //               <span>
// // //                 ORDER
// // //               </span>

// // //               <strong>
// // //                 {order.orderNumber}
// // //               </strong>

// // //             </div>

// // //           </header>


// // //           {/* CONTENT */}

// // //           <div className="payment-layout">


// // //             {/* LEFT */}

// // //             <section className="payment-main">

// // //               <div className="payment-card">

// // //                 <div className="payment-card-header">

// // //                   <div>

// // //                     <span>
// // //                       PAYMENT METHOD
// // //                     </span>

// // //                     <h2>
// // //                       PayPal
// // //                     </h2>

// // //                   </div>

// // //                   <div className="paypal-placeholder">
// // //                     PayPal
// // //                   </div>

// // //                 </div>


// // //                 <div className="payment-message">

// // //                   <div className="payment-message-icon">
// // //                     €
// // //                   </div>

// // //                   <div>

// // //                     <h3>
// // //                       Secure payment
// // //                     </h3>

// // //                     <p>
// // //                       You'll be redirected to
// // //                       PayPal to securely complete
// // //                       your payment.
// // //                     </p>

// // //                   </div>

// // //                 </div>


// // //                 {/* PAYPAL BUTTON WILL BE HERE */}

// // //                 <div className="paypal-container">

// // //                   <button
// // //                     type="button"
// // //                     className="paypal-button"
// // //                     disabled
// // //                   >
// // //                     Continue with PayPal
// // //                   </button>

// // //                   <p>
// // //                     PayPal integration will be
// // //                     activated here.
// // //                   </p>

// // //                 </div>

// // //               </div>


// // //               {/* CUSTOMER */}

// // //               <div className="payment-card">

// // //                 <div className="payment-card-title">

// // //                   <span>
// // //                     CUSTOMER
// // //                   </span>

// // //                   <h2>
// // //                     {order.firstName}{" "}
// // //                     {order.lastName}
// // //                   </h2>

// // //                 </div>

// // //                 <div className="payment-details">

// // //                   <div>
// // //                     <span>
// // //                       Email
// // //                     </span>

// // //                     <strong>
// // //                       {order.email}
// // //                     </strong>
// // //                   </div>

// // //                   <div>
// // //                     <span>
// // //                       Phone
// // //                     </span>

// // //                     <strong>
// // //                       {order.countryCode}{" "}
// // //                       {order.phone}
// // //                     </strong>
// // //                   </div>

// // //                 </div>

// // //               </div>


// // //               {/* DELIVERY */}

// // //               <div className="payment-card">

// // //                 <div className="payment-card-title">

// // //                   <span>
// // //                     DELIVERY ADDRESS
// // //                   </span>

// // //                   <h2>
// // //                     Delivery
// // //                   </h2>

// // //                 </div>

// // //                 <address className="payment-address">

// // //                   <strong>
// // //                     {order.firstName}{" "}
// // //                     {order.lastName}
// // //                   </strong>

// // //                   <span>
// // //                     {order.addressLine1}
// // //                   </span>

// // //                   {order.addressLine2 && (
// // //                     <span>
// // //                       {order.addressLine2}
// // //                     </span>
// // //                   )}

// // //                   <span>
// // //                     {order.city}
// // //                     {order.state
// // //                       ? `, ${order.state}`
// // //                       : ""}
// // //                   </span>

// // //                   <span>
// // //                     {order.postalCode}
// // //                   </span>

// // //                   <span>
// // //                     {order.country}
// // //                   </span>

// // //                 </address>

// // //               </div>

// // //             </section>


// // //             {/* RIGHT */}

// // //             <aside className="payment-sidebar">

// // //               <div className="payment-summary">

// // //                 <div className="payment-summary-header">

// // //                   <span>
// // //                     ORDER SUMMARY
// // //                   </span>

// // //                   <h2>
// // //                     Your order
// // //                   </h2>

// // //                 </div>


// // //                 <div className="payment-items">

// // //                   {order.items?.map(
// // //                     (item) => (
// // //                       <div
// // //                         className="payment-item"
// // //                         key={item.id}
// // //                       >

// // //                         <div>

// // //                           <strong>
// // //                             {item.productTitle}
// // //                           </strong>

// // //                           <span>
// // //                             Qty: {item.quantity}
// // //                           </span>

// // //                         </div>

// // //                         <strong>
// // //                           {formatCurrency(
// // //                             item.price *
// // //                               item.quantity
// // //                           )}
// // //                         </strong>

// // //                       </div>
// // //                     )
// // //                   )}

// // //                 </div>


// // //                 <div className="payment-totals">

// // //                   <div>

// // //                     <span>
// // //                       Subtotal
// // //                     </span>

// // //                     <strong>
// // //                       {formatCurrency(
// // //                         order.subtotal
// // //                       )}
// // //                     </strong>

// // //                   </div>


// // //                   {Number(order.discount) > 0 && (

// // //                     <div>

// // //                       <span>
// // //                         Discount
// // //                       </span>

// // //                       <strong>
// // //                         -
// // //                         {formatCurrency(
// // //                           order.discount
// // //                         )}
// // //                       </strong>

// // //                     </div>

// // //                   )}


// // //                   <div className="payment-total">

// // //                     <span>
// // //                       Total
// // //                     </span>

// // //                     <strong>
// // //                       {formatCurrency(
// // //                         order.total
// // //                       )}
// // //                     </strong>

// // //                   </div>

// // //                 </div>


// // //                 <div className="payment-status">

// // //                   <span>
// // //                     Order status
// // //                   </span>

// // //                   <strong>
// // //                     {order.status}
// // //                   </strong>

// // //                 </div>

// // //               </div>

// // //             </aside>

// // //           </div>

// // //         </div>

// // //       </main>
// // //     </PublicLayout>
// // //   );
// // // }

// // // export default Payment;



// // import { useEffect, useState } from "react";
// // import { Link, useSearchParams } from "react-router-dom";
// // import {
// //   PayPalScriptProvider,
// //   PayPalButtons,
// // } from "@paypal/react-paypal-js";

// // import PublicLayout from "../layouts/PublicLayout";
// // import "./Payment.css";

// // const API_URL =
// //   import.meta.env.VITE_API_URL || "http://localhost:5000";

// // const PAYPAL_CLIENT_ID =
// //   import.meta.env.VITE_PAYPAL_CLIENT_ID;

// // const formatCurrency = (amount) => {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "EUR",
// //     minimumFractionDigits: 2,
// //   }).format(Number(amount) || 0);
// // };

// // function Payment() {
// //   const [searchParams] = useSearchParams();

// //   const orderId = searchParams.get("order");

// //   const [order, setOrder] = useState(null);

// //   const [loading, setLoading] = useState(true);

// //   const [error, setError] = useState("");

// //   const [paymentLoading, setPaymentLoading] =
// //     useState(false);

// //   const [paymentSuccess, setPaymentSuccess] =
// //     useState(false);

// //   const [paymentMessage, setPaymentMessage] =
// //     useState("");

// //   // =====================================================
// //   // GET ORDER
// //   // =====================================================

// //   useEffect(() => {
// //     const fetchOrder = async () => {
// //       try {
// //         if (!orderId) {
// //           setError("Order ID is missing.");
// //           setLoading(false);
// //           return;
// //         }

// //         const response = await fetch(
// //           `${API_URL}/orders/id/${orderId}`
// //         );

// //         const data = await response.json();

// //         if (!response.ok) {
// //           throw new Error(
// //             data?.message ||
// //               "Unable to load order."
// //           );
// //         }

// //         setOrder(data.order);
// //       } catch (err) {
// //         console.error(
// //           "Payment order error:",
// //           err
// //         );

// //         setError(
// //           err.message ||
// //             "Unable to load your order."
// //         );
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchOrder();
// //   }, [orderId]);

// //   // =====================================================
// //   // CREATE PAYPAL ORDER
// //   // =====================================================

// //   const createPayPalOrder = async () => {
// //     try {
// //       setPaymentLoading(true);
// //       setPaymentMessage("");

// //       const response = await fetch(
// //         `${API_URL}/api/paypal/create-order`,
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type":
// //               "application/json",
// //           },

// //           body: JSON.stringify({
// //             orderId: Number(orderId),
// //           }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(
// //           data?.message ||
// //             "Unable to create PayPal order."
// //         );
// //       }

// //       if (!data.paypalOrderId) {
// //         throw new Error(
// //           "PayPal order ID was not returned."
// //         );
// //       }

// //       return data.paypalOrderId;
// //     } catch (err) {
// //       console.error(
// //         "Create PayPal order error:",
// //         err
// //       );

// //       setPaymentMessage(
// //         err.message ||
// //           "Unable to start PayPal payment."
// //       );

// //       setPaymentLoading(false);

// //       throw err;
// //     }
// //   };

// //   // =====================================================
// //   // CAPTURE PAYPAL ORDER
// //   // =====================================================

// //   const capturePayPalOrder = async (
// //     paypalData
// //   ) => {
// //     try {
// //       setPaymentLoading(true);
// //       setPaymentMessage("");

// //       const response = await fetch(
// //         `${API_URL}/api/paypal/capture-order`,
// //         {
// //           method: "POST",

// //           headers: {
// //             "Content-Type":
// //               "application/json",
// //           },

// //           body: JSON.stringify({
// //             orderId: Number(orderId),

// //             paypalOrderId:
// //               paypalData.orderID,
// //           }),
// //         }
// //       );

// //       const data = await response.json();

// //       if (!response.ok) {
// //         throw new Error(
// //           data?.message ||
// //             "Payment capture failed."
// //         );
// //       }

// //       if (!data.success) {
// //         throw new Error(
// //           data?.message ||
// //             "Payment was not completed."
// //         );
// //       }

// //       // -------------------------------------------------
// //       // Payment successful
// //       // -------------------------------------------------

// //       setPaymentSuccess(true);

// //       setPaymentMessage(
// //         "Payment completed successfully."
// //       );

// //       // -------------------------------------------------
// //       // Update local order
// //       // -------------------------------------------------

// //       if (data.order) {
// //         setOrder((previous) => ({
// //           ...previous,

// //           status:
// //             data.order.status,

// //           paymentStatus:
// //             data.order.paymentStatus,

// //           paypalOrderId:
// //             data.order.paypalOrderId,

// //           paypalCaptureId:
// //             data.order.paypalCaptureId,
// //         }));
// //       }

// //       // -------------------------------------------------
// //       // Clear cart
// //       // -------------------------------------------------

// //       if (order?.sessionId) {
// //         try {
// //           await fetch(
// //             `${API_URL}/api/cart/${encodeURIComponent(
// //               order.sessionId
// //             )}/clear`,
// //             {
// //               method: "DELETE",
// //             }
// //           );
// //         } catch (cartError) {
// //           console.error(
// //             "Clear cart error:",
// //             cartError
// //           );
// //         }
// //       }

// //     } catch (err) {
// //       console.error(
// //         "Capture PayPal order error:",
// //         err
// //       );

// //       setPaymentMessage(
// //         err.message ||
// //           "Payment could not be completed."
// //       );

// //       throw err;
// //     } finally {
// //       setPaymentLoading(false);
// //     }
// //   };

// //   // =====================================================
// //   // LOADING
// //   // =====================================================

// //   if (loading) {
// //     return (
// //       <PublicLayout>
// //         <main className="payment-page">
// //           <div className="payment-loading">
// //             <div className="payment-spinner" />

// //             <p>
// //               Loading payment...
// //             </p>
// //           </div>
// //         </main>
// //       </PublicLayout>
// //     );
// //   }

// //   // =====================================================
// //   // ERROR
// //   // =====================================================

// //   if (error || !order) {
// //     return (
// //       <PublicLayout>
// //         <main className="payment-page">
// //           <div className="payment-error">

// //             <span className="payment-eyebrow">
// //               PAYMENT
// //             </span>

// //             <h1>
// //               Unable to load payment
// //             </h1>

// //             <p>
// //               {error ||
// //                 "We could not find your order."}
// //             </p>

// //             <Link
// //               to="/cart"
// //               className="payment-back-button"
// //             >
// //               Back to Cart

// //               <span>
// //                 →
// //               </span>
// //             </Link>

// //           </div>
// //         </main>
// //       </PublicLayout>
// //     );
// //   }

// //   // =====================================================
// //   // SUCCESS
// //   // =====================================================

// //   if (paymentSuccess) {
// //     return (
// //       <PublicLayout>
// //         <main className="payment-page">

// //           <div className="payment-container">

// //             <div className="payment-success">

// //               <div className="payment-success-icon">
// //                 ✓
// //               </div>

// //               <span className="payment-eyebrow">
// //                 PAYMENT SUCCESSFUL
// //               </span>

// //               <h1>
// //                 Thank you!
// //               </h1>

// //               <p>
// //                 Your payment has been
// //                 successfully completed.
// //               </p>

// //               <div className="payment-success-order">

// //                 <span>
// //                   ORDER NUMBER
// //                 </span>

// //                 <strong>
// //                   {order.orderNumber}
// //                 </strong>

// //               </div>

// //               <div className="payment-success-details">

// //                 <div>
// //                   <span>
// //                     Amount Paid
// //                   </span>

// //                   <strong>
// //                     {formatCurrency(
// //                       order.total
// //                     )}
// //                   </strong>
// //                 </div>

// //                 <div>
// //                   <span>
// //                     Payment Method
// //                   </span>

// //                   <strong>
// //                     PayPal
// //                   </strong>
// //                 </div>

// //                 <div>
// //                   <span>
// //                     Payment Status
// //                   </span>

// //                   <strong>
// //                     PAID
// //                   </strong>
// //                 </div>

// //               </div>

// //               <Link
// //                 to="/"
// //                 className="payment-home-button"
// //               >
// //                 Continue Shopping
// //                 <span>
// //                   →
// //                 </span>
// //               </Link>

// //             </div>

// //           </div>

// //         </main>
// //       </PublicLayout>
// //     );
// //   }

// //   // =====================================================
// //   // PAYMENT PAGE
// //   // =====================================================

// //   return (
// //     <PayPalScriptProvider
// //       options={{
// //         clientId:
// //           PAYPAL_CLIENT_ID,

// //         currency: "EUR",

// //         intent: "capture",

// //         components: "buttons",

// //         "enable-funding":
// //           "card",
// //       }}
// //     >
// //       <PublicLayout>

// //         <main className="payment-page">

// //           <div className="payment-container">

// //             {/* HEADER */}

// //             <header className="payment-header">

// //               <div>

// //                 <span className="payment-eyebrow">
// //                   PAYMENT
// //                 </span>

// //                 <h1>
// //                   Complete your payment
// //                 </h1>

// //                 <p>
// //                   Your order has been created.
// //                   Complete the payment to
// //                   confirm your purchase.
// //                 </p>

// //               </div>

// //               <div className="payment-order-number">

// //                 <span>
// //                   ORDER
// //                 </span>

// //                 <strong>
// //                   {order.orderNumber}
// //                 </strong>

// //               </div>

// //             </header>


// //             {/* CONTENT */}

// //             <div className="payment-layout">

// //               {/* LEFT */}

// //               <section className="payment-main">

// //                 {/* PAYPAL CARD */}

// //                 <div className="payment-card">

// //                   <div className="payment-card-header">

// //                     <div>

// //                       <span>
// //                         PAYMENT METHOD
// //                       </span>

// //                       <h2>
// //                         PayPal
// //                       </h2>

// //                     </div>

// //                     <div className="paypal-placeholder">
// //                       PayPal
// //                     </div>

// //                   </div>


// //                   <div className="payment-message">

// //                     <div className="payment-message-icon">
// //                       €
// //                     </div>

// //                     <div>

// //                       <h3>
// //                         Secure payment
// //                       </h3>

// //                       <p>
// //                         Complete your payment
// //                         securely through PayPal.
// //                       </p>

// //                     </div>

// //                   </div>


// //                   {/* REAL PAYPAL BUTTON */}

// //                   <div className="paypal-container">

// //                     {PAYPAL_CLIENT_ID ? (

// //                       <PayPalButtons

// //                         style={{
// //                           layout: "vertical",

// //                           shape: "rect",

// //                           label: "paypal",

// //                           height: 48,
// //                         }}

// //                         disabled={
// //                           paymentLoading
// //                         }

// //                         forceReRender={[
// //                           order?.total,
// //                         ]}

// //                         createOrder={
// //                           createPayPalOrder
// //                         }

// //                         onApprove={
// //                           async (
// //                             data
// //                           ) => {
// //                             await capturePayPalOrder(
// //                               data
// //                             );
// //                           }
// //                         }

// //                         onCancel={() => {

// //                           setPaymentLoading(
// //                             false
// //                           );

// //                           setPaymentMessage(
// //                             "Payment was cancelled."
// //                           );

// //                         }}

// //                         onError={(err) => {

// //                           console.error(
// //                             "PayPal error:",
// //                             err
// //                           );

// //                           setPaymentLoading(
// //                             false
// //                           );

// //                           setPaymentMessage(
// //                             "PayPal payment could not be completed. Please try again."
// //                           );

// //                         }}

// //                       />

// //                     ) : (

// //                       <div className="paypal-config-error">

// //                         PayPal Client ID is
// //                         missing.

// //                       </div>

// //                     )}


// //                     {paymentLoading && (

// //                       <div className="paypal-loading">

// //                         <div className="payment-spinner" />

// //                         <span>
// //                           Processing payment...
// //                         </span>

// //                       </div>

// //                     )}


// //                     {paymentMessage &&
// //                       !paymentSuccess && (

// //                         <div className="paypal-payment-message">

// //                           {paymentMessage}

// //                         </div>

// //                       )}

// //                   </div>

// //                 </div>


// //                 {/* CUSTOMER */}

// //                 <div className="payment-card">

// //                   <div className="payment-card-title">

// //                     <span>
// //                       CUSTOMER
// //                     </span>

// //                     <h2>
// //                       {order.firstName}{" "}
// //                       {order.lastName}
// //                     </h2>

// //                   </div>

// //                   <div className="payment-details">

// //                     <div>

// //                       <span>
// //                         Email
// //                       </span>

// //                       <strong>
// //                         {order.email}
// //                       </strong>

// //                     </div>

// //                     <div>

// //                       <span>
// //                         Phone
// //                       </span>

// //                       <strong>
// //                         {order.countryCode}{" "}
// //                         {order.phone}
// //                       </strong>

// //                     </div>

// //                   </div>

// //                 </div>


// //                 {/* DELIVERY */}

// //                 <div className="payment-card">

// //                   <div className="payment-card-title">

// //                     <span>
// //                       DELIVERY ADDRESS
// //                     </span>

// //                     <h2>
// //                       Delivery
// //                     </h2>

// //                   </div>

// //                   <address className="payment-address">

// //                     <strong>
// //                       {order.firstName}{" "}
// //                       {order.lastName}
// //                     </strong>

// //                     <span>
// //                       {order.addressLine1}
// //                     </span>

// //                     {order.addressLine2 && (
// //                       <span>
// //                         {order.addressLine2}
// //                       </span>
// //                     )}

// //                     <span>
// //                       {order.city}

// //                       {order.state
// //                         ? `, ${order.state}`
// //                         : ""}
// //                     </span>

// //                     <span>
// //                       {order.postalCode}
// //                     </span>

// //                     <span>
// //                       {order.country}
// //                     </span>

// //                   </address>

// //                 </div>

// //               </section>


// //               {/* RIGHT */}

// //               <aside className="payment-sidebar">

// //                 <div className="payment-summary">

// //                   <div className="payment-summary-header">

// //                     <span>
// //                       ORDER SUMMARY
// //                     </span>

// //                     <h2>
// //                       Your order
// //                     </h2>

// //                   </div>


// //                   <div className="payment-items">

// //                     {order.items?.map(
// //                       (item) => (

// //                         <div
// //                           className="payment-item"
// //                           key={item.id}
// //                         >

// //                           <div>

// //                             <strong>
// //                               {item.productTitle}
// //                             </strong>

// //                             <span>
// //                               Qty:{" "}
// //                               {item.quantity}
// //                             </span>

// //                           </div>

// //                           <strong>
// //                             {formatCurrency(
// //                               item.price *
// //                                 item.quantity
// //                             )}
// //                           </strong>

// //                         </div>

// //                       )
// //                     )}

// //                   </div>


// //                   <div className="payment-totals">

// //                     <div>

// //                       <span>
// //                         Subtotal
// //                       </span>

// //                       <strong>
// //                         {formatCurrency(
// //                           order.subtotal
// //                         )}
// //                       </strong>

// //                     </div>


// //                     {Number(
// //                       order.discount
// //                     ) > 0 && (

// //                       <div>

// //                         <span>
// //                           Discount
// //                         </span>

// //                         <strong>
// //                           -
// //                           {formatCurrency(
// //                             order.discount
// //                           )}
// //                         </strong>

// //                       </div>

// //                     )}


// //                     <div className="payment-total">

// //                       <span>
// //                         Total
// //                       </span>

// //                       <strong>
// //                         {formatCurrency(
// //                           order.total
// //                         )}
// //                       </strong>

// //                     </div>

// //                   </div>


// //                   <div className="payment-status">

// //                     <span>
// //                       Order status
// //                     </span>

// //                     <strong>
// //                       {order.status}
// //                     </strong>

// //                   </div>

// //                 </div>

// //               </aside>

// //             </div>

// //           </div>

// //         </main>

// //       </PublicLayout>
// //     </PayPalScriptProvider>
// //   );
// // }

// // export default Payment;


// import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import scanner from "../assets/scanner.jpeg";

// import PublicLayout from "../layouts/PublicLayout";
// import "./Payment.css";

// const API_URL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";

// // =====================================================
// // BANK DETAILS
// // =====================================================

// const BANK_DETAILS = {
//   accountName: "Naga Kumar Gangeswaran",

//   iban: "DE75 2687 0024 0207 7303 00",

//   bic: "DEUTDEDB268",

//   bankName: "Deutsche Bank",

//   country: "Germany",
// };

// // =====================================================
// // QR CODE
// // =====================================================
// //
// // Put your QR image here.
// //
// // Example:
// // import paymentQr from "../assets/payment-qr.png";
// //
// // Then:
// // qrImage: paymentQr
// //
// // =====================================================

// const QR_IMAGE = scanner;


// // =====================================================
// // CURRENCY
// // =====================================================

// const formatCurrency = (amount) => {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "EUR",
//     minimumFractionDigits: 2,
//   }).format(Number(amount) || 0);
// };


// // =====================================================
// // PAYMENT
// // =====================================================

// function Payment() {

//   const [searchParams] =
//     useSearchParams();

//   const orderId =
//     searchParams.get("order");


//   // ===================================================
//   // STATE
//   // ===================================================

//   const [order, setOrder] =
//     useState(null);

//   const [loading, setLoading] =
//     useState(true);

//   const [error, setError] =
//     useState("");


//   const [proofFile, setProofFile] =
//     useState(null);

//   const [uploadingProof, setUploadingProof] =
//     useState(false);

//   const [proofSuccess, setProofSuccess] =
//     useState(false);

//   const [proofMessage, setProofMessage] =
//     useState("");

//   const [invoice, setInvoice] =
//     useState(null);


//   // ===================================================
//   // GET ORDER
//   // ===================================================

//   useEffect(() => {

//     const fetchOrder =
//       async () => {

//         try {

//           if (!orderId) {

//             setError(
//               "Order ID is missing."
//             );

//             setLoading(false);

//             return;
//           }


//           const response =
//             await fetch(
//               `${API_URL}/orders/id/${orderId}`
//             );


//           const data =
//             await response.json();


//           if (!response.ok) {

//             throw new Error(
//               data?.message ||
//               "Unable to load order."
//             );

//           }


//           setOrder(
//             data.order
//           );

//         } catch (err) {

//           console.error(
//             "Payment order error:",
//             err
//           );


//           setError(
//             err.message ||
//             "Unable to load your order."
//           );

//         } finally {

//           setLoading(false);

//         }

//       };


//     fetchOrder();

//   }, [orderId]);


//   // ===================================================
//   // FILE SELECT
//   // ===================================================

//   const handleFileChange =
//     (event) => {

//       const file =
//         event.target.files?.[0];


//       if (!file) {

//         setProofFile(null);

//         return;
//       }


//       const allowedTypes = [
//         "image/jpeg",
//         "image/png",
//         "image/webp",
//         "application/pdf",
//       ];


//       if (
//         !allowedTypes.includes(
//           file.type
//         )
//       ) {

//         setProofMessage(
//           "Please upload JPG, PNG, WEBP or PDF."
//         );

//         event.target.value = "";

//         setProofFile(null);

//         return;
//       }


//       // 10 MB

//       if (
//         file.size >
//         10 * 1024 * 1024
//       ) {

//         setProofMessage(
//           "Payment proof must be less than 10MB."
//         );

//         event.target.value = "";

//         setProofFile(null);

//         return;
//       }


//       setProofMessage("");

//       setProofFile(file);

//     };


//   // ===================================================
//   // UPLOAD PAYMENT PROOF
//   // ===================================================

//   const handlePaymentProofSubmit =
//     async (event) => {

//       event.preventDefault();


//       if (!proofFile) {

//         setProofMessage(
//           "Please select your payment proof."
//         );

//         return;
//       }


//       try {

//         setUploadingProof(true);

//         setProofMessage("");


//         const formData =
//           new FormData();


//         formData.append(
//           "paymentProof",
//           proofFile
//         );


//         const response =
//           await fetch(
//             `${API_URL}/orders/${orderId}/payment-proof`,
//             {
//               method: "POST",

//               body: formData,
//             }
//           );


//         const data =
//           await response.json();


//         if (!response.ok) {

//           throw new Error(
//             data?.message ||
//             "Failed to submit payment proof."
//           );

//         }


//         // =============================================
//         // SUCCESS
//         // =============================================

//         setProofSuccess(true);


//         setProofMessage(
//           data.message ||
//           "Payment proof submitted successfully."
//         );


//         // =============================================
//         // SAVE INVOICE
//         // =============================================

//         if (data.invoice) {

//           setInvoice(
//             data.invoice
//           );

//         }


//         // =============================================
//         // UPDATE ORDER
//         // =============================================

//         if (data.order) {

//           setOrder(
//             data.order
//           );

//         }


//       } catch (err) {

//         console.error(
//           "Payment proof upload error:",
//           err
//         );


//         setProofMessage(
//           err.message ||
//           "Unable to submit payment proof."
//         );

//       } finally {

//         setUploadingProof(false);

//       }

//     };


//   // ===================================================
//   // LOADING
//   // ===================================================

//   if (loading) {

//     return (

//       <PublicLayout>

//         <main className="payment-page">

//           <div className="payment-loading">

//             <div className="payment-spinner" />

//             <p>
//               Loading payment...
//             </p>

//           </div>

//         </main>

//       </PublicLayout>

//     );

//   }


//   // ===================================================
//   // ERROR
//   // ===================================================

//   if (error || !order) {

//     return (

//       <PublicLayout>

//         <main className="payment-page">

//           <div className="payment-error">

//             <span className="payment-eyebrow">
//               PAYMENT
//             </span>


//             <h1>
//               Unable to load payment
//             </h1>


//             <p>
//               {error ||
//                 "We could not find your order."}
//             </p>


//             <Link
//               to="/cart"
//               className="payment-back-button"
//             >
//               Back to Cart

//               <span>
//                 →
//               </span>

//             </Link>

//           </div>

//         </main>

//       </PublicLayout>

//     );

//   }


//   // ===================================================
//   // MAIN
//   // ===================================================

//   return (

//     <PublicLayout>

//       <main className="payment-page">

//         <div className="payment-container">


//           {/* =================================================
//               HEADER
//           ================================================= */}

//           <header className="payment-header">

//             <div>

//               <span className="payment-eyebrow">
//                 PAYMENT
//               </span>


//               <h1>
//                 Complete your payment
//               </h1>


//               <p>
//                 Make the bank transfer and
//                 upload your payment proof
//                 to submit your order.
//               </p>

//             </div>


//             <div className="payment-order-number">

//               <span>
//                 ORDER
//               </span>


//               <strong>
//                 {order.orderNumber}
//               </strong>

//             </div>

//           </header>


//           {/* =================================================
//               CONTENT
//           ================================================= */}

//           <div className="payment-layout">


//             {/* =================================================
//                 LEFT
//             ================================================= */}

//             <section className="payment-main">


//               {/* =================================================
//                   PAYMENT CARD
//               ================================================= */}

//               <div className="payment-card">

//                 <div className="payment-card-header">

//                   <div>

//                     <span>
//                       PAYMENT METHOD
//                     </span>


//                     <h2>
//                       Bank Transfer
//                     </h2>

//                   </div>


//                   <div className="bank-transfer-badge">
//                     EUR
//                   </div>

//                 </div>


//                 {/* =================================================
//                     AMOUNT
//                 ================================================= */}

//                 <div className="payment-amount-box">

//                   <span>
//                     AMOUNT TO PAY
//                   </span>


//                   <strong>
//                     {formatCurrency(
//                       order.total
//                     )}
//                   </strong>


//                   <small>
//                     Please transfer the exact amount.
//                   </small>

//                 </div>


//                 {/* =================================================
//                     BANK DETAILS
//                 ================================================= */}

//                 <div className="bank-details">

//                   <div className="bank-details-title">

//                     <span>
//                       BANK TRANSFER DETAILS
//                     </span>

//                     <h3>
//                       Make your payment
//                     </h3>

//                   </div>


//                   <div className="bank-detail-row">

//                     <span>
//                       Account Name
//                     </span>

//                     <strong>
//                       {BANK_DETAILS.accountName}
//                     </strong>

//                   </div>


//                   <div className="bank-detail-row">

//                     <span>
//                       IBAN
//                     </span>

//                     <strong>
//                       {BANK_DETAILS.iban}
//                     </strong>

//                   </div>


//                   <div className="bank-detail-row">

//                     <span>
//                       BIC / SWIFT
//                     </span>

//                     <strong>
//                       {BANK_DETAILS.bic}
//                     </strong>

//                   </div>


//                   <div className="bank-detail-row">

//                     <span>
//                       Bank
//                     </span>

//                     <strong>
//                       {BANK_DETAILS.bankName}
//                     </strong>

//                   </div>


//                   <div className="bank-detail-row">

//                     <span>
//                       Country
//                     </span>

//                     <strong>
//                       {BANK_DETAILS.country}
//                     </strong>

//                   </div>


//                   {/* PAYMENT REFERENCE */}

//                   <div className="payment-reference">

//                     <span>
//                       PAYMENT REFERENCE
//                     </span>

//                     <strong>
//                       {order.orderNumber}
//                     </strong>

//                     <small>
//                       Please use your order number
//                       as the payment reference.
//                     </small>

//                   </div>

//                 </div>


//                 {/* =================================================
//                     QR CODE
//                 ================================================= */}

//                 <div className="payment-qr-section">

//                   <div>

//                     <span>
//                       SCAN & PAY
//                     </span>

//                     <h3>
//                       Pay using your banking app
//                     </h3>

//                     <p>
//                       Scan the QR code with your
//                       banking application and
//                       complete the transfer.
//                     </p>

//                   </div>


//                   <div className="payment-qr-wrapper">

//                     <img
//                       src={QR_IMAGE}
//                       alt="Payment QR Code"
//                       className="payment-qr-image"
//                     />

//                   </div>

//                 </div>

//               </div>


//               {/* =================================================
//                   PAYMENT PROOF
//               ================================================= */}

//               <div className="payment-card">

//                 <div className="payment-card-title">

//                   <span>
//                     PAYMENT CONFIRMATION
//                   </span>


//                   <h2>
//                     Upload payment proof
//                   </h2>


//                   <p>
//                     After completing the bank
//                     transfer, upload your receipt
//                     or payment confirmation.
//                   </p>

//                 </div>


//                 {proofSuccess ? (

//                   /* =============================================
//                      SUCCESS
//                   ============================================= */

//                   <div className="proof-success">

//                     <div className="proof-success-icon">
//                       ✓
//                     </div>


//                     <div className="proof-success-content">

//                       <span className="proof-success-label">
//                         PAYMENT PROOF SUBMITTED
//                       </span>


//                       <h3>
//                         Thank you!
//                       </h3>


//                       <p>
//                         We've received your
//                         payment proof successfully.
//                       </p>


//                       <div className="verification-notice">

//                         <strong>
//                           Payment verification
//                         </strong>

//                         <span>
//                           Usually takes 2–3
//                           working days.
//                         </span>

//                       </div>


//                       {invoice && (

//                         <div className="invoice-info">

//                           <span>
//                             INVOICE GENERATED
//                           </span>

//                           <strong>
//                             {invoice.number ||
//                               invoice.id}
//                           </strong>

//                         </div>

//                       )}


//                       <p className="proof-final-message">

//                         Your order will be confirmed
//                         once our team verifies the
//                         payment.

//                       </p>

//                     </div>

//                   </div>

//                 ) : (

//                   /* =============================================
//                      UPLOAD FORM
//                   ============================================= */

//                   <form
//                     className="payment-proof-form"
//                     onSubmit={
//                       handlePaymentProofSubmit
//                     }
//                   >

//                     <label
//                       htmlFor="paymentProof"
//                       className="payment-upload-box"
//                     >

//                       <div className="payment-upload-icon">
//                         ↑
//                       </div>


//                       <strong>
//                         Choose payment proof
//                       </strong>


//                       <span>
//                         JPG, PNG, WEBP or PDF
//                       </span>


//                       <small>
//                         Maximum file size: 10MB
//                       </small>

//                     </label>


//                     <input
//                       id="paymentProof"
//                       type="file"
//                       accept=".jpg,.jpeg,.png,.webp,.pdf"
//                       onChange={
//                         handleFileChange
//                       }
//                       hidden
//                     />


//                     {proofFile && (

//                       <div className="selected-payment-file">

//                         <div>

//                           <span>
//                             Selected file
//                           </span>

//                           <strong>
//                             {proofFile.name}
//                           </strong>

//                         </div>


//                         <button
//                           type="button"
//                           onClick={() =>
//                             setProofFile(null)
//                           }
//                         >
//                           Remove
//                         </button>

//                       </div>

//                     )}


//                     {proofMessage && (

//                       <div
//                         className={
//                           proofSuccess
//                             ? "proof-message success"
//                             : "proof-message"
//                         }
//                       >
//                         {proofMessage}
//                       </div>

//                     )}


//                     <button
//                       type="submit"
//                       className="payment-submit-proof"
//                       disabled={
//                         uploadingProof ||
//                         !proofFile
//                       }
//                     >

//                       {uploadingProof ? (

//                         <>
//                           <span className="payment-button-spinner" />

//                           Uploading...
//                         </>

//                       ) : (

//                         <>
//                           Submit Payment Proof

//                           <span>
//                             →
//                           </span>
//                         </>

//                       )}

//                     </button>


//                     <p className="payment-verification-note">

//                       <strong>
//                         Important:
//                       </strong>{" "}

//                       Submitting your payment proof
//                       does not mean the payment has
//                       been verified. Our team will
//                       verify the payment within
//                       <strong>
//                         {" "}2–3 working days.
//                       </strong>

//                     </p>

//                   </form>

//                 )}

//               </div>


//               {/* =================================================
//                   CUSTOMER
//               ================================================= */}

//               <div className="payment-card">

//                 <div className="payment-card-title">

//                   <span>
//                     CUSTOMER
//                   </span>


//                   <h2>
//                     {order.firstName}{" "}
//                     {order.lastName}
//                   </h2>

//                 </div>


//                 <div className="payment-details">

//                   <div>

//                     <span>
//                       Email
//                     </span>

//                     <strong>
//                       {order.email}
//                     </strong>

//                   </div>


//                   <div>

//                     <span>
//                       Phone
//                     </span>

//                     <strong>
//                       {order.countryCode}{" "}
//                       {order.phone}
//                     </strong>

//                   </div>

//                 </div>

//               </div>


//               {/* =================================================
//                   DELIVERY
//               ================================================= */}

//               <div className="payment-card">

//                 <div className="payment-card-title">

//                   <span>
//                     DELIVERY ADDRESS
//                   </span>


//                   <h2>
//                     Delivery
//                   </h2>

//                 </div>


//                 <address className="payment-address">

//                   <strong>
//                     {order.firstName}{" "}
//                     {order.lastName}
//                   </strong>


//                   <span>
//                     {order.addressLine1}
//                   </span>


//                   {order.addressLine2 && (

//                     <span>
//                       {order.addressLine2}
//                     </span>

//                   )}


//                   <span>

//                     {order.city}

//                     {order.state
//                       ? `, ${order.state}`
//                       : ""}

//                   </span>


//                   <span>
//                     {order.postalCode}
//                   </span>


//                   <span>
//                     {order.country}
//                   </span>

//                 </address>

//               </div>

//             </section>


//             {/* =================================================
//                 RIGHT SIDEBAR
//             ================================================= */}

//             <aside className="payment-sidebar">

//               <div className="payment-summary">


//                 <div className="payment-summary-header">

//                   <span>
//                     ORDER SUMMARY
//                   </span>


//                   <h2>
//                     Your order
//                   </h2>

//                 </div>


//                 <div className="payment-items">

//                   {order.items?.map(
//                     (item) => (

//                       <div
//                         className="payment-item"
//                         key={item.id}
//                       >

//                         <div>

//                           <strong>
//                             {item.productTitle}
//                           </strong>


//                           <span>
//                             Qty:{" "}
//                             {item.quantity}
//                           </span>

//                         </div>


//                         <strong>
//                           {formatCurrency(
//                             item.price *
//                             item.quantity
//                           )}
//                         </strong>

//                       </div>

//                     )
//                   )}

//                 </div>


//                 <div className="payment-totals">


//                   <div>

//                     <span>
//                       Subtotal
//                     </span>


//                     <strong>
//                       {formatCurrency(
//                         order.subtotal
//                       )}
//                     </strong>

//                   </div>


//                   {Number(
//                     order.discount
//                   ) > 0 && (

//                     <div>

//                       <span>
//                         Discount
//                       </span>


//                       <strong>
//                         -
//                         {formatCurrency(
//                           order.discount
//                         )}
//                       </strong>

//                     </div>

//                   )}


//                   <div className="payment-total">

//                     <span>
//                       Total
//                     </span>


//                     <strong>
//                       {formatCurrency(
//                         order.total
//                       )}
//                     </strong>

//                   </div>

//                 </div>


//                 {/* STATUS */}

//                 <div className="payment-status">

//                   <span>
//                     Payment status
//                   </span>


//                   <strong>
//                     {order.paymentStatus}
//                   </strong>

//                 </div>


//                 {/* VERIFICATION */}

//                 <div className="sidebar-verification">

//                   <span>
//                     PAYMENT VERIFICATION
//                   </span>


//                   <strong>
//                     2–3 working days
//                   </strong>


//                   <p>
//                     Your order will be confirmed
//                     after payment verification.
//                   </p>

//                 </div>

//               </div>

//             </aside>

//           </div>

//         </div>

//       </main>

//     </PublicLayout>

//   );
// }


// export default Payment;


// import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import scanner from "../assets/scanner.jpeg";

// import PublicLayout from "../layouts/PublicLayout";
// import "./Payment.css";

// const API_URL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";

// // =====================================================
// // BANK DETAILS
// // =====================================================

// const BANK_DETAILS = {
//   accountName: "Naga Kumar Gangeswaran",
//   iban: "DE75 2687 0024 0207 7303 00",
//   bic: "DEUTDEDB268",
//   bankName: "Deutsche Bank",
//   country: "Germany",
// };

// // =====================================================
// // QR CODE
// // =====================================================

// const QR_IMAGE = scanner;

// // =====================================================
// // CURRENCY
// // =====================================================

// const formatCurrency = (amount) => {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "EUR",
//     minimumFractionDigits: 2,
//   }).format(Number(amount) || 0);
// };

// // =====================================================
// // PAYMENT
// // =====================================================

// function Payment() {
//   const [searchParams] = useSearchParams();
//   const orderId = searchParams.get("order");

//   // ===================================================
//   // STATE
//   // ===================================================

//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
  
//   // Toggle state: "bank" or "paypal"
//   const [paymentMethod, setPaymentMethod] = useState("bank");

//   const [proofFile, setProofFile] = useState(null);
//   const [uploadingProof, setUploadingProof] = useState(false);
//   const [proofSuccess, setProofSuccess] = useState(false);
//   const [proofMessage, setProofMessage] = useState("");
//   const [invoice, setInvoice] = useState(null);

//   // ===================================================
//   // GET ORDER
//   // ===================================================

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         if (!orderId) {
//           setError("Order ID is missing.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `${API_URL}/orders/id/${orderId}`
//         );

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(
//             data?.message || "Unable to load order."
//           );
//         }

//         setOrder(data.order);
//       } catch (err) {
//         console.error("Payment order error:", err);
//         setError(err.message || "Unable to load your order.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrder();
//   }, [orderId]);

//   // ===================================================
//   // FILE SELECT
//   // ===================================================

//   const handleFileChange = (event) => {
//     const file = event.target.files?.[0];

//     if (!file) {
//       setProofFile(null);
//       return;
//     }

//     const allowedTypes = [
//       "image/jpeg",
//       "image/png",
//       "image/webp",
//       "application/pdf",
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       setProofMessage("Please upload JPG, PNG, WEBP or PDF.");
//       event.target.value = "";
//       setProofFile(null);
//       return;
//     }

//     if (file.size > 10 * 1024 * 1024) {
//       setProofMessage("Payment proof must be less than 10MB.");
//       event.target.value = "";
//       setProofFile(null);
//       return;
//     }

//     setProofMessage("");
//     setProofFile(file);
//   };

//   // ===================================================
//   // UPLOAD PAYMENT PROOF
//   // ===================================================

//   const handlePaymentProofSubmit = async (event) => {
//     event.preventDefault();

//     if (!proofFile) {
//       setProofMessage("Please select your payment proof.");
//       return;
//     }

//     try {
//       setUploadingProof(true);
//       setProofMessage("");

//       const formData = new FormData();
//       formData.append("paymentProof", proofFile);

//       const response = await fetch(
//         `${API_URL}/orders/${orderId}/payment-proof`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data?.message || "Failed to submit payment proof."
//         );
//       }

//       setProofSuccess(true);
//       setProofMessage(
//         data.message || "Payment proof submitted successfully."
//       );

//       if (data.invoice) {
//         setInvoice(data.invoice);
//       }

//       if (data.order) {
//         setOrder(data.order);
//       }
//     } catch (err) {
//       console.error("Payment proof upload error:", err);
//       setProofMessage(err.message || "Unable to submit payment proof.");
//     } finally {
//       setUploadingProof(false);
//     }
//   };

//   // ===================================================
//   // LOADING
//   // ===================================================

//   if (loading) {
//     return (
//       <PublicLayout>
//         <main className="payment-page">
//           <div className="payment-loading">
//             <div className="payment-spinner" />
//             <p>Loading payment...</p>
//           </div>
//         </main>
//       </PublicLayout>
//     );
//   }

//   // ===================================================
//   // ERROR
//   // ===================================================

//   if (error || !order) {
//     return (
//       <PublicLayout>
//         <main className="payment-page">
//           <div className="payment-error">
//             <span className="payment-eyebrow">PAYMENT</span>
//             <h1>Unable to load payment</h1>
//             <p>{error || "We could not find your order."}</p>
//             <Link to="/cart" className="payment-back-button">
//               Back to Cart
//               <span>→</span>
//             </Link>
//           </div>
//         </main>
//       </PublicLayout>
//     );
//   }

//   // ===================================================
//   // MAIN
//   // ===================================================

//   return (
//     <PublicLayout>
//       <main className="payment-page">
//         <div className="payment-container">

//           {/* =================================================
//               HEADER
//           ================================================= */}

//           <header className="payment-header">
//             <div>
//               <span className="payment-eyebrow">PAYMENT</span>
//               <h1>Complete your payment</h1>
//               <p>
//                 Choose your preferred payment method and complete
//                 the transaction to confirm your order.
//               </p>
//             </div>

//             <div className="payment-order-number">
//               <span>ORDER</span>
//               <strong>{order.orderNumber}</strong>
//             </div>
//           </header>

//           {/* =================================================
//               PAYMENT METHOD TOGGLE
//           ================================================= */}

//           <div className="payment-method-toggle">
//             <button
//               className={`payment-method-btn ${
//                 paymentMethod === "bank" ? "active" : ""
//               }`}
//               onClick={() => setPaymentMethod("bank")}
//             >
//               <span className="payment-method-icon">🏦</span>
//               Bank Transfer
//             </button>
//             <button
//               className={`payment-method-btn ${
//                 paymentMethod === "paypal" ? "active" : ""
//               }`}
//               onClick={() => setPaymentMethod("paypal")}
//             >
//               <span className="payment-method-icon">💳</span>
//               PayPal
//             </button>
//           </div>

//           {/* =================================================
//               CONTENT
//           ================================================= */}

//           <div className="payment-layout">

//             {/* =================================================
//                 LEFT
//             ================================================= */}

//             <section className="payment-main">

//               {/* =================================================
//                   PAYMENT CARD - Conditional Content
//               ================================================= */}

//               <div className="payment-card">

//                 {paymentMethod === "bank" ? (
//                   // =============================================
//                   // BANK TRANSFER CONTENT
//                   // =============================================
//                   <>
//                     <div className="payment-card-header">
//                       <div>
//                         <span>PAYMENT METHOD</span>
//                         <h2>Bank Transfer</h2>
//                       </div>
//                       <div className="bank-transfer-badge">EUR</div>
//                     </div>

//                     {/* AMOUNT */}
//                     <div className="payment-amount-box">
//                       <span>AMOUNT TO PAY</span>
//                       <strong>{formatCurrency(order.total)}</strong>
//                       <small>Please transfer the exact amount.</small>
//                     </div>

//                     {/* BANK DETAILS */}
//                     <div className="bank-details">
//                       <div className="bank-details-title">
//                         <span>BANK TRANSFER DETAILS</span>
//                         <h3>Make your payment</h3>
//                       </div>

//                       <div className="bank-detail-row">
//                         <span>Account Name</span>
//                         <strong>{BANK_DETAILS.accountName}</strong>
//                       </div>

//                       <div className="bank-detail-row">
//                         <span>IBAN</span>
//                         <strong>{BANK_DETAILS.iban}</strong>
//                       </div>

//                       <div className="bank-detail-row">
//                         <span>BIC / SWIFT</span>
//                         <strong>{BANK_DETAILS.bic}</strong>
//                       </div>

//                       <div className="bank-detail-row">
//                         <span>Bank</span>
//                         <strong>{BANK_DETAILS.bankName}</strong>
//                       </div>

//                       <div className="bank-detail-row">
//                         <span>Country</span>
//                         <strong>{BANK_DETAILS.country}</strong>
//                       </div>

//                       {/* PAYMENT REFERENCE */}
//                       <div className="payment-reference">
//                         <span>PAYMENT REFERENCE</span>
//                         <strong>{order.orderNumber}</strong>
//                         <small>
//                           Please use your order number as the payment reference.
//                         </small>
//                       </div>
//                     </div>

//                     {/* QR CODE - SCAN & PAY */}
//                     <div className="payment-qr-section">
//                       <div>
//                         <span>SCAN & PAY</span>
//                         <h3>Pay using your banking app</h3>
//                         <p>
//                           Scan the QR code with your banking application and
//                           complete the transfer.
//                         </p>
//                       </div>

//                       <div className="payment-qr-wrapper">
//                         <img
//                           src={QR_IMAGE}
//                           alt="Payment QR Code"
//                           className="payment-qr-image"
//                         />
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   // =============================================
//                   // PAYPAL CONTENT - With SCAN & PAY section
//                   // =============================================
//                   <>
//                     <div className="payment-card-header">
//                       <div>
//                         <span>PAYMENT METHOD</span>
//                         <h2>PayPal</h2>
//                       </div>
//                       <div className="paypal-badge">Secure</div>
//                     </div>

//                     {/* AMOUNT */}
//                     <div className="payment-amount-box">
//                       <span>AMOUNT TO PAY</span>
//                       <strong>{formatCurrency(order.total)}</strong>
//                       <small>Pay securely with PayPal.</small>
//                     </div>

          

//                     {/* QR CODE - SCAN & PAY section (same as bank) */}
//                     <div className="payment-qr-section">
//                       <div>
//                         <span>SCAN & PAY</span>
//                         <h3>Pay with PayPal QR</h3>
//                         <p>
//                           Scan the QR code with your PayPal app to
//                           complete your payment quickly.
//                         </p>
//                       </div>

//                       <div className="payment-qr-wrapper">
//                         <img
//                           src={QR_IMAGE}
//                           alt="Payment QR Code"
//                           className="payment-qr-image"
//                         />
//                       </div>
//                     </div>
//                   </>
//                 )}

//               </div>

//               {/* =================================================
//                   PAYMENT PROOF - Only show for Bank Transfer
//               ================================================= */}

//               {paymentMethod === "bank" && (
//                 <div className="payment-card">
//                   <div className="payment-card-title">
//                     <span>PAYMENT CONFIRMATION</span>
//                     <h2>Upload payment proof</h2>
//                     <p>
//                       After completing the bank transfer, upload your receipt
//                       or payment confirmation.
//                     </p>
//                   </div>

//                   {proofSuccess ? (
//                     /* =============================================
//                        SUCCESS
//                     ============================================= */
//                     <div className="proof-success">
//                       <div className="proof-success-icon">✓</div>

//                       <div className="proof-success-content">
//                         <span className="proof-success-label">
//                           PAYMENT PROOF SUBMITTED
//                         </span>
//                         <h3>Thank you!</h3>
//                         <p>
//                           We've received your payment proof successfully.
//                         </p>

//                         <div className="verification-notice">
//                           <strong>Payment verification</strong>
//                           <span>Usually takes 2–3 working days.</span>
//                         </div>

//                         {invoice && (
//                           <div className="invoice-info">
//                             <span>INVOICE GENERATED</span>
//                             <strong>{invoice.number || invoice.id}</strong>
//                           </div>
//                         )}

//                         <p className="proof-final-message">
//                           Your order will be confirmed once our team verifies the
//                           payment.
//                         </p>
//                       </div>
//                     </div>
//                   ) : (
//                     /* =============================================
//                        UPLOAD FORM
//                     ============================================= */
//                     <form
//                       className="payment-proof-form"
//                       onSubmit={handlePaymentProofSubmit}
//                     >
//                       <label
//                         htmlFor="paymentProof"
//                         className="payment-upload-box"
//                       >
//                         <div className="payment-upload-icon">↑</div>
//                         <strong>Choose payment proof</strong>
//                         <span>JPG, PNG, WEBP or PDF</span>
//                         <small>Maximum file size: 10MB</small>
//                       </label>

//                       <input
//                         id="paymentProof"
//                         type="file"
//                         accept=".jpg,.jpeg,.png,.webp,.pdf"
//                         onChange={handleFileChange}
//                         hidden
//                       />

//                       {proofFile && (
//                         <div className="selected-payment-file">
//                           <div>
//                             <span>Selected file</span>
//                             <strong>{proofFile.name}</strong>
//                           </div>
//                           <button
//                             type="button"
//                             onClick={() => setProofFile(null)}
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       )}

//                       {proofMessage && (
//                         <div
//                           className={
//                             proofSuccess ? "proof-message success" : "proof-message"
//                           }
//                         >
//                           {proofMessage}
//                         </div>
//                       )}

//                       <button
//                         type="submit"
//                         className="payment-submit-proof"
//                         disabled={uploadingProof || !proofFile}
//                       >
//                         {uploadingProof ? (
//                           <>
//                             <span className="payment-button-spinner" />
//                             Uploading...
//                           </>
//                         ) : (
//                           <>
//                             Submit Payment Proof
//                             <span>→</span>
//                           </>
//                         )}
//                       </button>

//                       <p className="payment-verification-note">
//                         <strong>Important:</strong>{" "}
//                         Submitting your payment proof does not mean the payment has
//                         been verified. Our team will verify the payment within
//                         <strong> 2–3 working days.</strong>
//                       </p>
//                     </form>
//                   )}
//                 </div>
//               )}

//               {/* =================================================
//                   CUSTOMER
//               ================================================= */}

//               <div className="payment-card">
//                 <div className="payment-card-title">
//                   <span>CUSTOMER</span>
//                   <h2>
//                     {order.firstName} {order.lastName}
//                   </h2>
//                 </div>

//                 <div className="payment-details">
//                   <div>
//                     <span>Email</span>
//                     <strong>{order.email}</strong>
//                   </div>

//                   <div>
//                     <span>Phone</span>
//                     <strong>
//                       {order.countryCode} {order.phone}
//                     </strong>
//                   </div>
//                 </div>
//               </div>

//               {/* =================================================
//                   DELIVERY
//               ================================================= */}

//               <div className="payment-card">
//                 <div className="payment-card-title">
//                   <span>DELIVERY ADDRESS</span>
//                   <h2>Delivery</h2>
//                 </div>

//                 <address className="payment-address">
//                   <strong>
//                     {order.firstName} {order.lastName}
//                   </strong>
//                   <span>{order.addressLine1}</span>
//                   {order.addressLine2 && (
//                     <span>{order.addressLine2}</span>
//                   )}
//                   <span>
//                     {order.city}
//                     {order.state ? `, ${order.state}` : ""}
//                   </span>
//                   <span>{order.postalCode}</span>
//                   <span>{order.country}</span>
//                 </address>
//               </div>

//             </section>

//             {/* =================================================
//                 RIGHT SIDEBAR
//             ================================================= */}

//             <aside className="payment-sidebar">
//               <div className="payment-summary">

//                 <div className="payment-summary-header">
//                   <span>ORDER SUMMARY</span>
//                   <h2>Your order</h2>
//                 </div>

//                 <div className="payment-items">
//                   {order.items?.map((item) => (
//                     <div className="payment-item" key={item.id}>
//                       <div>
//                         <strong>{item.productTitle}</strong>
//                         <span>Qty: {item.quantity}</span>
//                       </div>
//                       <strong>
//                         {formatCurrency(item.price * item.quantity)}
//                       </strong>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="payment-totals">
//                   <div>
//                     <span>Subtotal</span>
//                     <strong>{formatCurrency(order.subtotal)}</strong>
//                   </div>

//                   {Number(order.discount) > 0 && (
//                     <div>
//                       <span>Discount</span>
//                       <strong>-{formatCurrency(order.discount)}</strong>
//                     </div>
//                   )}

//                   <div className="payment-total">
//                     <span>Total</span>
//                     <strong>{formatCurrency(order.total)}</strong>
//                   </div>
//                 </div>

//                 {/* STATUS */}
//                 <div className="payment-status">
//                   <span>Payment status</span>
//                   <strong>{order.paymentStatus}</strong>
//                 </div>

//                 {/* VERIFICATION */}
//                 <div className="sidebar-verification">
//                   <span>PAYMENT VERIFICATION</span>
//                   <strong>2–3 working days</strong>
//                   <p>
//                     Your order will be confirmed after payment verification.
//                   </p>
//                 </div>

//               </div>
//             </aside>

//           </div>

//         </div>
//       </main>
//     </PublicLayout>
//   );
// }

// export default Payment;



// import { useEffect, useState } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import scanner from "../assets/scanner.jpeg";

// import PublicLayout from "../layouts/PublicLayout";
// import "./Payment.css";

// const API_URL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";

// // =====================================================
// // BANK DETAILS
// // =====================================================

// const BANK_DETAILS = {
//   accountName: "Naga Kumar Gangeswaran",
//   iban: "DE75 2687 0024 0207 7303 00",
//   bic: "DEUTDEDB268",
//   bankName: "Deutsche Bank",
//   country: "Germany",
// };

// // =====================================================
// // QR CODE
// // =====================================================

// const QR_IMAGE = scanner;

// // =====================================================
// // CURRENCY
// // =====================================================

// const formatCurrency = (amount) => {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "EUR",
//     minimumFractionDigits: 2,
//   }).format(Number(amount) || 0);
// };

// // =====================================================
// // PAYMENT
// // =====================================================

// function Payment() {
//   const [searchParams] = useSearchParams();
//   const orderId = searchParams.get("order");

//   // ===================================================
//   // STATE
//   // ===================================================

//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
  
//   // Toggle state: "bank" or "paypal"
//   const [paymentMethod, setPaymentMethod] = useState("bank");

//   const [proofFile, setProofFile] = useState(null);
//   const [uploadingProof, setUploadingProof] = useState(false);
//   const [proofSuccess, setProofSuccess] = useState(false);
//   const [proofMessage, setProofMessage] = useState("");
//   const [invoice, setInvoice] = useState(null);

//   // ===================================================
//   // GET ORDER
//   // ===================================================

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         if (!orderId) {
//           setError("Order ID is missing.");
//           setLoading(false);
//           return;
//         }

//         const response = await fetch(
//           `${API_URL}/orders/id/${orderId}`
//         );

//         const data = await response.json();

//         if (!response.ok) {
//           throw new Error(
//             data?.message || "Unable to load order."
//           );
//         }

//         setOrder(data.order);
//       } catch (err) {
//         console.error("Payment order error:", err);
//         setError(err.message || "Unable to load your order.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrder();
//   }, [orderId]);

//   // ===================================================
//   // FILE SELECT
//   // ===================================================

//   const handleFileChange = (event) => {
//     const file = event.target.files?.[0];

//     if (!file) {
//       setProofFile(null);
//       return;
//     }

//     const allowedTypes = [
//       "image/jpeg",
//       "image/png",
//       "image/webp",
//       "application/pdf",
//     ];

//     if (!allowedTypes.includes(file.type)) {
//       setProofMessage("Please upload JPG, PNG, WEBP or PDF.");
//       event.target.value = "";
//       setProofFile(null);
//       return;
//     }

//     if (file.size > 10 * 1024 * 1024) {
//       setProofMessage("Payment proof must be less than 10MB.");
//       event.target.value = "";
//       setProofFile(null);
//       return;
//     }

//     setProofMessage("");
//     setProofFile(file);
//   };

//   // ===================================================
//   // UPLOAD PAYMENT PROOF
//   // ===================================================

//   const handlePaymentProofSubmit = async (event) => {
//     event.preventDefault();

//     if (!proofFile) {
//       setProofMessage("Please select your payment proof.");
//       return;
//     }

//     try {
//       setUploadingProof(true);
//       setProofMessage("");

//       const formData = new FormData();
//       formData.append("paymentProof", proofFile);

//       const response = await fetch(
//         `${API_URL}/orders/${orderId}/payment-proof`,
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data?.message || "Failed to submit payment proof."
//         );
//       }

//       setProofSuccess(true);
//       setProofMessage(
//         data.message || "Payment proof submitted successfully."
//       );

//       if (data.invoice) {
//         setInvoice(data.invoice);
//       }

//       if (data.order) {
//         setOrder(data.order);
//       }
//     } catch (err) {
//       console.error("Payment proof upload error:", err);
//       setProofMessage(err.message || "Unable to submit payment proof.");
//     } finally {
//       setUploadingProof(false);
//     }
//   };

//   // ===================================================
//   // LOADING
//   // ===================================================

//   if (loading) {
//     return (
//       <PublicLayout>
//         <main className="payment-page">
//           <div className="payment-loading">
//             <div className="payment-spinner" />
//             <p>Loading payment...</p>
//           </div>
//         </main>
//       </PublicLayout>
//     );
//   }

//   // ===================================================
//   // ERROR
//   // ===================================================

//   if (error || !order) {
//     return (
//       <PublicLayout>
//         <main className="payment-page">
//           <div className="payment-error">
//             <span className="payment-eyebrow">PAYMENT</span>
//             <h1>Unable to load payment</h1>
//             <p>{error || "We could not find your order."}</p>
//             <Link to="/cart" className="payment-back-button">
//               Back to Cart
//               <span>→</span>
//             </Link>
//           </div>
//         </main>
//       </PublicLayout>
//     );
//   }

//   // ===================================================
//   // MAIN
//   // ===================================================

//   return (
//     <PublicLayout>
//       <main className="payment-page">
//         <div className="payment-container">

//           {/* =================================================
//               HEADER
//           ================================================= */}

//           <header className="payment-header">
//             <div>
//               <span className="payment-eyebrow">PAYMENT</span>
//               <h1>Complete your payment</h1>
//               <p>
//                 Choose your preferred payment method and complete
//                 the transaction to confirm your order.
//               </p>
//             </div>

//             <div className="payment-order-number">
//               <span>ORDER</span>
//               <strong>{order.orderNumber}</strong>
//             </div>
//           </header>

//           {/* =================================================
//               PAYMENT METHOD TOGGLE
//           ================================================= */}

//           <div className="payment-method-toggle">
//             <button
//               className={`payment-method-btn ${
//                 paymentMethod === "bank" ? "active" : ""
//               }`}
//               onClick={() => setPaymentMethod("bank")}
//             >
//               <span className="payment-method-icon">🏦</span>
//               Bank Transfer
//             </button>
//             <button
//               className={`payment-method-btn ${
//                 paymentMethod === "paypal" ? "active" : ""
//               }`}
//               onClick={() => setPaymentMethod("paypal")}
//             >
//               <span className="payment-method-icon">💳</span>
//               PayPal
//             </button>
//           </div>

//           {/* =================================================
//               CONTENT
//           ================================================= */}

//           <div className="payment-layout">

//             {/* =================================================
//                 LEFT
//             ================================================= */}

//             <section className="payment-main">

//               {/* =================================================
//                   PAYMENT CARD - Conditional Content
//               ================================================= */}

//               <div className="payment-card">

//                 {paymentMethod === "bank" ? (
//                   // =============================================
//                   // BANK TRANSFER CONTENT
//                   // =============================================
//                   <>
//                     <div className="payment-card-header">
//                       <div>
//                         <span>PAYMENT METHOD</span>
//                         <h2>Bank Transfer</h2>
//                       </div>
//                       <div className="bank-transfer-badge">EUR</div>
//                     </div>

//                     {/* AMOUNT */}
//                     <div className="payment-amount-box">
//                       <span>AMOUNT TO PAY</span>
//                       <strong>{formatCurrency(order.total)}</strong>
//                       <small>Please transfer the exact amount.</small>
//                     </div>

//                     {/* BANK DETAILS */}
//                     <div className="bank-details">
//                       <div className="bank-details-title">
//                         <span>BANK TRANSFER DETAILS</span>
//                         <h3>Make your payment</h3>
//                       </div>

//                       <div className="bank-detail-row">
//                         <span>Account Name</span>
//                         <strong>{BANK_DETAILS.accountName}</strong>
//                       </div>

//                       <div className="bank-detail-row">
//                         <span>IBAN</span>
//                         <strong>{BANK_DETAILS.iban}</strong>
//                       </div>

//                       <div className="bank-detail-row">
//                         <span>BIC / SWIFT</span>
//                         <strong>{BANK_DETAILS.bic}</strong>
//                       </div>

//                       <div className="bank-detail-row">
//                         <span>Bank</span>
//                         <strong>{BANK_DETAILS.bankName}</strong>
//                       </div>

//                       <div className="bank-detail-row">
//                         <span>Country</span>
//                         <strong>{BANK_DETAILS.country}</strong>
//                       </div>

//                       {/* PAYMENT REFERENCE */}
//                       <div className="payment-reference">
//                         <span>PAYMENT REFERENCE</span>
//                         <strong>{order.orderNumber}</strong>
//                         <small>
//                           Please use your order number as the payment reference.
//                         </small>
//                       </div>
//                     </div>

//                     {/* QR CODE - SCAN & PAY */}
//                     <div className="payment-qr-section">
//                       <div>
//                         <span>SCAN & PAY</span>
//                         <h3>Pay using your banking app</h3>
//                         <p>
//                           Scan the QR code with your banking application and
//                           complete the transfer.
//                         </p>
//                       </div>

//                       <div className="payment-qr-wrapper">
//                         <img
//                           src={QR_IMAGE}
//                           alt="Payment QR Code"
//                           className="payment-qr-image"
//                         />
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   // =============================================
//                   // PAYPAL CONTENT - Only QR section
//                   // =============================================
//                   <>
//                     <div className="payment-card-header">
//                       <div>
//                         <span>PAYMENT METHOD</span>
//                         <h2>PayPal</h2>
//                       </div>
//                       <div className="paypal-badge">Secure</div>
//                     </div>

//                     {/* AMOUNT */}
//                     <div className="payment-amount-box">
//                       <span>AMOUNT TO PAY</span>
//                       <strong>{formatCurrency(order.total)}</strong>
//                       <small>Pay securely with PayPal.</small>
//                     </div>

//                     {/* QR CODE - SCAN & PAY section */}
//                     <div className="payment-qr-section">
//                       <div>
//                         <span>SCAN & PAY</span>
//                         <h3>Pay with PayPal</h3>
//                         <p>
//                           Scan the QR code with your PayPal app to
//                           complete your payment quickly and securely.
//                         </p>
//                       </div>

//                       <div className="payment-qr-wrapper">
//                         <img
//                           src={QR_IMAGE}
//                           alt="Payment QR Code"
//                           className="payment-qr-image"
//                         />
//                       </div>
//                     </div>
//                   </>
//                 )}

//               </div>

//               {/* =================================================
//                   PAYMENT PROOF - Only show for Bank Transfer
//               ================================================= */}

//               {paymentMethod === "bank" && (
//                 <div className="payment-card">
//                   <div className="payment-card-title">
//                     <span>PAYMENT CONFIRMATION</span>
//                     <h2>Upload payment proof</h2>
//                     <p>
//                       After completing the bank transfer, upload your receipt
//                       or payment confirmation.
//                     </p>
//                   </div>

//                   {proofSuccess ? (
//                     /* =============================================
//                        SUCCESS
//                     ============================================= */
//                     <div className="proof-success">
//                       <div className="proof-success-icon">✓</div>

//                       <div className="proof-success-content">
//                         <span className="proof-success-label">
//                           PAYMENT PROOF SUBMITTED
//                         </span>
//                         <h3>Thank you!</h3>
//                         <p>
//                           We've received your payment proof successfully.
//                         </p>

//                         <div className="verification-notice">
//                           <strong>Payment verification</strong>
//                           <span>Usually takes 2–3 working days.</span>
//                         </div>

//                         {invoice && (
//                           <div className="invoice-info">
//                             <span>INVOICE GENERATED</span>
//                             <strong>{invoice.number || invoice.id}</strong>
//                           </div>
//                         )}

//                         <p className="proof-final-message">
//                           Your order will be confirmed once our team verifies the
//                           payment.
//                         </p>
//                       </div>
//                     </div>
//                   ) : (
//                     /* =============================================
//                        UPLOAD FORM
//                     ============================================= */
//                     <form
//                       className="payment-proof-form"
//                       onSubmit={handlePaymentProofSubmit}
//                     >
//                       <label
//                         htmlFor="paymentProof"
//                         className="payment-upload-box"
//                       >
//                         <div className="payment-upload-icon">↑</div>
//                         <strong>Choose payment proof</strong>
//                         <span>JPG, PNG, WEBP or PDF</span>
//                         <small>Maximum file size: 10MB</small>
//                       </label>

//                       <input
//                         id="paymentProof"
//                         type="file"
//                         accept=".jpg,.jpeg,.png,.webp,.pdf"
//                         onChange={handleFileChange}
//                         hidden
//                       />

//                       {proofFile && (
//                         <div className="selected-payment-file">
//                           <div>
//                             <span>Selected file</span>
//                             <strong>{proofFile.name}</strong>
//                           </div>
//                           <button
//                             type="button"
//                             onClick={() => setProofFile(null)}
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       )}

//                       {proofMessage && (
//                         <div
//                           className={
//                             proofSuccess ? "proof-message success" : "proof-message"
//                           }
//                         >
//                           {proofMessage}
//                         </div>
//                       )}

//                       <button
//                         type="submit"
//                         className="payment-submit-proof"
//                         disabled={uploadingProof || !proofFile}
//                       >
//                         {uploadingProof ? (
//                           <>
//                             <span className="payment-button-spinner" />
//                             Uploading...
//                           </>
//                         ) : (
//                           <>
//                             Submit Payment Proof
//                             <span>→</span>
//                           </>
//                         )}
//                       </button>

//                       <p className="payment-verification-note">
//                         <strong>Important:</strong>{" "}
//                         Submitting your payment proof does not mean the payment has
//                         been verified. Our team will verify the payment within
//                         <strong> 2–3 working days.</strong>
//                       </p>
//                     </form>
//                   )}
//                 </div>
//               )}

//               {/* =================================================
//                   CUSTOMER
//               ================================================= */}

//               <div className="payment-card">
//                 <div className="payment-card-title">
//                   <span>CUSTOMER</span>
//                   <h2>
//                     {order.firstName} {order.lastName}
//                   </h2>
//                 </div>

//                 <div className="payment-details">
//                   <div>
//                     <span>Email</span>
//                     <strong>{order.email}</strong>
//                   </div>

//                   <div>
//                     <span>Phone</span>
//                     <strong>
//                       {order.countryCode} {order.phone}
//                     </strong>
//                   </div>
//                 </div>
//               </div>

//               {/* =================================================
//                   DELIVERY
//               ================================================= */}

//               <div className="payment-card">
//                 <div className="payment-card-title">
//                   <span>DELIVERY ADDRESS</span>
//                   <h2>Delivery</h2>
//                 </div>

//                 <address className="payment-address">
//                   <strong>
//                     {order.firstName} {order.lastName}
//                   </strong>
//                   <span>{order.addressLine1}</span>
//                   {order.addressLine2 && (
//                     <span>{order.addressLine2}</span>
//                   )}
//                   <span>
//                     {order.city}
//                     {order.state ? `, ${order.state}` : ""}
//                   </span>
//                   <span>{order.postalCode}</span>
//                   <span>{order.country}</span>
//                 </address>
//               </div>

//             </section>

//             {/* =================================================
//                 RIGHT SIDEBAR
//             ================================================= */}

//             <aside className="payment-sidebar">
//               <div className="payment-summary">

//                 <div className="payment-summary-header">
//                   <span>ORDER SUMMARY</span>
//                   <h2>Your order</h2>
//                 </div>

//                 <div className="payment-items">
//                   {order.items?.map((item) => (
//                     <div className="payment-item" key={item.id}>
//                       <div>
//                         <strong>{item.productTitle}</strong>
//                         <span>Qty: {item.quantity}</span>
//                       </div>
//                       <strong>
//                         {formatCurrency(item.price * item.quantity)}
//                       </strong>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="payment-totals">
//                   <div>
//                     <span>Subtotal</span>
//                     <strong>{formatCurrency(order.subtotal)}</strong>
//                   </div>

//                   {Number(order.discount) > 0 && (
//                     <div>
//                       <span>Discount</span>
//                       <strong>-{formatCurrency(order.discount)}</strong>
//                     </div>
//                   )}

//                   <div className="payment-total">
//                     <span>Total</span>
//                     <strong>{formatCurrency(order.total)}</strong>
//                   </div>
//                 </div>

//                 {/* STATUS */}
//                 <div className="payment-status">
//                   <span>Payment status</span>
//                   <strong>{order.paymentStatus}</strong>
//                 </div>

//                 {/* VERIFICATION */}
//                 <div className="sidebar-verification">
//                   <span>PAYMENT VERIFICATION</span>
//                   <strong>2–3 working days</strong>
//                   <p>
//                     Your order will be confirmed after payment verification.
//                   </p>
//                 </div>

//               </div>
//             </aside>

//           </div>

//         </div>
//       </main>
//     </PublicLayout>
//   );
// }

// export default Payment;

import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import scanner from "../assets/scanner.jpeg";

import PublicLayout from "../layouts/PublicLayout";
import "./Payment.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

// =====================================================
// BANK DETAILS
// =====================================================

const BANK_DETAILS = {
  accountName: "Naga Kumar Gangeswaran",
  iban: "DE75 2687 0024 0207 7303 00",
  bic: "DEUTDEDB268",
  bankName: "Deutsche Bank",
  country: "Germany",
};

// =====================================================
// QR CODE
// =====================================================

const QR_IMAGE = scanner;

// =====================================================
// CURRENCY
// =====================================================

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(Number(amount) || 0);
};

// =====================================================
// PAYMENT
// =====================================================

function Payment() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order");

  // ===================================================
  // STATE
  // ===================================================

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  // Toggle state: "bank" or "paypal"
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const [proofFile, setProofFile] = useState(null);
  const [uploadingProof, setUploadingProof] = useState(false);
  const [proofSuccess, setProofSuccess] = useState(false);
  const [proofMessage, setProofMessage] = useState("");
  const [invoice, setInvoice] = useState(null);

  // ===================================================
  // GET ORDER
  // ===================================================

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        if (!orderId) {
          setError("Order ID is missing.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `${API_URL}/orders/id/${orderId}`
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data?.message || "Unable to load order."
          );
        }

        setOrder(data.order);
      } catch (err) {
        console.error("Payment order error:", err);
        setError(err.message || "Unable to load your order.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  // ===================================================
  // FILE SELECT
  // ===================================================

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setProofFile(null);
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ];

    if (!allowedTypes.includes(file.type)) {
      setProofMessage("Please upload JPG, PNG, WEBP or PDF.");
      event.target.value = "";
      setProofFile(null);
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setProofMessage("Payment proof must be less than 10MB.");
      event.target.value = "";
      setProofFile(null);
      return;
    }

    setProofMessage("");
    setProofFile(file);
  };

  // ===================================================
  // UPLOAD PAYMENT PROOF
  // ===================================================

  const handlePaymentProofSubmit = async (event) => {
    event.preventDefault();

    if (!proofFile) {
      setProofMessage("Please select your payment proof.");
      return;
    }

    try {
      setUploadingProof(true);
      setProofMessage("");

      const formData = new FormData();
      formData.append("paymentProof", proofFile);

      const response = await fetch(
        `${API_URL}/orders/${orderId}/payment-proof`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Failed to submit payment proof."
        );
      }

      setProofSuccess(true);
      setProofMessage(
        data.message || "Payment proof submitted successfully."
      );

      if (data.invoice) {
        setInvoice(data.invoice);
      }

      if (data.order) {
        setOrder(data.order);
      }
    } catch (err) {
      console.error("Payment proof upload error:", err);
      setProofMessage(err.message || "Unable to submit payment proof.");
    } finally {
      setUploadingProof(false);
    }
  };

  // ===================================================
  // LOADING
  // ===================================================

  if (loading) {
    return (
      <PublicLayout>
        <main className="payment-page">
          <div className="payment-loading">
            <div className="payment-spinner" />
            <p>Loading payment...</p>
          </div>
        </main>
      </PublicLayout>
    );
  }

  // ===================================================
  // ERROR
  // ===================================================

  if (error || !order) {
    return (
      <PublicLayout>
        <main className="payment-page">
          <div className="payment-error">
            <span className="payment-eyebrow">PAYMENT</span>
            <h1>Unable to load payment</h1>
            <p>{error || "We could not find your order."}</p>
            <Link to="/cart" className="payment-back-button">
              Back to Cart
              <span>→</span>
            </Link>
          </div>
        </main>
      </PublicLayout>
    );
  }

  // ===================================================
  // MAIN
  // ===================================================

  return (
    <PublicLayout>
      <main className="payment-page">
        <div className="payment-container">

          {/* =================================================
              HEADER
          ================================================= */}

          <header className="payment-header">
            <div>
              <span className="payment-eyebrow">PAYMENT</span>
              <h1>Complete your payment</h1>
              <p>
                Choose your preferred payment method and complete
                the transaction to confirm your order.
              </p>
            </div>

            <div className="payment-order-number">
              <span>ORDER</span>
              <strong>{order.orderNumber}</strong>
            </div>
          </header>

          {/* =================================================
              PAYMENT METHOD TOGGLE
          ================================================= */}

          <div className="payment-method-toggle">
            <button
              className={`payment-method-btn ${
                paymentMethod === "bank" ? "active" : ""
              }`}
              onClick={() => setPaymentMethod("bank")}
            >
              <span className="payment-method-icon">🏦</span>
              Bank Transfer
            </button>
            <button
              className={`payment-method-btn ${
                paymentMethod === "paypal" ? "active" : ""
              }`}
              onClick={() => setPaymentMethod("paypal")}
            >
              <span className="payment-method-icon">💳</span>
              PayPal
            </button>
          </div>

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="payment-layout">

            {/* =================================================
                LEFT
            ================================================= */}

            <section className="payment-main">

              {/* =================================================
                  PAYMENT CARD - Conditional Content
              ================================================= */}

              <div className="payment-card">

                {paymentMethod === "bank" ? (
                  // =============================================
                  // BANK TRANSFER CONTENT
                  // =============================================
                  <>
                    <div className="payment-card-header">
                      <div>
                        <span>PAYMENT METHOD</span>
                        <h2>Bank Transfer</h2>
                      </div>
                      <div className="bank-transfer-badge">EUR</div>
                    </div>

                    {/* AMOUNT */}
                    <div className="payment-amount-box">
                      <span>AMOUNT TO PAY</span>
                      <strong>{formatCurrency(order.total)}</strong>
                      <small>Please transfer the exact amount.</small>
                    </div>

                    {/* BANK DETAILS */}
                    <div className="bank-details">
                      <div className="bank-details-title">
                        <span>BANK TRANSFER DETAILS</span>
                        <h3>Make your payment</h3>
                      </div>

                      <div className="bank-detail-row">
                        <span>Account Name</span>
                        <strong>{BANK_DETAILS.accountName}</strong>
                      </div>

                      <div className="bank-detail-row">
                        <span>IBAN</span>
                        <strong>{BANK_DETAILS.iban}</strong>
                      </div>

                      <div className="bank-detail-row">
                        <span>BIC / SWIFT</span>
                        <strong>{BANK_DETAILS.bic}</strong>
                      </div>

                      <div className="bank-detail-row">
                        <span>Bank</span>
                        <strong>{BANK_DETAILS.bankName}</strong>
                      </div>

                      <div className="bank-detail-row">
                        <span>Country</span>
                        <strong>{BANK_DETAILS.country}</strong>
                      </div>

                      {/* PAYMENT REFERENCE */}
                      <div className="payment-reference">
                        <span>PAYMENT REFERENCE</span>
                        <strong>{order.orderNumber}</strong>
                        <small>
                          Please use your order number as the payment reference.
                        </small>
                      </div>
                    </div>

                    {/* QR CODE - SCAN & PAY */}
                    <div className="payment-qr-section">
                      <div>
                        <span>SCAN & PAY</span>
                        <h3>Pay using your banking app</h3>
                        <p>
                          Scan the QR code with your banking application and
                          complete the transfer.
                        </p>
                      </div>

                      <div className="payment-qr-wrapper">
                        <img
                          src={QR_IMAGE}
                          alt="Payment QR Code"
                          className="payment-qr-image"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  // =============================================
                  // PAYPAL CONTENT - Only QR section
                  // =============================================
                  <>
                    <div className="payment-card-header">
                      <div>
                        <span>PAYMENT METHOD</span>
                        <h2>PayPal</h2>
                      </div>
                      <div className="paypal-badge">Secure</div>
                    </div>

                    {/* AMOUNT */}
                    <div className="payment-amount-box">
                      <span>AMOUNT TO PAY</span>
                      <strong>{formatCurrency(order.total)}</strong>
                      <small>Pay securely with PayPal.</small>
                    </div>

                    {/* QR CODE - SCAN & PAY section */}
                    <div className="payment-qr-section">
                      <div>
                        <span>SCAN & PAY</span>
                        <h3>Pay with PayPal</h3>
                        <p>
                          Scan the QR code with your PayPal app to
                          complete your payment quickly and securely.
                        </p>
                      </div>

                      <div className="payment-qr-wrapper">
                        <img
                          src={QR_IMAGE}
                          alt="Payment QR Code"
                          className="payment-qr-image"
                        />
                      </div>
                    </div>
                  </>
                )}

              </div>

              {/* =================================================
                  PAYMENT PROOF - SHOW FOR BOTH BANK & PAYPAL
              ================================================= */}

              <div className="payment-card">
                <div className="payment-card-title">
                  <span>PAYMENT CONFIRMATION</span>
                  <h2>Upload payment proof</h2>
                  <p>
                    {paymentMethod === "bank" 
                      ? "After completing the bank transfer, upload your receipt or payment confirmation."
                      : "After completing your PayPal payment, upload your payment receipt or confirmation."}
                  </p>
                </div>

                {proofSuccess ? (
                  /* =============================================
                     SUCCESS
                  ============================================= */
                  <div className="proof-success">
                    <div className="proof-success-icon">✓</div>

                    <div className="proof-success-content">
                      <span className="proof-success-label">
                        PAYMENT PROOF SUBMITTED
                      </span>
                      <h3>Thank you!</h3>
                      <p>
                        We've received your payment proof successfully.
                      </p>

                      <div className="verification-notice">
                        <strong>Payment verification</strong>
                        <span>Usually takes 2–3 working days.</span>
                      </div>

                      {invoice && (
                        <div className="invoice-info">
                          <span>INVOICE GENERATED</span>
                          <strong>{invoice.number || invoice.id}</strong>
                        </div>
                      )}

                      <p className="proof-final-message">
                        Your order will be confirmed once our team verifies the
                        payment.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* =============================================
                     UPLOAD FORM
                  ============================================= */
                  <form
                    className="payment-proof-form"
                    onSubmit={handlePaymentProofSubmit}
                  >
                    <label
                      htmlFor="paymentProof"
                      className="payment-upload-box"
                    >
                      <div className="payment-upload-icon">↑</div>
                      <strong>Choose payment proof</strong>
                      <span>JPG, PNG, WEBP or PDF</span>
                      <small>Maximum file size: 10MB</small>
                    </label>

                    <input
                      id="paymentProof"
                      type="file"
                      accept=".jpg,.jpeg,.png,.webp,.pdf"
                      onChange={handleFileChange}
                      hidden
                    />

                    {proofFile && (
                      <div className="selected-payment-file">
                        <div>
                          <span>Selected file</span>
                          <strong>{proofFile.name}</strong>
                        </div>
                        <button
                          type="button"
                          onClick={() => setProofFile(null)}
                        >
                          Remove
                        </button>
                      </div>
                    )}

                    {proofMessage && (
                      <div
                        className={
                          proofSuccess ? "proof-message success" : "proof-message"
                        }
                      >
                        {proofMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="payment-submit-proof"
                      disabled={uploadingProof || !proofFile}
                    >
                      {uploadingProof ? (
                        <>
                          <span className="payment-button-spinner" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          Submit Payment Proof
                          <span>→</span>
                        </>
                      )}
                    </button>

                    <p className="payment-verification-note">
                      <strong>Important:</strong>{" "}
                      Submitting your payment proof does not mean the payment has
                      been verified. Our team will verify the payment within
                      <strong> 2–3 working days.</strong>
                    </p>
                  </form>
                )}
              </div>

              {/* =================================================
                  CUSTOMER
              ================================================= */}

              <div className="payment-card">
                <div className="payment-card-title">
                  <span>CUSTOMER</span>
                  <h2>
                    {order.firstName} {order.lastName}
                  </h2>
                </div>

                <div className="payment-details">
                  <div>
                    <span>Email</span>
                    <strong>{order.email}</strong>
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>
                      {order.countryCode} {order.phone}
                    </strong>
                  </div>
                </div>
              </div>

              {/* =================================================
                  DELIVERY
              ================================================= */}

              <div className="payment-card">
                <div className="payment-card-title">
                  <span>DELIVERY ADDRESS</span>
                  <h2>Delivery</h2>
                </div>

                <address className="payment-address">
                  <strong>
                    {order.firstName} {order.lastName}
                  </strong>
                  <span>{order.addressLine1}</span>
                  {order.addressLine2 && (
                    <span>{order.addressLine2}</span>
                  )}
                  <span>
                    {order.city}
                    {order.state ? `, ${order.state}` : ""}
                  </span>
                  <span>{order.postalCode}</span>
                  <span>{order.country}</span>
                </address>
              </div>

            </section>

            {/* =================================================
                RIGHT SIDEBAR
            ================================================= */}

            <aside className="payment-sidebar">
              <div className="payment-summary">

                <div className="payment-summary-header">
                  <span>ORDER SUMMARY</span>
                  <h2>Your order</h2>
                </div>

                <div className="payment-items">
                  {order.items?.map((item) => (
                    <div className="payment-item" key={item.id}>
                      <div>
                        <strong>{item.productTitle}</strong>
                        <span>Qty: {item.quantity}</span>
                      </div>
                      <strong>
                        {formatCurrency(item.price * item.quantity)}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="payment-totals">
                  <div>
                    <span>Subtotal</span>
                    <strong>{formatCurrency(order.subtotal)}</strong>
                  </div>

                  {Number(order.discount) > 0 && (
                    <div>
                      <span>Discount</span>
                      <strong>-{formatCurrency(order.discount)}</strong>
                    </div>
                  )}

                  <div className="payment-total">
                    <span>Total</span>
                    <strong>{formatCurrency(order.total)}</strong>
                  </div>
                </div>

                {/* STATUS */}
                <div className="payment-status">
                  <span>Payment status</span>
                  <strong>{order.paymentStatus}</strong>
                </div>

                {/* VERIFICATION */}
                <div className="sidebar-verification">
                  <span>PAYMENT VERIFICATION</span>
                  <strong>2–3 working days</strong>
                  <p>
                    Your order will be confirmed after payment verification.
                  </p>
                </div>

              </div>
            </aside>

          </div>

        </div>
      </main>
    </PublicLayout>
  );
}

export default Payment;