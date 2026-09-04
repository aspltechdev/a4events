// // // import { useEffect, useState, useCallback } from "react";
// // // import { Link } from "react-router-dom";
// // // import "./Cart.css";
// // // import PublicLayout from "../layouts/PublicLayout";

// // // const API_URL =
// // //   import.meta.env.VITE_API_URL || "http://localhost:5000";

// // // const SESSION_EXPIRY = 7 * 24 * 60 * 60 * 1000;


// // // // =====================================================
// // // // CART UPDATE EVENT
// // // // =====================================================

// // // const notifyCartUpdated = () => {
// // //   window.dispatchEvent(new Event("cartUpdated"));
// // // };


// // // // =====================================================
// // // // CURRENCY
// // // // =====================================================

// // // const formatCurrency = (amount) => {
// // //   return new Intl.NumberFormat("en-IN", {
// // //     style: "currency",
// // //     currency: "INR",
// // //     minimumFractionDigits: 2,
// // //     maximumFractionDigits: 2,
// // //   }).format(Number(amount) || 0);
// // // };


// // // // =====================================================
// // // // CART SKELETON
// // // // =====================================================

// // // const CartSkeleton = () => (
// // //   <div className="cart-skeleton">
// // //     <div className="skeleton-header">
// // //       <div
// // //         className="skeleton-line"
// // //         style={{ width: "200px" }}
// // //       />
// // //       <div
// // //         className="skeleton-line"
// // //         style={{ width: "300px" }}
// // //       />
// // //     </div>
// // //     <div className="skeleton-items">
// // //       {[1, 2, 3].map((i) => (
// // //         <div key={i} className="skeleton-item">
// // //           <div className="skeleton-image" />
// // //           <div className="skeleton-details">
// // //             <div
// // //               className="skeleton-line"
// // //               style={{ width: "80%" }}
// // //             />
// // //             <div
// // //               className="skeleton-line"
// // //               style={{ width: "60%" }}
// // //             />
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   </div>
// // // );


// // // // =====================================================
// // // // EMPTY CART
// // // // =====================================================

// // // const CartEmpty = () => (
// // //   <div className="cart-empty">
// // //     <div className="cart-empty-icon">
// // //       <svg
// // //         viewBox="0 0 24 24"
// // //         fill="none"
// // //         stroke="currentColor"
// // //         strokeWidth="1.5"
// // //         strokeLinecap="round"
// // //         strokeLinejoin="round"
// // //         aria-hidden="true"
// // //       >
// // //         <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
// // //         <circle cx="10" cy="20" r="1.2" />
// // //         <circle cx="18" cy="20" r="1.2" />
// // //       </svg>
// // //     </div>
// // //     <h2>Your cart is empty</h2>
// // //     <p>
// // //       Looks like you haven't added anything
// // //       to your cart yet.
// // //     </p>
// // //     <Link to="/products" className="cart-shop-button">
// // //       Browse Products
// // //       <span aria-hidden="true">→</span>
// // //     </Link>
// // //   </div>
// // // );


// // // // =====================================================
// // // // CART ITEM
// // // // =====================================================

// // // const CartItem = ({
// // //   item,
// // //   onUpdateQuantity,
// // //   onRemove,
// // //   updating,
// // // }) => {
// // //   const {
// // //     productId,
// // //     title,
// // //     image,
// // //     price,
// // //     quantity,
// // //     discountPercent,
// // //     discountedPrice,
// // //     itemTotal,
// // //   } = item;

// // //   const handleDecrease = () => {
// // //     if (quantity > 1) {
// // //       onUpdateQuantity(productId, quantity - 1);
// // //     }
// // //   };

// // //   const handleIncrease = () => {
// // //     onUpdateQuantity(productId, quantity + 1);
// // //   };

// // //   const imageUrl = image
// // //     ? image.startsWith("http")
// // //       ? image
// // //       : `${API_URL}${image}`
// // //     : null;

// // //   return (
// // //     <article className="cart-item">
// // //       {/* IMAGE */}
// // //       <Link
// // //         to={`/products/${productId}`}
// // //         className="cart-item-image"
// // //         aria-label={`View ${title}`}
// // //       >
// // //         {imageUrl ? (
// // //           <img
// // //             src={imageUrl}
// // //             alt={title}
// // //             loading="lazy"
// // //             onError={(e) => {
// // //               e.currentTarget.style.display = "none";
// // //               const placeholder =
// // //                 e.currentTarget.parentElement?.querySelector(
// // //                   ".cart-image-placeholder"
// // //                 );
// // //               if (placeholder) {
// // //                 placeholder.style.display = "flex";
// // //               }
// // //             }}
// // //           />
// // //         ) : null}
// // //         <div
// // //           className="cart-image-placeholder"
// // //           style={{
// // //             display: imageUrl ? "none" : "flex",
// // //           }}
// // //         >
// // //           No Image
// // //         </div>
// // //       </Link>

// // //       {/* DETAILS */}
// // //       <div className="cart-item-details">
// // //         <span className="cart-item-category">Product</span>
// // //         <Link
// // //           to={`/products/${productId}`}
// // //           className="cart-item-title"
// // //         >
// // //           {title}
// // //         </Link>
// // //         <div className="cart-item-price">
// // //           {discountPercent > 0 ? (
// // //             <>
// // //               <span className="cart-current-price">
// // //                 {formatCurrency(discountedPrice)}
// // //               </span>
// // //               <span className="cart-original-price">
// // //                 {formatCurrency(price)}
// // //               </span>
// // //               <span
// // //                 className="cart-discount"
// // //                 aria-label={`${discountPercent}% off`}
// // //               >
// // //                 {discountPercent}% OFF
// // //               </span>
// // //             </>
// // //           ) : (
// // //             <span className="cart-current-price">
// // //               {formatCurrency(price)}
// // //             </span>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* ACTIONS */}
// // //       <div className="cart-item-actions">
// // //         <div
// // //           className="cart-quantity"
// // //           role="group"
// // //           aria-label="Quantity controls"
// // //         >
// // //           <button
// // //             type="button"
// // //             onClick={handleDecrease}
// // //             disabled={updating || quantity <= 1}
// // //             aria-label="Decrease quantity"
// // //           >
// // //             −
// // //           </button>
// // //           <span aria-live="polite">{quantity}</span>
// // //           <button
// // //             type="button"
// // //             onClick={handleIncrease}
// // //             disabled={updating}
// // //             aria-label="Increase quantity"
// // //           >
// // //             +
// // //           </button>
// // //         </div>

// // //         <strong className="cart-item-total">
// // //           {formatCurrency(itemTotal)}
// // //         </strong>

// // //         <button
// // //           type="button"
// // //           className="cart-remove"
// // //           onClick={() => onRemove(productId)}
// // //           disabled={updating}
// // //           aria-label={`Remove ${title} from cart`}
// // //         >
// // //           Remove
// // //         </button>
// // //       </div>
// // //     </article>
// // //   );
// // // };


// // // // =====================================================
// // // // CART SUMMARY
// // // // =====================================================

// // // const CartSummary = ({ cart }) => {
// // //   return (
// // //     <aside className="cart-summary">
// // //       <div className="cart-summary-card">
// // //         <h2>Order Summary</h2>

// // //         <div className="cart-summary-row">
// // //           <span>Items ({cart.totalItems})</span>
// // //           <span>{formatCurrency(cart.subtotal)}</span>
// // //         </div>

// // //         <div className="cart-summary-row">
// // //           <span>Delivery</span>
// // //           <span>Calculated at checkout</span>
// // //         </div>

// // //         <div className="cart-summary-divider" />

// // //         <div className="cart-summary-total">
// // //           <span>Total</span>
// // //           <strong>{formatCurrency(cart.subtotal)}</strong>
// // //         </div>

// // //         <Link
// // //           to="/checkout"
// // //           className="cart-checkout-button"
// // //           aria-label="Proceed to checkout"
// // //         >
// // //           Proceed to Checkout
// // //           <span aria-hidden="true">→</span>
// // //         </Link>

// // //         <Link to="/products" className="cart-continue">
// // //           ← Continue Shopping
// // //         </Link>
// // //       </div>
// // //     </aside>
// // //   );
// // // };


// // // // =====================================================
// // // // MAIN CART
// // // // =====================================================

// // // function Cart() {
// // //   const [cart, setCart] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [updating, setUpdating] = useState(false);
// // //   const [error, setError] = useState("");

// // //   // ===================================================
// // //   // SESSION
// // //   // ===================================================

// // //   const getSessionId = useCallback(() => {
// // //     let sessionId = localStorage.getItem("cartSessionId");
// // //     const sessionExpiry = localStorage.getItem("cartSessionExpiry");

// // //     // Check expiry
// // //     if (
// // //       sessionId &&
// // //       sessionExpiry &&
// // //       Date.now() > parseInt(sessionExpiry, 10)
// // //     ) {
// // //       localStorage.removeItem("cartSessionId");
// // //       localStorage.removeItem("cartSessionExpiry");
// // //       sessionId = null;
// // //     }

// // //     // Create new session
// // //     if (!sessionId) {
// // //       sessionId = `cart-${crypto.randomUUID()}`;
// // //       localStorage.setItem("cartSessionId", sessionId);
// // //       localStorage.setItem(
// // //         "cartSessionExpiry",
// // //         String(Date.now() + SESSION_EXPIRY)
// // //       );
// // //     }

// // //     return sessionId;
// // //   }, []);

// // //   // ===================================================
// // //   // FETCH CART
// // //   // ===================================================

// // //   const fetchCart = useCallback(async () => {
// // //     try {
// // //       setLoading(true);
// // //       setError("");

// // //       const sessionId = getSessionId();
// // //       const response = await fetch(
// // //         `${API_URL}/api/cart/${sessionId}`
// // //       );

// // //       if (!response.ok) {
// // //         if (response.status === 404) {
// // //           setCart({
// // //             items: [],
// // //             totalItems: 0,
// // //             subtotal: 0,
// // //           });
// // //           return;
// // //         }
// // //         throw new Error("Failed to load cart");
// // //       }

// // //       const data = await response.json();

// // //       console.log("Cart API Response:", data);

// // //       // ✅ Handle the actual response structure
// // //       // The backend returns: { success: true, cart: { ... } }
// // //       if (data && data.success && data.cart) {
// // //         setCart(data.cart);
// // //       } else if (data && !data.success) {
// // //         // If there's an error message
// // //         throw new Error(data.message || "Failed to load cart");
// // //       } else {
// // //         // Fallback for old API response or unexpected format
// // //         setCart({
// // //           id: data?.id ?? null,
// // //           sessionId: data?.sessionId ?? sessionId,
// // //           items: data?.items ?? [],
// // //           totalItems: data?.totalItems ?? 0,
// // //           subtotal: data?.subtotal ?? 0,
// // //         });
// // //       }
// // //     } catch (err) {
// // //       console.error("Cart error:", err);
// // //       setError(
// // //         err.message ||
// // //           "Unable to load your cart. Please try again."
// // //       );
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   }, [getSessionId]);

// // //   // ===================================================
// // //   // INITIAL LOAD
// // //   // ===================================================

// // //   useEffect(() => {
// // //     fetchCart();
// // //   }, [fetchCart]);

// // //   // ===================================================
// // //   // UPDATE QUANTITY
// // //   // ===================================================

// // //   const updateQuantity = useCallback(
// // //     async (productId, quantity) => {
// // //       if (quantity < 1) {
// // //         return;
// // //       }

// // //       try {
// // //         setUpdating(true);
// // //         setError("");

// // //         const sessionId = getSessionId();

// // //         const response = await fetch(
// // //           `${API_URL}/api/cart/${sessionId}/${productId}`,
// // //           {
// // //             method: "PUT",
// // //             headers: {
// // //               "Content-Type": "application/json",
// // //             },
// // //             body: JSON.stringify({ quantity }),
// // //           }
// // //         );

