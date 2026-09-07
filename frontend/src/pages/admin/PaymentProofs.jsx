// import { useEffect, useState } from "react";

// import "./PaymentProofs.css";
// import AdminLayout from "./AdminLayout";



// const API_URL =
//     import.meta.env.VITE_API_URL ||
//     "http://localhost:5000";

// function PaymentProofs() {

//     const [orders, setOrders] =
//         useState([]);

//     const [loading, setLoading] =
//         useState(true);

//     const [error, setError] =
//         useState("");

//     const [processingId, setProcessingId] =
//         useState(null);


//     // =====================================================
//     // FETCH
//     // =====================================================

//     const fetchOrders = async () => {

//         try {

//             setLoading(true);

//             const response =
//                 await fetch(
//                     `${API_URL}/orders/admin/payment-proofs`
//                 );

//             const data =
//                 await response.json();

//             if (!response.ok) {
//                 throw new Error(
//                     data?.message ||
//                     "Failed to load payment proofs"
//                 );
//             }

//             setOrders(
//                 data.orders || []
//             );

//         } catch (error) {

//             console.error(error);

//             setError(
//                 error.message ||
//                 "Failed to load payment proofs"
//             );

//         } finally {

//             setLoading(false);

//         }
//     };


//     useEffect(() => {
//         fetchOrders();
//     }, []);


//     // =====================================================
//     // VERIFY
//     // =====================================================

//     const handleVerify = async (
//         orderId
//     ) => {

//         const confirmed =
//             window.confirm(
//                 "Are you sure you want to verify this payment?"
//             );

//         if (!confirmed) {
//             return;
//         }

//         try {

//             setProcessingId(orderId);

//             const response =
//                 await fetch(
//                     `${API_URL}/orders/admin/${orderId}/verify-payment`,
//                     {
//                         method: "PUT",
//                     }
//                 );

//             const data =
//                 await response.json();

//             if (!response.ok) {
//                 throw new Error(
//                     data?.message ||
//                     "Failed to verify payment"
//                 );
//             }

//             // Remove from pending list
//             setOrders((current) =>
//                 current.filter(
//                     (order) =>
//                         order.id !== orderId
//                 )
//             );

//         } catch (error) {

//             alert(
//                 error.message ||
//                 "Failed to verify payment"
//             );

//         } finally {

//             setProcessingId(null);

//         }
//     };


//     // =====================================================
//     // REJECT
//     // =====================================================

//     const handleReject = async (
//         orderId
//     ) => {

//         const confirmed =
//             window.confirm(
//                 "Are you sure you want to reject this payment proof?"
//             );

//         if (!confirmed) {
//             return;
//         }

//         try {

//             setProcessingId(orderId);

//             const response =
//                 await fetch(
//                     `${API_URL}/orders/admin/${orderId}/reject-payment`,
//                     {
//                         method: "PUT",
//                     }
//                 );

//             const data =
//                 await response.json();

//             if (!response.ok) {
//                 throw new Error(
//                     data?.message ||
//                     "Failed to reject payment"
//                 );
//             }

//             setOrders((current) =>
//                 current.filter(
//                     (order) =>
//                         order.id !== orderId
//                 )
//             );

//         } catch (error) {

//             alert(
//                 error.message ||
//                 "Failed to reject payment"
//             );

//         } finally {

//             setProcessingId(null);

//         }
//     };


//     // =====================================================
//     // FORMAT
//     // =====================================================

//     const formatCurrency =
//         (amount) => {

//             return new Intl.NumberFormat(
//                 "en-IN",
//                 {
//                     style: "currency",
//                     currency: "EUR",
//                     minimumFractionDigits: 2,
//                 }
//             ).format(
//                 Number(amount) || 0
//             );

//         };


//     const formatDate =
//         (date) => {

//             if (!date) {
//                 return "-";
//             }

//             return new Date(
//                 date
//             ).toLocaleString(
//                 "en-IN",
//                 {
//                     dateStyle: "medium",
//                     timeStyle: "short",
//                 }
//             );

//         };


//     // =====================================================
//     // LOADING
//     // =====================================================

//     if (loading) {

//         return (
//             <div className="payment-proofs-page">

//                 <div className="payment-proofs-loading">
//                     Loading payment proofs...
//                 </div>

//             </div>
//         );

//     }


//     // =====================================================
//     // ERROR
//     // =====================================================

//     if (error) {

//         return (
//             <div className="payment-proofs-page">

//                 <div className="payment-proofs-error">

//                     <h2>
//                         Unable to load payment proofs
//                     </h2>

//                     <p>
//                         {error}
//                     </p>

//                     <button
//                         onClick={fetchOrders}
//                     >
//                         Try Again
//                     </button>

//                 </div>

//             </div>
//         );

//     }


//     // =====================================================
//     // PAGE
//     // =====================================================

//     return (

//         <AdminLayout>
//             <div className="payment-proofs-page">

//                 {/* HEADER */}

//                 <div className="payment-proofs-header">

//                     <div>

//                         <span>
//                             PAYMENTS
//                         </span>

//                         <h1>
//                             Payment Proofs
//                         </h1>

//                         <p>
//                             Review payment receipts submitted
//                             by customers.
//                         </p>

//                     </div>


//                     <div className="payment-proof-count">

//                         <strong>
//                             {orders.length}
//                         </strong>

//                         <span>
//                             Pending verification
//                         </span>

//                     </div>

//                 </div>


//                 {/* EMPTY */}

//                 {orders.length === 0 ? (

//                     <div className="payment-proofs-empty">

//                         <div>
//                             ✓
//                         </div>

//                         <h2>
//                             No payments waiting
//                         </h2>

//                         <p>
//                             All submitted payment proofs
//                             have been reviewed.
//                         </p>

//                     </div>

//                 ) : (

