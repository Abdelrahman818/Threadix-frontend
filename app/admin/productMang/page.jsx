"use client";

import { useEffect, useState } from "react";
import { MoreVertical, X, PackageCheck, PackageX, Edit, Trash2 } from "lucide-react";
import { END_POINT } from "@/config";
import "@/styles/admin.css";

export default function ProductsPage() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [currColor, setCurrColor] = useState('');
  const [currSize, setCurrSize] = useState('');
  const [currMeth, setCurrMeth] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [existingImagesCount, setExistingImagesCount] = useState(0);
  const [menuPosition, setMenuPosition] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: 'error' });
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    desc: "",
    category: "",
    images: [],
  });

  const clearForm = () => {
    setFormData({
      title: "",
      price: "",
      desc: "",
      category: "",
      images: [],
    });
    setColors([]);
    setSizes([]);
    setIsFeatured(false);
  };

  const closeModal = () => {
    clearForm();
    setEditingId(null);
    setExistingImagesCount(0);
    setCurrMeth('');
    setShowModal(false);
  };

  const addColor = () => {
    if (!currColor.trim()) return;
    setColors(prev => [...prev, ...currColor.trim().split(' ')]);
    setCurrColor('');
  };

  const addSize = () => {
    if (!currSize.trim()) return;
    setSizes(prev => [...prev, ...currSize.trim().split(' ')]);
    setCurrSize('');
  };

  const removeColor = (color) =>
    setColors(prev => prev.filter(c => c !== color));

  const removeSize = (size) =>
    setSizes(prev => prev.filter(s => s !== size));

  const getAllProducts = async () => {
    try {
      const res = await fetch(END_POINT.PRODUCTS, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const json = await res.json();
      setProducts(json.data || []);
    } catch (error) {
      console.error(error.message);
    }
  };

  const getAllCategories = async () => {
    const res = await fetch(END_POINT.CATEGORIES(''), {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
    });
    const json = await res.json();
    setCategories(json.data || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, images: e.target.files }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (currMeth === 'post') {
      // Validate images are selected when adding new product
      if (!formData.images || formData.images.length === 0) {
        setToast({ show: true, message: 'Please select at least one image for the product', type: 'error' });
        setLoading(false);
        return;
      }

      const body = new FormData();
      body.append("title", formData.title);
      body.append("price", formData.price);
      body.append("desc", formData.desc);
      body.append("category", formData.category);
      body.append("colors", JSON.stringify(colors));
      body.append("sizes", JSON.stringify(sizes));
      if (isFeatured) {
        body.append("isFeatured", "true");
      }

      for (let img of formData.images) {
        body.append("images", img);
      }

      try {
        const res = await fetch(END_POINT.PRODUCTS, {
          method: "POST",
          body,
          credentials: "include",
        });

        const json = await res.json();
        if (json.successful) {
          clearForm();
          setShowModal(false);
          getAllProducts();
        }
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    } else if (currMeth === 'patch') {
      if (!editingId) {
        setLoading(false);
        return;
      }
      const body = new FormData();
      body.append("title", formData.title);
      body.append("price", formData.price);
      body.append("desc", formData.desc);
      body.append("category", formData.category);
      body.append("colors", JSON.stringify(colors));
      body.append("sizes", JSON.stringify(sizes));
      if (isFeatured) {
        body.append("isFeatured", "true");
      } else {
        body.append("isFeatured", "false");
      }

      for (let img of formData.images) {
        body.append("images", img);
      }

      try {
        const res = await fetch(`${END_POINT.PRODUCTS}/${editingId}`, {
          method: "PATCH",
          body,
          credentials: "include",
        });

        const json = await res.json();
        if (json.successful) {
          clearForm();
          setShowModal(false);
          setEditingId(null);
          setCurrMeth('');
          getAllProducts();
        }
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const updateProduct = async (id, payload) => {
    await fetch(`${END_POINT.PRODUCTS}/${id}`, {
      method: 'PATCH',
      headers: { "Content-Type": "application/json" },
      credentials: 'include',
      body: JSON.stringify(payload),
    });
    getAllProducts();
  };

  const removeProduct = async (id) => {
    const res = await fetch(`${END_POINT.PRODUCTS}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const json = await res.json();
    if (json.successful)
      getAllProducts();
  };

  const handleAction = (action, productId) => {
    switch (action) {
      case 'inStock':
        updateProduct(productId, { stock: true });
        break;
      case 'outStock':
        updateProduct(productId, { stock: false });
        break;
      case 'delete':
        removeProduct(productId);
        break;
      case 'edit':
        (async () => {
          try {
            const res = await fetch(`${END_POINT.PRODUCTS}/item/${productId}`, {
              method: 'GET',
              credentials: 'include',
            });
            const json = await res.json();
            if (json.successful && json.data) {
              const p = json.data;
              setFormData({
                title: p.title || '',
                price: p.price || '',
                desc: p.desc || '',
                category: p.category || '',
                images: [],
              });
              setColors(p.colors || []);
              setSizes(p.size || []);
              setIsFeatured(p.isFeatured || false);
              setExistingImagesCount(p.images?.length || 0);
              setEditingId(productId);
              setCurrMeth('patch');
              setShowModal(true);
            }
          } catch (err) {
            console.error(err.message);
          }
        })();
        break;
      default:
        break;
    }
    setMenuPosition(null);
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

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  return (
    <div className="p-8 flex-1">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-gray-500 mt-1">
            Manage all products in Threadix
          </p>
        </div>
        <button
          onClick={() => {
            clearForm();
            setCurrMeth('post');
            setShowModal(true);
          }}
          className="px-5 py-2.5 bg-black text-white rounded-xl hover:bg-gray-900"
        >
          + Add Product
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left">Product</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Stock</th>
              <th className="px-6 py-3 text-left">Featured</th>
              <th className="px-6 py-3 text-left">Images</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map(product => (
              <tr
                key={product._id}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium">
                  {product.title}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {product.category || "—"}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {product.price} LE
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${product.stock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                      }`}
                  >
                    {product.stock ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${product.isFeatured
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                      }`}
                  >
                    {product.isFeatured ? "Featured" : "Not Featured"}
                  </span>
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {product.images?.length || 0}
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={(e) => {
                      if (!menuPosition) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const menuHeight = 220; // Estimated height for product menu
                        const spaceBelow = window.innerHeight - rect.bottom;
                        const showUpward = spaceBelow < menuHeight;

                        setMenuPosition({
                          productId: product._id,
                          x: rect.right - 160,
                          y: showUpward ? rect.top - menuHeight - 8 : rect.bottom + 8,
                        });
                      } else {
                        setMenuPosition(null)
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
            onClick={() => handleAction('inStock', menuPosition.productId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <PackageCheck size={16} className="text-green-600" />
            Set In Stock
          </button>
          <button
            onClick={() => handleAction('outStock', menuPosition.productId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <PackageX size={16} className="text-orange-500" />
            Set Out of Stock
          </button>
          <button
            onClick={() => handleAction('edit', menuPosition.productId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <Edit size={16} className="text-blue-600" />
            Modify
          </button>
          <hr className="my-1" />
          <button
            onClick={() => handleAction('delete', menuPosition.productId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-red-50 text-red-600"
          >
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl p-8 overflow-y-auto custom-scrollbar" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 transparent' }}>

            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">{currMeth === 'patch' ? 'Modify Product' : 'Add Product'}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {currMeth === 'patch' ? 'Modify existing product' : 'Create a new product for Threadix'}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                name="title"
                placeholder="Product name"
                required
                onChange={handleChange}
                value={formData.title}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              />

              <input
                name="price"
                type="number"
                placeholder="Price"
                required
                onChange={handleChange}
                value={formData.price}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              />

              <div className="flex gap-2.5">
                <input
                  name="colors"
                  type="text"
                  placeholder="Color"
                  onChange={(e) => setCurrColor(e.target.value)}
                  value={currColor}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
                />
                <button
                  type="button"
                  onClick={addColor}
                  className="px-6 py-3 bg-black text-white rounded-xl disabled:opacity-50"
                >Add</button>
                {colors.length > 0 &&
                  <div className="flex gap-3.5 items-center px-2.5 py-2 bg-gray-300 rounded-sm">
                    {colors.map((color, idx) => (
                      <span key={idx} className="cursor-pointer" onClick={() => removeColor(color)}>{color}</span>
                    ))}
                  </div>
                }
              </div>

              <div className="flex gap-2.5">
                <input
                  name="sizes"
                  type="text"
                  placeholder="Size"
                  onChange={(e) => setCurrSize(e.target.value)}
                  value={currSize}
                  className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
                />
                <button
                  type="button"
                  onClick={addSize}
                  className="px-6 py-3 bg-black text-white rounded-xl disabled:opacity-50"
                >Add</button>
                {sizes.length > 0 &&
                  <div className="flex gap-3.5 items-center px-2.5 py-2 bg-gray-300 rounded-sm">
                    {sizes.map((size, idx) => (
                      <span key={idx} className="cursor-pointer" onClick={() => removeSize(size)}>{size}</span>
                    ))}
                  </div>
                }
              </div>

              <select
                name="category"
                required
                onChange={handleChange}
                value={formData.category || ""}
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-black outline-none"
              >
                <option disabled value="">Select category</option>
                {Array.isArray(categories) && categories.length > 0 && categories.map((cat, idx) => (
                  <option key={idx} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isFeatured"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="isFeatured" className="cursor-pointer font-medium">
                  Mark as Featured Product
                </label>
              </div>

              <textarea
                name="desc"
                rows={4}
                placeholder="Product description..."
                required
                onChange={handleChange}
                value={formData.desc}
                className="w-full px-4 py-3 border rounded-xl resize-none focus:ring-2 focus:ring-black outline-none"
              />

              <input
                type="file"
                multiple
                accept="image/*"
                required={currMeth === 'post'}
                onChange={handleFileChange}
              />

              {existingImagesCount > 0 && currMeth === 'patch' && (
                <div className="text-sm text-gray-600">Existing images: {existingImagesCount}</div>
              )}

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-3 border rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-black text-white rounded-xl disabled:opacity-50"
                >
                  {loading ? (currMeth === 'patch' ? 'Saving...' : 'Adding...') : (currMeth === 'patch' ? 'Save Changes' : 'Add Product')}
                </button>
              </div>

            </form>
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
