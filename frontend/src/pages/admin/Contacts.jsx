// import { useEffect, useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function Contacts() {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       const token = localStorage.getItem('token');

//       const { data } = await api.get(
//         '/contact',
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       setContacts(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteContact = async (id) => {
//     const token = localStorage.getItem('token');

//     if (!window.confirm('Delete Contact?')) {
//       return;
//     }

//     try {
//       await api.delete(
//         `/contact/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       fetchContacts();

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div>
//         <h1>Contact Messages</h1>

//         {contacts.length === 0 ? (
//           <p>No contact messages found.</p>
//         ) : (
//           contacts.map((contact) => (
//             <div
//               key={contact.id}
//               style={{
//                 border: '1px solid #ddd',
//                 padding: '20px',
//                 marginBottom: '20px',
//                 borderRadius: '8px'
//               }}
//             >
//               <h3>{contact.name}</h3>

//               <p>
//                 <strong>Email:</strong>{' '}
//                 {contact.email}
//               </p>

//               <p>
//                 <strong>Phone:</strong>{' '}
//                 {contact.phone || 'N/A'}
//               </p>

//               <p>
//                 <strong>Subject:</strong>{' '}
//                 {contact.subject || 'N/A'}
//               </p>

//               <p>
//                 <strong>Message:</strong>
//               </p>

//               <p>{contact.message}</p>

//               <p>
//                 <strong>Received:</strong>{' '}
//                 {new Date(
//                   contact.createdAt
//                 ).toLocaleString()}
//               </p>

//               <button
//                 onClick={() =>
//                   deleteContact(contact.id)
//                 }
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </AdminLayout>
//   );
// }

// export default Contacts;


// import { useEffect, useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function Contacts() {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const fetchContacts = async () => {
//     try {
//       const token = localStorage.getItem('token');

//       const { data } = await api.get(
//         '/contact',
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       setContacts(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteContact = async (id) => {
//     const token = localStorage.getItem('token');

//     if (!window.confirm('Delete Contact?')) {
//       return;
//     }

//     try {
//       await api.delete(
//         `/contact/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       fetchContacts();

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div>
//         <h1>Contact Messages</h1>

//         {contacts.length === 0 ? (
//           <p>No contact messages found.</p>
//         ) : (
//           contacts.map((contact) => (
//             <div
//               key={contact.id}
//               style={{
//                 border: '1px solid #ddd',
//                 padding: '20px',
//                 marginBottom: '20px',
//                 borderRadius: '8px'
//               }}
//             >
//               <h3>{contact.name}</h3>

//               <p>
//                 <strong>Email:</strong>{' '}
//                 {contact.email}
//               </p>

//               <p>
//                 <strong>Phone:</strong>{' '}
//                 {contact.phone || 'N/A'}
//               </p>

//               <p>
//                 <strong>Subject:</strong>{' '}
//                 {contact.subject || 'N/A'}
//               </p>

//               <p>
//                 <strong>Message:</strong>
//               </p>

//               <p>{contact.message}</p>

//               <p>
//                 <strong>Received:</strong>{' '}
//                 {new Date(
//                   contact.createdAt
//                 ).toLocaleString()}
//               </p>

//               <button
//                 onClick={() =>
//                   deleteContact(contact.id)
//                 }
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </AdminLayout>
//   );
// }

// export default Contacts;

import { useEffect, useState } from 'react';
import api from '../../services/api';
import AdminLayout from './AdminLayout';
import './Contacts.css';

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedContact, setExpandedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('token');

      const { data } = await api.get('/contact', {
        headers: { Authorization: `Bearer ${token}` }
      });

      setContacts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (id) => {
    const token = localStorage.getItem('token');

    if (!window.confirm('Are you sure you want to delete this contact message?')) {
      return;
    }

    try {
      await api.delete(`/contact/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      fetchContacts();
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const toggleExpand = (id) => {
    setExpandedContact(expandedContact === id ? null : id);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name?.toLowerCase().includes(search.toLowerCase()) ||
      contact.email?.toLowerCase().includes(search.toLowerCase()) ||
      contact.subject?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <AdminLayout>
        <div className="ct-loading">
          <div className="ct-loading-spinner"></div>
          <p>Loading messages...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="ct-admin">
        {/* Header */}
        <div className="ct-header">
          <div className="ct-header-left">
            <h1>Contact Messages</h1>
            <p>Manage and review all incoming contact form submissions</p>
          </div>
          <div className="ct-header-right">
            <span className="ct-total-badge">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 5h12a2 2 0 012 2v5a2 2 0 01-2 2H2a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M0 7l8 5 8-5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {contacts.length} message{contacts.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Toolbar */}
        <div className="ct-toolbar">
          <div className="ct-search-wrapper">
            <svg className="ct-search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search by name, email or subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ct-search-input"
            />
          </div>
        </div>

        {/* Contacts List */}
        {filteredContacts.length === 0 ? (
          <div className="ct-empty">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M6 10h36a4 4 0 014 4v20a4 4 0 01-4 4H6a4 4 0 01-4-4V14a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M2 18l22 16 22-16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>No messages found</h3>
            <p>{search ? 'Try adjusting your search terms' : 'No contact messages have been received yet'}</p>
          </div>
        ) : (
          <div className="ct-list">
            {filteredContacts.map((contact) => (
              <div
                key={contact.id}
                className={`ct-card ${expandedContact === contact.id ? 'ct-card-expanded' : ''}`}
              >
                {/* Card Header - Always visible */}
                <div className="ct-card-header" onClick={() => toggleExpand(contact.id)}>
                  <div className="ct-card-avatar">
                    <span>{contact.name?.charAt(0)?.toUpperCase() || '?'}</span>
                  </div>
                  <div className="ct-card-info">
                    <h3>{contact.name}</h3>
                    <div className="ct-card-meta">
                      <span className="ct-meta-item">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 4h8a1 1 0 011 1v4a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1"/>
                          <path d="M1 5l5 3 5-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {contact.email}
                      </span>
                      <span className="ct-meta-divider">•</span>
                      <span className="ct-meta-item">{formatDate(contact.createdAt)}</span>
                    </div>
                  </div>
                  <div className="ct-card-actions-header">
                    {contact.subject && (
                      <span className="ct-subject-badge">{contact.subject}</span>
                    )}
                    <svg
                      className={`ct-expand-icon ${expandedContact === contact.id ? 'ct-expand-icon-rotated' : ''}`}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Card Body - Expandable */}
                {expandedContact === contact.id && (
                  <div className="ct-card-body">
                    <div className="ct-detail-grid">
                      {contact.phone && (
                        <div className="ct-detail-item">
                          <span className="ct-detail-label">Phone</span>
                          <span className="ct-detail-value">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M3 1h6a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V2a1 1 0 011-1z" stroke="currentColor" strokeWidth="1"/>
                              <path d="M4 9h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                            </svg>
                            {contact.phone}
                          </span>
                        </div>
                      )}
                      <div className="ct-detail-item">
                        <span className="ct-detail-label">Email</span>
                        <span className="ct-detail-value">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M1 4h10a1 1 0 011 1v5a1 1 0 01-1 1H1a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1"/>
                            <path d="M0 5l6 4 6-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {contact.email}
                        </span>
                      </div>
                      <div className="ct-detail-item">
                        <span className="ct-detail-label">Received</span>
                        <span className="ct-detail-value">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1"/>
                            <path d="M6 3v3l2 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {formatDate(contact.createdAt)}
                        </span>
                      </div>
                    </div>

                    <div className="ct-message-box">
                      <span className="ct-message-label">Message</span>
                      <p>{contact.message}</p>
                    </div>

                    <div className="ct-card-footer">
                      <button
                        onClick={() => deleteContact(contact.id)}
                        className="ct-btn-delete"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Delete Message
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default Contacts;