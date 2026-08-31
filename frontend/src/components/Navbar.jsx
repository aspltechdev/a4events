
// // import { Link } from "react-router-dom";
// // import logo from "../assets/logo.jpeg";
// // import "./Navbar.css";

// // function Navbar() {
// //   return (
// //     <header className="navbar">
// //       <div className="navbar-container">

// //         <Link to="/" className="logo">
// //           <img
// //             src={logo}
// //             alt="A4 Events Logo"
// //             className="logo-image"
// //           />
// //         </Link>

// //         <nav className="nav-links">
// //           <Link to="/">Home</Link>
// //           <Link to="/events">Events</Link>
// //           <Link to="/products">Products</Link>
// //           <Link to="/contact">Contact</Link>
// //         </nav>

// //         <div className="nav-actions">
// //           <Link
// //             to="/contact"
// //             className="nav-cta"
// //           >
// //             Contact Us
// //           </Link>
// //         </div>

// //       </div>
// //     </header>
// //   );
// // }

// // export default Navbar;


// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/logo11.png";
// import "./Navbar.css";

// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsMobileOpen(false);
//   }, [location]);

//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/events", label: "Events" },
//     { path: "/products", label: "Products" },
//     { path: "/education", label: "Education" },
//      { path: "/business", label: "Business" },
//     { path: "/contact", label: "Contact" },
       
//   ];

//   return (
//     <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
//       <div className="navbar-container">
//         {/* Logo */}
//         <Link to="/" className="navbar-logo">
//           <img
//             src={logo}
//             alt="A4A Anagrams Group"
//             className="navbar-logo-image"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="navbar-links">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`navbar-link ${
//                 location.pathname === link.path ? "navbar-link-active" : ""
//               }`}
//             >
//               <span>{link.label}</span>
//               <div className="navbar-link-underline" />
//             </Link>
//           ))}
//         </nav>

//         {/* CTA Button */}
//         <div className="navbar-actions">
//           <Link to="/contact" className="navbar-cta">
//             <span>Contact Us</span>
//             <span className="navbar-cta-arrow">→</span>
//             <div className="navbar-cta-shimmer" aria-hidden="true" />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className={`navbar-mobile-btn ${isMobileOpen ? "navbar-mobile-open" : ""}`}
//           onClick={() => setIsMobileOpen(!isMobileOpen)}
//           aria-label="Toggle navigation menu"
//           aria-expanded={isMobileOpen}
//         >
//           <span className="navbar-mobile-line" />
//           <span className="navbar-mobile-line" />
//           <span className="navbar-mobile-line" />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`navbar-mobile-menu ${isMobileOpen ? "navbar-mobile-visible" : ""}`}>
//         <div className="navbar-mobile-backdrop" onClick={() => setIsMobileOpen(false)} />
//         <div className="navbar-mobile-content">
//           <nav className="navbar-mobile-links">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`navbar-mobile-link ${
//                   location.pathname === link.path ? "navbar-mobile-link-active" : ""
//                 }`}
//               >
//                 <span className="navbar-mobile-dot" />
//                 {link.label}
//               </Link>
//             ))}
//           </nav>
//           <Link
//             to="/contact"
//             className="navbar-mobile-cta"
//             onClick={() => setIsMobileOpen(false)}
//           >
//             <span>Contact Us</span>
//             <span className="navbar-cta-arrow">→</span>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;



// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/logo11.png";
// import "./Navbar.css";

// function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   // Cart count
//   const [cartCount, setCartCount] = useState(0);

//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     setIsMobileOpen(false);
//   }, [location]);

//   // Generate / get cart session
//   useEffect(() => {
//     let sessionId = localStorage.getItem("cartSessionId");

//     if (!sessionId) {
//       sessionId =
//         "cart-" +
//         Date.now() +
//         "-" +
//         Math.random().toString(36).substring(2, 10);

//       localStorage.setItem("cartSessionId", sessionId);
//     }

//     fetchCart(sessionId);

//     // Listen for cart updates from other components
//     const handleCartUpdate = () => {
//       const currentSessionId =
//         localStorage.getItem("cartSessionId");

//       if (currentSessionId) {
//         fetchCart(currentSessionId);
//       }
//     };

//     window.addEventListener("cartUpdated", handleCartUpdate);