// // //         if (!response.ok) {
// // //           const data = await response.json().catch(() => null);
// // //           throw new Error(
// // //             data?.message || "Failed to update cart"
// // //           );
// // //         }

// // //         await fetchCart();
// // //         notifyCartUpdated();
// // //       } catch (err) {
// // //         console.error("Update cart error:", err);
// // //         setError(
// // //           err.message ||
// // //             "Unable to update cart. Please try again."
// // //         );
// // //       } finally {
// // //         setUpdating(false);
// // //       }
// // //     },
// // //     [fetchCart, getSessionId]
// // //   );

// // //   // ===================================================
// // //   // REMOVE ITEM
// // //   // ===================================================

// // //   const removeItem = useCallback(
// // //     async (productId) => {
// // //       try {
// // //         setUpdating(true);
// // //         setError("");

// // //         const sessionId = getSessionId();

// // //         const response = await fetch(
// // //           `${API_URL}/api/cart/${sessionId}/${productId}`,
// // //           {
// // //             method: "DELETE",
// // //           }
// // //         );

// // //         if (!response.ok) {
// // //           const data = await response.json().catch(() => null);
// // //           throw new Error(
// // //             data?.message || "Failed to remove item"
// // //           );
// // //         }

// // //         await fetchCart();
// // //         notifyCartUpdated();
// // //       } catch (err) {
// // //         console.error("Remove cart error:", err);
// // //         setError(
// // //           err.message ||
// // //             "Unable to remove item. Please try again."
// // //         );
// // //       } finally {
// // //         setUpdating(false);
// // //       }
// // //     },
// // //     [fetchCart, getSessionId]
// // //   );

// // //   // ===================================================
// // //   // CLEAR CART
// // //   // ===================================================

// // //   const clearCart = useCallback(async () => {
// // //     const confirmed = window.confirm(
// // //       "Are you sure you want to clear your cart?"
// // //     );

// // //     if (!confirmed) {
// // //       return;
// // //     }

// // //     try {
// // //       setUpdating(true);
// // //       setError("");

// // //       const sessionId = getSessionId();

// // //       const response = await fetch(
// // //         `${API_URL}/api/cart/${sessionId}/clear`,
// // //         {
// // //           method: "DELETE",
// // //         }
// // //       );

// // //       if (!response.ok) {
// // //         const data = await response.json().catch(() => null);
// // //         throw new Error(
// // //           data?.message || "Failed to clear cart"
// // //         );
// // //       }

// // //       await fetchCart();
// // //       notifyCartUpdated();
// // //     } catch (err) {
// // //       console.error("Clear cart error:", err);
// // //       setError(
// // //         err.message ||
// // //           "Unable to clear cart. Please try again."
// // //       );
// // //     } finally {
// // //       setUpdating(false);
// // //     }
// // //   }, [fetchCart, getSessionId]);

// // //   // ===================================================
// // //   // LOADING
// // //   // ===================================================

// // //   if (loading) {
// // //     return (
// // //       <PublicLayout>
// // //         <main className="cart-page">
// // //           <div className="cart-container">
// // //             <CartSkeleton />
// // //           </div>
// // //         </main>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   // ===================================================
// // //   // ERROR WITHOUT CART
// // //   // ===================================================

// // //   if (error && !cart) {
// // //     return (
// // //       <PublicLayout>
// // //         <main className="cart-page">
// // //           <div className="cart-container">
// // //             <div
// // //               className="cart-error"
// // //               role="alert"
// // //               aria-live="polite"
// // //             >
// // //               <h2>Something went wrong</h2>
// // //               <p>{error}</p>
// // //               <button
// // //                 className="cart-retry"
// // //                 onClick={fetchCart}
// // //                 aria-label="Try loading cart again"
// // //               >
// // //                 Try Again
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </main>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   // ===================================================
// // //   // SAFE CART DATA
// // //   // ===================================================

// // //   const items = cart?.items || [];
// // //   const isEmpty = items.length === 0;

// // //   // ===================================================
// // //   // EMPTY CART
// // //   // ===================================================

// // //   if (isEmpty) {
// // //     return (
// // //       <PublicLayout>
// // //         <main className="cart-page">
// // //           <div className="cart-container">
// // //             <div className="cart-header">
// // //               <span className="cart-eyebrow">YOUR CART</span>
// // //               <h1>Your Shopping Cart</h1>
// // //               <p>Your cart is currently empty.</p>
// // //             </div>
// // //             <CartEmpty />
// // //           </div>
// // //         </main>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   // ===================================================
// // //   // CART WITH ITEMS
// // //   // ===================================================

// // //   return (
// // //     <PublicLayout>
// // //       <main className="cart-page">
// // //         <div className="cart-container">
// // //           {/* HEADER */}
// // //           <div className="cart-header">
// // //             <div>
// // //               <span className="cart-eyebrow">YOUR CART</span>
// // //               <h1>Your Shopping Cart</h1>
// // //               <p>
// // //                 {cart.totalItems}{" "}
// // //                 {cart.totalItems === 1 ? "item" : "items"} in your cart
// // //               </p>
// // //             </div>

// // //             <button
// // //               className="cart-clear"
// // //               onClick={clearCart}
// // //               disabled={updating}
// // //               aria-label="Clear all items from cart"
// // //             >
// // //               Clear Cart
// // //             </button>
// // //           </div>

// // //           {/* ERROR */}
// // //           {error && (
// // //             <div
// // //               className="cart-inline-error"
// // //               role="alert"
// // //               aria-live="polite"
// // //             >
// // //               {error}
// // //             </div>
// // //           )}

// // //           {/* CONTENT */}
// // //           <div className="cart-layout">
// // //             {/* PRODUCTS */}
// // //             <section className="cart-items" aria-label="Cart items">
// // //               {items.map((item) => (
// // //                 <CartItem
// // //                   key={item.id}
// // //                   item={item}
// // //                   onUpdateQuantity={updateQuantity}
// // //                   onRemove={removeItem}
// // //                   updating={updating}
// // //                 />
// // //               ))}
// // //             </section>

// // //             {/* SUMMARY */}
// // //             <CartSummary cart={cart} />
// // //           </div>
// // //         </div>
// // //       </main>
// // //     </PublicLayout>
// // //   );
// // // }

// // // export default Cart;


// // import { useEffect, useState, useCallback } from "react";
// // import { Link } from "react-router-dom";
// // import "./Cart.css";
// // import PublicLayout from "../layouts/PublicLayout";

// // // ✅ Fix: Remove /api from the base URL
// // const API_URL =
// //   import.meta.env.VITE_API_URL || "http://localhost:5000";

// // const SESSION_EXPIRY = 7 * 24 * 60 * 60 * 1000;

// // // =====================================================
// // // CART UPDATE EVENT
// // // =====================================================

// // const notifyCartUpdated = () => {
// //   window.dispatchEvent(new Event("cartUpdated"));
// // };

// // // =====================================================
// // // CURRENCY
// // // =====================================================

// // const formatCurrency = (amount) => {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     minimumFractionDigits: 2,
// //     maximumFractionDigits: 2,
// //   }).format(Number(amount) || 0);
// // };

// // // =====================================================
// // // CART SKELETON
// // // =====================================================

// // const CartSkeleton = () => (
// //   <div className="cart-skeleton">
// //     <div className="skeleton-header">
// //       <div className="skeleton-line" style={{ width: "200px" }} />
// //       <div className="skeleton-line" style={{ width: "300px" }} />
// //     </div>
// //     <div className="skeleton-items">
// //       {[1, 2, 3].map((i) => (
// //         <div key={i} className="skeleton-item">
// //           <div className="skeleton-image" />
// //           <div className="skeleton-details">
// //             <div className="skeleton-line" style={{ width: "80%" }} />
// //             <div className="skeleton-line" style={{ width: "60%" }} />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // );

// // // =====================================================
// // // EMPTY CART
// // // =====================================================

// // const CartEmpty = () => (
// //   <div className="cart-empty">
// //     <div className="cart-empty-icon">
// //       <svg
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.5"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         aria-hidden="true"
// //       >
// //         <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
// //         <circle cx="10" cy="20" r="1.2" />
// //         <circle cx="18" cy="20" r="1.2" />
// //       </svg>
// //     </div>
// //     <h2>Your cart is empty</h2>
// //     <p>Looks like you haven't added anything to your cart yet.</p>
// //     <Link to="/products" className="cart-shop-button">
// //       Browse Products
// //       <span aria-hidden="true">→</span>
// //     </Link>
// //   </div>
// // );

// // // =====================================================
// // // CART ITEM
// // // =====================================================

// // const CartItem = ({ item, onUpdateQuantity, onRemove, updating }) => {
// //   const {
// //     productId,
// //     title,
// //     image,
// //     price,
// //     quantity,
// //     discountPercent,
// //     discountedPrice,
// //     itemTotal,
// //   } = item;

// //   const handleDecrease = () => {
// //     if (quantity > 1) {
// //       onUpdateQuantity(productId, quantity - 1);
// //     }
// //   };

// //   const handleIncrease = () => {
// //     onUpdateQuantity(productId, quantity + 1);
// //   };

// //   const imageUrl = image
// //     ? image.startsWith("http")
// //       ? image
// //       : `${API_URL}${image}`
// //     : null;

// //   return (
// //     <article className="cart-item">
// //       {/* IMAGE */}
// //       <Link
// //         to={`/products/${productId}`}
// //         className="cart-item-image"
// //         aria-label={`View ${title}`}
// //       >
// //         {imageUrl ? (
// //           <img
// //             src={imageUrl}
// //             alt={title}
// //             loading="lazy"
// //             onError={(e) => {
// //               e.currentTarget.style.display = "none";
// //               const placeholder =
// //                 e.currentTarget.parentElement?.querySelector(
// //                   ".cart-image-placeholder"
// //                 );
// //               if (placeholder) {
// //                 placeholder.style.display = "flex";
// //               }
// //             }}
// //           />
// //         ) : null}
// //         <div
// //           className="cart-image-placeholder"
// //           style={{
// //             display: imageUrl ? "none" : "flex",
// //           }}
// //         >
// //           No Image
// //         </div>
// //       </Link>

// //       {/* DETAILS */}
// //       <div className="cart-item-details">
// //         <span className="cart-item-category">Product</span>
// //         <Link
// //           to={`/products/${productId}`}
// //           className="cart-item-title"
// //         >
// //           {title}
// //         </Link>
// //         <div className="cart-item-price">
// //           {discountPercent > 0 ? (
// //             <>
// //               <span className="cart-current-price">
// //                 {formatCurrency(discountedPrice)}
// //               </span>
// //               <span className="cart-original-price">
// //                 {formatCurrency(price)}
// //               </span>
// //               <span
// //                 className="cart-discount"
// //                 aria-label={`${discountPercent}% off`}
// //               >
// //                 {discountPercent}% OFF
// //               </span>
// //             </>
// //           ) : (
// //             <span className="cart-current-price">
// //               {formatCurrency(price)}
// //             </span>
// //           )}
// //         </div>
// //       </div>

// //       {/* ACTIONS */}
// //       <div className="cart-item-actions">
// //         <div
// //           className="cart-quantity"
// //           role="group"
// //           aria-label="Quantity controls"
// //         >
// //           <button
// //             type="button"
// //             onClick={handleDecrease}
// //             disabled={updating || quantity <= 1}
// //             aria-label="Decrease quantity"
// //           >
// //             −
// //           </button>
// //           <span aria-live="polite">{quantity}</span>
// //           <button
// //             type="button"
// //             onClick={handleIncrease}
// //             disabled={updating}
// //             aria-label="Increase quantity"
// //           >
// //             +
// //           </button>
// //         </div>

// //         <strong className="cart-item-total">
// //           {formatCurrency(itemTotal)}
// //         </strong>

// //         <button
// //           type="button"
// //           className="cart-remove"
// //           onClick={() => onRemove(productId)}
// //           disabled={updating}
// //           aria-label={`Remove ${title} from cart`}
// //         >
// //           Remove
// //         </button>
// //       </div>
// //     </article>
// //   );
// // };

