// import { useState } from 'react';
// import api from '../services/api';

// function InquiryForm({ productId, eventId }) {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post('/inquiries', {
//         ...formData,
//         productId,
//         eventId
//       });

//       alert('Inquiry Submitted');

//       setFormData({
//         name: '',
//         phone: '',
//         email: '',
//         message: ''
//       });

//     } catch (error) {
//       console.error(error);
//       alert('Failed to submit inquiry');
//     }
//   };

//   return (
//     <div style={{ marginTop: '30px' }}>
//       <h2>
//         {eventId ? 'Book This Event' : 'Product Inquiry'}
//       </h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               name: e.target.value
//             })
//           }
//           required
//         />

//         <br />
//         <br />

//         <input
//           type="text"
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               phone: e.target.value
//             })
//           }
//           required
//         />

//         <br />
//         <br />

//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               email: e.target.value
//             })
//           }
//         />

//         <br />
//         <br />

//         <textarea
//           placeholder="Message"
//           value={formData.message}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               message: e.target.value
//             })
//           }
//           required
//         />

//         <br />
//         <br />

//         <button type="submit">
//           Submit Inquiry
//         </button>
//       </form>
//     </div>
//   );
// }

// export default InquiryForm;


import { useState } from "react";
import api from "../services/api";
import "./InquiryForm.css";

function InquiryForm({ productId, eventId }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/inquiries", {
        ...formData,
        productId,
        eventId,
      });

      alert("Inquiry Submitted Successfully");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to submit inquiry");
    }
  };

  return (
    <div className="a4-inquiry-card">

      <div className="a4-inquiry-header">

        <span className="a4-inquiry-tag">
          {eventId ? "EVENT BOOKING" : "PRODUCT INQUIRY"}
        </span>

        <h2 className="a4-inquiry-title">
          {eventId
            ? "Reserve Your Spot"
            : "Send An Inquiry"}
        </h2>

        <p className="a4-inquiry-description">
          Fill in your details and our team
          will get back to you shortly.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="a4-inquiry-form"
      >

        <div className="a4-inquiry-grid">

          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value,
              })
            }
            required
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
            required
          />

        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <textarea
          rows="5"
          placeholder={
            eventId
              ? "Tell us about your booking requirements..."
              : "Tell us what you're looking for..."
          }
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value,
            })
          }
          required
        />

        <button
          type="submit"
          className="a4-inquiry-btn"
        >
          {eventId
            ? "Book Event"
            : "Submit Inquiry"}
        </button>

      </form>

    </div>
  );
}

export default InquiryForm;