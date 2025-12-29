'use client';

import { useState, useEffect } from "react";
import { MoreVertical, X, Eye, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import { END_POINT } from "@/config";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [previewImage, setPreviewImage] = useState({ url: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [currMeth, setCurrMeth] = useState('post');
  const [toast, setToast] = useState({ show: false, message: '', type: 'error' });

  const [formData, setFormData] = useState({
    name: "",
    image: null,
    status: "active",
  });

  const getAllCategories = async () => {
    try {
      const res = await fetch(END_POINT.CATEGORIES(""), {
        credentials: "include",
      });
      const json = await res.json();
      setCategories(json.data || []);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const clearForm = () => {
    setFormData({ name: "", image: null, status: "active" });
    setEditingId(null);
    setCurrMeth('post');
  };

  const closeModal = () => {
    clearForm();
    setShowModal(false);
  };

  const handleAction = async (action, categoryId) => {
    switch (action) {
      case 'modify':
        const cat = categories.find(c => c._id === categoryId);
        if (cat) {
          setFormData({
            name: cat.name || '',
            image: null, // Keep existing image, don't require new one for edit
            status: cat.status || (cat.isActive ? 'active' : 'inactive'),
          });
          setEditingId(categoryId);
          setCurrMeth('patch');
          setShowModal(true);
        }
        break;

      case 'delete':
        const categoryToDelete = categories.find(c => c._id === categoryId);
        if (confirm(`Are you sure you want to delete "${categoryToDelete?.name}"? This action cannot be undone.`)) {
          try {
            const res = await fetch(END_POINT.CATEGORIES(categoryId), {
              method: 'DELETE',
              credentials: 'include',
            });
            if (!res.ok) throw new Error('Failed to delete category');
            getAllCategories();
          } catch (err) {
            console.log(err.message);
            setToast({ show: true, message: err.message || 'Failed to delete category', type: 'error' });
          }
        }
        break;

      case 'showImg':
        const catForImage = categories.find(c => c._id === categoryId);
        if (catForImage) {
          setPreviewImage({
            url: 'http://localhost:8080' + catForImage.imgUrl,
            name: catForImage.name,
          });
          setShowImageModal(true);
        }
        break;

      case 'toggleStatus':
        const catToToggle = categories.find(c => c._id === categoryId);
        if (catToToggle) {
          try {
            const newStatus = catToToggle.isActive ? 'inactive' : 'active';
            const body = new FormData();
            body.append('status', newStatus);

            const res = await fetch(END_POINT.CATEGORIES(categoryId), {
              method: 'PATCH',
              credentials: 'include',
              body,
            });
            if (!res.ok) throw new Error('Failed to update status');
            getAllCategories();
          } catch (err) {
            console.log(err.message);
            setToast({ show: true, message: err.message || 'Failed to update category status', type: 'error' });
          }
        }
        break;

      default:
        break;
    }
    setMenuPosition(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate image is selected only when adding new category
    if (currMeth === 'post' && !formData.image) {
      setToast({ show: true, message: 'Please select an image for the category', type: 'error' });
      return;
    }

    setLoading(true);

    try {
      if (currMeth === 'post') {
        const body = new FormData();
        body.append("name", formData.name);
        body.append("status", formData.status);
        body.append("image", formData.image);

        const res = await fetch(END_POINT.CATEGORIES(""), {
          method: "POST",
          credentials: "include",
          body,
        });

        if (!res.ok) throw new Error("Failed to add category");

        closeModal();
        getAllCategories();
      } else if (currMeth === 'patch') {
        if (!editingId) {
          setLoading(false);
          return;
        }

        const body = new FormData();
        body.append("name", formData.name);
        body.append("status", formData.status);

        // Only append image if a new one is selected
        if (formData.image) {
          body.append("image", formData.image);
        }

        const res = await fetch(`${END_POINT.CATEGORIES(editingId)}`, {
          method: "PATCH",
          credentials: "include",
          body,
        });

        if (!res.ok) throw new Error("Failed to update category");

        closeModal();
        getAllCategories();
      }
    } catch (err) {
      console.log(err.message);
      setToast({ show: true, message: err.message || 'An error occurred', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const close = () => setMenuPosition(null);
    window.addEventListener('scroll', close);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('resize', close);
    };
  }, []);

  return (
    <div className="p-8 flex-1">

      {/* ================= HEADER ================= */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
          <p className="text-gray-500 mt-1">
            Manage all product categories in Threadix store.
          </p>
        </div>

        <button
          onClick={() => {
            clearForm();
            setCurrMeth('post');
            setShowModal(true);
          }}
          className="px-5 py-2.5 bg-black text-white font-medium rounded-xl hover:bg-gray-900 transition"
        >
          + Add Category
        </button>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Category</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Products</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Status</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map(cat => (
              <tr key={cat._id} className="border-b last:border-none hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold">{cat.name}</td>
                <td className="px-6 py-4">{cat.productsCount || 0}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg ${cat.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                      }`}
                  >
                    {cat.isActive}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={(e) => {
                      if (!menuPosition) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setMenuPosition({
                          categoryId: cat._id,
                          x: rect.right - 160,
                          y: rect.bottom + 8,
                        });
                      } else {
                        setMenuPosition(null);
                      }
                    }}
                    className="p-2 rounded-full hover:bg-gray-200"
                  >
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= ACTION MENU ================= */}
      {menuPosition && (
        <div
          style={{
            position: 'fixed',
            top: menuPosition.y,
            left: menuPosition.x,
            zIndex: 9999,
          }}
          className="bg-white border rounded-lg shadow-lg w-48"
        >
          <button
            onClick={() => handleAction('showImg', menuPosition.categoryId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <Eye size={16} />
            Show Image
          </button>
          <button
            onClick={() => handleAction('modify', menuPosition.categoryId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <MoreVertical size={16} />
            Modify
          </button>
          <button
            onClick={() => handleAction('toggleStatus', menuPosition.categoryId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            {categories.find(c => c._id === menuPosition.categoryId)?.isActive ? (
              <>
                <ToggleRight size={16} className="text-green-600" />
                Deactivate
              </>
            ) : (
              <>
                <ToggleLeft size={16} className="text-gray-400" />
                Activate
              </>
            )}
          </button>
          <hr className="my-1" />
          <button
            onClick={() => handleAction('delete', menuPosition.categoryId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-red-50 text-red-600"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      )}

      {/* ================= MODAL ================= */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8">

            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">{currMeth === 'patch' ? 'Modify Category' : 'Add Category'}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {currMeth === 'patch' ? 'Update existing category' : 'Create a new category for Threadix'}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-black outline-none"
                  placeholder="e.g. Hoodies"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Category Image {currMeth === 'patch' && <span className="text-gray-400 text-xs">(Optional - leave empty to keep current image)</span>}
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  required={currMeth === 'post'}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 rounded-xl border hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 disabled:opacity-50"
                >
                  {loading ? (currMeth === 'patch' ? 'Saving...' : 'Adding...') : (currMeth === 'patch' ? 'Save Changes' : 'Add Category')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ================= IMAGE PREVIEW MODAL ================= */}
      {showImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowImageModal(false)}
        >
          <div
            className="relative max-w-2xl max-h-[80vh] bg-white rounded-2xl shadow-xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{previewImage.name}</h3>
              <button
                onClick={() => setShowImageModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>
            <img
              src={previewImage.url}
              alt={previewImage.name}
              className="max-w-full max-h-[60vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg ${toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
          }`}>
          <span>{toast.message}</span>
          <button onClick={() => setToast({ ...toast, show: false })} className="hover:opacity-80">
            <X size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
