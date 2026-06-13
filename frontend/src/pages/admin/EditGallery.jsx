import {
  useEffect,
  useState
} from "react";

import {
  useParams
} from "react-router-dom";

import api from "../../services/api";
import AdminLayout from "./AdminLayout";

import "./EditGallery.css";

function EditGallery() {

  const { id } = useParams();

  const [file, setFile] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      category: "",
      image: "",
    });

  useEffect(() => {
    loadGalleryItem();
  }, []);

  const loadGalleryItem =
    async () => {
      try {

        const { data } =
          await api.get(
            `/gallery/${id}`
          );

        setFormData({
          title:
            data.title || "",
          category:
            data.category || "",
          image:
            data.image || "",
        });

      } catch (error) {
        console.error(error);
      }
    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const token =
          localStorage.getItem(
            "token"
          );

        let imageUrl =
          formData.image;

        if (file) {

          const uploadData =
            new FormData();

          uploadData.append(
            "image",
            file
          );

          const uploadResponse =
            await api.post(
              "/upload?type=gallery",
              uploadData,
              {
                headers: {
                  Authorization:
                    `Bearer ${token}`,
                },
              }
            );

          imageUrl =
            uploadResponse.data.imageUrl;
        }

        await api.put(
          `/gallery/${id}`,
          {
            title:
              formData.title,
            category:
              formData.category,
            image: imageUrl,
          },
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        alert(
          "Gallery Image Updated"
        );

      } catch (error) {
        console.error(error);
      }
    };

  return (
    <AdminLayout>

      <div className="a4-edit-gallery-page">

        <div className="a4-edit-gallery-header">

          <h1>
            Edit Gallery Image
          </h1>

          <p>
            Update gallery
            information and
            preview changes.
          </p>

        </div>

        <div className="a4-gallery-edit-layout">

          {/* FORM */}

          <form
            onSubmit={
              handleSubmit
            }
            className="a4-gallery-edit-form"
          >

            <div className="a4-gallery-field">

              <label>
                Image Title
              </label>

              <input
                type="text"
                value={
                  formData.title
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-gallery-field">

              <label>
                Category
              </label>

              <input
                type="text"
                value={
                  formData.category
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-gallery-field">

              <label>
                Upload New Image
              </label>

              <input
                type="file"
                onChange={(e) =>
                  setFile(
                    e.target
                      .files[0]
                  )
                }
              />

            </div>

            <button
              type="submit"
              className="a4-gallery-update-btn"
            >
              Update Image
            </button>

          </form>

          {/* LIVE PREVIEW */}

          <div className="a4-gallery-preview">

            <div className="a4-gallery-preview-card">

              <img
                src={
                  file
                    ? URL.createObjectURL(
                        file
                      )
                    : `https://a4agroup.eu${formData.image}`
                }
                alt={
                  formData.title
                }
                className="a4-gallery-preview-image"
              />

              <div className="a4-gallery-preview-content">

                <span>
                  {
                    formData.category
                  }
                </span>

                <h3>
                  {
                    formData.title
                  }
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}

export default EditGallery;