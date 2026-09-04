// import { useState } from "react";
// import AdminLayout from "./AdminLayout";

// const API_URL = import.meta.env.VITE_API_URL;

// const Documents = () => {
//   const [title, setTitle] = useState("");
//   const [file, setFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleUpload = async (e) => {
//     e.preventDefault();

//     if (!title.trim()) {
//       setMessage("Please enter a document title.");
//       return;
//     }

//     if (!file) {
//       setMessage("Please select a PDF file.");
//       return;
//     }

//     if (file.type !== "application/pdf") {
//       setMessage("Only PDF files are allowed.");
//       return;
//     }

//     const formData = new FormData();

//     formData.append("title", title);
//     formData.append("document", file);

//     try {
//       setUploading(true);
//       setMessage("");

//       const response = await fetch(`${API_URL}/documents/upload`, {
//         method: "POST",
//         body: formData,
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Upload failed.");
//       }

//       setMessage("PDF uploaded successfully.");

//       console.log("Uploaded document:", data.document);
//       console.log(
//         "PDF URL:",
//         `${API_URL.replace("/api", "")}${data.document.fileUrl}`
//       );

//       setTitle("");
//       setFile(null);

//       document.getElementById("document-file").value = "";
//     } catch (error) {
//       console.error(error);
//       setMessage(error.message || "Failed to upload PDF.");
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div style={{ padding: "30px" }}>
//         <h1>PDF Documents</h1>

//         <form onSubmit={handleUpload}>
//           <div style={{ marginBottom: "20px" }}>
//             <label>
//               Document Title
//             </label>

//             <br />

//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Enter document title"
//               style={{
//                 width: "100%",
//                 maxWidth: "500px",
//                 padding: "10px",
//                 marginTop: "8px",
//                 border: "1px solid #ddd",
//                 borderRadius: "4px",
//               }}
//             />
//           </div>

//           <div style={{ marginBottom: "20px" }}>
//             <label>
//               Select PDF
//             </label>

//             <br />

//             <input
//               id="document-file"
//               type="file"
//               accept="application/pdf,.pdf"
//               onChange={(e) => setFile(e.target.files[0])}
//               style={{
//                 marginTop: "8px",
//               }}
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={uploading}
//             style={{
//               padding: "10px 20px",
//               cursor: uploading ? "not-allowed" : "pointer",
//               backgroundColor: uploading ? "#ccc" : "#0070ba",
//               color: "#fff",
//               border: "none",
//               borderRadius: "4px",
//               fontSize: "14px",
//               fontWeight: "600",
//             }}
//           >
//             {uploading ? "Uploading..." : "Upload PDF"}
//           </button>

//           {message && (
//             <p
//               style={{
//                 marginTop: "20px",
//                 color: message.includes("successfully") ? "#2e7d32" : "#d32f2f",
//                 padding: "10px",
//                 backgroundColor: message.includes("successfully") ? "#e8f5e9" : "#ffebee",
//                 borderRadius: "4px",
//               }}
//             >
//               {message}
//             </p>
//           )}
//         </form>
//       </div>
//     </AdminLayout>
//   );
// };

// export default Documents;


import { useEffect, useState } from "react";
import AdminLayout from "./AdminLayout";

const API_URL = import.meta.env.VITE_API_URL;
const FILE_BASE_URL = API_URL.replace("/api", "");

