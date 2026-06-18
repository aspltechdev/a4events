// function Login() {
//   return <h1>Login</h1>;
// }

// export default Login;







// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import api from '../services/api';

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await api.post('/auth/login', {
//         email: formData.email,
//         password: formData.password
//       });

//       localStorage.setItem('token', data.token);

//       navigate('/dashboard');

//     } catch (err) {
//       setError('Invalid email or password');
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '50px auto' }}>
//       <h1>Admin Login</h1>

//       {error && (
//         <p style={{ color: 'red' }}>
//           {error}
//         </p>
//       )}

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <br />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <br />

//         <div>
//           <label>Password</label>
//           <br />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <br />

//         <button type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import "./Login.css";

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const { data } = await api.post(
//         "/auth/login",
//         {
//           email: formData.email,
//           password: formData.password,
//         }
//       );

//       localStorage.setItem(
//         "token",
//         data.token
//       );

//       navigate("/dashboard");

//     } catch (err) {
//       setError(
//         "Invalid email or password"
//       );
//     }
//   };

//   return (
//     <div className="a4-login-page">

//       <div className="a4-login-card">

//         <div className="a4-login-header">

//           <h1 className="a4-login-title">
//             Welcome Back
//           </h1>

//           <p className="a4-login-subtitle">
//             Sign in to access the
//             admin dashboard.
//           </p>

//         </div>

//         {error && (
//           <div className="a4-login-error">
//             {error}
//           </div>
//         )}

//         <form
//           onSubmit={handleSubmit}
//           className="a4-login-form"
//         >

//           <div className="a4-login-field">

//             <label>Email Address</label>

//             <input
//               type="email"
//               name="email"
//               placeholder="admin@example.com"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />

//           </div>

//           <div className="a4-login-field">

//             <label>Password</label>

//             <input
//               type="password"
//               name="password"
//               placeholder="••••••••"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />

//           </div>

//           <button
//             type="submit"
//             className="a4-login-btn"
//           >
//             Sign In
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default Login;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { data } = await api.post(
        "/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem(
        "token",
        data.token
      );

      navigate("/dashboard");

    } catch (err) {
      setError(
        "Invalid email or password"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="a4-login-page">
      {/* Background Elements */}
      <div className="a4-login-bg">
        <div className="a4-login-bg-orb a4-login-bg-orb-1"></div>
        <div className="a4-login-bg-orb a4-login-bg-orb-2"></div>
        <div className="a4-login-bg-orb a4-login-bg-orb-3"></div>
      </div>

      <div className="a4-login-container">
        <div className="a4-login-card">
          {/* Logo/Brand */}
          <div className="a4-login-brand">
            <div className="a4-login-brand-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L17.5 10L26 11L19.5 17L21 26L14 21.5L7 26L8.5 17L2 11L10.5 10L14 2Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="a4-login-brand-text">A4A Groups</span>
          </div>

          {/* Header */}
          <div className="a4-login-header">
            <h1 className="a4-login-title">
              Welcome Back
            </h1>
            <p className="a4-login-subtitle">
              Sign in to access the admin dashboard.
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="a4-login-error">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M9 5v4M9 12.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="a4-login-form">
            <div className="a4-login-field">
              <label>Email Address</label>
              <div className="a4-login-input-wrapper">
                <svg className="a4-login-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 5h12a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M1 7l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="email"
                  name="email"
                  placeholder="admin@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="a4-login-field">
              <label>Password</label>
              <div className="a4-login-input-wrapper">
                <svg className="a4-login-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="3" y="8" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M6 8V5a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  <circle cx="9" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="a4-login-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2 9s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.3"/>
                      <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2 9s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5z" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M3 3l12 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={`a4-login-btn ${isLoading ? 'a4-login-btn-loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="a4-login-btn-spinner"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;