//     return () => {
//       window.removeEventListener(
//         "cartUpdated",
//         handleCartUpdate
//       );
//     };
//   }, []);

//   const fetchCart = async (sessionId) => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/api/cart/${sessionId}`
//       );

//       if (!response.ok) {
//         return;
//       }

//       const data = await response.json();

//       setCartCount(data.totalItems || 0);
//     } catch (error) {
//       console.error("Failed to load cart:", error);
//     }
//   };

//   const navLinks = [
//     { path: "/", label: "Home" },
//     { path: "/events", label: "Events" },
//     { path: "/products", label: "Products" },
//     { path: "/education", label: "Education" },
//     { path: "/business", label: "Business" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <header
//       className={`navbar ${
//         isScrolled ? "navbar-scrolled" : ""
//       }`}
//     >
//       <div className="navbar-container">

//         {/* Logo */}
//         <Link to="/" className="navbar-logo">
//           <img
//             src={logo}
//             alt="A4A Anagrams Group"
//             className="navbar-logo-image"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="navbar-links">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`navbar-link ${
//                 location.pathname === link.path
//                   ? "navbar-link-active"
//                   : ""
//               }`}
//             >
//               <span>{link.label}</span>
//               <div className="navbar-link-underline" />
//             </Link>
//           ))}
//         </nav>

//         {/* Right Actions */}
//         <div className="navbar-actions">

//           {/* Cart */}
//           <Link
//             to="/cart"
//             className={`navbar-cart ${
//               location.pathname === "/cart"
//                 ? "navbar-cart-active"
//                 : ""
//             }`}
//             aria-label={`Cart with ${cartCount} items`}
//           >
//             <span className="navbar-cart-icon">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 aria-hidden="true"
//               >
//                 <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
//                 <circle cx="10" cy="20" r="1.2" />
//                 <circle cx="18" cy="20" r="1.2" />
//               </svg>

//               {cartCount > 0 && (
//                 <span className="navbar-cart-count">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </span>

//             <span className="navbar-cart-label">
//               Cart
//             </span>
//           </Link>

//           {/* CTA */}
//           <Link to="/contact" className="navbar-cta">
//             <span>Contact Us</span>
//             <span className="navbar-cta-arrow">→</span>
//             <div
//               className="navbar-cta-shimmer"
//               aria-hidden="true"
//             />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className={`navbar-mobile-btn ${
//             isMobileOpen
//               ? "navbar-mobile-open"
//               : ""
//           }`}
//           onClick={() =>
//             setIsMobileOpen(!isMobileOpen)
//           }
//           aria-label="Toggle navigation menu"
//           aria-expanded={isMobileOpen}
//         >
//           <span className="navbar-mobile-line" />
//           <span className="navbar-mobile-line" />
//           <span className="navbar-mobile-line" />
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`navbar-mobile-menu ${
//           isMobileOpen
//             ? "navbar-mobile-visible"
//             : ""
//         }`}
//       >
//         <div
//           className="navbar-mobile-backdrop"
//           onClick={() =>
//             setIsMobileOpen(false)
//           }
//         />

//         <div className="navbar-mobile-content">

//           <nav className="navbar-mobile-links">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`navbar-mobile-link ${
//                   location.pathname === link.path
//                     ? "navbar-mobile-link-active"
//                     : ""
//                 }`}
//               >
//                 <span className="navbar-mobile-dot" />
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Cart */}
//           <Link
//             to="/cart"
//             className="navbar-mobile-cart"
//             onClick={() =>
//               setIsMobileOpen(false)
//             }
//           >
//             <span className="navbar-mobile-cart-icon">
//               <svg
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 aria-hidden="true"
//               >
//                 <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" />
//                 <circle cx="10" cy="20" r="1.2" />
//                 <circle cx="18" cy="20" r="1.2" />
//               </svg>

//               {cartCount > 0 && (
//                 <span className="navbar-mobile-cart-count">
//                   {cartCount > 99 ? "99+" : cartCount}
//                 </span>
//               )}
//             </span>

//             <span>Cart</span>
//           </Link>

//           {/* Mobile CTA */}
//           <Link
//             to="/contact"
//             className="navbar-mobile-cta"
//             onClick={() =>
//               setIsMobileOpen(false)
//             }
//           >
//             <span>Contact Us</span>
//             <span className="navbar-cta-arrow">
//               →
//             </span>
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;



