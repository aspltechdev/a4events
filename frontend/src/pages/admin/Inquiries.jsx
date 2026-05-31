import { useEffect, useState } from 'react';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function Inquiries() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const token = localStorage.getItem('token');

      const { data } = await api.get(
        '/inquiries',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setInquiries(data);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteInquiry = async (id) => {
    const token = localStorage.getItem('token');

    if (!window.confirm('Delete Inquiry?')) {
      return;
    }

    try {
      await api.delete(
        `/inquiries/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchInquiries();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1>Customer Inquiries</h1>

        {inquiries.length === 0 ? (
          <p>No inquiries found.</p>
        ) : (
          inquiries.map((inquiry) => (
            <div
              key={inquiry.id}
              style={{
                border: '1px solid #ddd',
                padding: '15px',
                marginBottom: '15px'
              }}
            >
              <h3>{inquiry.name}</h3>

              <p>
                <strong>Phone:</strong>{' '}
                {inquiry.phone}
              </p>

              <p>
                <strong>Email:</strong>{' '}
                {inquiry.email}
              </p>

              <p>
                <strong>Message:</strong>{' '}
                {inquiry.message}
              </p>

              {inquiry.productId && (
                <p>
                  Product ID: {inquiry.productId}
                </p>
              )}

              {inquiry.eventId && (
                <p>
                  Event ID: {inquiry.eventId}
                </p>
              )}

              <button
                onClick={() =>
                  deleteInquiry(inquiry.id)
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </AdminLayout>
  );
}

export default Inquiries;