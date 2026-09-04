import { useState } from "react";
import AdminLayout from "./AdminLayout";

const API_URL = import.meta.env.VITE_API_URL;

const Documents = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

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

      console.log("Uploaded document:", data.document);
      console.log(
        "PDF URL:",
        `${API_URL.replace("/api", "")}${data.document.fileUrl}`
      );

      setTitle("");
      setFile(null);

      document.getElementById("document-file").value = "";
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed to upload PDF.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <AdminLayout>
      <div style={{ padding: "30px" }}>
        <h1>PDF Documents</h1>

        <form onSubmit={handleUpload}>
          <div style={{ marginBottom: "20px" }}>
            <label>
              Document Title
            </label>

            <br />

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter document title"
              style={{
                width: "100%",
                maxWidth: "500px",
                padding: "10px",
                marginTop: "8px",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label>
              Select PDF
            </label>

            <br />

            <input
              id="document-file"
              type="file"
              accept="application/pdf,.pdf"
              onChange={(e) => setFile(e.target.files[0])}
              style={{
                marginTop: "8px",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            style={{
              padding: "10px 20px",
              cursor: uploading ? "not-allowed" : "pointer",
              backgroundColor: uploading ? "#ccc" : "#0070ba",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            {uploading ? "Uploading..." : "Upload PDF"}
          </button>

          {message && (
            <p
              style={{
                marginTop: "20px",
                color: message.includes("successfully") ? "#2e7d32" : "#d32f2f",
                padding: "10px",
                backgroundColor: message.includes("successfully") ? "#e8f5e9" : "#ffebee",
                borderRadius: "4px",
              }}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </AdminLayout>
  );
};

export default Documents;