import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo11.png";
import "./Navbar.css";

// =====================================================
// API CONFIG
// =====================================================

const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000/api";


// =====================================================
// GET / CREATE CART SESSION
// =====================================================

const getCartSessionId = () => {
  let sessionId = localStorage.getItem("cartSessionId");

  if (!sessionId) {
    sessionId =
      "cart-" +
      Date.now() +
      "-" +
      Math.random().toString(36).substring(2, 10);

    localStorage.setItem(
      "cartSessionId",
      sessionId
    );
  }

  return sessionId;
};


function Navbar() {

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isMobileOpen, setIsMobileOpen] =
    useState(false);

  const [cartCount, setCartCount] =
    useState(0);

  const location =
    useLocation();


  // =====================================================
  // FETCH CART COUNT
  // =====================================================

  const fetchCart = useCallback(
    async (sessionId) => {

      try {

        if (!sessionId) {
          setCartCount(0);
          return;
        }


        const response = await fetch(
          `${API_URL}/cart/${encodeURIComponent(
            sessionId
          )}`
        );


        if (!response.ok) {

          console.error(
            "Cart API failed:",
            response.status,
            response.statusText
          );

          return;
        }


        const data =
          await response.json();


        console.log(
          "NAVBAR CART RESPONSE:",
          data
        );


        // =================================================
        // YOUR ACTUAL API RESPONSE:
        //
        // {
        //   success: true,
        //   cart: {...},
        //   subtotal: 99,
        //   totalItems: 4
        // }
        // =================================================

        const totalItems =
          Number(
            data?.totalItems ??
            data?.cart?.totalItems ??
            0
          );


        setCartCount(
          Number.isFinite(totalItems)
            ? totalItems
            : 0
        );


      } catch (error) {

        console.error(
          "Failed to load cart:",
          error
        );

      }

    },
    []
  );


  // =====================================================
  // SCROLL
  // =====================================================

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(
        window.scrollY > 20
      );

    };


    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  // =====================================================
  // CLOSE MOBILE MENU
  // =====================================================

  useEffect(() => {

    setIsMobileOpen(false);

  }, [location]);


  // =====================================================
  // INITIAL CART LOAD
  // =====================================================

  useEffect(() => {

    const sessionId =
      getCartSessionId();


    fetchCart(sessionId);


    // =================================================
    // CART UPDATE EVENT
    // =================================================

    const handleCartUpdate = () => {

      const currentSessionId =
        localStorage.getItem(
          "cartSessionId"
        );


      if (currentSessionId) {

        fetchCart(
          currentSessionId
        );

      }

    };


    window.addEventListener(
      "cartUpdated",
      handleCartUpdate
    );


    // =================================================
    // STORAGE EVENT
    // Useful if another browser tab changes cart
    // =================================================

    const handleStorage = (event) => {

      if (
        event.key ===
        "cartSessionId"
      ) {

        const currentSessionId =
          event.newValue;


        if (currentSessionId) {

          fetchCart(
            currentSessionId
          );

        }

      }

    };


    window.addEventListener(
      "storage",
      handleStorage
    );


    return () => {

      window.removeEventListener(
        "cartUpdated",
        handleCartUpdate
      );

      window.removeEventListener(
        "storage",
        handleStorage
      );

    };

  }, [fetchCart]);


  // =====================================================
  // REFRESH CART WHEN PAGE / ROUTE CHANGES
  // =====================================================

  useEffect(() => {

    const sessionId =
      localStorage.getItem(
        "cartSessionId"
      );


    if (sessionId) {

      fetchCart(
        sessionId
      );

    }

  }, [
    location.pathname,
    fetchCart
  ]);


  // =====================================================
  // NAV LINKS
  // =====================================================

  const navLinks = [

    {
      path: "/",
      label: "Home",
    },

    {
      path: "/events",
      label: "Events",
    },

    {
      path: "/products",
      label: "Products",
    },

    {
      path: "/education",
      label: "Education",
    },

    {
      path: "/business",
      label: "Business",
    },

    {
      path: "/contact",
      label: "Contact",
    },

  ];


  // =====================================================
  // RENDER
  // =====================================================

  return (

    <header
      className={`navbar ${
        isScrolled
          ? "navbar-scrolled"
          : ""
      }`}
    >

      <div className="navbar-container">


        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="navbar-logo"
        >

          <img
            src={logo}
            alt="A4A Anagrams Group"
            className="navbar-logo-image"
          />

        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav className="navbar-links">

          {navLinks.map(
            (link) => (

              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${
                  location.pathname ===
                  link.path
                    ? "navbar-link-active"
                    : ""
                }`}
              >

                <span>
                  {link.label}
                </span>

                <div
                  className="navbar-link-underline"
                />

              </Link>

            )
          )}

        </nav>


        {/* =================================================
            RIGHT ACTIONS
        ================================================= */}

        <div className="navbar-actions">


          {/* =================================================
              CART
          ================================================= */}

          <Link
            to="/cart"
            className={`navbar-cart ${
              location.pathname === "/cart"
                ? "navbar-cart-active"
                : ""
            }`}
            aria-label={`Cart with ${cartCount} items`}
          >

            <span className="navbar-cart-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >

                <path
                  d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                />

                <circle
                  cx="10"
                  cy="20"
                  r="1.2"
                />

                <circle
                  cx="18"
                  cy="20"
                  r="1.2"
                />

              </svg>


              {/* =================================================
                  CART COUNT
              ================================================= */}

              {cartCount > 0 && (

                <span className="navbar-cart-count">

                  {cartCount > 99
                    ? "99+"
                    : cartCount}

                </span>

              )}

            </span>


            <span className="navbar-cart-label">
              Cart
            </span>

          </Link>


          {/* =================================================
              CONTACT CTA
          ================================================= */}

          <Link
            to="/contact"
            className="navbar-cta"
          >

            <span>
              Contact Us
            </span>

            <span className="navbar-cta-arrow">
              →
            </span>

            <div
              className="navbar-cta-shimmer"
              aria-hidden="true"
            />

          </Link>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className={`navbar-mobile-btn ${
            isMobileOpen
              ? "navbar-mobile-open"
              : ""
          }`}
          onClick={() =>
            setIsMobileOpen(
              !isMobileOpen
            )
          }
          aria-label="Toggle navigation menu"
          aria-expanded={
            isMobileOpen
          }
        >

          <span className="navbar-mobile-line" />
          <span className="navbar-mobile-line" />
          <span className="navbar-mobile-line" />

        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`navbar-mobile-menu ${
          isMobileOpen
            ? "navbar-mobile-visible"
            : ""
        }`}
      >

        <div
          className="navbar-mobile-backdrop"
          onClick={() =>
            setIsMobileOpen(false)
          }
        />


        <div className="navbar-mobile-content">


          {/* =================================================
              MOBILE LINKS
          ================================================= */}

          <nav className="navbar-mobile-links">

            {navLinks.map(
              (link) => (

                <Link
                  key={link.path}
                  to={link.path}
                  className={`navbar-mobile-link ${
                    location.pathname ===
                    link.path
                      ? "navbar-mobile-link-active"
                      : ""
                  }`}
                >

                  <span className="navbar-mobile-dot" />

                  {link.label}

                </Link>

              )
            )}

          </nav>


          {/* =================================================
              MOBILE CART
          ================================================= */}

          <Link
            to="/cart"
            className="navbar-mobile-cart"
            onClick={() =>
              setIsMobileOpen(false)
            }
          >

            <span className="navbar-mobile-cart-icon">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >

                <path
                  d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                />

                <circle
                  cx="10"
                  cy="20"
                  r="1.2"
                />

                <circle
                  cx="18"
                  cy="20"
                  r="1.2"
                />

              </svg>


              {cartCount > 0 && (

                <span className="navbar-mobile-cart-count">

                  {cartCount > 99
                    ? "99+"
                    : cartCount}

                </span>

              )}

            </span>


            <span>
              Cart
            </span>

          </Link>


          {/* =================================================
              MOBILE CTA
          ================================================= */}

          <Link
            to="/contact"
            className="navbar-mobile-cta"
            onClick={() =>
              setIsMobileOpen(false)
            }
          >

            <span>
              Contact Us
            </span>

            <span className="navbar-cta-arrow">
              →
            </span>

          </Link>

        </div>

      </div>

    </header>

  );

}


export default Navbar;