// // // =====================================================
// // // CART SUMMARY
// // // =====================================================

// // const CartSummary = ({ cart }) => {
// //   return (
// //     <aside className="cart-summary">
// //       <div className="cart-summary-card">
// //         <h2>Order Summary</h2>

// //         <div className="cart-summary-row">
// //           <span>Items ({cart.totalItems})</span>
// //           <span>{formatCurrency(cart.subtotal)}</span>
// //         </div>

// //         <div className="cart-summary-row">
// //           <span>Delivery</span>
// //           <span>Calculated at checkout</span>
// //         </div>

// //         <div className="cart-summary-divider" />

// //         <div className="cart-summary-total">
// //           <span>Total</span>
// //           <strong>{formatCurrency(cart.subtotal)}</strong>
// //         </div>

// //         <Link
// //           to="/checkout"
// //           className="cart-checkout-button"
// //           aria-label="Proceed to checkout"
// //         >
// //           Proceed to Checkout
// //           <span aria-hidden="true">→</span>
// //         </Link>

// //         <Link to="/products" className="cart-continue">
// //           ← Continue Shopping
// //         </Link>
// //       </div>
// //     </aside>
// //   );
// // };

// // // =====================================================
// // // MAIN CART
// // // =====================================================

// // function Cart() {
// //   const [cart, setCart] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [updating, setUpdating] = useState(false);
// //   const [error, setError] = useState("");

// //   // ===================================================
// //   // SESSION
// //   // ===================================================

// //   const getSessionId = useCallback(() => {
// //     let sessionId = localStorage.getItem("cartSessionId");
// //     const sessionExpiry = localStorage.getItem("cartSessionExpiry");

// //     if (
// //       sessionId &&
// //       sessionExpiry &&
// //       Date.now() > parseInt(sessionExpiry, 10)
// //     ) {
// //       localStorage.removeItem("cartSessionId");
// //       localStorage.removeItem("cartSessionExpiry");
// //       sessionId = null;
// //     }

// //     if (!sessionId) {
// //       sessionId = `cart-${crypto.randomUUID()}`;
// //       localStorage.setItem("cartSessionId", sessionId);
// //       localStorage.setItem(
// //         "cartSessionExpiry",
// //         String(Date.now() + SESSION_EXPIRY)
// //       );
// //     }

// //     return sessionId;
// //   }, []);

// //   // ===================================================
// //   // FETCH CART
// //   // ===================================================

// //   const fetchCart = useCallback(async () => {
// //     try {
// //       setLoading(true);
// //       setError("");

// //       const sessionId = getSessionId();

// //       // ✅ FIX: Remove duplicate /api
// //       // Now correctly: http://localhost:5000/api/cart/cart-xxx
// //       const response = await fetch(
// //         `${API_URL}/cart/${sessionId}`
// //       );

// //       if (!response.ok) {
// //         if (response.status === 404) {
// //           setCart({
// //             items: [],
// //             totalItems: 0,
// //             subtotal: 0,
// //           });
// //           return;
// //         }
// //         throw new Error("Failed to load cart");
// //       }

// //       const data = await response.json();

// //       // Handle the response structure: { success: true, cart: { ... } }
// //       if (data && data.success && data.cart) {
// //         setCart(data.cart);
// //       } else {
// //         // Fallback for unexpected response format
// //         setCart({
// //           id: data?.id ?? null,
// //           sessionId: data?.sessionId ?? sessionId,
// //           items: data?.items ?? [],
// //           totalItems: data?.totalItems ?? 0,
// //           subtotal: data?.subtotal ?? 0,
// //         });
// //       }
// //     } catch (err) {
// //       console.error("Cart error:", err);
// //       setError(
// //         err.message ||
// //           "Unable to load your cart. Please try again."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [getSessionId]);

// //   // ===================================================
// //   // INITIAL LOAD
// //   // ===================================================

// //   useEffect(() => {
// //     fetchCart();
// //   }, [fetchCart]);

// //   // ===================================================
// //   // UPDATE QUANTITY
// //   // ===================================================

// //   const updateQuantity = useCallback(
// //     async (productId, quantity) => {
// //       if (quantity < 1) return;

// //       try {
// //         setUpdating(true);
// //         setError("");

// //         const sessionId = getSessionId();

// //         // ✅ FIX: Remove duplicate /api
// //         const response = await fetch(
// //           `${API_URL}/api/cart/${sessionId}/${productId}`,
// //           {
// //             method: "PUT",
// //             headers: {
// //               "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({ quantity }),
// //           }
// //         );

// //         if (!response.ok) {
// //           const data = await response.json().catch(() => null);
// //           throw new Error(data?.message || "Failed to update cart");
// //         }

// //         await fetchCart();
// //         notifyCartUpdated();
// //       } catch (err) {
// //         console.error("Update cart error:", err);
// //         setError(
// //           err.message ||
// //             "Unable to update cart. Please try again."
// //         );
// //       } finally {
// //         setUpdating(false);
// //       }
// //     },
// //     [fetchCart, getSessionId]
// //   );

// //   // ===================================================
// //   // REMOVE ITEM
// //   // ===================================================

// //   const removeItem = useCallback(
// //     async (productId) => {
// //       try {
// //         setUpdating(true);
// //         setError("");

// //         const sessionId = getSessionId();

// //         // ✅ FIX: Remove duplicate /api
// //         const response = await fetch(
// //           `${API_URL}/api/cart/${sessionId}/${productId}`,
// //           {
// //             method: "DELETE",
// //           }
// //         );

// //         if (!response.ok) {
// //           const data = await response.json().catch(() => null);
// //           throw new Error(data?.message || "Failed to remove item");
// //         }

// //         await fetchCart();
// //         notifyCartUpdated();
// //       } catch (err) {
// //         console.error("Remove cart error:", err);
// //         setError(
// //           err.message ||
// //             "Unable to remove item. Please try again."
// //         );
// //       } finally {
// //         setUpdating(false);
// //       }
// //     },
// //     [fetchCart, getSessionId]
// //   );

// //   // ===================================================
// //   // CLEAR CART
// //   // ===================================================

// //   const clearCart = useCallback(async () => {
// //     const confirmed = window.confirm(
// //       "Are you sure you want to clear your cart?"
// //     );

// //     if (!confirmed) return;

// //     try {
// //       setUpdating(true);
// //       setError("");

// //       const sessionId = getSessionId();

// //       // ✅ FIX: Remove duplicate /api
// //       const response = await fetch(
// //         `${API_URL}/api/cart/${sessionId}/clear`,
// //         {
// //           method: "DELETE",
// //         }
// //       );

// //       if (!response.ok) {
// //         const data = await response.json().catch(() => null);
// //         throw new Error(data?.message || "Failed to clear cart");
// //       }

// //       await fetchCart();
// //       notifyCartUpdated();
// //     } catch (err) {
// //       console.error("Clear cart error:", err);
// //       setError(
// //         err.message ||
// //           "Unable to clear cart. Please try again."
// //       );
// //     } finally {
// //       setUpdating(false);
// //     }
// //   }, [fetchCart, getSessionId]);

// //   // ===================================================
// //   // LOADING
// //   // ===================================================

// //   if (loading) {
// //     return (
// //       <PublicLayout>
// //         <main className="cart-page">
// //           <div className="cart-container">
// //             <CartSkeleton />
// //           </div>
// //         </main>
// //       </PublicLayout>
// //     );
// //   }

// //   // ===================================================
// //   // ERROR WITHOUT CART
// //   // ===================================================

// //   if (error && !cart) {
// //     return (
// //       <PublicLayout>
// //         <main className="cart-page">
// //           <div className="cart-container">
// //             <div
// //               className="cart-error"
// //               role="alert"
// //               aria-live="polite"
// //             >
// //               <h2>Something went wrong</h2>
// //               <p>{error}</p>
// //               <button
// //                 className="cart-retry"
// //                 onClick={fetchCart}
// //                 aria-label="Try loading cart again"
// //               >
// //                 Try Again
// //               </button>
// //             </div>
// //           </div>
// //         </main>
// //       </PublicLayout>
// //     );
// //   }

// //   // ===================================================
// //   // SAFE CART DATA
// //   // ===================================================

// //   const items = cart?.items || [];
// //   const isEmpty = items.length === 0;

// //   // ===================================================
// //   // EMPTY CART
// //   // ===================================================

// //   if (isEmpty) {
// //     return (
// //       <PublicLayout>
// //         <main className="cart-page">
// //           <div className="cart-container">
// //             <div className="cart-header">
// //               <span className="cart-eyebrow">YOUR CART</span>
// //               <h1>Your Shopping Cart</h1>
// //               <p>Your cart is currently empty.</p>
// //             </div>
// //             <CartEmpty />
// //           </div>
// //         </main>
// //       </PublicLayout>
// //     );
// //   }

// //   // ===================================================
// //   // CART WITH ITEMS
// //   // ===================================================

// //   return (
// //     <PublicLayout>
// //       <main className="cart-page">
// //         <div className="cart-container">
// //           {/* HEADER */}
// //           <div className="cart-header">
// //             <div>
// //               <span className="cart-eyebrow">YOUR CART</span>
// //               <h1>Your Shopping Cart</h1>
// //               <p>
// //                 {cart.totalItems}{" "}
// //                 {cart.totalItems === 1 ? "item" : "items"} in your cart
// //               </p>
// //             </div>

// //             <button
// //               className="cart-clear"
// //               onClick={clearCart}
// //               disabled={updating}
// //               aria-label="Clear all items from cart"
// //             >
// //               Clear Cart
// //             </button>
// //           </div>

// //           {/* ERROR */}
// //           {error && (
// //             <div
// //               className="cart-inline-error"
// //               role="alert"
// //               aria-live="polite"
// //             >
// //               {error}
// //             </div>
// //           )}

// //           {/* CONTENT */}
// //           <div className="cart-layout">
// //             {/* PRODUCTS */}
// //             <section className="cart-items" aria-label="Cart items">
// //               {items.map((item) => (
// //                 <CartItem
// //                   key={item.id}
// //                   item={item}
// //                   onUpdateQuantity={updateQuantity}
// //                   onRemove={removeItem}
// //                   updating={updating}
// //                 />
// //               ))}
// //             </section>

// //             {/* SUMMARY */}
// //             <CartSummary cart={cart} />
// //           </div>
// //         </div>
// //       </main>
// //     </PublicLayout>
// //   );
// // }

// // export default Cart;



// // import { useEffect, useState, useCallback } from "react";
// // import { Link } from "react-router-dom";
// // import "./Cart.css";
// // import PublicLayout from "../layouts/PublicLayout";

// // // ✅ Fix: Remove /api from the base URL
// // const API_URL =
// //   import.meta.env.VITE_API_URL || "http://localhost:5000";

// // const SESSION_EXPIRY = 7 * 24 * 60 * 60 * 1000;

// // // =====================================================
// // // CART UPDATE EVENT
// // // =====================================================

// // const notifyCartUpdated = () => {
// //   window.dispatchEvent(new Event("cartUpdated"));
// // };

// // // =====================================================
// // // CURRENCY
// // // =====================================================

// // const formatCurrency = (amount) => {
// //   return new Intl.NumberFormat("en-IN", {
// //     style: "currency",
// //     currency: "INR",
// //     minimumFractionDigits: 2,
// //     maximumFractionDigits: 2,
// //   }).format(Number(amount) || 0);
// // };

// // // =====================================================
// // // CART SKELETON
// // // =====================================================

// // const CartSkeleton = () => (
// //   <div className="cart-skeleton">
// //     <div className="skeleton-header">
// //       <div className="skeleton-line" style={{ width: "200px" }} />
// //       <div className="skeleton-line" style={{ width: "300px" }} />
// //     </div>
// //     <div className="skeleton-items">
// //       {[1, 2, 3].map((i) => (
// //         <div key={i} className="skeleton-item">
// //           <div className="skeleton-image" />
// //           <div className="skeleton-details">
// //             <div className="skeleton-line" style={{ width: "80%" }} />
// //             <div className="skeleton-line" style={{ width: "60%" }} />
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // );

// // // =====================================================
// // // EMPTY CART
// // // =====================================================

// // const CartEmpty = () => (
// //   <div className="cart-empty">
// //     <div className="cart-empty-icon">
// //       <svg
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="currentColor"
// //         strokeWidth="1.5"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //         aria-hidden="true"
// //       >
// //         <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
// //         <circle cx="10" cy="20" r="1.2" />
// //         <circle cx="18" cy="20" r="1.2" />
// //       </svg>
// //     </div>
// //     <h2>Your cart is empty</h2>
// //     <p>Looks like you haven't added anything to your cart yet.</p>
// //     <Link to="/products" className="cart-shop-button">
// //       Browse Products
// //       <span aria-hidden="true">→</span>
// //     </Link>
// //   </div>
// // );

// // // =====================================================
// // // CART ITEM
// // // =====================================================

// // const CartItem = ({ item, onUpdateQuantity, onRemove, updating }) => {
// //   const {
// //     productId,
// //     title,
// //     image,
// //     price,
// //     quantity,
// //     discountPercent,
// //     discountedPrice,
// //     itemTotal,
// //   } = item;

// //   const handleDecrease = () => {
// //     if (quantity > 1) {
// //       onUpdateQuantity(productId, quantity - 1);
// //     }
// //   };

// //   const handleIncrease = () => {
// //     onUpdateQuantity(productId, quantity + 1);
// //   };

// //   const imageUrl = image
// //     ? image.startsWith("http")
// //       ? image
// //       : `${API_URL}${image}`
// //     : null;

// //   return (
// //     <article className="cart-item">
// //       {/* IMAGE */}
// //       <Link
// //         to={`/products/${productId}`}
// //         className="cart-item-image"
// //         aria-label={`View ${title}`}
// //       >
// //         {imageUrl ? (
// //           <img
// //             src={imageUrl}
// //             alt={title}
// //             loading="lazy"
// //             onError={(e) => {
// //               e.currentTarget.style.display = "none";
// //               const placeholder =
// //                 e.currentTarget.parentElement?.querySelector(
// //                   ".cart-image-placeholder"
// //                 );
// //               if (placeholder) {
// //                 placeholder.style.display = "flex";
// //               }
// //             }}
// //           />
// //         ) : null}
// //         <div
// //           className="cart-image-placeholder"
// //           style={{
// //             display: imageUrl ? "none" : "flex",
// //           }}
// //         >
// //           No Image
// //         </div>
// //       </Link>

// //       {/* DETAILS */}
// //       <div className="cart-item-details">
// //         <span className="cart-item-category">Product</span>
// //         <Link
// //           to={`/products/${productId}`}
// //           className="cart-item-title"
// //         >
// //           {title}
// //         </Link>
// //         <div className="cart-item-price">
// //           {discountPercent > 0 ? (
// //             <>
// //               <span className="cart-current-price">
// //                 {formatCurrency(discountedPrice)}
// //               </span>
// //               <span className="cart-original-price">
// //                 {formatCurrency(price)}
// //               </span>
// //               <span
// //                 className="cart-discount"
// //                 aria-label={`${discountPercent}% off`}
// //               >
// //                 {discountPercent}% OFF
// //               </span>
// //             </>
// //           ) : (
// //             <span className="cart-current-price">
// //               {formatCurrency(price)}
// //             </span>
// //           )}
// //         </div>
// //       </div>

// //       {/* ACTIONS */}
// //       <div className="cart-item-actions">
// //         <div
// //           className="cart-quantity"
// //           role="group"
// //           aria-label="Quantity controls"
// //         >
// //           <button
// //             type="button"
// //             onClick={handleDecrease}
// //             disabled={updating || quantity <= 1}
// //             aria-label="Decrease quantity"
// //           >
// //             −
// //           </button>
// //           <span aria-live="polite">{quantity}</span>
// //           <button
// //             type="button"
// //             onClick={handleIncrease}
// //             disabled={updating}
// //             aria-label="Increase quantity"
// //           >
// //             +
// //           </button>
// //         </div>

// //         <strong className="cart-item-total">
// //           {formatCurrency(itemTotal)}
// //         </strong>

// //         <button
// //           type="button"
// //           className="cart-remove"
// //           onClick={() => onRemove(productId)}
// //           disabled={updating}
// //           aria-label={`Remove ${title} from cart`}
// //         >
// //           Remove
// //         </button>
// //       </div>
// //     </article>
// //   );
// // };

// // // =====================================================
// // // CART SUMMARY
// // // =====================================================

// // const CartSummary = ({ cart }) => {
// //   return (
// //     <aside className="cart-summary">
// //       <div className="cart-summary-card">
// //         <h2>Order Summary</h2>

// //         <div className="cart-summary-row">
// //           <span>Items ({cart.totalItems})</span>
// //           <span>{formatCurrency(cart.subtotal)}</span>
// //         </div>

// //         <div className="cart-summary-row">
// //           <span>Delivery</span>
// //           <span>Calculated at checkout</span>
// //         </div>

// //         <div className="cart-summary-divider" />

// //         <div className="cart-summary-total">
// //           <span>Total</span>
// //           <strong>{formatCurrency(cart.subtotal)}</strong>
// //         </div>

// //         <Link
// //           to="/checkout"
// //           className="cart-checkout-button"
// //           aria-label="Proceed to checkout"
// //         >
// //           Proceed to Checkout
// //           <span aria-hidden="true">→</span>
// //         </Link>

// //         <Link to="/products" className="cart-continue">
// //           ← Continue Shopping
// //         </Link>
// //       </div>
// //     </aside>
// //   );
// // };

// // // =====================================================
// // // MAIN CART
// // // =====================================================

// // function Cart() {
// //   const [cart, setCart] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [updating, setUpdating] = useState(false);
// //   const [error, setError] = useState("");

// //   // ===================================================
// //   // SESSION
// //   // ===================================================

// //   const getSessionId = useCallback(() => {
// //     let sessionId = localStorage.getItem("cartSessionId");
// //     const sessionExpiry = localStorage.getItem("cartSessionExpiry");

// //     if (
// //       sessionId &&
// //       sessionExpiry &&
// //       Date.now() > parseInt(sessionExpiry, 10)
// //     ) {
// //       localStorage.removeItem("cartSessionId");
// //       localStorage.removeItem("cartSessionExpiry");
// //       sessionId = null;
// //     }

// //     if (!sessionId) {
// //       sessionId = `cart-${crypto.randomUUID()}`;
// //       localStorage.setItem("cartSessionId", sessionId);
// //       localStorage.setItem(
// //         "cartSessionExpiry",
// //         String(Date.now() + SESSION_EXPIRY)
// //       );
// //     }

// //     return sessionId;
// //   }, []);

// //   // ===================================================
// //   // FETCH CART
// //   // ===================================================

// //   const fetchCart = useCallback(async () => {
// //     try {
// //       setLoading(true);
// //       setError("");

// //       const sessionId = getSessionId();

// //       // ✅ FIX: Remove duplicate /api
// //       // Now correctly: http://localhost:5000/api/cart/cart-xxx
// //       const response = await fetch(
// //         `${API_URL}/cart/${sessionId}`
// //       );

// //       if (!response.ok) {
// //         if (response.status === 404) {
// //           setCart({
// //             items: [],
// //             totalItems: 0,
// //             subtotal: 0,
// //           });
// //           return;
// //         }
// //         throw new Error("Failed to load cart");
// //       }

// //       const data = await response.json();

// //       // Handle the response structure: { success: true, cart: { ... } }
// //       if (data && data.success && data.cart) {
// //         setCart(data.cart);
// //       } else {
// //         // Fallback for unexpected response format
// //         setCart({
// //           id: data?.id ?? null,
// //           sessionId: data?.sessionId ?? sessionId,
// //           items: data?.items ?? [],
// //           totalItems: data?.totalItems ?? 0,
// //           subtotal: data?.subtotal ?? 0,
// //         });
// //       }
// //     } catch (err) {
// //       console.error("Cart error:", err);
// //       setError(
// //         err.message ||
// //           "Unable to load your cart. Please try again."
// //       );
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [getSessionId]);

// //   // ===================================================
// //   // INITIAL LOAD
// //   // ===================================================

// //   useEffect(() => {
// //     fetchCart();
// //   }, [fetchCart]);

// //   // ===================================================
// //   // UPDATE QUANTITY
// //   // ===================================================

// //   const updateQuantity = useCallback(
// //     async (productId, quantity) => {
// //       if (quantity < 1) return;

// //       try {
// //         setUpdating(true);
// //         setError("");

// //         const sessionId = getSessionId();

// //         // ✅ FIX: Remove duplicate /api
// //         const response = await fetch(
// //           `${API_URL}/cart/${sessionId}/${productId}`,
// //           {
// //             method: "PUT",
// //             headers: {
// //               "Content-Type": "application/json",
// //             },
// //             body: JSON.stringify({ quantity }),
// //           }
// //         );

// //         if (!response.ok) {
// //           const data = await response.json().catch(() => null);
// //           throw new Error(data?.message || "Failed to update cart");
// //         }

// //         await fetchCart();
// //         notifyCartUpdated();
// //       } catch (err) {
// //         console.error("Update cart error:", err);
// //         setError(
// //           err.message ||
// //             "Unable to update cart. Please try again."
// //         );
// //       } finally {
// //         setUpdating(false);
// //       }
// //     },
// //     [fetchCart, getSessionId]
// //   );

// //   // ===================================================
// //   // REMOVE ITEM
// //   // ===================================================

// //   const removeItem = useCallback(
// //     async (productId) => {
// //       try {
// //         setUpdating(true);
// //         setError("");

// //         const sessionId = getSessionId();

// //         // ✅ FIX: Remove duplicate /api
// //         const response = await fetch(
// //           `${API_URL}/cart/${sessionId}/${productId}`,
// //           {
// //             method: "DELETE",
// //           }
// //         );

// //         if (!response.ok) {
// //           const data = await response.json().catch(() => null);
// //           throw new Error(data?.message || "Failed to remove item");
// //         }

// //         await fetchCart();
// //         notifyCartUpdated();
// //       } catch (err) {
// //         console.error("Remove cart error:", err);
// //         setError(
// //           err.message ||
// //             "Unable to remove item. Please try again."
// //         );
// //       } finally {
// //         setUpdating(false);
// //       }
// //     },
// //     [fetchCart, getSessionId]
// //   );

// //   // ===================================================
// //   // CLEAR CART
// //   // ===================================================

// //   const clearCart = useCallback(async () => {
// //     const confirmed = window.confirm(
// //       "Are you sure you want to clear your cart?"
// //     );

// //     if (!confirmed) return;

// //     try {
// //       setUpdating(true);
// //       setError("");

// //       const sessionId = getSessionId();

// //       // ✅ FIX: Remove duplicate /api
// //       const response = await fetch(
// //         `${API_URL}/cart/${sessionId}/clear`,
// //         {
// //           method: "DELETE",
// //         }
// //       );

// //       if (!response.ok) {
// //         const data = await response.json().catch(() => null);
// //         throw new Error(data?.message || "Failed to clear cart");
// //       }

// //       await fetchCart();
// //       notifyCartUpdated();
// //     } catch (err) {
// //       console.error("Clear cart error:", err);
// //       setError(
// //         err.message ||
// //           "Unable to clear cart. Please try again."
// //       );
// //     } finally {
// //       setUpdating(false);
// //     }
// //   }, [fetchCart, getSessionId]);

// //   // ===================================================
// //   // LOADING
// //   // ===================================================

// //   if (loading) {
// //     return (
// //       <PublicLayout>
// //         <main className="cart-page">
// //           <div className="cart-container">
// //             <CartSkeleton />
// //           </div>
// //         </main>
// //       </PublicLayout>
// //     );
// //   }