//                     <div className="payment-proofs-list">

//                         {orders.map(
//                             (order) => (

//                                 <article
//                                     className="payment-proof-card"
//                                     key={order.id}
//                                 >

//                                     {/* TOP */}

//                                     <div className="payment-proof-top">

//                                         <div>

//                                             <span>
//                                                 ORDER
//                                             </span>

//                                             <h2>
//                                                 {order.orderNumber}
//                                             </h2>

//                                         </div>


//                                         <div className="payment-proof-status">
//                                             PROOF SUBMITTED
//                                         </div>

//                                     </div>


//                                     {/* CUSTOMER */}

//                                     <div className="payment-proof-grid">

//                                         <div>

//                                             <span>
//                                                 CUSTOMER
//                                             </span>

//                                             <strong>
//                                                 {order.firstName}{" "}
//                                                 {order.lastName}
//                                             </strong>

//                                             <small>
//                                                 {order.email}
//                                             </small>

//                                         </div>


//                                         <div>

//                                             <span>
//                                                 PHONE
//                                             </span>

//                                             <strong>
//                                                 {order.countryCode}{" "}
//                                                 {order.phone}
//                                             </strong>

//                                         </div>


//                                         <div>

//                                             <span>
//                                                 ORDER TOTAL
//                                             </span>

//                                             <strong>
//                                                 {formatCurrency(
//                                                     order.total
//                                                 )}
//                                             </strong>

//                                         </div>


//                                         <div>

//                                             <span>
//                                                 SUBMITTED
//                                             </span>

//                                             <strong>
//                                                 {formatDate(
//                                                     order.paymentProofUploadedAt
//                                                 )}
//                                             </strong>

//                                         </div>

//                                     </div>


//                                     {/* ADDRESS */}

//                                     <div className="payment-proof-address">

//                                         <span>
//                                             DELIVERY ADDRESS
//                                         </span>

//                                         <p>

//                                             {order.addressLine1}

//                                             {order.addressLine2 &&
//                                                 `, ${order.addressLine2}`}

//                                             <br />

//                                             {order.city}

//                                             {order.state &&
//                                                 `, ${order.state}`}

//                                             {" "}

//                                             {order.postalCode}

//                                             <br />

//                                             {order.country}

//                                         </p>

//                                     </div>


//                                     {/* ITEMS */}

//                                     <div className="payment-proof-items">

//                                         <span>
//                                             ORDER ITEMS
//                                         </span>

//                                         {order.items?.map(
//                                             (item) => (

//                                                 <div
//                                                     key={item.id}
//                                                 >

//                                                     <strong>
//                                                         {item.productTitle}
//                                                     </strong>

//                                                     <span>
//                                                         ×{" "}
//                                                         {item.quantity}
//                                                     </span>

//                                                     <b>
//                                                         {formatCurrency(
//                                                             item.price *
//                                                             item.quantity
//                                                         )}
//                                                     </b>

//                                                 </div>

//                                             )
//                                         )}

//                                     </div>


//                                     {/* PROOF */}

//                                     <div className="payment-proof-file">

//                                         <div>

//                                             <span>
//                                                 PAYMENT PROOF
//                                             </span>

//                                             <strong>
//                                                 {order.paymentProof
//                                                     ?.split("/")
//                                                     .pop()}
//                                             </strong>

//                                         </div>


//                                         {order.paymentProof && (

//                                             // <a
//                                             //   href={`${API_URL}${order.paymentProof}`}
//                                             //   target="_blank"
//                                             //   rel="noopener noreferrer"
//                                             //   className="view-proof-button"
//                                             // >
//                                             //   View Proof
//                                             //   <span>
//                                             //     ↗
//                                             //   </span>
//                                             // </a>

//                                             <a
//                                                 href={`${API_URL}${order.paymentProof}`}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="view-proof-button"
//                                             >
//                                                 View Proof
//                                                 <span>↗</span>
//                                             </a>

//                                         )}

//                                     </div>


//                                     {/* ZOHO */}

//                                     <div className="payment-proof-zoho">

//                                         <div>

//                                             <span>
//                                                 ZOHO BOOKS
//                                             </span>

//                                             <strong>
//                                                 {order.zohoInvoiceId
//                                                     ? "Invoice Generated"
//                                                     : "Invoice Pending"}
//                                             </strong>

//                                         </div>


//                                         {order.zohoInvoiceId && (

//                                             <small>
//                                                 Invoice ID:{" "}
//                                                 {order.zohoInvoiceId}
//                                             </small>

//                                         )}

//                                     </div>


//                                     {/* ACTIONS */}

//                                     <div className="payment-proof-actions">

//                                         <button
//                                             type="button"
//                                             className="reject-payment-button"
//                                             onClick={() =>
//                                                 handleReject(
//                                                     order.id
//                                                 )
//                                             }
//                                             disabled={
//                                                 processingId ===
//                                                 order.id
//                                             }
//                                         >

//                                             Reject Proof

//                                         </button>


//                                         <button
//                                             type="button"
//                                             className="verify-payment-button"
//                                             onClick={() =>
//                                                 handleVerify(
//                                                     order.id
//                                                 )
//                                             }
//                                             disabled={
//                                                 processingId ===
//                                                 order.id
//                                             }
//                                         >

//                                             {processingId ===
//                                                 order.id
//                                                 ? "Processing..."
//                                                 : "Verify Payment"}

//                                             <span>
//                                                 →
//                                             </span>

//                                         </button>

//                                     </div>

//                                 </article>

//                             )
//                         )}

//                     </div>

//                 )}

//             </div>
//         </AdminLayout>
//     );
// }

// export default PaymentProofs;




// import { useEffect, useState } from "react";

// import "./PaymentProofs.css";
// import AdminLayout from "./AdminLayout";


// // =====================================================
// // API CONFIG
// // =====================================================

