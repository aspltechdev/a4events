// // import { useState } from 'react';
// // import api from '../services/api';
// // import PublicLayout from '../layouts/PublicLayout';

// // function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     phone: '',
// //     subject: '',
// //     message: ''
// //   });

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       await api.post(
// //         '/contact',
// //         formData
// //       );

// //       alert('Message Sent');

// //       setFormData({
// //         name: '',
// //         email: '',
// //         phone: '',
// //         subject: '',
// //         message: ''
// //       });

// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <PublicLayout>
// //     <div>
// //       <h1>Contact Us</h1>

// //       <form onSubmit={handleSubmit}>
// //         <input
// //           placeholder="Name"
// //           value={formData.name}
// //           onChange={(e) =>
// //             setFormData({
// //               ...formData,
// //               name: e.target.value
// //             })
// //           }
// //         />

// //         <br /><br />

// //         <input
// //           placeholder="Email"
// //           value={formData.email}
// //           onChange={(e) =>
// //             setFormData({
// //               ...formData,
// //               email: e.target.value
// //             })
// //           }
// //         />

// //         <br /><br />

// //         <input
// //           placeholder="Phone"
// //           value={formData.phone}
// //           onChange={(e) =>
// //             setFormData({
// //               ...formData,
// //               phone: e.target.value
// //             })
// //           }
// //         />

// //         <br /><br />

// //         <input
// //           placeholder="Subject"
// //           value={formData.subject}
// //           onChange={(e) =>
// //             setFormData({
// //               ...formData,
// //               subject: e.target.value
// //             })
// //           }
// //         />

// //         <br /><br />

// //         <textarea
// //           placeholder="Message"
// //           value={formData.message}
// //           onChange={(e) =>
// //             setFormData({
// //               ...formData,
// //               message: e.target.value
// //             })
// //           }
// //         />

// //         <br /><br />

// //         <button type="submit">
// //           Send Message
// //         </button>
// //       </form>
// //     </div> 
// //     </PublicLayout>
// //   );
// // }

// // export default Contact;













// import { useState } from "react";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Contact.css";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post("/contact", formData);

//       alert("Message Sent Successfully");

//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <PublicLayout>

//       <section className="a4-contact-page">

//         <div className="a4-contact-header">

//           <span className="a4-contact-tag">
//             GET IN TOUCH
//           </span>

//           <h1 className="a4-contact-title">
//             Let's Create Something Amazing Together
//           </h1>

//           <p className="a4-contact-description">
//             Have a question, need assistance, or want
//             to discuss an upcoming event? We'd love to hear from you.
//           </p>

//         </div>

//         <div className="a4-contact-container">

//           {/* Contact Info */}

//           <div className="a4-contact-info">

//             <div className="a4-contact-card">
//               <h3>Email</h3>
//               <p>info@a4events.com</p>
//             </div>

//             <div className="a4-contact-card">
//               <h3>Phone</h3>
//               <p>+91 98765 43210</p>
//             </div>

//             <div className="a4-contact-card">
//               <h3>Location</h3>
//               <p>Pondicherry, India</p>
//             </div>

//           </div>

//           {/* Form */}

//           <form
//             onSubmit={handleSubmit}
//             className="a4-contact-form"
//           >

//             <div className="a4-contact-grid">

//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     name: e.target.value,
//                   })
//                 }
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     email: e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-contact-grid">

//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     phone: e.target.value,
//                   })
//                 }
//               />

//               <input
//                 type="text"
//                 placeholder="Subject"
//                 value={formData.subject}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     subject: e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <textarea
//               rows="6"
//               placeholder="Tell us about your requirement..."
//               value={formData.message}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   message: e.target.value,
//                 })
//               }
//             />

//             <button
//               type="submit"
//               className="a4-contact-btn"
//             >
//               Send Message
//             </button>

//           </form>

//         </div>

//       </section>

//     </PublicLayout>
//   );
// }

// export default Contact;

// import { useState } from "react";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Contact.css";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       await api.post("/contact", formData);
      
//       setSubmitStatus("success");
//       setFormData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: "",
//       });

//       setTimeout(() => setSubmitStatus(null), 3000);
//     } catch (error) {
//       console.error(error);
//       setSubmitStatus("error");
//       setTimeout(() => setSubmitStatus(null), 3000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <PublicLayout>
//       <section className="a4-contact-page">
//         {/* Background Elements */}
//         <div className="a4-contact-bg"></div>
//         <div className="a4-contact-bg-accent"></div>

//         <div className="a4-contact-container-main">
//           {/* Header */}
//           <div className="a4-contact-header">
//             <div className="a4-contact-badge">
//               <span className="a4-contact-badge-line"></span>
//               <span className="a4-contact-tag">GET IN TOUCH</span>
//             </div>

//             <h1 className="a4-contact-title">
//               Let's Create Something
//               <br />
//               <span className="a4-contact-title-accent">Amazing Together</span>
//             </h1>

//             <p className="a4-contact-description">
//               Have a question, need assistance, or want
//               to discuss an upcoming event? We'd love to hear from you.
//             </p>
//           </div>

//           <div className="a4-contact-content">
//             {/* Contact Info Cards */}
//             <div className="a4-contact-info">
//               <div className="a4-contact-card">
//                 <div className="a4-contact-card-icon">
//                   <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//                     <path d="M3 5h16a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5"/>
//                     <path d="M1 7l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <div className="a4-contact-card-content">
//                   <h3>Email</h3>
//                   <p>info@a4events.com</p>
//                 </div>
//               </div>

//               <div className="a4-contact-card">
//                 <div className="a4-contact-card-icon">
//                   <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//                     <path d="M16 14l-3-3m0 0a7 7 0 10-10 0 7 7 0 0010 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                     <path d="M13 11l3 3m0 0l3 3-3-3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </div>
//                 <div className="a4-contact-card-content">
//                   <h3>Phone</h3>
//                   <p>+91 98765 43210</p>
//                 </div>
//               </div>

//               <div className="a4-contact-card">
//                 <div className="a4-contact-card-icon">
//                   <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//                     <path d="M11 2C8.24 2 6 4.24 6 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5"/>
//                     <circle cx="11" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
//                   </svg>
//                 </div>
//                 <div className="a4-contact-card-content">
//                   <h3>Location</h3>
//                   <p>Germany</p>
//                 </div>
//               </div>
//             </div>

//             {/* Form */}
//             <form onSubmit={handleSubmit} className="a4-contact-form">
//               <div className="a4-contact-grid">
//                 <div className="a4-contact-input-wrapper">
//                   <svg className="a4-contact-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <circle cx="9" cy="6" r="4" stroke="currentColor" strokeWidth="1.3"/>
//                     <path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
//                   </svg>
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     required
//                   />
//                 </div>

//                 <div className="a4-contact-input-wrapper">
//                   <svg className="a4-contact-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <path d="M3 5h12a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.3"/>
//                     <path d="M1 7l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                   <input
//                     type="email"
//                     placeholder="Email Address"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="a4-contact-grid">
//                 <div className="a4-contact-input-wrapper">
//                   <svg className="a4-contact-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <path d="M5 2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.3"/>
//                     <path d="M7 14h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
//                   </svg>
//                   <input
//                     type="text"
//                     placeholder="Phone Number"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                   />
//                 </div>

//                 <div className="a4-contact-input-wrapper">
//                   <svg className="a4-contact-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3"/>
//                     <path d="M9 5v4l2.5 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                   <input
//                     type="text"
//                     placeholder="Subject"
//                     value={formData.subject}
//                     onChange={(e) =>
//                       setFormData({ ...formData, subject: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               <div className="a4-contact-input-wrapper a4-contact-textarea-wrapper">
//                 <svg className="a4-contact-input-icon a4-contact-textarea-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                   <path d="M2 4h14M2 9h10M2 14h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
//                 </svg>
//                 <textarea
//                   rows="5"
//                   placeholder="Tell us about your requirement..."
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className={`a4-contact-btn ${isSubmitting ? 'a4-contact-btn-loading' : ''} ${submitStatus === 'success' ? 'a4-contact-btn-success' : ''}`}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? (
//                   <>
//                     <span className="a4-contact-btn-spinner"></span>
//                     Sending...
//                   </>
//                 ) : submitStatus === 'success' ? (
//                   <>
//                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                       <path d="M4 9l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                     Message Sent
//                   </>
//                 ) : (
//                   <>
//                     Send Message
//                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                       <path d="M3 9h12M11 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                     </svg>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

// export default Contact;

import { useState, useRef, useEffect } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await api.post("/contact", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 4000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <PublicLayout>
      <section
        ref={sectionRef}
        className={`ct-premium ${isVisible ? "ct-visible" : ""}`}
      >
        {/* Atmospheric Depth */}
        <div className="ct-atmosphere" aria-hidden="true">
          <div className="ct-glow ct-glow--teal" />
          <div className="ct-glow ct-glow--blue" />
          <div className="ct-grain" />
          <div className="ct-vignette" />
        </div>

        <div className="ct-container">
          {/* Hero Header */}
          <div className="ct-hero">
            <div className="ct-hero-content">
              <div className="ct-whisper">
                <span className="ct-whisper-pulse" />
                <span>Get in Touch</span>
              </div>
              <h1 className="ct-headline">
                <span className="ct-headline-line">Let's create something</span>
                <span className="ct-headline-line ct-headline-radiance">
                  amazing together
                </span>
              </h1>
              <p className="ct-prose">
                Have a question, need assistance, or want to discuss an upcoming 
                event? We'd love to hear from you.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="ct-grid">
            {/* Contact Info Cards */}
            <div className="ct-info">
              <div className="ct-info-card">
                <div className="ct-info-shine" aria-hidden="true" />
                <div className="ct-info-inner">
                  <div className="ct-info-thread" />
                  <h3 className="ct-info-label">Email</h3>
                  <p className="ct-info-value">info@a4events.com</p>
                </div>
              </div>

              <div className="ct-info-card">
                <div className="ct-info-shine" aria-hidden="true" />
                <div className="ct-info-inner">
                  <div className="ct-info-thread ct-info-thread-blue" />
                  <h3 className="ct-info-label">Location</h3>
                  <p className="ct-info-value">Germany</p>
                </div>
              </div>

              <div className="ct-info-card">
                <div className="ct-info-shine" aria-hidden="true" />
                <div className="ct-info-inner">
                  <div className="ct-info-thread ct-info-thread-emerald" />
                  <h3 className="ct-info-label">Response Time</h3>
                  <p className="ct-info-value">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <form onSubmit={handleSubmit} className="ct-form-card">
              <div className="ct-form-shine" aria-hidden="true" />
              <div className="ct-form-inner">
                <div className="ct-form-header">
                  <div className="ct-form-thread" />
                  <span className="ct-form-eyebrow">Send a Message</span>
                  <h2 className="ct-form-title">How can we help?</h2>
                </div>

                <div className="ct-form-fields">
                  <div className="ct-field-row">
                    <div className="ct-field">
                      <label className="ct-field-label">Name</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        className="ct-input"
                      />
                    </div>
                    <div className="ct-field">
                      <label className="ct-field-label">Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        className="ct-input"
                      />
                    </div>
                  </div>

                  <div className="ct-field-row">
                    <div className="ct-field">
                      <label className="ct-field-label">Phone</label>
                      <input
                        type="text"
                        placeholder="+49 123 456 789"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className="ct-input"
                      />
                    </div>
                    <div className="ct-field">
                      <label className="ct-field-label">Subject</label>
                      <input
                        type="text"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        className="ct-input"
                      />
                    </div>
                  </div>

                  <div className="ct-field ct-field-full">
                    <label className="ct-field-label">Message</label>
                    <textarea
                      rows="5"
                      placeholder="Tell us about your requirement..."
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                      className="ct-input ct-textarea"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={`ct-submit-btn ${isSubmitting ? "ct-submit-loading" : ""} ${submitStatus === "success" ? "ct-submit-success" : ""} ${submitStatus === "error" ? "ct-submit-error" : ""}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="ct-submit-spinner" />
                      Sending...
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <span>Message Sent</span>
                      <span>✓</span>
                    </>
                  ) : submitStatus === "error" ? (
                    <>
                      <span>Try Again</span>
                      <span>↻</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export default Contact;