// //   // ===================================================
// //   // ERROR WITHOUT CART
// //   // ===================================================

// //   if (error && !cart) {
// //     return (
// //       <PublicLayout>
// //         <main className="cart-page">
// //           <div className="cart-container">
// //             <div
// //               className="cart-error"
// //               role="alert"
// //               aria-live="polite"
// //             >
// //               <h2>Something went wrong</h2>
// //               <p>{error}</p>
// //               <button
// //                 className="cart-retry"
// //                 onClick={fetchCart}
// //                 aria-label="Try loading cart again"
// //               >
// //                 Try Again
// //               </button>
// //             </div>
// //           </div>
// //         </main>
// //       </PublicLayout>
// //     );
// //   }

// //   // ===================================================
// //   // SAFE CART DATA
// //   // ===================================================

// //   const items = cart?.items || [];
// //   const isEmpty = items.length === 0;

// //   // ===================================================
// //   // EMPTY CART
// //   // ===================================================

// //   if (isEmpty) {
// //     return (
// //       <PublicLayout>
// //         <main className="cart-page">
// //           <div className="cart-container">
// //             <div className="cart-header">
// //               <span className="cart-eyebrow">YOUR CART</span>
// //               <h1>Your Shopping Cart</h1>
// //               <p>Your cart is currently empty.</p>
// //             </div>
// //             <CartEmpty />
// //           </div>
// //         </main>
// //       </PublicLayout>
// //     );
// //   }

// //   // ===================================================
// //   // CART WITH ITEMS
// //   // ===================================================

// //   return (
// //     <PublicLayout>
// //       <main className="cart-page">
// //         <div className="cart-container">
// //           {/* HEADER */}
// //           <div className="cart-header">
// //             <div>
// //               <span className="cart-eyebrow">YOUR CART</span>
// //               <h1>Your Shopping Cart</h1>
// //               <p>
// //                 {cart.totalItems}{" "}
// //                 {cart.totalItems === 1 ? "item" : "items"} in your cart
// //               </p>
// //             </div>

// //             <button
// //               className="cart-clear"
// //               onClick={clearCart}
// //               disabled={updating}
// //               aria-label="Clear all items from cart"
// //             >
// //               Clear Cart
// //             </button>
// //           </div>

// //           {/* ERROR */}
// //           {error && (
// //             <div
// //               className="cart-inline-error"
// //               role="alert"
// //               aria-live="polite"
// //             >
// //               {error}
// //             </div>
// //           )}

// //           {/* CONTENT */}
// //           <div className="cart-layout">
// //             {/* PRODUCTS */}
// //             <section className="cart-items" aria-label="Cart items">
// //               {items.map((item) => (
// //                 <CartItem
// //                   key={item.id}
// //                   item={item}
// //                   onUpdateQuantity={updateQuantity}
// //                   onRemove={removeItem}
// //                   updating={updating}
// //                 />
// //               ))}
// //             </section>

// //             {/* SUMMARY */}
// //             <CartSummary cart={cart} />
// //           </div>
// //         </div>
// //       </main>
// //     </PublicLayout>
// //   );
// // }

// // export default Cart;


// import { useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom";
// import "./Cart.css";
// import PublicLayout from "../layouts/PublicLayout";

// // ✅ Fix: Remove /api from the base URL
// const API_URL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";

// const SESSION_EXPIRY = 7 * 24 * 60 * 60 * 1000;

// // =====================================================
// // CART UPDATE EVENT
// // =====================================================

// const notifyCartUpdated = () => {
//   window.dispatchEvent(new Event("cartUpdated"));
// };

// // =====================================================
// // CURRENCY
// // =====================================================

// const formatCurrency = (amount) => {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "INR",
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   }).format(Number(amount) || 0);
// };

// // =====================================================
// // CART SKELETON
// // =====================================================

// const CartSkeleton = () => (
//   <div className="cart-skeleton">
//     <div className="skeleton-header">
//       <div className="skeleton-line" style={{ width: "200px" }} />
//       <div className="skeleton-line" style={{ width: "300px" }} />
//     </div>
//     <div className="skeleton-items">
//       {[1, 2, 3].map((i) => (
//         <div key={i} className="skeleton-item">
//           <div className="skeleton-image" />
//           <div className="skeleton-details">
//             <div className="skeleton-line" style={{ width: "80%" }} />
//             <div className="skeleton-line" style={{ width: "60%" }} />
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // =====================================================
// // EMPTY CART
// // =====================================================

// const CartEmpty = () => (
//   <div className="cart-empty">
//     <div className="cart-empty-icon">
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         aria-hidden="true"
//       >
//         <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
//         <circle cx="10" cy="20" r="1.2" />
//         <circle cx="18" cy="20" r="1.2" />
//       </svg>
//     </div>
//     <h2>Your cart is empty</h2>
//     <p>Looks like you haven't added anything to your cart yet.</p>
//     <Link to="/products" className="cart-shop-button">
//       Browse Products
//       <span aria-hidden="true">→</span>
//     </Link>
//   </div>
// );

// // =====================================================
// // CART ITEM
// // =====================================================

// const CartItem = ({ item, onUpdateQuantity, onRemove, updating }) => {
//   const {
//     productId,
//     title,
//     image,
//     price,
//     quantity,
//     discountPercent,
//     discountedPrice,
//     itemTotal,
//   } = item;

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       onUpdateQuantity(productId, quantity - 1);
//     }
//   };

//   const handleIncrease = () => {
//     onUpdateQuantity(productId, quantity + 1);
//   };

//   const imageUrl = image
//     ? image.startsWith("http")
//       ? image
//       : `${API_URL}${image}`
//     : null;

//   return (
//     <article className="cart-item">
//       {/* IMAGE */}
//       <Link
//         to={`/products/${productId}`}
//         className="cart-item-image"
//         aria-label={`View ${title}`}
//       >
//         {imageUrl ? (
//           <img
//             src={imageUrl}
//             alt={title}
//             loading="lazy"
//             onError={(e) => {
//               e.currentTarget.style.display = "none";
//               const placeholder =
//                 e.currentTarget.parentElement?.querySelector(
//                   ".cart-image-placeholder"
//                 );
//               if (placeholder) {
//                 placeholder.style.display = "flex";
//               }
//             }}
//           />
//         ) : null}
//         <div
//           className="cart-image-placeholder"
//           style={{
//             display: imageUrl ? "none" : "flex",
//           }}
//         >
//           No Image
//         </div>
//       </Link>

//       {/* DETAILS */}
//       <div className="cart-item-details">
//         <span className="cart-item-category">Product</span>
//         <Link
//           to={`/products/${productId}`}
//           className="cart-item-title"
//         >
//           {title}
//         </Link>
//         <div className="cart-item-price">
//           {discountPercent > 0 ? (
//             <>
//               <span className="cart-current-price">
//                 {formatCurrency(discountedPrice)}
//               </span>
//               <span className="cart-original-price">
//                 {formatCurrency(price)}
//               </span>
//               <span
//                 className="cart-discount"
//                 aria-label={`${discountPercent}% off`}
//               >
//                 {discountPercent}% OFF
//               </span>
//             </>
//           ) : (
//             <span className="cart-current-price">
//               {formatCurrency(price)}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* ACTIONS */}
//       <div className="cart-item-actions">
//         <div
//           className="cart-quantity"
//           role="group"
//           aria-label="Quantity controls"
//         >
//           <button
//             type="button"
//             onClick={handleDecrease}
//             disabled={updating || quantity <= 1}
//             aria-label="Decrease quantity"
//           >
//             −
//           </button>
//           <span aria-live="polite">{quantity}</span>
//           <button
//             type="button"
//             onClick={handleIncrease}
//             disabled={updating}
//             aria-label="Increase quantity"
//           >
//             +
//           </button>
//         </div>

//         <strong className="cart-item-total">
//           {formatCurrency(itemTotal)}
//         </strong>

//         <button
//           type="button"
//           className="cart-remove"
//           onClick={() => onRemove(productId)}
//           disabled={updating}
//           aria-label={`Remove ${title} from cart`}
//         >
//           Remove
//         </button>
//       </div>
//     </article>
//   );
// };

// // =====================================================
// // CART SUMMARY
// // =====================================================

// const CartSummary = ({ cart, orderDescription, setOrderDescription }) => {
//   const handleDescriptionChange = (e) => {
//     setOrderDescription(e.target.value);
//   };

//   return (
//     <aside className="cart-summary">
//       <div className="cart-summary-card">
//         <h2>Order Summary</h2>

//         <div className="cart-summary-row">
//           <span>Items ({cart.totalItems})</span>
//           <span>{formatCurrency(cart.subtotal)}</span>
//         </div>

//         <div className="cart-summary-row">
//           <span>Delivery</span>
//           <span>Calculated at checkout</span>
//         </div>

//         {/* ORDER DESCRIPTION */}
//         <div className="cart-order-description">
//           <label htmlFor="orderDescription">
//             <span className="order-description-label">ORDER DESCRIPTION</span>
//             <span className="order-description-hint">(Optional)</span>
//           </label>
//           <textarea
//             id="orderDescription"
//             className="order-description-textarea"
//             placeholder="Add any special instructions or notes about your order..."
//             value={orderDescription}
//             onChange={handleDescriptionChange}
//             rows={4}
//             maxLength={500}
//           />
//           <div className="order-description-counter">
//             {orderDescription.length}/500
//           </div>
//         </div>

//         <div className="cart-summary-divider" />

//         <div className="cart-summary-total">
//           <span>Total</span>
//           <strong>{formatCurrency(cart.subtotal)}</strong>
//         </div>

//         <Link
//           to="/checkout"
//           className="cart-checkout-button"
//           aria-label="Proceed to checkout"
//         >
//           Proceed to Checkout
//           <span aria-hidden="true">→</span>
//         </Link>

//         <Link to="/products" className="cart-continue">
//           ← Continue Shopping
//         </Link>
//       </div>
//     </aside>
//   );
// };

// // =====================================================
// // MAIN CART
// // =====================================================

// function Cart() {
//   const [cart, setCart] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);
//   const [error, setError] = useState("");
//   const [orderDescription, setOrderDescription] = useState("");

//   // ===================================================
//   // SESSION
//   // ===================================================

//   const getSessionId = useCallback(() => {
//     let sessionId = localStorage.getItem("cartSessionId");
//     const sessionExpiry = localStorage.getItem("cartSessionExpiry");

//     if (
//       sessionId &&
//       sessionExpiry &&
//       Date.now() > parseInt(sessionExpiry, 10)
//     ) {
//       localStorage.removeItem("cartSessionId");
//       localStorage.removeItem("cartSessionExpiry");
//       sessionId = null;
//     }

//     if (!sessionId) {
//       sessionId = `cart-${crypto.randomUUID()}`;
//       localStorage.setItem("cartSessionId", sessionId);
//       localStorage.setItem(
//         "cartSessionExpiry",
//         String(Date.now() + SESSION_EXPIRY)
//       );
//     }

//     return sessionId;
//   }, []);

//   // ===================================================
//   // FETCH CART
//   // ===================================================

//   const fetchCart = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const sessionId = getSessionId();

//       const response = await fetch(
//         `${API_URL}/cart/${sessionId}`
//       );

//       if (!response.ok) {
//         if (response.status === 404) {
//           setCart({
//             items: [],
//             totalItems: 0,
//             subtotal: 0,
//           });
//           return;
//         }
//         throw new Error("Failed to load cart");
//       }

//       const data = await response.json();

//       if (data && data.success && data.cart) {
//         setCart(data.cart);
//       } else {
//         setCart({
//           id: data?.id ?? null,
//           sessionId: data?.sessionId ?? sessionId,
//           items: data?.items ?? [],
//           totalItems: data?.totalItems ?? 0,
//           subtotal: data?.subtotal ?? 0,
//         });
//       }
//     } catch (err) {
//       console.error("Cart error:", err);
//       setError(
//         err.message ||
//           "Unable to load your cart. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   }, [getSessionId]);