// const API_URL =
//     import.meta.env.VITE_API_URL ||
//     "http://localhost:5000";


// // =====================================================
// // FILE / UPLOAD BASE URL
// // =====================================================
// //
// // Example:
// //
// // API_URL:
// // https://a4agroup.eu/api
// //
// // FILE_BASE_URL:
// // https://a4agroup.eu
// //
// // Therefore:
// //
// // /uploads/payment-proofs/file.pdf
// //
// // becomes:
// //
// // https://a4agroup.eu/uploads/payment-proofs/file.pdf
// //
// // =====================================================

// const FILE_BASE_URL =
//     API_URL.replace(/\/api\/?$/, "");


// function PaymentProofs() {

//     const [orders, setOrders] =
//         useState([]);

//     const [loading, setLoading] =
//         useState(true);

//     const [error, setError] =
//         useState("");

//     const [processingId, setProcessingId] =
//         useState(null);


//     // =====================================================
//     // FETCH PAYMENT PROOF ORDERS
//     // =====================================================

//     const fetchOrders = async () => {

//         try {

//             setLoading(true);

//             setError("");

//             const response =
//                 await fetch(
//                     `${API_URL}/orders/admin/payment-proofs`
//                 );


//             const data =
//                 await response.json();


//             if (!response.ok) {

//                 throw new Error(
//                     data?.message ||
//                     "Failed to load payment proofs"
//                 );

//             }


//             setOrders(
//                 data.orders || []
//             );


//         } catch (error) {

//             console.error(
//                 "FETCH PAYMENT PROOFS ERROR:",
//                 error
//             );


//             setError(
//                 error.message ||
//                 "Failed to load payment proofs"
//             );


//         } finally {

//             setLoading(false);

//         }

//     };


//     // =====================================================
//     // INITIAL LOAD
//     // =====================================================

//     useEffect(() => {

//         fetchOrders();

//     }, []);


//     // =====================================================
//     // GET PAYMENT PROOF URL
//     // =====================================================

//     const getPaymentProofUrl = (
//         paymentProof
//     ) => {

//         if (!paymentProof) {
//             return "";
//         }


//         // ---------------------------------------------
//         // If backend already returned a full URL
//         // ---------------------------------------------

//         if (
//             paymentProof.startsWith(
//                 "http://"
//             ) ||
//             paymentProof.startsWith(
//                 "https://"
//             )
//         ) {

//             return paymentProof;

//         }


//         // ---------------------------------------------
//         // Make sure path starts with /
//         // ---------------------------------------------

//         const proofPath =
//             paymentProof.startsWith("/")
//                 ? paymentProof
//                 : `/${paymentProof}`;


//         // ---------------------------------------------
//         // IMPORTANT:
//         // Use FILE_BASE_URL instead of API_URL
//         //
//         // API:
//         // https://a4agroup.eu/api
//         //
//         // FILE:
//         // https://a4agroup.eu
//         // ---------------------------------------------

//         return `${FILE_BASE_URL}${proofPath}`;

//     };


//     // =====================================================
//     // VERIFY PAYMENT
//     // =====================================================

//     const handleVerify = async (
//         orderId
//     ) => {

//         const confirmed =
//             window.confirm(
//                 "Are you sure you want to verify this payment?"
//             );


//         if (!confirmed) {
//             return;
//         }


//         try {

//             setProcessingId(orderId);


//             const response =
//                 await fetch(
//                     `${API_URL}/orders/admin/${orderId}/verify-payment`,
//                     {
//                         method: "PUT",
//                     }
//                 );


//             const data =
//                 await response.json();


//             if (!response.ok) {

//                 throw new Error(
//                     data?.message ||
//                     "Failed to verify payment"
//                 );

//             }


//             // ---------------------------------------------
//             // Remove verified order
//             // ---------------------------------------------

//             setOrders((current) =>
//                 current.filter(
//                     (order) =>
//                         order.id !== orderId
//                 )
//             );


//         } catch (error) {

//             console.error(
//                 "VERIFY PAYMENT ERROR:",
//                 error
//             );


//             alert(
//                 error.message ||
//                 "Failed to verify payment"
//             );


//         } finally {

//             setProcessingId(null);

//         }

//     };


//     // =====================================================
//     // REJECT PAYMENT
//     // =====================================================

//     const handleReject = async (
//         orderId
//     ) => {

//         const confirmed =
//             window.confirm(
//                 "Are you sure you want to reject this payment proof?"
//             );


//         if (!confirmed) {
//             return;
//         }


//         try {

//             setProcessingId(orderId);


//             const response =
//                 await fetch(
//                     `${API_URL}/orders/admin/${orderId}/reject-payment`,
//                     {
//                         method: "PUT",
//                     }
//                 );


//             const data =
//                 await response.json();


//             if (!response.ok) {

//                 throw new Error(
//                     data?.message ||
//                     "Failed to reject payment"
//                 );

//             }


//             // ---------------------------------------------
//             // Remove rejected order
//             // ---------------------------------------------

//             setOrders((current) =>
//                 current.filter(
//                     (order) =>
//                         order.id !== orderId
//                 )
//             );


//         } catch (error) {

//             console.error(
//                 "REJECT PAYMENT ERROR:",
//                 error
//             );


//             alert(
//                 error.message ||
//                 "Failed to reject payment"
//             );


//         } finally {

//             setProcessingId(null);

//         }

//     };


//     // =====================================================
//     // FORMAT CURRENCY
//     // =====================================================

//     const formatCurrency =
//         (amount) => {

//             return new Intl.NumberFormat(
//                 "en-IN",
//                 {
//                     style: "currency",
//                     currency: "EUR",
//                     minimumFractionDigits: 2,
//                 }
//             ).format(
//                 Number(amount) || 0
//             );

//         };


