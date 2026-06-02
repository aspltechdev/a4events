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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    }
  };

  return (
    <div className="a4-login-page">

      <div className="a4-login-card">

        <div className="a4-login-header">

          <h1 className="a4-login-title">
            Welcome Back
          </h1>

          <p className="a4-login-subtitle">
            Sign in to access the
            admin dashboard.
          </p>

        </div>

        {error && (
          <div className="a4-login-error">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="a4-login-form"
        >

          <div className="a4-login-field">

            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="admin@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="a4-login-field">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />

          </div>

          <button
            type="submit"
            className="a4-login-btn"
          >
            Sign In
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;