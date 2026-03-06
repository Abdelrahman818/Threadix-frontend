"use client";

import { useEffect, useState } from "react";
import { MoreVertical, Clock, Truck, CheckCircle, XCircle, CreditCard, CircleDollarSign, RotateCcw, X, FileText } from "lucide-react";
import { END_POINT } from "@/config";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [menuPosition, setMenuPosition] = useState(null);
  const [showReceipt, setShowReceipt] = useState(false);
  const [activeOrder, setActiveOrder] = useState(null);
  const [toast, setToast] = useState({ show: false, message: '', type: 'error' });

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(END_POINT.ORDERS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const json = await res.json();

      if (res.ok && json.successful) {
        setOrders(json.data);
      } else {
        setError(json.msg || "Failed to fetch orders");
      }
    } catch (err) {
      console.error("Error fetching orders:", err);
      setError("An error occurred while fetching orders.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter(order => {
    const customerName = order.customerName || order.name || "";
    const customerEmail = order.customerEmail || order.email || "";

    const matchesSearch =
      (customerName.toLowerCase().includes(search.toLowerCase())) ||
      (customerEmail.toLowerCase().includes(search.toLowerCase()));

    const matchesStatus = statusFilter
      ? order.orderStatus.toLowerCase() === statusFilter.toLowerCase()
      : true;
    const matchesPayment = paymentFilter
      ? order.paymentStatus.toLowerCase() === paymentFilter.toLowerCase()
      : true;

    return matchesSearch && matchesStatus && matchesPayment;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  const updateOrder = async (id, payload) => {
    try {
      const res = await fetch(`${END_POINT.ORDERS}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (json.successful) {
        fetchOrders();
      } else {
        setToast({ show: true, message: json.msg || 'Failed to update order', type: 'error' });
      }
    } catch (err) {
      console.error(err.message);
      setToast({ show: true, message: 'Failed to update order', type: 'error' });
    }
  };

  const handleAction = (action, orderId) => {
    switch (action) {
      // Order Status
      case 'pending':
        updateOrder(orderId, { orderStatus: 'pending' });
        break;
      case 'in delivery':
        updateOrder(orderId, { orderStatus: 'in delivery' });
        break;
      case 'completed':
        updateOrder(orderId, { orderStatus: 'completed' });
        break;
      case 'cancelled':
        updateOrder(orderId, { orderStatus: 'cancelled' });
        break;
      // Payment Status
      case 'paid':
        updateOrder(orderId, { paymentStatus: 'paid' });
        break;
      case 'unpaid':
        updateOrder(orderId, { paymentStatus: 'unpaid' });
        break;
      case 'refunded':
        updateOrder(orderId, { paymentStatus: 'refunded' });
        break;
      case 'showReceipt':
        const order = orders.find(o => o._id === orderId);
        if (order) {
          setActiveOrder(order);
          setShowReceipt(true);
        }
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

  return (
    <div className="p-8 flex-1">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-500 mt-1">Manage all orders placed in Threadix store.</p>
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl border shadow-sm mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search customer name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-72 px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-black outline-none transition"
        />

        <div className="flex gap-3">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 border rounded-xl text-gray-700 focus:ring-2 focus:ring-black outline-none"
          >
            <option value="">All Status</option>
            <option value="pending">Pending</option>
            <option value="in delivery">In Delivery</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <select
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
            className="px-4 py-2.5 border rounded-xl text-gray-700 focus:ring-2 focus:ring-black outline-none"
          >
            <option value="">Payment Status</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Order_id</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Customer</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Total</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Status</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Payment</th>
              <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Date</th>
              <th className="text-right px-6 py-3 text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">Loading orders...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-red-500">{error}</td>
              </tr>
            ) : filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">No orders found.</td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order._id} className="border-b last:border-none hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-gray-700" >
                    <div className="font-medium">{order.orderId}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    <div className="font-medium">{order.name || "Unknown"}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{order.totalPrice} EGP</td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg capitalize ${order.orderStatus === "completed"
                        ? "bg-green-100 text-green-700"
                        : order.orderStatus === "pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : order.orderStatus === "in delivery"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                      {order.orderStatus}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg capitalize ${order.paymentStatus === "paid"
                        ? "bg-green-100 text-green-700"
                        : order.paymentStatus === "unpaid"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                        }`}
                    >
                      {order.paymentStatus}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-gray-700">{formatDate(order.createdAt)}</td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={(e) => {
                        if (!menuPosition) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const menuHeight = 400; // Updated estimated height for taller menu
                          const spaceBelow = window.innerHeight - rect.bottom;
                          const showUpward = spaceBelow < menuHeight;

                          setMenuPosition({
                            orderId: order._id,
                            x: rect.right - 180,
                            y: showUpward ? rect.top - menuHeight - 8 : rect.bottom + 8,
                          });
                        } else {
                          setMenuPosition(null);
                        }
                      }}
                      className="p-2 hover:bg-gray-200 rounded-full transition"
                    >
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              )))}
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
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b">
            Order Status
          </div>
          <button
            onClick={() => handleAction('pending', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <Clock size={16} className="text-yellow-500" />
            Pending
          </button>
          <button
            onClick={() => handleAction('in delivery', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <Truck size={16} className="text-blue-500" />
            In Delivery
          </button>
          <button
            onClick={() => handleAction('completed', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <CheckCircle size={16} className="text-green-500" />
            Completed
          </button>
          <button
            onClick={() => handleAction('cancelled', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <XCircle size={16} className="text-red-500" />
            Cancelled
          </button>

          {/* Payment Status Section */}
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-b mt-1">
            Payment Status
          </div>
          <button
            onClick={() => handleAction('paid', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <CreditCard size={16} className="text-green-500" />
            Paid
          </button>
          <button
            onClick={() => handleAction('unpaid', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <CircleDollarSign size={16} className="text-yellow-500" />
            Unpaid
          </button>
          <button
            onClick={() => handleAction('refunded', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <RotateCcw size={16} className="text-purple-500" />
            Refunded
          </button>

          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-b mt-1">
            General
          </div>
          <button
            onClick={() => handleAction('showReceipt', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <FileText size={16} className="text-gray-600" />
            Show Receipt
          </button>
        </div>
      )}

      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg ${toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
          }`}>
          <span>{toast.message}</span>
          <button onClick={() => setToast({ ...toast, show: false })} className="hover:opacity-80">
            <X size={18} />
          </button>
        </div>
      )}

      {/* RECEIPT MODAL */}
      {showReceipt && activeOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

            {/* Modal Header */}
            <div className="px-8 py-6 border-b flex items-center justify-between bg-gray-50">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Order Receipt</h2>
                <p className="text-sm text-gray-500 mt-1">Order ID: {activeOrder.orderId || activeOrder._id}</p>
              </div>
              <button
                onClick={() => setShowReceipt(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-8 bg-white custom-scrollbar">

              {/* Customer & Shipping Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Customer Info</h3>
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-900">{activeOrder.name}</p>
                    <p className="text-gray-600 text-sm">{activeOrder.email}</p>
                    <p className="text-gray-600 text-sm">{activeOrder.phone}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Shipping Address</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {activeOrder.address}
                  </p>
                </div>
              </div>

              {/* Order Details */}
              <div className="mb-10">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Order Items</h3>
                <div className="border rounded-xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-gray-600">Product</th>
                        <th className="px-4 py-3 text-center font-semibold text-gray-600">Qty</th>
                        <th className="px-4 py-3 text-right font-semibold text-gray-600">Price</th>
                        <th className="px-4 py-3 text-right font-semibold text-gray-600">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {activeOrder.items?.map((item, idx) => (
                        <tr key={idx} className="hover:bg-gray-50 transition">
                          <td className="px-4 py-4">
                            <p className="font-medium text-gray-900">{item.name || "Unknown Product"}</p>
                            {(item.color || item.size) && (
                              <p className="text-xs text-gray-500 mt-0.5">
                                {item.color && <span>Color: {item.color}</span>}
                                {item.color && item.size && <span className="mx-1">•</span>}
                                {item.size && <span>Size: {item.size}</span>}
                              </p>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center text-gray-600">{item.quantity}</td>
                          <td className="px-4 py-4 text-right text-gray-600">{item.price ? `${item.price} EGP` : "—"}</td>
                          <td className="px-4 py-4 text-right font-medium text-gray-900">
                            {item.price ? `${(item.price * parseInt(item.quantity)).toFixed(2)} EGP` : "—"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Order Summary Table */}
              <div className="flex justify-end">
                <div className="w-full max-w-xs space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Payment Method</span>
                    <span className="font-medium text-gray-900">{activeOrder.paymentMethod || "Cash on Delivery"}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-t pt-3">
                    <span className="text-gray-500">Order Status</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${activeOrder.orderStatus === 'completed' ? 'bg-green-100 text-green-700' :
                        activeOrder.orderStatus === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          activeOrder.orderStatus === 'in delivery' ? 'bg-blue-100 text-blue-700' :
                            'bg-red-100 text-red-700'
                      }`}>
                      {activeOrder.orderStatus}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-lg border-t pt-3 mt-2">
                    <span className="font-bold text-gray-900">Grand Total</span>
                    <span className="font-bold text-black">{activeOrder.totalPrice} EGP</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 bg-gray-50 border-t flex justify-end gap-3">
              <button
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition shadow-sm flex items-center gap-2"
              >
                <FileText size={18} />
                Print Receipt
              </button>
              <button
                onClick={() => setShowReceipt(false)}
                className="px-5 py-2.5 bg-black text-white font-medium rounded-xl hover:bg-gray-900 transition shadow-lg"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
