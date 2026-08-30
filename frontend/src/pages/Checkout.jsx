
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import "./Checkout.css";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const SESSION_EXPIRY =
  7 * 24 * 60 * 60 * 1000;


// =====================================================
// CURRENCY
// =====================================================

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(amount) || 0);
};


// =====================================================
// INITIAL FORM
// =====================================================

const initialForm = {
  firstName: "",
  lastName: "",

  email: "",

  countryCode: "+49",
  phone: "",

  addressLine1: "",
  addressLine2: "",

  city: "",
  state: "",
  postalCode: "",
  country: "Germany",

  companyName: "",
  vatNumber: "",

  deliveryInstructions: "",
};


// =====================================================
// COUNTRY LIST
// =====================================================

const countries = [
  {
    name: "Germany",
    code: "+49",
  },
  {
    name: "France",
    code: "+33",
  },
  {
    name: "Netherlands",
    code: "+31",
  },
  {
    name: "Belgium",
    code: "+32",
  },
  {
    name: "Italy",
    code: "+39",
  },
  {
    name: "Spain",
    code: "+34",
  },
  {
    name: "Austria",
    code: "+43",
  },
  {
    name: "Portugal",
    code: "+351",
  },
  {
    name: "Ireland",
    code: "+353",
  },
  {
    name: "Sweden",
    code: "+46",
  },
  {
    name: "Denmark",
    code: "+45",
  },
  {
    name: "Finland",
    code: "+358",
  },
  {
    name: "Poland",
    code: "+48",
  },
  {
    name: "Czech Republic",
    code: "+420",
  },
  {
    name: "Greece",
    code: "+30",
  },
  {
    name: "Luxembourg",
    code: "+352",
  },
  {
    name: "India",
    code: "+91",
  },
];


// =====================================================
// CHECKOUT PAGE
// =====================================================

