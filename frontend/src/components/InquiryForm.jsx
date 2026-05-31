import { useState } from 'react';
import api from '../services/api';

function InquiryForm({ productId, eventId }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post('/inquiries', {
        ...formData,
        productId,
        eventId
      });

      alert('Inquiry Submitted');

      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error(error);
      alert('Failed to submit inquiry');
    }
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>
        {eventId ? 'Book This Event' : 'Product Inquiry'}
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value
            })
          }
          required
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value
            })
          }
          required
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }
        />

        <br />
        <br />

        <textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value
            })
          }
          required
        />

        <br />
        <br />

        <button type="submit">
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}

export default InquiryForm;