//   // ===================================================
//   // INITIAL LOAD
//   // ===================================================

//   useEffect(() => {
//     fetchCart();
//   }, [fetchCart]);

//   // ===================================================
//   // UPDATE QUANTITY
//   // ===================================================

//   const updateQuantity = useCallback(
//     async (productId, quantity) => {
//       if (quantity < 1) return;

//       try {
//         setUpdating(true);
//         setError("");

//         const sessionId = getSessionId();

//         const response = await fetch(
//           `${API_URL}/cart/${sessionId}/${productId}`,
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ quantity }),
//           }
//         );

//         if (!response.ok) {
//           const data = await response.json().catch(() => null);
//           throw new Error(data?.message || "Failed to update cart");
//         }

//         await fetchCart();
//         notifyCartUpdated();
//       } catch (err) {
//         console.error("Update cart error:", err);
//         setError(
//           err.message ||
//             "Unable to update cart. Please try again."
//         );
//       } finally {
//         setUpdating(false);
//       }
//     },
//     [fetchCart, getSessionId]
//   );

//   // ===================================================
//   // REMOVE ITEM
//   // ===================================================

//   const removeItem = useCallback(
//     async (productId) => {
//       try {
//         setUpdating(true);
//         setError("");

//         const sessionId = getSessionId();

//         const response = await fetch(
//           `${API_URL}/cart/${sessionId}/${productId}`,
//           {
//             method: "DELETE",
//           }
//         );

//         if (!response.ok) {
//           const data = await response.json().catch(() => null);
//           throw new Error(data?.message || "Failed to remove item");
//         }

//         await fetchCart();
//         notifyCartUpdated();
//       } catch (err) {
//         console.error("Remove cart error:", err);
//         setError(
//           err.message ||
//             "Unable to remove item. Please try again."
//         );
//       } finally {
//         setUpdating(false);
//       }
//     },
//     [fetchCart, getSessionId]
//   );

//   // ===================================================
//   // CLEAR CART
//   // ===================================================

//   const clearCart = useCallback(async () => {
//     const confirmed = window.confirm(
//       "Are you sure you want to clear your cart?"
//     );

//     if (!confirmed) return;

//     try {
//       setUpdating(true);
//       setError("");

//       const sessionId = getSessionId();

//       const response = await fetch(
//         `${API_URL}/cart/${sessionId}/clear`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!response.ok) {
//         const data = await response.json().catch(() => null);
//         throw new Error(data?.message || "Failed to clear cart");
//       }

//       await fetchCart();
//       notifyCartUpdated();
//     } catch (err) {
//       console.error("Clear cart error:", err);
//       setError(
//         err.message ||
//           "Unable to clear cart. Please try again."
//       );
//     } finally {
//       setUpdating(false);
//     }
//   }, [fetchCart, getSessionId]);

//   // ===================================================
//   // LOADING
//   // ===================================================

//   if (loading) {
//     return (
//       <PublicLayout>
//         <main className="cart-page">
//           <div className="cart-container">
//             <CartSkeleton />
//           </div>
//         </main>
//       </PublicLayout>
//     );
//   }

//   // ===================================================
//   // ERROR WITHOUT CART
//   // ===================================================

//   if (error && !cart) {
//     return (
//       <PublicLayout>
//         <main className="cart-page">
//           <div className="cart-container">
//             <div
//               className="cart-error"
//               role="alert"
//               aria-live="polite"
//             >
//               <h2>Something went wrong</h2>
//               <p>{error}</p>
//               <button
//                 className="cart-retry"
//                 onClick={fetchCart}
//                 aria-label="Try loading cart again"
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         </main>
//       </PublicLayout>
//     );
//   }

//   // ===================================================
//   // SAFE CART DATA
//   // ===================================================

//   const items = cart?.items || [];
//   const isEmpty = items.length === 0;

//   // ===================================================
//   // EMPTY CART
//   // ===================================================

//   if (isEmpty) {
//     return (
//       <PublicLayout>
//         <main className="cart-page">
//           <div className="cart-container">
//             <div className="cart-header">
//               <span className="cart-eyebrow">YOUR CART</span>
//               <h1>Your Shopping Cart</h1>
//               <p>Your cart is currently empty.</p>
//             </div>
//             <CartEmpty />
//           </div>
//         </main>
//       </PublicLayout>
//     );
//   }

//   // ===================================================
//   // CART WITH ITEMS
//   // ===================================================

//   return (
//     <PublicLayout>
//       <main className="cart-page">
//         <div className="cart-container">
//           {/* HEADER */}
//           <div className="cart-header">
//             <div>
//               <span className="cart-eyebrow">YOUR CART</span>
//               <h1>Your Shopping Cart</h1>
//               <p>
//                 {cart.totalItems}{" "}
//                 {cart.totalItems === 1 ? "item" : "items"} in your cart
//               </p>
//             </div>

//             <button
//               className="cart-clear"
//               onClick={clearCart}
//               disabled={updating}
//               aria-label="Clear all items from cart"
//             >
//               Clear Cart
//             </button>
//           </div>

//           {/* ERROR */}
//           {error && (
//             <div
//               className="cart-inline-error"
//               role="alert"
//               aria-live="polite"
//             >
//               {error}
//             </div>
//           )}

//           {/* CONTENT */}
//           <div className="cart-layout">
//             {/* PRODUCTS */}
//             <section className="cart-items" aria-label="Cart items">
//               {items.map((item) => (
//                 <CartItem
//                   key={item.id}
//                   item={item}
//                   onUpdateQuantity={updateQuantity}
//                   onRemove={removeItem}
//                   updating={updating}
//                 />
//               ))}
//             </section>

//             {/* SUMMARY */}
//             <CartSummary 
//               cart={cart} 
//               orderDescription={orderDescription}
//               setOrderDescription={setOrderDescription}
//             />
//           </div>
//         </div>
//       </main>
//     </PublicLayout>
//   );
// }

// export default Cart;  

// import { useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom";
// import "./Cart.css";
// import PublicLayout from "../layouts/PublicLayout";

// // ✅ Fix: Remove /api from the base URL
// const API_URL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";

// const SESSION_EXPIRY = 7 * 24 * 60 * 60 * 1000;

// // =====================================================
// // CART UPDATE EVENT
// // =====================================================

// const notifyCartUpdated = () => {
//   window.dispatchEvent(new Event("cartUpdated"));
// };

// // =====================================================
// // CURRENCY - Updated to EUR
// // =====================================================

// const formatCurrency = (amount) => {
//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency: "EUR",
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   }).format(Number(amount) || 0);
// };

// // =====================================================
// // CART SKELETON
// // =====================================================

// const CartSkeleton = () => (
//   <div className="cart-skeleton">
//     <div className="skeleton-header">
//       <div className="skeleton-line" style={{ width: "200px" }} />
//       <div className="skeleton-line" style={{ width: "300px" }} />
//     </div>
//     <div className="skeleton-items">
//       {[1, 2, 3].map((i) => (
//         <div key={i} className="skeleton-item">
//           <div className="skeleton-image" />
//           <div className="skeleton-details">
//             <div className="skeleton-line" style={{ width: "80%" }} />
//             <div className="skeleton-line" style={{ width: "60%" }} />
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// // =====================================================
// // EMPTY CART
// // =====================================================

// const CartEmpty = () => (
//   <div className="cart-empty">
//     <div className="cart-empty-icon">
//       <svg
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         aria-hidden="true"
//       >
//         <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
//         <circle cx="10" cy="20" r="1.2" />
//         <circle cx="18" cy="20" r="1.2" />
//       </svg>
//     </div>
//     <h2>Your cart is empty</h2>
//     <p>Looks like you haven't added anything to your cart yet.</p>
//     <Link to="/products" className="cart-shop-button">
//       Browse Products
//       <span aria-hidden="true">→</span>
//     </Link>
//   </div>
// );

// // =====================================================
// // CART ITEM
// // =====================================================

// const CartItem = ({ item, onUpdateQuantity, onRemove, updating }) => {
//   const {
//     productId,
//     title,
//     image,
//     price,
//     quantity,
//     discountPercent,
//     discountedPrice,
//     itemTotal,
//   } = item;

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       onUpdateQuantity(productId, quantity - 1);
//     }
//   };

//   const handleIncrease = () => {
//     onUpdateQuantity(productId, quantity + 1);
//   };

//   const imageUrl = image
//     ? image.startsWith("http")
//       ? image
//       : `${API_URL}${image}`
//     : null;

//   return (
//     <article className="cart-item">
//       {/* IMAGE */}
//       <Link
//         to={`/products/${productId}`}
//         className="cart-item-image"
//         aria-label={`View ${title}`}
//       >
//         {imageUrl ? (
//           <img
//             src={imageUrl}
//             alt={title}
//             loading="lazy"
//             onError={(e) => {
//               e.currentTarget.style.display = "none";
//               const placeholder =
//                 e.currentTarget.parentElement?.querySelector(
//                   ".cart-image-placeholder"
//                 );
//               if (placeholder) {
//                 placeholder.style.display = "flex";
//               }
//             }}
//           />
//         ) : null}
//         <div
//           className="cart-image-placeholder"
//           style={{
//             display: imageUrl ? "none" : "flex",
//           }}
//         >
//           No Image
//         </div>
//       </Link>

//       {/* DETAILS */}
//       <div className="cart-item-details">
//         <span className="cart-item-category">Product</span>
//         <Link
//           to={`/products/${productId}`}
//           className="cart-item-title"
//         >
//           {title}
//         </Link>
//         <div className="cart-item-price">
//           {discountPercent > 0 ? (
//             <>
//               <span className="cart-current-price">
//                 {formatCurrency(discountedPrice)}
//               </span>
//               <span className="cart-original-price">
//                 {formatCurrency(price)}
//               </span>
//               <span
//                 className="cart-discount"
//                 aria-label={`${discountPercent}% off`}
//               >
//                 {discountPercent}% OFF
//               </span>
//             </>
//           ) : (
//             <span className="cart-current-price">
//               {formatCurrency(price)}
//             </span>
//           )}
//         </div>
//       </div>

//       {/* ACTIONS */}
//       <div className="cart-item-actions">
//         <div
//           className="cart-quantity"
//           role="group"
//           aria-label="Quantity controls"
//         >
//           <button
//             type="button"
//             onClick={handleDecrease}
//             disabled={updating || quantity <= 1}
//             aria-label="Decrease quantity"
//           >
//             −
//           </button>
//           <span aria-live="polite">{quantity}</span>
//           <button
//             type="button"
//             onClick={handleIncrease}
//             disabled={updating}
//             aria-label="Increase quantity"
//           >
//             +
//           </button>
//         </div>

//         <strong className="cart-item-total">
//           {formatCurrency(itemTotal)}
//         </strong>

//         <button
//           type="button"
//           className="cart-remove"
//           onClick={() => onRemove(productId)}
//           disabled={updating}
//           aria-label={`Remove ${title} from cart`}
//         >
//           Remove
//         </button>
//       </div>
//     </article>
//   );
// };

// // =====================================================
// // CART SUMMARY
// // =====================================================

// const CartSummary = ({ cart, orderDescription, setOrderDescription }) => {
//   const handleDescriptionChange = (e) => {
//     setOrderDescription(e.target.value);
//   };

//   return (
//     <aside className="cart-summary">
//       <div className="cart-summary-card">
//         <h2>Order Summary</h2>

//         <div className="cart-summary-row">
//           <span>Items ({cart.totalItems})</span>
//           <span>{formatCurrency(cart.subtotal)}</span>
//         </div>

//         <div className="cart-summary-row">
//           <span>Delivery</span>
//           <span>Calculated at checkout</span>
//         </div>