function Checkout() {

  const navigate =
    useNavigate();


  const [cart, setCart] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [submitting, setSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  const [form, setForm] =
    useState(initialForm);


  // ===================================================
  // SESSION ID
  // ===================================================

  const getSessionId = useCallback(() => {

    let sessionId =
      localStorage.getItem(
        "cartSessionId"
      );

    const expiry =
      localStorage.getItem(
        "cartSessionExpiry"
      );


    // Expired

    if (
      sessionId &&
      expiry &&
      Date.now() >
        Number(expiry)
    ) {

      localStorage.removeItem(
        "cartSessionId"
      );

      localStorage.removeItem(
        "cartSessionExpiry"
      );

      sessionId = null;

    }


    // Create new session

    if (!sessionId) {

      sessionId =
        `cart-${crypto.randomUUID()}`;

      localStorage.setItem(
        "cartSessionId",
        sessionId
      );

      localStorage.setItem(
        "cartSessionExpiry",
        String(
          Date.now() +
          SESSION_EXPIRY
        )
      );

    }


    return sessionId;

  }, []);


  // ===================================================
  // FETCH CART
  // ===================================================

  const fetchCart = useCallback(
    async () => {

      try {

        setLoading(true);

        setError("");


        const sessionId =
          getSessionId();


        const response =
          await fetch(
            `${API_URL}/cart/${sessionId}`
          );


        if (!response.ok) {

          throw new Error(
            "Unable to load cart"
          );

        }


        const data =
          await response.json();


        if (
          data.success &&
          data.cart
        ) {

          setCart(data.cart);

        } else {

          setCart({
            items:
              data.items || [],

            totalItems:
              data.totalItems || 0,

            subtotal:
              data.subtotal || 0,
          });

        }

      } catch (err) {

        console.error(
          "Checkout cart error:",
          err
        );

        setError(
          "Unable to load your cart."
        );

      } finally {

        setLoading(false);

      }

    },
    [getSessionId]
  );


  // ===================================================
  // INITIAL LOAD
  // ===================================================

  useEffect(() => {

    fetchCart();

  }, [fetchCart]);


  // ===================================================
  // FORM CHANGE
  // ===================================================

  const handleChange = (event) => {

    const {
      name,
      value,
    } = event.target;


    setForm((previous) => ({
      ...previous,

      [name]: value,
    }));


    // Clear error while typing

    if (error) {
      setError("");
    }

  };


  // ===================================================
  // COUNTRY CHANGE
  // ===================================================

  const handleCountryChange =
    (event) => {

      const country =
        event.target.value;


      const selected =
        countries.find(
          (item) =>
            item.name === country
        );


      setForm((previous) => ({
        ...previous,

        country,

        countryCode:
          selected?.code ||
          previous.countryCode,
      }));

    };


  // ===================================================
  // SUBMIT CHECKOUT
  // ===================================================

  const handleSubmit =
    async (event) => {

      event.preventDefault();


      if (!cart?.items?.length) {

        setError(
          "Your cart is empty."
        );

        return;

      }


      try {

        setSubmitting(true);

        setError("");


        const sessionId =
          getSessionId();


        const response =
          await fetch(
            `${API_URL}/orders`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({

                sessionId,

                firstName:
                  form.firstName.trim(),

                lastName:
                  form.lastName.trim(),

                email:
                  form.email.trim(),

                countryCode:
                  form.countryCode.trim(),

                phone:
                  form.phone.trim(),

                addressLine1:
                  form.addressLine1.trim(),

                addressLine2:
                  form.addressLine2.trim(),

                city:
                  form.city.trim(),

                state:
                  form.state.trim(),

                postalCode:
                  form.postalCode.trim(),

                country:
                  form.country.trim(),

                companyName:
                  form.companyName.trim(),

                vatNumber:
                  form.vatNumber.trim(),

                deliveryInstructions:
                  form.deliveryInstructions.trim(),

              }),

            }
          );


        const data =
          await response.json()
            .catch(() => null);


        if (!response.ok) {

          throw new Error(
            data?.message ||
            "Unable to create order."
          );

        }


        if (
          !data?.success ||
          !data?.order
        ) {

          throw new Error(
            "Invalid checkout response."
          );

        }


        // =================================================
        // ORDER CREATED
        // =================================================

        const order =
          data.order;


        // Store temporary order ID.
        // PayPal will use this in the
        // next step.

        sessionStorage.setItem(
          "checkoutOrderId",
          String(order.id)
        );

        sessionStorage.setItem(
          "checkoutOrderNumber",
          order.orderNumber
        );


        // Move to payment

        navigate(
          `/payment?order=${order.id}`
        );

      } catch (err) {

        console.error(
          "Checkout submit error:",
          err
        );

        setError(
          err.message ||
          "Unable to continue to payment."
        );

      } finally {

        setSubmitting(false);

      }

    };


  // ===================================================
  // LOADING
  // ===================================================

  if (loading) {

    return (
      <PublicLayout>

        <main className="checkout-page">

          <div className="checkout-container">

            <div className="checkout-loading">

              <div className="checkout-spinner" />

              <p>
                Loading checkout...
              </p>

            </div>

          </div>

        </main>

      </PublicLayout>
    );

  }


  // ===================================================
  // ERROR / EMPTY CART
  // ===================================================

  if (
    !cart ||
    !cart.items ||
    cart.items.length === 0
  ) {

    return (
      <PublicLayout>

        <main className="checkout-page">

          <div className="checkout-container">

            <div className="checkout-empty">

              <span className="checkout-eyebrow">
                CHECKOUT
              </span>

              <h1>
                Your cart is empty
              </h1>

              <p>
                Add some products before
                continuing to checkout.
              </p>

              <Link
                to="/products"
                className="checkout-back-button"
              >
                Browse Products
                <span>→</span>
              </Link>

            </div>

          </div>

        </main>

      </PublicLayout>
    );

  }


  // ===================================================
  // RENDER
  // ===================================================

  return (
    <PublicLayout>

      <main className="checkout-page">

        <div className="checkout-container">


          {/* =========================================
              HEADER
          ========================================= */}

          <div className="checkout-header">

            <div>

              <span className="checkout-eyebrow">
                CHECKOUT
              </span>

              <h1>
                Complete your order
              </h1>

              <p>
                Enter your details below
                to continue to payment.
              </p>

            </div>


            <Link
              to="/cart"
              className="checkout-back-cart"
            >
              ← Back to Cart
            </Link>

          </div>


          {/* =========================================
              ERROR
          ========================================= */}

          {error && (

            <div
              className="checkout-error"
              role="alert"
            >
              <span>!</span>

              {error}

            </div>

          )}


          <form
            className="checkout-layout"
            onSubmit={handleSubmit}
          >


            {/* =======================================
                LEFT
            ======================================= */}

            <div className="checkout-main">


              {/* =====================================
                  CONTACT
              ===================================== */}

              <section className="checkout-section">

                <div className="checkout-section-header">

                  <span className="checkout-section-number">
                    01
                  </span>

                  <div>

                    <h2>
                      Contact information
                    </h2>

                    <p>
                      We'll use these details
                      for your order updates.
                    </p>

                  </div>

                </div>


                <div className="checkout-grid">

                  {/* First Name */}

                  <div className="checkout-field">

                    <label htmlFor="firstName">
                      First name
                      <span>*</span>
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      autoComplete="given-name"
                      required
                    />

                  </div>


                  {/* Last Name */}

                  <div className="checkout-field">

                    <label htmlFor="lastName">
                      Last name
                      <span>*</span>
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      autoComplete="family-name"
                      required
                    />

                  </div>


                  {/* Email */}

                  <div className="checkout-field checkout-field-full">

                    <label htmlFor="email">
                      Email address
                      <span>*</span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      autoComplete="email"
                      required
                    />

                  </div>


                  {/* Country Code */}

                  <div className="checkout-field checkout-phone-code">

                    <label htmlFor="countryCode">
                      Country code
                      <span>*</span>
                    </label>

                    <select
                      id="countryCode"
                      name="countryCode"
                      value={form.countryCode}
                      onChange={handleChange}
                      required
                    >

                      {countries.map(
                        (item) => (

                          <option
                            key={`${item.name}-${item.code}`}
                            value={item.code}
                          >
                            {item.code} — {item.name}
                          </option>

                        )
                      )}

                    </select>

                  </div>


                  {/* Phone */}

                  <div className="checkout-field">

                    <label htmlFor="phone">
                      WhatsApp / mobile number
                      <span>*</span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="15123456789"
                      autoComplete="tel"
                      inputMode="tel"
                      required
                    />

                    <small>
                      Include a WhatsApp-enabled
                      number if possible.
                    </small>

                  </div>

                </div>

              </section>


              {/* =====================================
                  DELIVERY
              ===================================== */}

              <section className="checkout-section">

                <div className="checkout-section-header">

                  <span className="checkout-section-number">
                    02
                  </span>

                  <div>

                    <h2>
                      Delivery address
                    </h2>

                    <p>
                      Where should we deliver
                      your order?
                    </p>

                  </div>

                </div>


                <div className="checkout-grid">


                  {/* Country */}

                  <div className="checkout-field checkout-field-full">

                    <label htmlFor="country">
                      Country
                      <span>*</span>
                    </label>

                    <select
                      id="country"
                      name="country"
                      value={form.country}
                      onChange={
                        handleCountryChange
                      }
                      autoComplete="country-name"
                      required
                    >

                      {countries.map(
                        (item) => (

                          <option
                            key={item.name}
                            value={item.name}
                          >
                            {item.name}
                          </option>

                        )
                      )}

                    </select>

                  </div>


                  {/* Address */}

                  <div className="checkout-field checkout-field-full">

                    <label htmlFor="addressLine1">
                      Address
                      <span>*</span>
                    </label>

                    <input
                      id="addressLine1"
                      name="addressLine1"
                      type="text"
                      value={
                        form.addressLine1
                      }
                      onChange={handleChange}
                      placeholder="Street and house number"
                      autoComplete="address-line1"
                      required
                    />

                  </div>


                  {/* Address 2 */}

                  <div className="checkout-field checkout-field-full">

                    <label htmlFor="addressLine2">

                      Apartment, suite,
                      unit

                      <em>
                        Optional
                      </em>

                    </label>

                    <input
                      id="addressLine2"
                      name="addressLine2"
                      type="text"
                      value={
                        form.addressLine2
                      }
                      onChange={handleChange}
                      placeholder="Apartment, floor, unit..."
                      autoComplete="address-line2"
                    />

                  </div>


                  {/* City */}

                  <div className="checkout-field">

                    <label htmlFor="city">
                      City
                      <span>*</span>
                    </label>

                    <input
                      id="city"
                      name="city"
                      type="text"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Berlin"
                      autoComplete="address-level2"
                      required
                    />

                  </div>


                  {/* State */}

                  <div className="checkout-field">

                    <label htmlFor="state">

                      State /
                      Region

                      <em>
                        Optional
                      </em>

                    </label>

                    <input
                      id="state"
                      name="state"
                      type="text"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="Berlin"
                      autoComplete="address-level1"
                    />

                  </div>


                  {/* Postal Code */}

                  <div className="checkout-field">

                    <label htmlFor="postalCode">
                      Postal / ZIP code
                      <span>*</span>
                    </label>

                    <input
                      id="postalCode"
                      name="postalCode"
                      type="text"
                      value={form.postalCode}
                      onChange={handleChange}
                      placeholder="10115"
                      autoComplete="postal-code"
                      required
                    />

                  </div>

                </div>

              </section>


              {/* =====================================
                  BUSINESS DETAILS
              ===================================== */}

              <section className="checkout-section">

                <div className="checkout-section-header">

                  <span className="checkout-section-number">
                    03
                  </span>

                  <div>

                    <h2>
                      Additional details
                    </h2>

                    <p>
                      Optional information
                      for business orders.
                    </p>

                  </div>

                </div>


                <div className="checkout-grid">


                  {/* Company */}

                  <div className="checkout-field">

                    <label htmlFor="companyName">

                      Company name

                      <em>
                        Optional
                      </em>

                    </label>

                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={
                        form.companyName
                      }
                      onChange={handleChange}
                      placeholder="Company GmbH"
                      autoComplete="organization"
                    />

                  </div>


                  {/* VAT */}

                  <div className="checkout-field">

                    <label htmlFor="vatNumber">

                      VAT number

                      <em>
                        Optional
                      </em>

                    </label>

                    <input
                      id="vatNumber"
                      name="vatNumber"
                      type="text"
                      value={
                        form.vatNumber
                      }
                      onChange={handleChange}
                      placeholder="DE123456789"
                    />

                  </div>


                  {/* Instructions */}

                  <div className="checkout-field checkout-field-full">

                    <label htmlFor="deliveryInstructions">

                      Delivery instructions

                      <em>
                        Optional
                      </em>

                    </label>

                    <textarea
                      id="deliveryInstructions"
                      name="deliveryInstructions"
                      value={
                        form.deliveryInstructions
                      }
                      onChange={handleChange}
                      placeholder="Anything our delivery team should know?"
                      rows="4"
                    />

                  </div>

                </div>

              </section>


              {/* =====================================
                  MOBILE CONTINUE
              ===================================== */}

              <div className="checkout-mobile-summary">

                <button
                  type="submit"
                  className="checkout-submit"
                  disabled={submitting}
                >

                  {submitting
                    ? "Creating order..."
                    : "Continue to Payment"}

                  {!submitting && (
                    <span>
                      →
                    </span>
                  )}

                </button>

              </div>

            </div>


            {/* =======================================
                RIGHT SUMMARY
            ======================================= */}

            <aside className="checkout-sidebar">

              <div className="checkout-summary">


                {/* Summary Header */}

                <div className="checkout-summary-header">

                  <div>

                    <span>
                      ORDER SUMMARY
                    </span>

                    <h2>
                      Your order
                    </h2>

                  </div>

                  <span className="checkout-summary-count">

                    {cart.totalItems}

                    {" "}

                    {cart.totalItems === 1
                      ? "item"
                      : "items"}

                  </span>

                </div>


                {/* Items */}

                <div className="checkout-summary-items">

                  {cart.items.map(
                    (item) => {

                      const imageUrl =
                        item.image
                          ? item.image.startsWith(
                              "http"
                            )
                            ? item.image
                            : `${API_URL}${item.image}`
                          : null;


                      return (

                        <div
                          className="checkout-summary-item"
                          key={item.id}
                        >

                          <div className="checkout-summary-image">

                            {imageUrl ? (

                              <img
                                src={imageUrl}
                                alt={item.title}
                              />

                            ) : (

                              <span>
                                No image
                              </span>

                            )}

                            <span className="checkout-summary-quantity">

                              {item.quantity}

                            </span>

                          </div>


                          <div className="checkout-summary-item-info">

                            <h3>
                              {item.title}
                            </h3>

                            {item.discountPercent > 0 && (

                              <span>
                                {item.discountPercent}% OFF
                              </span>

                            )}

                          </div>


                          <strong>
                            {formatCurrency(
                              item.itemTotal
                            )}
                          </strong>

                        </div>

                      );

                    }
                  )}

                </div>


                {/* Totals */}

                <div className="checkout-summary-totals">

                  <div>

                    <span>
                      Subtotal
                    </span>

                    <strong>
                      {formatCurrency(
                        cart.subtotal
                      )}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Delivery
                    </span>

                    <strong>
                      Calculated later
                    </strong>

                  </div>


                  <div className="checkout-total">

                    <span>
                      Total
                    </span>

                    <strong>
                      {formatCurrency(
                        cart.subtotal
                      )}
                    </strong>

                  </div>

                </div>


                {/* Desktop Submit */}

                <button
                  type="submit"
                  className="checkout-submit checkout-desktop-submit"
                  disabled={submitting}
                >

                  {submitting
                    ? "Creating order..."
                    : "Continue to Payment"}

                  {!submitting && (
                    <span>
                      →
                    </span>
                  )}

                </button>


                <p className="checkout-secure">

                  <span>
                    ✓
                  </span>

                  Secure checkout

                </p>


                <Link
                  to="/cart"
                  className="checkout-edit-cart"
                >
                  ← Edit cart
                </Link>

              </div>

            </aside>

          </form>

        </div>

      </main>

    </PublicLayout>
  );
}


export default Checkout;