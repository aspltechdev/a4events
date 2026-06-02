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

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('token');

      const { data } = await api.get(
        '/contact',
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setContacts(data);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteContact = async (id) => {
    const token = localStorage.getItem('token');

    if (!window.confirm('Delete Contact?')) {
      return;
    }

    try {
      await api.delete(
        `/contact/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchContacts();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1>Contact Messages</h1>

        {contacts.length === 0 ? (
          <p>No contact messages found.</p>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact.id}
              style={{
                border: '1px solid #ddd',
                padding: '20px',
                marginBottom: '20px',
                borderRadius: '8px'
              }}
            >
              <h3>{contact.name}</h3>

              <p>
                <strong>Email:</strong>{' '}
                {contact.email}
              </p>

              <p>
                <strong>Phone:</strong>{' '}
                {contact.phone || 'N/A'}
              </p>

              <p>
                <strong>Subject:</strong>{' '}
                {contact.subject || 'N/A'}
              </p>

              <p>
                <strong>Message:</strong>
              </p>

              <p>{contact.message}</p>

              <p>
                <strong>Received:</strong>{' '}
                {new Date(
                  contact.createdAt
                ).toLocaleString()}
              </p>

              <button
                onClick={() =>
                  deleteContact(contact.id)
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

export default Contacts;