//         {/* ORDER DESCRIPTION */}
//         <div className="cart-order-description">
//           <label htmlFor="orderDescription">
//             <span className="order-description-label">ORDER DESCRIPTION</span>
//             <span className="order-description-hint">(Optional)</span>
//           </label>
//           <textarea
//             id="orderDescription"
//             className="order-description-textarea"
//             placeholder="Add any special instructions or notes about your order..."
//             value={orderDescription}
//             onChange={handleDescriptionChange}
//             rows={4}
//             maxLength={500}
//           />
//           <div className="order-description-counter">
//             {orderDescription.length}/500
//           </div>
//         </div>

//         <div className="cart-summary-divider" />

//         <div className="cart-summary-total">
//           <span>Total</span>
//           <strong>{formatCurrency(cart.subtotal)}</strong>
//         </div>

//         <Link
//           to={{
//             pathname: "/checkout",
//             state: { orderDescription: orderDescription }
//           }}
//           className="cart-checkout-button"
//           aria-label="Proceed to checkout"
//         >
//           Proceed to Checkout
//           <span aria-hidden="true">→</span>
//         </Link>

//         <Link to="/products" className="cart-continue">
//           ← Continue Shopping
//         </Link>
//       </div>
//     </aside>
//   );
// };

// // =====================================================
// // MAIN CART
// // =====================================================

// function Cart() {
//   const [cart, setCart] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);
//   const [error, setError] = useState("");
//   const [orderDescription, setOrderDescription] = useState("");

//   // ===================================================
//   // SESSION
//   // ===================================================

//   const getSessionId = useCallback(() => {
//     let sessionId = localStorage.getItem("cartSessionId");
//     const sessionExpiry = localStorage.getItem("cartSessionExpiry");

//     if (
//       sessionId &&
//       sessionExpiry &&
//       Date.now() > parseInt(sessionExpiry, 10)
//     ) {
//       localStorage.removeItem("cartSessionId");
//       localStorage.removeItem("cartSessionExpiry");
//       sessionId = null;
//     }

//     if (!sessionId) {
//       sessionId = `cart-${crypto.randomUUID()}`;
//       localStorage.setItem("cartSessionId", sessionId);
//       localStorage.setItem(
//         "cartSessionExpiry",
//         String(Date.now() + SESSION_EXPIRY)
//       );
//     }

//     return sessionId;
//   }, []);

//   // ===================================================
//   // FETCH CART
//   // ===================================================

//   const fetchCart = useCallback(async () => {
//     try {
//       setLoading(true);
//       setError("");

//       const sessionId = getSessionId();

//       const response = await fetch(
//         `${API_URL}/cart/${sessionId}`
//       );

//       if (!response.ok) {
//         if (response.status === 404) {
//           setCart({
//             items: [],
//             totalItems: 0,
//             subtotal: 0,
//           });
//           return;
//         }
//         throw new Error("Failed to load cart");
//       }

//       const data = await response.json();

//       if (data && data.success && data.cart) {
//         setCart(data.cart);
//       } else {
//         setCart({
//           id: data?.id ?? null,
//           sessionId: data?.sessionId ?? sessionId,
//           items: data?.items ?? [],
//           totalItems: data?.totalItems ?? 0,
//           subtotal: data?.subtotal ?? 0,
//         });
//       }
//     } catch (err) {
//       console.error("Cart error:", err);
//       setError(
//         err.message ||
//           "Unable to load your cart. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   }, [getSessionId]);

//   // ===================================================
//   // INITIAL LOAD
//   // ===================================================

//   useEffect(() => {
//     fetchCart();
//   }, [fetchCart]);

//   // ===================================================
//   // UPDATE QUANTITY
//   // ===================================================

//   const updateQuantity = useCallback(
//     async (productId, quantity) => {
//       if (quantity < 1) return;

//       try {
//         setUpdating(true);
//         setError("");

//         const sessionId = getSessionId();

//         const response = await fetch(
//           `${API_URL}/cart/${sessionId}/${productId}`,
//           {
//             method: "PUT",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ quantity }),
//           }
//         );

//         if (!response.ok) {
//           const data = await response.json().catch(() => null);
//           throw new Error(data?.message || "Failed to update cart");
//         }

//         await fetchCart();
//         notifyCartUpdated();
//       } catch (err) {
//         console.error("Update cart error:", err);
//         setError(
//           err.message ||
//             "Unable to update cart. Please try again."
//         );
//       } finally {
//         setUpdating(false);
//       }
//     },
//     [fetchCart, getSessionId]
//   );

//   // ===================================================
//   // REMOVE ITEM
//   // ===================================================

//   const removeItem = useCallback(
//     async (productId) => {
//       try {
//         setUpdating(true);
//         setError("");

//         const sessionId = getSessionId();

//         const response = await fetch(
//           `${API_URL}/cart/${sessionId}/${productId}`,
//           {
//             method: "DELETE",
//           }
//         );

//         if (!response.ok) {
//           const data = await response.json().catch(() => null);
//           throw new Error(data?.message || "Failed to remove item");
//         }

//         await fetchCart();
//         notifyCartUpdated();
//       } catch (err) {
//         console.error("Remove cart error:", err);
//         setError(
//           err.message ||
//             "Unable to remove item. Please try again."
//         );
//       } finally {
//         setUpdating(false);
//       }
//     },
//     [fetchCart, getSessionId]
//   );

//   // ===================================================
//   // CLEAR CART
//   // ===================================================

//   const clearCart = useCallback(async () => {
//     const confirmed = window.confirm(
//       "Are you sure you want to clear your cart?"
//     );

//     if (!confirmed) return;

//     try {
//       setUpdating(true);
//       setError("");

//       const sessionId = getSessionId();

//       const response = await fetch(
//         `${API_URL}/cart/${sessionId}/clear`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (!response.ok) {
//         const data = await response.json().catch(() => null);
//         throw new Error(data?.message || "Failed to clear cart");
//       }

//       await fetchCart();
//       notifyCartUpdated();
//     } catch (err) {
//       console.error("Clear cart error:", err);
//       setError(
//         err.message ||
//           "Unable to clear cart. Please try again."
//       );
//     } finally {
//       setUpdating(false);
//     }
//   }, [fetchCart, getSessionId]);

//   // ===================================================
//   // LOADING
//   // ===================================================

//   if (loading) {
//     return (
//       <PublicLayout>
//         <main className="cart-page">
//           <div className="cart-container">
//             <CartSkeleton />
//           </div>
//         </main>
//       </PublicLayout>
//     );
//   }

//   // ===================================================
//   // ERROR WITHOUT CART
//   // ===================================================

//   if (error && !cart) {
//     return (
//       <PublicLayout>
//         <main className="cart-page">
//           <div className="cart-container">
//             <div
//               className="cart-error"
//               role="alert"
//               aria-live="polite"
//             >
//               <h2>Something went wrong</h2>
//               <p>{error}</p>
//               <button
//                 className="cart-retry"
//                 onClick={fetchCart}
//                 aria-label="Try loading cart again"
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         </main>
//       </PublicLayout>
//     );
//   }

//   // ===================================================
//   // SAFE CART DATA
//   // ===================================================

//   const items = cart?.items || [];
//   const isEmpty = items.length === 0;

//   // ===================================================
//   // EMPTY CART
//   // ===================================================

//   if (isEmpty) {
//     return (
//       <PublicLayout>
//         <main className="cart-page">
//           <div className="cart-container">
//             <div className="cart-header">
//               <span className="cart-eyebrow">YOUR CART</span>
//               <h1>Your Shopping Cart</h1>
//               <p>Your cart is currently empty.</p>
//             </div>
//             <CartEmpty />
//           </div>
//         </main>
//       </PublicLayout>
//     );
//   }

//   // ===================================================
//   // CART WITH ITEMS
//   // ===================================================

//   return (
//     <PublicLayout>
//       <main className="cart-page">
//         <div className="cart-container">
//           {/* HEADER */}
//           <div className="cart-header">
//             <div>
//               <span className="cart-eyebrow">YOUR CART</span>
//               <h1>Your Shopping Cart</h1>
//               <p>
//                 {cart.totalItems}{" "}
//                 {cart.totalItems === 1 ? "item" : "items"} in your cart
//               </p>
//             </div>

//             <button
//               className="cart-clear"
//               onClick={clearCart}
//               disabled={updating}
//               aria-label="Clear all items from cart"
//             >
//               Clear Cart
//             </button>
//           </div>

//           {/* ERROR */}
//           {error && (
//             <div
//               className="cart-inline-error"
//               role="alert"
//               aria-live="polite"
//             >
//               {error}
//             </div>
//           )}

//           {/* CONTENT */}
//           <div className="cart-layout">
//             {/* PRODUCTS */}
//             <section className="cart-items" aria-label="Cart items">
//               {items.map((item) => (
//                 <CartItem
//                   key={item.id}
//                   item={item}
//                   onUpdateQuantity={updateQuantity}
//                   onRemove={removeItem}
//                   updating={updating}
//                 />
//               ))}
//             </section>

//             {/* SUMMARY */}
//             <CartSummary 
//               cart={cart} 
//               orderDescription={orderDescription}
//               setOrderDescription={setOrderDescription}
//             />
//           </div>
//         </div>
//       </main>
//     </PublicLayout>
//   );
// }

// export default Cart;

import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import PublicLayout from "../layouts/PublicLayout";

// =====================================================
// API URL
// =====================================================

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const SESSION_EXPIRY = 7 * 24 * 60 * 60 * 1000;

const ORDER_DESCRIPTION_KEY = "a4events_order_description";

// =====================================================
// CART UPDATE EVENT
// =====================================================

const notifyCartUpdated = () => {
  window.dispatchEvent(new Event("cartUpdated"));
};

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
// CART SKELETON
// =====================================================