//     // =====================================================
//     // FORMAT DATE
//     // =====================================================

//     const formatDate =
//         (date) => {

//             if (!date) {
//                 return "-";
//             }


//             const parsedDate =
//                 new Date(date);


//             if (
//                 Number.isNaN(
//                     parsedDate.getTime()
//                 )
//             ) {

//                 return "-";

//             }


//             return parsedDate.toLocaleString(
//                 "en-IN",
//                 {
//                     dateStyle: "medium",
//                     timeStyle: "short",
//                 }
//             );

//         };


//     // =====================================================
//     // LOADING
//     // =====================================================

//     if (loading) {

//         return (

//             <div className="payment-proofs-page">

//                 <div className="payment-proofs-loading">

//                     Loading payment proofs...

//                 </div>

//             </div>

//         );

//     }


//     // =====================================================
//     // ERROR
//     // =====================================================

//     if (error) {

//         return (

//             <div className="payment-proofs-page">

//                 <div className="payment-proofs-error">

//                     <h2>
//                         Unable to load payment proofs
//                     </h2>


//                     <p>
//                         {error}
//                     </p>


//                     <button
//                         type="button"
//                         onClick={fetchOrders}
//                     >
//                         Try Again
//                     </button>

//                 </div>

//             </div>

//         );

//     }


//     // =====================================================
//     // PAGE
//     // =====================================================

//     return (

//         <AdminLayout>

//             <div className="payment-proofs-page">


//                 {/* =================================================
//                     HEADER
//                 ================================================= */}

//                 <div className="payment-proofs-header">

//                     <div>

//                         <span>
//                             PAYMENTS
//                         </span>


//                         <h1>
//                             Payment Proofs
//                         </h1>


//                         <p>
//                             Review payment receipts submitted
//                             by customers.
//                         </p>

//                     </div>


//                     <div className="payment-proof-count">

//                         <strong>
//                             {orders.length}
//                         </strong>


//                         <span>
//                             Pending verification
//                         </span>

//                     </div>

//                 </div>


//                 {/* =================================================
//                     EMPTY
//                 ================================================= */}

//                 {orders.length === 0 ? (

//                     <div className="payment-proofs-empty">

//                         <div>
//                             ✓
//                         </div>


//                         <h2>
//                             No payments waiting
//                         </h2>


//                         <p>
//                             All submitted payment proofs
//                             have been reviewed.
//                         </p>

//                     </div>

//                 ) : (


//                     /* =================================================
//                        PAYMENT PROOF LIST
//                     ================================================= */

//                     <div className="payment-proofs-list">

//                         {orders.map(
//                             (order) => (

//                                 <article
//                                     className="payment-proof-card"
//                                     key={order.id}
//                                 >


//                                     {/* =================================================
//                                         TOP
//                                     ================================================= */}

//                                     <div className="payment-proof-top">

//                                         <div>

//                                             <span>
//                                                 ORDER
//                                             </span>


//                                             <h2>
//                                                 {order.orderNumber}
//                                             </h2>

//                                         </div>


//                                         <div className="payment-proof-status">

//                                             PROOF SUBMITTED

//                                         </div>

//                                     </div>


//                                     {/* =================================================
//                                         CUSTOMER
//                                     ================================================= */}

//                                     <div className="payment-proof-grid">


//                                         <div>

//                                             <span>
//                                                 CUSTOMER
//                                             </span>


//                                             <strong>

//                                                 {order.firstName}{" "}

//                                                 {order.lastName}

//                                             </strong>


//                                             <small>
//                                                 {order.email}
//                                             </small>

//                                         </div>


//                                         <div>

//                                             <span>
//                                                 PHONE
//                                             </span>


//                                             <strong>

//                                                 {order.countryCode}{" "}

//                                                 {order.phone}

//                                             </strong>

//                                         </div>


//                                         <div>

//                                             <span>
//                                                 ORDER TOTAL
//                                             </span>


//                                             <strong>

//                                                 {formatCurrency(
//                                                     order.total
//                                                 )}

//                                             </strong>

//                                         </div>


//                                         <div>

//                                             <span>
//                                                 SUBMITTED
//                                             </span>


//                                             <strong>

//                                                 {formatDate(
//                                                     order.paymentProofUploadedAt
//                                                 )}

//                                             </strong>

//                                         </div>

//                                     </div>


//                                     {/* =================================================
//                                         ADDRESS
//                                     ================================================= */}

//                                     <div className="payment-proof-address">

//                                         <span>
//                                             DELIVERY ADDRESS
//                                         </span>


//                                         <p>

//                                             {order.addressLine1}


//                                             {order.addressLine2 &&
//                                                 `, ${order.addressLine2}`}


//                                             <br />


//                                             {order.city}


//                                             {order.state &&
//                                                 `, ${order.state}`}


//                                             {" "}


//                                             {order.postalCode}


//                                             <br />


//                                             {order.country}

//                                         </p>

//                                     </div>


//                                     {/* =================================================
//                                         ITEMS
//                                     ================================================= */}

//                                     <div className="payment-proof-items">

//                                         <span>
//                                             ORDER ITEMS
//                                         </span>


//                                         {order.items?.map(
//                                             (item) => (

//                                                 <div
//                                                     key={item.id}
//                                                 >

//                                                     <strong>
//                                                         {item.productTitle}
//                                                     </strong>


//                                                     <span>

//                                                         ×{" "}

//                                                         {item.quantity}

//                                                     </span>


//                                                     <b>

//                                                         {formatCurrency(
//                                                             item.price *
//                                                             item.quantity
//                                                         )}

//                                                     </b>

//                                                 </div>

//                                             )
//                                         )}

//                                     </div>


//                                     {/* =================================================
//                                         PAYMENT PROOF
//                                     ================================================= */}

//                                     <div className="payment-proof-file">

