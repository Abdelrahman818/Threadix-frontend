"use client";

import { useEffect, useState } from "react";
import { MoreVertical, Clock, Truck, CheckCircle, XCircle, CreditCard, CircleDollarSign, RotateCcw, X } from "lucide-react";
import { END_POINT } from "@/config";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [paymentFilter, setPaymentFilter] = useState("");
  const [menuPosition, setMenuPosition] = useState(null);
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
                          setMenuPosition({
                            orderId: order._id,
                            x: rect.right - 180,
                            y: rect.bottom + 8,
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

    </div>
  );
}