const CartSkeleton = () => (
  <div className="cart-skeleton">
    <div className="skeleton-header">
      <div className="skeleton-line" style={{ width: "200px" }} />
      <div className="skeleton-line" style={{ width: "300px" }} />
    </div>

    <div className="skeleton-items">
      {[1, 2, 3].map((i) => (
        <div key={i} className="skeleton-item">
          <div className="skeleton-image" />

          <div className="skeleton-details">
            <div
              className="skeleton-line"
              style={{ width: "80%" }}
            />

            <div
              className="skeleton-line"
              style={{ width: "60%" }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// =====================================================
// EMPTY CART
// =====================================================

const CartEmpty = () => (
  <div className="cart-empty">
    <div className="cart-empty-icon">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
        <circle cx="10" cy="20" r="1.2" />
        <circle cx="18" cy="20" r="1.2" />
      </svg>
    </div>

    <h2>Your cart is empty</h2>

    <p>
      Looks like you haven't added anything to your cart yet.
    </p>

    <Link
      to="/products"
      className="cart-shop-button"
    >
      Browse Products
      <span aria-hidden="true">→</span>
    </Link>
  </div>
);

// =====================================================
// CART ITEM
// =====================================================

const CartItem = ({
  item,
  onUpdateQuantity,
  onRemove,
  updating,
}) => {
  const {
    productId,
    title,
    image,
    price,
    quantity,
    discountPercent,
    discountedPrice,
    itemTotal,
  } = item;

  const handleDecrease = () => {
    if (quantity > 1) {
      onUpdateQuantity(productId, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity(productId, quantity + 1);
  };

  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${API_URL}${image}`
    : null;

  return (
    <article className="cart-item">
      {/* IMAGE */}

      <Link
        to={`/products/${productId}`}
        className="cart-item-image"
        aria-label={`View ${title}`}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";

              const placeholder =
                e.currentTarget.parentElement?.querySelector(
                  ".cart-image-placeholder"
                );

              if (placeholder) {
                placeholder.style.display = "flex";
              }
            }}
          />
        ) : null}

        <div
          className="cart-image-placeholder"
          style={{
            display: imageUrl ? "none" : "flex",
          }}
        >
          No Image
        </div>
      </Link>

      {/* DETAILS */}

      <div className="cart-item-details">
        <span className="cart-item-category">
          Product
        </span>

        <Link
          to={`/products/${productId}`}
          className="cart-item-title"
        >
          {title}
        </Link>

        <div className="cart-item-price">
          {discountPercent > 0 ? (
            <>
              <span className="cart-current-price">
                {formatCurrency(discountedPrice)}
              </span>

              <span className="cart-original-price">
                {formatCurrency(price)}
              </span>

              <span
                className="cart-discount"
                aria-label={`${discountPercent}% off`}
              >
                {discountPercent}% OFF
              </span>
            </>
          ) : (
            <span className="cart-current-price">
              {formatCurrency(price)}
            </span>
          )}
        </div>
      </div>

      {/* ACTIONS */}

      <div className="cart-item-actions">
        <div
          className="cart-quantity"
          role="group"
          aria-label="Quantity controls"
        >
          <button
            type="button"
            onClick={handleDecrease}
            disabled={updating || quantity <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span aria-live="polite">
            {quantity}
          </span>

          <button
            type="button"
            onClick={handleIncrease}
            disabled={updating}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <strong className="cart-item-total">
          {formatCurrency(itemTotal)}
        </strong>

        <button
          type="button"
          className="cart-remove"
          onClick={() => onRemove(productId)}
          disabled={updating}
          aria-label={`Remove ${title} from cart`}
        >
          Remove
        </button>
      </div>
    </article>
  );
};

// =====================================================
// CART SUMMARY
// =====================================================

const CartSummary = ({
  cart,
  orderDescription,
  setOrderDescription,
}) => {
  // ===================================================
  // DESCRIPTION CHANGE
  // ===================================================

  const handleDescriptionChange = (e) => {
    const value = e.target.value;

    setOrderDescription(value);

    // Persist description so Checkout can recover it
    try {
      sessionStorage.setItem(
        ORDER_DESCRIPTION_KEY,
        value
      );
    } catch (error) {
      console.warn(
        "Unable to save order description:",
        error
      );
    }
  };

  // ===================================================
  // PROCEED TO CHECKOUT
  // ===================================================

  const handleCheckoutClick = () => {
    try {
      sessionStorage.setItem(
        ORDER_DESCRIPTION_KEY,
        orderDescription || ""
      );
    } catch (error) {
      console.warn(
        "Unable to save order description:",
        error
      );
    }
  };

  return (
    <aside className="cart-summary">
      <div className="cart-summary-card">
        <h2>Order Summary</h2>

        <div className="cart-summary-row">
          <span>
            Items ({cart.totalItems})
          </span>

          <span>
            {formatCurrency(cart.subtotal)}
          </span>
        </div>

        <div className="cart-summary-row">
          <span>Delivery</span>

          <span>
            Calculated at checkout
          </span>
        </div>

        {/* =================================================
            ORDER DESCRIPTION
        ================================================= */}

        <div className="cart-order-description">
          <label htmlFor="orderDescription">
            <span className="order-description-label">
              ORDER DESCRIPTION
            </span>

            <span className="order-description-hint">
              (Optional)
            </span>
          </label>

          <textarea
            id="orderDescription"
            className="order-description-textarea"
            placeholder="Add any special instructions or notes about your order..."
            value={orderDescription}
            onChange={handleDescriptionChange}
            rows={4}
            maxLength={500}
          />

          <div className="order-description-counter">
            {orderDescription.length}/500
          </div>
        </div>

        <div className="cart-summary-divider" />

        <div className="cart-summary-total">
          <span>Total</span>

          <strong>
            {formatCurrency(cart.subtotal)}
          </strong>
        </div>

        <Link
          to={{
            pathname: "/checkout",
            state: {
              orderDescription:
                orderDescription || "",
            },
          }}
          className="cart-checkout-button"
          aria-label="Proceed to checkout"
          onClick={handleCheckoutClick}
        >
          Proceed to Checkout

          <span aria-hidden="true">
            →
          </span>
        </Link>

        <Link
          to="/products"
          className="cart-continue"
        >
          ← Continue Shopping
        </Link>
      </div>
    </aside>
  );
};

// =====================================================
// MAIN CART
// =====================================================

function Cart() {
  const [cart, setCart] = useState(null);

  const [loading, setLoading] = useState(true);

  const [updating, setUpdating] =
    useState(false);

  const [error, setError] = useState("");

  // ===================================================
  // ORDER DESCRIPTION
  // ===================================================

  const [orderDescription, setOrderDescription] =
    useState(() => {
      try {
        return (
          sessionStorage.getItem(
            ORDER_DESCRIPTION_KEY
          ) || ""
        );
      } catch (error) {
        return "";
      }
    });

  // ===================================================
  // SESSION
  // ===================================================

  const getSessionId = useCallback(() => {
    let sessionId =
      localStorage.getItem("cartSessionId");

    const sessionExpiry =
      localStorage.getItem(
        "cartSessionExpiry"
      );

    if (
      sessionId &&
      sessionExpiry &&
      Date.now() >
        parseInt(sessionExpiry, 10)
    ) {
      localStorage.removeItem(
        "cartSessionId"
      );

      localStorage.removeItem(
        "cartSessionExpiry"
      );

      sessionId = null;
    }

    if (!sessionId) {
      sessionId = `cart-${crypto.randomUUID()}`;

      localStorage.setItem(
        "cartSessionId",
        sessionId
      );

      localStorage.setItem(
        "cartSessionExpiry",
        String(
          Date.now() + SESSION_EXPIRY
        )
      );
    }

    return sessionId;
  }, []);

  // ===================================================
  // FETCH CART
  // ===================================================

  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const sessionId =
        getSessionId();

      const response = await fetch(
        `${API_URL}/cart/${sessionId}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          setCart({
            items: [],
            totalItems: 0,
            subtotal: 0,
          });

          return;
        }

        throw new Error(
          "Failed to load cart"
        );
      }

      const data =
        await response.json();

      if (
        data &&
        data.success &&
        data.cart
      ) {
        setCart(data.cart);
      } else {
        setCart({
          id: data?.id ?? null,

          sessionId:
            data?.sessionId ??
            sessionId,

          items:
            data?.items ?? [],

          totalItems:
            data?.totalItems ?? 0,

          subtotal:
            data?.subtotal ?? 0,
        });
      }
    } catch (err) {
      console.error(
        "Cart error:",
        err
      );

      setError(
        err.message ||
          "Unable to load your cart. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, [getSessionId]);

  // ===================================================
  // INITIAL LOAD
  // ===================================================

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  // ===================================================
  // UPDATE QUANTITY
  // ===================================================

  const updateQuantity = useCallback(
    async (
      productId,
      quantity
    ) => {
      if (quantity < 1) return;

      try {
        setUpdating(true);
        setError("");

        const sessionId =
          getSessionId();

        const response = await fetch(
          `${API_URL}/cart/${sessionId}/${productId}`,
          {
            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              quantity,
            }),
          }
        );

        if (!response.ok) {
          const data =
            await response
              .json()
              .catch(
                () => null
              );

          throw new Error(
            data?.message ||
              "Failed to update cart"
          );
        }

        await fetchCart();

        notifyCartUpdated();
      } catch (err) {
        console.error(
          "Update cart error:",
          err
        );

        setError(
          err.message ||
            "Unable to update cart. Please try again."
        );
      } finally {
        setUpdating(false);
      }
    },
    [
      fetchCart,
      getSessionId,
    ]
  );

  // ===================================================
  // REMOVE ITEM
  // ===================================================

  const removeItem = useCallback(
    async (productId) => {
      try {
        setUpdating(true);
        setError("");

        const sessionId =
          getSessionId();

        const response = await fetch(
          `${API_URL}/cart/${sessionId}/${productId}`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          const data =
            await response
              .json()
              .catch(
                () => null
              );

          throw new Error(
            data?.message ||
              "Failed to remove item"
          );
        }

        await fetchCart();

        notifyCartUpdated();
      } catch (err) {
        console.error(
          "Remove cart error:",
          err
        );

        setError(
          err.message ||
            "Unable to remove item. Please try again."
        );
      } finally {
        setUpdating(false);
      }
    },
    [
      fetchCart,
      getSessionId,
    ]
  );

  // ===================================================
  // CLEAR CART
  // ===================================================

  const clearCart = useCallback(
    async () => {
      const confirmed =
        window.confirm(
          "Are you sure you want to clear your cart?"
        );

      if (!confirmed) return;

      try {
        setUpdating(true);
        setError("");

        const sessionId =
          getSessionId();

        const response = await fetch(
          `${API_URL}/cart/${sessionId}/clear`,
          {
            method: "DELETE",
          }
        );

        if (!response.ok) {
          const data =
            await response
              .json()
              .catch(
                () => null
              );

          throw new Error(
            data?.message ||
              "Failed to clear cart"
          );
        }

        await fetchCart();

        notifyCartUpdated();
      } catch (err) {
        console.error(
          "Clear cart error:",
          err
        );

        setError(
          err.message ||
            "Unable to clear cart. Please try again."
        );
      } finally {
        setUpdating(false);
      }
    },
    [
      fetchCart,
      getSessionId,
    ]
  );

  // ===================================================
  // LOADING
  // ===================================================

  if (loading) {
    return (
      <PublicLayout>
        <main className="cart-page">
          <div className="cart-container">
            <CartSkeleton />
          </div>
        </main>
      </PublicLayout>
    );
  }

  // ===================================================
  // ERROR WITHOUT CART
  // ===================================================

  if (error && !cart) {
    return (
      <PublicLayout>
        <main className="cart-page">
          <div className="cart-container">
            <div
              className="cart-error"
              role="alert"
              aria-live="polite"
            >
              <h2>
                Something went wrong
              </h2>

              <p>{error}</p>

              <button
                className="cart-retry"
                onClick={fetchCart}
                aria-label="Try loading cart again"
              >
                Try Again
              </button>
            </div>
          </div>
        </main>
      </PublicLayout>
    );
  }

  // ===================================================
  // SAFE CART DATA
  // ===================================================

  const items =
    cart?.items || [];

  const isEmpty =
    items.length === 0;

  // ===================================================
  // EMPTY CART
  // ===================================================

  if (isEmpty) {
    return (
      <PublicLayout>
        <main className="cart-page">
          <div className="cart-container">
            <div className="cart-header">
              <span className="cart-eyebrow">
                YOUR CART
              </span>

              <h1>
                Your Shopping Cart
              </h1>

              <p>
                Your cart is currently empty.
              </p>
            </div>

            <CartEmpty />
          </div>
        </main>
      </PublicLayout>
    );
  }

  // ===================================================
  // CART WITH ITEMS
  // ===================================================

  return (
    <PublicLayout>
      <main className="cart-page">
        <div className="cart-container">

          {/* HEADER */}

          <div className="cart-header">
            <div>
              <span className="cart-eyebrow">
                YOUR CART
              </span>

              <h1>
                Your Shopping Cart
              </h1>

              <p>
                {cart.totalItems}{" "}
                {cart.totalItems === 1
                  ? "item"
                  : "items"}{" "}
                in your cart
              </p>
            </div>

            <button
              className="cart-clear"
              onClick={clearCart}
              disabled={updating}
              aria-label="Clear all items from cart"
            >
              Clear Cart
            </button>
          </div>

          {/* ERROR */}

          {error && (
            <div
              className="cart-inline-error"
              role="alert"
              aria-live="polite"
            >
              {error}
            </div>
          )}

          {/* CONTENT */}

          <div className="cart-layout">

            {/* PRODUCTS */}

            <section
              className="cart-items"
              aria-label="Cart items"
            >
              {items.map(
                (item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={
                      updateQuantity
                    }
                    onRemove={
                      removeItem
                    }
                    updating={
                      updating
                    }
                  />
                )
              )}
            </section>

            {/* SUMMARY */}

            <CartSummary
              cart={cart}
              orderDescription={
                orderDescription
              }
              setOrderDescription={
                setOrderDescription
              }
            />
          </div>
        </div>
      </main>
    </PublicLayout>
  );
}

export default Cart;