//                                         <div>

//                                             <span>
//                                                 PAYMENT PROOF
//                                             </span>


//                                             <strong>

//                                                 {order.paymentProof
//                                                     ?.split("/")
//                                                     .pop()}

//                                             </strong>

//                                         </div>


//                                         {order.paymentProof && (

//                                             <a
//                                                 href={getPaymentProofUrl(
//                                                     order.paymentProof
//                                                 )}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="view-proof-button"
//                                             >

//                                                 View Proof

//                                                 <span>
//                                                     ↗
//                                                 </span>

//                                             </a>

//                                         )}

//                                     </div>


//                                     {/* =================================================
//                                         ZOHO BOOKS
//                                     ================================================= */}

//                                     <div className="payment-proof-zoho">

//                                         <div>

//                                             <span>
//                                                 ZOHO BOOKS
//                                             </span>


//                                             <strong>

//                                                 {order.zohoInvoiceId
//                                                     ? "Invoice Generated"
//                                                     : "Invoice Pending"}

//                                             </strong>

//                                         </div>


//                                         {order.zohoInvoiceId && (

//                                             <small>

//                                                 Invoice ID:{" "}

//                                                 {order.zohoInvoiceId}

//                                             </small>

//                                         )}

//                                     </div>


//                                     {/* =================================================
//                                         ACTIONS
//                                     ================================================= */}

//                                     <div className="payment-proof-actions">


//                                         <button
//                                             type="button"
//                                             className="reject-payment-button"
//                                             onClick={() =>
//                                                 handleReject(
//                                                     order.id
//                                                 )
//                                             }
//                                             disabled={
//                                                 processingId ===
//                                                 order.id
//                                             }
//                                         >

//                                             {processingId === order.id
//                                                 ? "Processing..."
//                                                 : "Reject Proof"}

//                                         </button>


//                                         <button
//                                             type="button"
//                                             className="verify-payment-button"
//                                             onClick={() =>
//                                                 handleVerify(
//                                                     order.id
//                                                 )
//                                             }
//                                             disabled={
//                                                 processingId ===
//                                                 order.id
//                                             }
//                                         >

//                                             {processingId === order.id
//                                                 ? "Processing..."
//                                                 : "Verify Payment"}


//                                             <span>
//                                                 →
//                                             </span>

//                                         </button>

//                                     </div>

//                                 </article>

//                             )
//                         )}

//                     </div>

//                 )}

//             </div>

//         </AdminLayout>

//     );

// }


// export default PaymentProofs;



import { useEffect, useMemo, useState } from "react";

import "./PaymentProofs.css";
import AdminLayout from "./AdminLayout";

// =====================================================
// API CONFIG
// =====================================================

const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000";

// =====================================================
// FILE / UPLOAD BASE URL
// =====================================================

const FILE_BASE_URL =
    API_URL.replace(/\/api\/?$/, "");


