// import { useState } from 'react';
// import api from '../services/api';
// import PublicLayout from '../layouts/PublicLayout';

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post(
//         '/contact',
//         formData
//       );

//       alert('Message Sent');

//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: ''
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <PublicLayout>
//     <div>
//       <h1>Contact Us</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               name: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               email: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           placeholder="Phone"
//           value={formData.phone}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               phone: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           placeholder="Subject"
//           value={formData.subject}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               subject: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <textarea
//           placeholder="Message"
//           value={formData.message}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               message: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <button type="submit">
//           Send Message
//         </button>
//       </form>
//     </div> 
//     </PublicLayout>
//   );
// }

// export default Contact;













import { useState } from "react";
import api from "../services/api";
import PublicLayout from "../layouts/PublicLayout";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/contact", formData);

      alert("Message Sent Successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PublicLayout>

      <section className="a4-contact-page">

        <div className="a4-contact-header">

          <span className="a4-contact-tag">
            GET IN TOUCH
          </span>

          <h1 className="a4-contact-title">
            Let's Create Something Amazing Together
          </h1>

          <p className="a4-contact-description">
            Have a question, need assistance, or want
            to discuss an upcoming event? We'd love to hear from you.
          </p>

        </div>

        <div className="a4-contact-container">

          {/* Contact Info */}

          <div className="a4-contact-info">

            <div className="a4-contact-card">
              <h3>Email</h3>
              <p>info@a4events.com</p>
            </div>

            <div className="a4-contact-card">
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div className="a4-contact-card">
              <h3>Location</h3>
              <p>Pondicherry, India</p>
            </div>

          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="a4-contact-form"
          >

            <div className="a4-contact-grid">

              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

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

            </div>

            <div className="a4-contact-grid">

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
              />

              <input
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subject: e.target.value,
                  })
                }
              />

            </div>

            <textarea
              rows="6"
              placeholder="Tell us about your requirement..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
            />

            <button
              type="submit"
              className="a4-contact-btn"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    </PublicLayout>
  );
}

export default Contact;