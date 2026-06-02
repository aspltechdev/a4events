// import { useEffect, useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function Inquiries() {
//   const [inquiries, setInquiries] = useState([]);

//   useEffect(() => {
//     fetchInquiries();
//   }, []);

//   const fetchInquiries = async () => {
//     try {
//       const token = localStorage.getItem('token');

//       const { data } = await api.get(
//         '/inquiries',
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       setInquiries(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteInquiry = async (id) => {
//     const token = localStorage.getItem('token');

//     if (!window.confirm('Delete Inquiry?')) {
//       return;
//     }

//     try {
//       await api.delete(
//         `/inquiries/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       fetchInquiries();

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div>
//         <h1>Customer Inquiries</h1>

//         {inquiries.length === 0 ? (
//           <p>No inquiries found.</p>
//         ) : (
//           inquiries.map((inquiry) => (
//             <div
//               key={inquiry.id}
//               style={{
//                 border: '1px solid #ddd',
//                 padding: '15px',
//                 marginBottom: '15px'
//               }}
//             >
//               <h3>{inquiry.name}</h3>

//               <p>
//                 <strong>Phone:</strong>{' '}
//                 {inquiry.phone}
//               </p>

//               <p>
//                 <strong>Email:</strong>{' '}
//                 {inquiry.email}
//               </p>

//               <p>
//                 <strong>Message:</strong>{' '}
//                 {inquiry.message}
//               </p>

//               {inquiry.productId && (
//                 <p>
//                   Product ID: {inquiry.productId}
//                 </p>
//               )}

//               {inquiry.eventId && (
//                 <p>
//                   Event ID: {inquiry.eventId}
//                 </p>
//               )}

//               <button
//                 onClick={() =>
//                   deleteInquiry(inquiry.id)
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

// export default Inquiries;




import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./Inquiries.css";

function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.get(
        "/inquiries",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setInquiries(data);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteInquiry = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Delete Inquiry?")) {
      return;
    }

    try {
      await api.delete(
        `/inquiries/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchInquiries();

    } catch (error) {
      console.error(error);
    }
  };

  const filteredInquiries =
    inquiries.filter((item) =>
      item.name
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <AdminLayout>

      <div className="a4-inquiries-page">

        <div className="a4-inquiries-header">

          <div>
            <h1>Customer Inquiries</h1>

            <p>
              Manage product and event inquiries.
            </p>
          </div>

          <div className="a4-inquiries-count">
            {inquiries.length} Total
          </div>

        </div>

        <div className="a4-inquiries-search-wrap">

          <input
            type="text"
            placeholder="Search customer..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="a4-inquiries-search"
          />

        </div>

        <div className="a4-inquiries-table-wrapper">

          <table className="a4-inquiries-table">

            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Type</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredInquiries.length === 0 ? (
                <tr>
                  <td
                    colSpan="6"
                    className="a4-empty-state"
                  >
                    No inquiries found
                  </td>
                </tr>
              ) : (
                filteredInquiries.map(
                  (inquiry) => (
                    <tr key={inquiry.id}>

                      <td>
                        {inquiry.name}
                      </td>

                      <td>
                        {inquiry.phone}
                      </td>

                      <td>
                        {inquiry.email}
                      </td>

                      <td>
                        <span
                          className={
                            inquiry.eventId
                              ? "a4-badge-event"
                              : "a4-badge-product"
                          }
                        >
                          {inquiry.eventId
                            ? "Event"
                            : "Product"}
                        </span>
                      </td>

                      <td>
                        <div className="a4-message-preview">
                          {inquiry.message}
                        </div>
                      </td>

                      <td>

                        <button
                          onClick={() =>
                            deleteInquiry(
                              inquiry.id
                            )
                          }
                          className="a4-delete-inquiry-btn"
                        >
                          Delete
                        </button>

                      </td>

                    </tr>
                  )
                )
              )}

            </tbody>

          </table>

        </div>

      </div>

    </AdminLayout>
  );
}

export default Inquiries;