function PaymentProofs() {

    const [orders, setOrders] =
        useState([]);

    const [loading, setLoading] =
        useState(true);

    const [error, setError] =
        useState("");

    const [processingId, setProcessingId] =
        useState(null);

    // =====================================================
    // SEARCH / FILTER / SORT
    // =====================================================

    const [searchTerm, setSearchTerm] =
        useState("");

    const [deliveryFilter, setDeliveryFilter] =
        useState("all");

    const [dateFilter, setDateFilter] =
        useState("all");

    const [sortOption, setSortOption] =
        useState("newest");


    // =====================================================
    // FETCH PAYMENT PROOF ORDERS
    // =====================================================

    const fetchOrders = async () => {

        try {

            setLoading(true);

            setError("");

            const response =
                await fetch(
                    `${API_URL}/orders/admin/payment-proofs`
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data?.message ||
                    "Failed to load payment proofs"
                );

            }


            setOrders(
                data.orders || []
            );


        } catch (error) {

            console.error(
                "FETCH PAYMENT PROOFS ERROR:",
                error
            );


            setError(
                error.message ||
                "Failed to load payment proofs"
            );


        } finally {

            setLoading(false);

        }

    };


    // =====================================================
    // INITIAL LOAD
    // =====================================================

    useEffect(() => {

        fetchOrders();

    }, []);


    // =====================================================
    // GET PAYMENT PROOF URL
    // =====================================================

    const getPaymentProofUrl = (
        paymentProof
    ) => {

        if (!paymentProof) {
            return "";
        }


        if (
            paymentProof.startsWith(
                "http://"
            ) ||
            paymentProof.startsWith(
                "https://"
            )
        ) {

            return paymentProof;

        }


        const proofPath =
            paymentProof.startsWith("/")
                ? paymentProof
                : `/${paymentProof}`;


        return `${FILE_BASE_URL}${proofPath}`;

    };


    // =====================================================
    // FORMAT CURRENCY
    // =====================================================

    const formatCurrency =
        (amount) => {

            return new Intl.NumberFormat(
                "en-IN",
                {
                    style: "currency",
                    currency: "EUR",
                    minimumFractionDigits: 2,
                }
            ).format(
                Number(amount) || 0
            );

        };


    // =====================================================
    // FORMAT DATE + TIME
    // =====================================================

    const formatDate =
        (date) => {

            if (!date) {
                return "-";
            }


            const parsedDate =
                new Date(date);


            if (
                Number.isNaN(
                    parsedDate.getTime()
                )
            ) {

                return "-";

            }


            return parsedDate.toLocaleString(
                "en-IN",
                {
                    dateStyle: "medium",
                    timeStyle: "short",
                }
            );

        };


    // =====================================================
    // FORMAT EXPECTED DELIVERY DATE
    // =====================================================

    const formatExpectedDeliveryDate =
        (date) => {

            if (!date) {
                return "Not specified";
            }


            const parsedDate =
                new Date(date);


            if (
                Number.isNaN(
                    parsedDate.getTime()
                )
            ) {

                return "Not specified";

            }


            return parsedDate.toLocaleDateString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                }
            );

        };


    // =====================================================
    // FORMAT DELIVERY OPTION
    // =====================================================

    const formatDeliveryOption =
        (option) => {

            if (!option) {
                return "Not specified";
            }


            const deliveryOptions = {

                express:
                    "Express Delivery",

                one_day:
                    "One Day Delivery",

                normal:
                    "Normal Delivery",

                self_collection:
                    "Self Collection",

            };


            return (
                deliveryOptions[option] ||
                option
                    .replace(/_/g, " ")
                    .replace(
                        /\b\w/g,
                        (char) =>
                            char.toUpperCase()
                    )
            );

        };


    // =====================================================
    // FILTER + SEARCH + SORT
    // =====================================================

    const filteredOrders =
        useMemo(() => {

            let result = [
                ...orders
            ];


            // ---------------------------------------------
            // SEARCH
            // ---------------------------------------------

            const search =
                searchTerm
                    .trim()
                    .toLowerCase();


            if (search) {

                result =
                    result.filter(
                        (order) => {

                            const searchableText =
                                [

                                    order.orderNumber,

                                    order.firstName,

                                    order.lastName,

                                    `${order.firstName || ""} ${order.lastName || ""}`,

                                    order.email,

                                    order.phone,

                                    order.countryCode,

                                    order.city,

                                    order.country,

                                ]
                                    .filter(Boolean)
                                    .join(" ")
                                    .toLowerCase();


                            return searchableText.includes(
                                search
                            );

                        }
                    );

            }


            // ---------------------------------------------
            // DELIVERY TYPE FILTER
            // ---------------------------------------------

            if (
                deliveryFilter !==
                "all"
            ) {

                result =
                    result.filter(
                        (order) =>
                            order.deliveryOption ===
                            deliveryFilter
                    );

            }


            // ---------------------------------------------
            // EXPECTED DATE FILTER
            // ---------------------------------------------

            if (
                dateFilter ===
                "specified"
            ) {

                result =
                    result.filter(
                        (order) =>
                            Boolean(
                                order.expectedDeliveryDate
                            )
                    );

            }


            if (
                dateFilter ===
                "not_specified"
            ) {

                result =
                    result.filter(
                        (order) =>
                            !order.expectedDeliveryDate
                    );

            }


            // ---------------------------------------------
            // SORT
            // ---------------------------------------------

            result.sort(
                (a, b) => {

                    if (
                        sortOption ===
                        "newest"
                    ) {

                        return (
                            new Date(
                                b.createdAt ||
                                b.paymentProofUploadedAt ||
                                0
                            ).getTime() -
                            new Date(
                                a.createdAt ||
                                a.paymentProofUploadedAt ||
                                0
                            ).getTime()
                        );

                    }


                    if (
                        sortOption ===
                        "oldest"
                    ) {

                        return (
                            new Date(
                                a.createdAt ||
                                a.paymentProofUploadedAt ||
                                0
                            ).getTime() -
                            new Date(
                                b.createdAt ||
                                b.paymentProofUploadedAt ||
                                0
                            ).getTime()
                        );

                    }


                    if (
                        sortOption ===
                        "delivery_soonest"
                    ) {

                        const dateA =
                            a.expectedDeliveryDate
                                ? new Date(
                                    a.expectedDeliveryDate
                                ).getTime()
                                : Infinity;


                        const dateB =
                            b.expectedDeliveryDate
                                ? new Date(
                                    b.expectedDeliveryDate
                                ).getTime()
                                : Infinity;


                        return (
                            dateA - dateB
                        );

                    }


                    if (
                        sortOption ===
                        "delivery_latest"
                    ) {

                        const dateA =
                            a.expectedDeliveryDate
                                ? new Date(
                                    a.expectedDeliveryDate
                                ).getTime()
                                : -Infinity;


                        const dateB =
                            b.expectedDeliveryDate
                                ? new Date(
                                    b.expectedDeliveryDate
                                ).getTime()
                                : -Infinity;


                        return (
                            dateB - dateA
                        );

                    }


                    return 0;

                }
            );


            return result;

        }, [
            orders,
            searchTerm,
            deliveryFilter,
            dateFilter,
            sortOption,
        ]);


    // =====================================================
    // CLEAR FILTERS
    // =====================================================

    const clearFilters = () => {

        setSearchTerm("");

        setDeliveryFilter(
            "all"
        );

        setDateFilter(
            "all"
        );

        setSortOption(
            "newest"
        );

    };


    // =====================================================
    // CHECK ACTIVE FILTERS
    // =====================================================

    const hasActiveFilters =
        searchTerm.trim() !== "" ||
        deliveryFilter !== "all" ||
        dateFilter !== "all" ||
        sortOption !== "newest";


    // =====================================================
    // VERIFY PAYMENT
    // =====================================================

    const handleVerify = async (
        orderId
    ) => {

        const confirmed =
            window.confirm(
                "Are you sure you want to verify this payment?"
            );


        if (!confirmed) {
            return;
        }


        try {

            setProcessingId(orderId);


            const response =
                await fetch(
                    `${API_URL}/orders/admin/${orderId}/verify-payment`,
                    {
                        method: "PUT",
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data?.message ||
                    "Failed to verify payment"
                );

            }


            setOrders((current) =>
                current.filter(
                    (order) =>
                        order.id !== orderId
                )
            );


        } catch (error) {

            console.error(
                "VERIFY PAYMENT ERROR:",
                error
            );


            alert(
                error.message ||
                "Failed to verify payment"
            );


        } finally {

            setProcessingId(null);

        }

    };


    // =====================================================
    // REJECT PAYMENT
    // =====================================================

    const handleReject = async (
        orderId
    ) => {

        const confirmed =
            window.confirm(
                "Are you sure you want to reject this payment proof?"
            );


        if (!confirmed) {
            return;
        }


        try {

            setProcessingId(orderId);


            const response =
                await fetch(
                    `${API_URL}/orders/admin/${orderId}/reject-payment`,
                    {
                        method: "PUT",
                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data?.message ||
                    "Failed to reject payment"
                );

            }


            setOrders((current) =>
                current.filter(
                    (order) =>
                        order.id !== orderId
                )
            );


        } catch (error) {

            console.error(
                "REJECT PAYMENT ERROR:",
                error
            );


            alert(
                error.message ||
                "Failed to reject payment"
            );


        } finally {

            setProcessingId(null);

        }

    };


    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {

        return (

            <div className="payment-proofs-page">

                <div className="payment-proofs-loading">

                    Loading payment proofs...

                </div>

            </div>

        );

    }


    // =====================================================
    // ERROR
    // =====================================================

    if (error) {

        return (

            <div className="payment-proofs-page">

                <div className="payment-proofs-error">

                    <h2>
                        Unable to load payment proofs
                    </h2>


                    <p>
                        {error}
                    </p>


                    <button
                        type="button"
                        onClick={fetchOrders}
                    >
                        Try Again
                    </button>

                </div>

            </div>

        );

    }


    // =====================================================
    // PAGE
    // =====================================================

    return (

        <AdminLayout>

            <div className="payment-proofs-page">


                {/* =================================================
                    HEADER
                ================================================= */}

                <div className="payment-proofs-header">

                    <div>

                        <span>
                            PAYMENTS
                        </span>


                        <h1>
                            Payment Proofs
                        </h1>


                        <p>
                            Review payment receipts submitted
                            by customers.
                        </p>

                    </div>


                    <div className="payment-proof-count">

                        <strong>
                            {orders.length}
                        </strong>


                        <span>
                            Pending verification
                        </span>

                    </div>

                </div>


                {/* =================================================
                    SEARCH + FILTERS
                ================================================= */}

                <div className="payment-proof-filters">

                    {/* SEARCH */}

                    <div className="payment-proof-search">

                        <span
                            className="payment-proof-search-icon"
                            aria-hidden="true"
                        >
                            ⌕
                        </span>

                        <input
                            type="search"
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(
                                    e.target.value
                                )
                            }
                            placeholder="Search order, customer, email, phone..."
                            aria-label="Search payment proofs"
                        />

                        {searchTerm && (

                            <button
                                type="button"
                                className="payment-proof-search-clear"
                                onClick={() =>
                                    setSearchTerm("")
                                }
                                aria-label="Clear search"
                            >
                                ×
                            </button>

                        )}

                    </div>


                    {/* DELIVERY TYPE */}

                    <select
                        value={deliveryFilter}
                        onChange={(e) =>
                            setDeliveryFilter(
                                e.target.value
                            )
                        }
                        className="payment-proof-filter-select"
                        aria-label="Filter by delivery type"
                    >

                        <option value="all">
                            All Delivery Types
                        </option>

                        <option value="normal">
                            Normal Delivery
                        </option>

                        <option value="express">
                            Express Delivery
                        </option>

                        <option value="one_day">
                            One Day Delivery
                        </option>

                        <option value="self_collection">
                            Self Collection
                        </option>

                    </select>


                    {/* EXPECTED DATE */}

                    <select
                        value={dateFilter}
                        onChange={(e) =>
                            setDateFilter(
                                e.target.value
                            )
                        }
                        className="payment-proof-filter-select"
                        aria-label="Filter by expected delivery date"
                    >

                        <option value="all">
                            All Delivery Dates
                        </option>

                        <option value="specified">
                            Date Specified
                        </option>

                        <option value="not_specified">
                            Date Not Specified
                        </option>

                    </select>


                    {/* SORT */}

                    <select
                        value={sortOption}
                        onChange={(e) =>
                            setSortOption(
                                e.target.value
                            )
                        }
                        className="payment-proof-filter-select"
                        aria-label="Sort payment proofs"
                    >

                        <option value="newest">
                            Newest First
                        </option>

                        <option value="oldest">
                            Oldest First
                        </option>

                        <option value="delivery_soonest">
                            Delivery Date — Soonest
                        </option>

                        <option value="delivery_latest">
                            Delivery Date — Latest
                        </option>

                    </select>


                    {/* CLEAR */}

                    {hasActiveFilters && (

                        <button
                            type="button"
                            className="payment-proof-clear-filters"
                            onClick={
                                clearFilters
                            }
                        >
                            Clear Filters
                        </button>

                    )}

                </div>


                {/* =================================================
                    RESULT COUNT
                ================================================= */}

                <div className="payment-proof-results">

                    <span>

                        Showing{" "}

                        <strong>
                            {filteredOrders.length}
                        </strong>{" "}

                        of{" "}

                        <strong>
                            {orders.length}
                        </strong>{" "}

                        payments

                    </span>

                </div>


                {/* =================================================
                    EMPTY
                ================================================= */}

                {orders.length === 0 ? (

                    <div className="payment-proofs-empty">

                        <div>
                            ✓
                        </div>


                        <h2>
                            No payments waiting
                        </h2>


                        <p>
                            All submitted payment proofs
                            have been reviewed.
                        </p>

                    </div>

                ) : filteredOrders.length === 0 ? (

                    <div className="payment-proofs-empty">

                        <div>
                            ⌕
                        </div>


                        <h2>
                            No matching payments
                        </h2>


                        <p>
                            Try changing your search
                            or filters.
                        </p>


                        <button
                            type="button"
                            onClick={
                                clearFilters
                            }
                        >
                            Clear Filters
                        </button>

                    </div>

                ) : (

                    /* =================================================
                       PAYMENT PROOF LIST
                    ================================================= */

                    <div className="payment-proofs-list">

                        {filteredOrders.map(
                            (order) => (

                                <article
                                    className="payment-proof-card"
                                    key={order.id}
                                >


                                    {/* =================================================
                                        TOP
                                    ================================================= */}

                                    <div className="payment-proof-top">

                                        <div>

                                            <span>
                                                ORDER
                                            </span>


                                            <h2>
                                                {order.orderNumber}
                                            </h2>

                                        </div>


                                        <div className="payment-proof-status">

                                            PROOF SUBMITTED

                                        </div>

                                    </div>


                                    {/* =================================================
                                        CUSTOMER
                                    ================================================= */}

                                    <div className="payment-proof-grid">


                                        <div>

                                            <span>
                                                CUSTOMER
                                            </span>


                                            <strong>

                                                {order.firstName}{" "}

                                                {order.lastName}

                                            </strong>


                                            <small>
                                                {order.email}
                                            </small>

                                        </div>


                                        <div>

                                            <span>
                                                PHONE
                                            </span>


                                            <strong>

                                                {order.countryCode}{" "}

                                                {order.phone}

                                            </strong>

                                        </div>


                                        <div>

                                            <span>
                                                ORDER TOTAL
                                            </span>


                                            <strong>

                                                {formatCurrency(
                                                    order.total
                                                )}

                                            </strong>

                                        </div>


                                        <div>

                                            <span>
                                                SUBMITTED
                                            </span>


                                            <strong>

                                                {formatDate(
                                                    order.paymentProofUploadedAt
                                                )}

                                            </strong>

                                        </div>

                                    </div>


                                    {/* =================================================
                                        DELIVERY DETAILS
                                    ================================================= */}

                                    <div className="payment-proof-delivery">

                                        <div>

                                            <span>
                                                DELIVERY TYPE
                                            </span>


                                            <strong>
                                                {formatDeliveryOption(
                                                    order.deliveryOption
                                                )}
                                            </strong>

                                        </div>


                                        <div>

                                            <span>
                                                EXPECTED DELIVERY DATE
                                            </span>


                                            <strong>
                                                {formatExpectedDeliveryDate(
                                                    order.expectedDeliveryDate
                                                )}
                                            </strong>

                                        </div>

                                    </div>


                                    {/* =================================================
                                        ADDRESS
                                    ================================================= */}

                                    <div className="payment-proof-address">

                                        <span>
                                            DELIVERY ADDRESS
                                        </span>


                                        <p>

                                            {order.addressLine1}


                                            {order.addressLine2 &&
                                                `, ${order.addressLine2}`}


                                            <br />


                                            {order.city}


                                            {order.state &&
                                                `, ${order.state}`}


                                            {" "}


                                            {order.postalCode}


                                            <br />


                                            {order.country}

                                        </p>

                                    </div>


                                    {/* =================================================
                                        ITEMS
                                    ================================================= */}

                                    <div className="payment-proof-items">

                                        <span>
                                            ORDER ITEMS
                                        </span>


                                        {order.items?.map(
                                            (item) => (

                                                <div
                                                    key={item.id}
                                                >

                                                    <strong>
                                                        {item.productTitle}
                                                    </strong>


                                                    <span>

                                                        ×{" "}

                                                        {item.quantity}

                                                    </span>


                                                    <b>

                                                        {formatCurrency(
                                                            item.price *
                                                            item.quantity
                                                        )}

                                                    </b>

                                                </div>

                                            )
                                        )}

                                    </div>


                                    {/* =================================================
                                        PAYMENT PROOF
                                    ================================================= */}

                                    <div className="payment-proof-file">

                                        <div>

                                            <span>
                                                PAYMENT PROOF
                                            </span>


                                            <strong>

                                                {order.paymentProof
                                                    ?.split("/")
                                                    .pop()}

                                            </strong>

                                        </div>


                                        {order.paymentProof && (

                                            <a
                                                href={getPaymentProofUrl(
                                                    order.paymentProof
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="view-proof-button"
                                            >

                                                View Proof

                                                <span>
                                                    ↗
                                                </span>

                                            </a>

                                        )}

                                    </div>


                                    {/* =================================================
                                        ZOHO BOOKS
                                    ================================================= */}

                                    <div className="payment-proof-zoho">

                                        <div>

                                            <span>
                                                ZOHO BOOKS
                                            </span>


                                            <strong>

                                                {order.zohoInvoiceId
                                                    ? "Invoice Generated"
                                                    : "Invoice Pending"}

                                            </strong>

                                        </div>


                                        {order.zohoInvoiceId && (

                                            <small>

                                                Invoice ID:{" "}

                                                {order.zohoInvoiceId}

                                            </small>

                                        )}

                                    </div>


                                    {/* =================================================
                                        ACTIONS
                                    ================================================= */}

                                    <div className="payment-proof-actions">


                                        <button
                                            type="button"
                                            className="reject-payment-button"
                                            onClick={() =>
                                                handleReject(
                                                    order.id
                                                )
                                            }
                                            disabled={
                                                processingId ===
                                                order.id
                                            }
                                        >

                                            {processingId === order.id
                                                ? "Processing..."
                                                : "Reject Proof"}

                                        </button>


                                        <button
                                            type="button"
                                            className="verify-payment-button"
                                            onClick={() =>
                                                handleVerify(
                                                    order.id
                                                )
                                            }
                                            disabled={
                                                processingId ===
                                                order.id
                                            }
                                        >

                                            {processingId === order.id
                                                ? "Processing..."
                                                : "Verify Payment"}


                                            <span>
                                                →
                                            </span>

                                        </button>

                                    </div>

                                </article>

                            )
                        )}

                    </div>

                )}

            </div>

        </AdminLayout>

    );

}


export default PaymentProofs;