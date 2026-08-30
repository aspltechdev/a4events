import { useEffect, useState } from "react";

import "./PaymentProofs.css";
import AdminLayout from "./AdminLayout";


const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000";

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
    // FETCH
    // =====================================================

    const fetchOrders = async () => {

        try {

            setLoading(true);

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

            console.error(error);

            setError(
                error.message ||
                "Failed to load payment proofs"
            );

        } finally {

            setLoading(false);

        }
    };


    useEffect(() => {
        fetchOrders();
    }, []);


    // =====================================================
    // VERIFY
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

            // Remove from pending list
            setOrders((current) =>
                current.filter(
                    (order) =>
                        order.id !== orderId
                )
            );

        } catch (error) {

            alert(
                error.message ||
                "Failed to verify payment"
            );

        } finally {

            setProcessingId(null);

        }
    };


    // =====================================================
    // REJECT
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

            alert(
                error.message ||
                "Failed to reject payment"
            );

        } finally {

            setProcessingId(null);

        }
    };


    // =====================================================
    // FORMAT
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


    const formatDate =
        (date) => {

            if (!date) {
                return "-";
            }

            return new Date(
                date
            ).toLocaleString(
                "en-IN",
                {
                    dateStyle: "medium",
                    timeStyle: "short",
                }
            );

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

                {/* HEADER */}

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


                {/* EMPTY */}

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

                ) : (

                    <div className="payment-proofs-list">

                        {orders.map(
                            (order) => (

                                <article
                                    className="payment-proof-card"
                                    key={order.id}
                                >

                                    {/* TOP */}

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


                                    {/* CUSTOMER */}

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


                                    {/* ADDRESS */}

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


                                    {/* ITEMS */}

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


                                    {/* PROOF */}

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

                                            // <a
                                            //   href={`${API_URL}${order.paymentProof}`}
                                            //   target="_blank"
                                            //   rel="noopener noreferrer"
                                            //   className="view-proof-button"
                                            // >
                                            //   View Proof
                                            //   <span>
                                            //     ↗
                                            //   </span>
                                            // </a>

                                            <a
                                                href={`${API_URL}${paymentProofUrl}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="view-proof-button"
                                            >
                                                View Proof
                                                <span>↗</span>
                                            </a>

                                        )}

                                    </div>


                                    {/* ZOHO */}

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


                                    {/* ACTIONS */}

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

                                            Reject Proof

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

                                            {processingId ===
                                                order.id
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