const Documents = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

  const [documents, setDocuments] = useState([]);

  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch uploaded PDFs
  const fetchDocuments = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/documents`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch documents.");
      }

      setDocuments(data.documents || []);
    } catch (error) {
      console.error("Fetch documents error:", error);
      setMessage(error.message || "Failed to load documents.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  // Upload PDF
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setMessage("Please enter a document title.");
      return;
    }

    if (!file) {
      setMessage("Please select a PDF file.");
      return;
    }

    if (file.type !== "application/pdf") {
      setMessage("Only PDF files are allowed.");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("document", file);

    try {
      setUploading(true);
      setMessage("");

      const response = await fetch(`${API_URL}/documents/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Upload failed.");
      }

      setMessage("PDF uploaded successfully.");

      setTitle("");
      setFile(null);

      const fileInput = document.getElementById("document-file");

      if (fileInput) {
        fileInput.value = "";
      }

      // Refresh document list immediately
      await fetchDocuments();

    } catch (error) {
      console.error("Upload error:", error);
      setMessage(error.message || "Failed to upload PDF.");
    } finally {
      setUploading(false);
    }
  };

  // Delete PDF
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this PDF?"
    );

    if (!confirmed) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/documents/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete document.");
      }

      setMessage("PDF deleted successfully.");

      await fetchDocuments();

    } catch (error) {
      console.error("Delete error:", error);
      setMessage(error.message || "Failed to delete PDF.");
    }
  };

  // Get complete PDF URL
  const getPdfUrl = (fileUrl) => {
    return `${FILE_BASE_URL}${fileUrl}`;
  };

  return (
    <AdminLayout>
      <div
        style={{
          padding: "30px",
          background: "#f8fafc",
          minHeight: "100%",
        }}
      >

        {/* Header */}
        <div style={{ marginBottom: "30px" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "28px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            PDF Documents
          </h1>

          <p
            style={{
              marginTop: "8px",
              color: "#6b7280",
              fontSize: "14px",
            }}
          >
            Upload and manage PDF documents.
          </p>
        </div>

        {/* Upload Section */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "25px",
            maxWidth: "700px",
            marginBottom: "35px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "20px",
              fontSize: "18px",
              color: "#111827",
            }}
          >
            Upload PDF
          </h2>

          <form onSubmit={handleUpload}>

            {/* Title */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                Document Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter document title"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  padding: "11px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  boxSizing: "border-box",
                  fontSize: "14px",
                }}
              />
            </div>

            {/* PDF */}
            <div style={{ marginBottom: "20px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                Select PDF
              </label>

              <input
                id="document-file"
                type="file"
                accept="application/pdf,.pdf"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <p
                style={{
                  marginTop: "8px",
                  fontSize: "12px",
                  color: "#9ca3af",
                }}
              >
                PDF files only. Maximum size: 20 MB.
              </p>
            </div>

            {/* Upload */}
            <button
              type="submit"
              disabled={uploading}
              style={{
                padding: "11px 22px",
                cursor: uploading ? "not-allowed" : "pointer",
                backgroundColor: uploading ? "#9ca3af" : "#0070ba",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {uploading ? "Uploading..." : "Upload PDF"}
            </button>

          </form>

          {/* Message */}
          {message && (
            <div
              style={{
                marginTop: "20px",
                padding: "11px 14px",
                borderRadius: "6px",
                color: message.includes("successfully")
                  ? "#166534"
                  : "#b91c1c",
                backgroundColor: message.includes("successfully")
                  ? "#dcfce7"
                  : "#fee2e2",
                fontSize: "14px",
              }}
            >
              {message}
            </div>
          )}
        </div>

        {/* Documents List */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "18px",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "20px",
                color: "#111827",
              }}
            >
              Uploaded PDFs
            </h2>

            <span
              style={{
                fontSize: "13px",
                color: "#6b7280",
              }}
            >
              {documents.length} document
              {documents.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Loading */}
          {loading && (
            <div
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                padding: "25px",
                color: "#6b7280",
              }}
            >
              Loading documents...
            </div>
          )}

          {/* Empty */}
          {!loading && documents.length === 0 && (
            <div
              style={{
                background: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                padding: "40px 25px",
                textAlign: "center",
                color: "#6b7280",
              }}
            >
              <div
                style={{
                  fontSize: "38px",
                  marginBottom: "12px",
                }}
              >
                📄
              </div>

              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                }}
              >
                No PDF documents uploaded yet.
              </p>
            </div>
          )}

          {/* Documents */}
          {!loading && documents.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "18px",
              }}
            >
              {documents.map((document) => {
                const pdfUrl = getPdfUrl(document.fileUrl);

                return (
                  <div
                    key={document.id}
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "10px",
                      padding: "20px",
                    }}
                  >
                    {/* PDF Icon */}
                    <div
                      style={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "8px",
                        background: "#fee2e2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "15px",
                        fontSize: "22px",
                      }}
                    >
                      📄
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        margin: "0 0 7px",
                        fontSize: "16px",
                        color: "#111827",
                        wordBreak: "break-word",
                      }}
                    >
                      {document.title}
                    </h3>

                    {/* File name */}
                    <p
                      style={{
                        margin: "0 0 7px",
                        fontSize: "13px",
                        color: "#6b7280",
                        wordBreak: "break-word",
                      }}
                    >
                      {document.fileName}
                    </p>

                    {/* Date */}
                    <p
                      style={{
                        margin: "0 0 18px",
                        fontSize: "12px",
                        color: "#9ca3af",
                      }}
                    >
                      Uploaded{" "}
                      {new Date(
                        document.createdAt
                      ).toLocaleDateString()}
                    </p>

                    {/* Actions */}
                    <div
                      style={{
                        display: "flex",
                        gap: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          padding: "8px 13px",
                          background: "#111827",
                          color: "#fff",
                          borderRadius: "6px",
                          textDecoration: "none",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        View PDF
                      </a>

                      <a
                        href={pdfUrl}
                        download={document.fileName}
                        style={{
                          padding: "8px 13px",
                          background: "#f3f4f6",
                          color: "#111827",
                          borderRadius: "6px",
                          textDecoration: "none",
                          fontSize: "13px",
                          fontWeight: "600",
                        }}
                      >
                        Download
                      </a>

                      <button
                        onClick={() =>
                          handleDelete(document.id)
                        }
                        style={{
                          padding: "8px 13px",
                          background: "#fee2e2",
                          color: "#b91c1c",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "13px",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </AdminLayout>
  );
};

export default Documents;