import { useState } from 'react';
import api from '../services/api';
import PublicLayout from '../layouts/PublicLayout';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post(
        '/contact',
        formData
      );

      alert('Message Sent');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PublicLayout>
    <div>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value
            })
          }
        />

        <br /><br />

        <input
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }
        />

        <br /><br />

        <input
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value
            })
          }
        />

        <br /><br />

        <input
          placeholder="Subject"
          value={formData.subject}
          onChange={(e) =>
            setFormData({
              ...formData,
              subject: e.target.value
            })
          }
        />

        <br /><br />

        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value
            })
          }
        />

        <br /><br />

        <button type="submit">
          Send Message
        </button>
      </form>
    </div> 
    </PublicLayout>
  );
}

export default Contact;