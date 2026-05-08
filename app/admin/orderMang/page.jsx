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
                        e.stopPropagation();
                        if (!menuPosition) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const menuWidth = 176; // w-44 is 11rem = 176px
                          const menuHeight = 220; // Matches maxHeight in CSS
                          
                          // Check if it fits below
                          const spaceBelow = window.innerHeight - rect.bottom;
                          const spaceAbove = rect.top;
                          const showUpward = spaceBelow < menuHeight && spaceAbove > spaceBelow;

                          // Check if it fits on the left
                          let xPosition = rect.right - menuWidth;
                          if (xPosition < 10) xPosition = 10; 

                          setMenuPosition({
                            orderId: order._id,
                            x: xPosition,
                            y: showUpward ? rect.top - menuHeight - 5 : rect.bottom + 5,
                            showUpward
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
            maxHeight: '220px',
            overflowY: 'auto'
          }}
          className="bg-white border rounded-lg shadow-xl w-44 custom-scrollbar"
        >
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b">
            Order Status
          </div>
          <button
            onClick={() => handleAction('pending', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm"
          >
            <Clock size={14} className="text-yellow-500" />
            Pending
          </button>
          <button
            onClick={() => handleAction('in delivery', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm"
          >
            <Truck size={14} className="text-blue-500" />
            In Delivery
          </button>
          <button
            onClick={() => handleAction('completed', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm"
          >
            <CheckCircle size={14} className="text-green-500" />
            Completed
          </button>
          <button
            onClick={() => handleAction('cancelled', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm"
          >
            <XCircle size={14} className="text-red-500" />
            Cancelled
          </button>

          {/* Payment Status Section */}
          <div className="px-3 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wide border-t border-b mt-1">
            Payment
          </div>
          <button
            onClick={() => handleAction('paid', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm"
          >
            <CreditCard size={14} className="text-green-500" />
            Paid
          </button>
          <button
            onClick={() => handleAction('unpaid', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm"
          >
            <CircleDollarSign size={14} className="text-yellow-500" />
            Unpaid
          </button>
          <button
            onClick={() => handleAction('refunded', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm"
          >
            <RotateCcw size={14} className="text-purple-500" />
            Refunded
          </button>

          <div className="px-3 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wide border-t border-b mt-1">
            Misc
          </div>
          <button
            onClick={() => handleAction('showReceipt', menuPosition.orderId)}
            className="flex items-center gap-2 w-full text-left px-3 py-1.5 hover:bg-gray-100 text-sm"
          >
            <FileText size={14} className="text-gray-600" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 print-overlay">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] print-modal-shell">

            {/* Modal Header */}
            <div className="px-8 py-6 border-b flex items-center justify-between bg-gray-50 no-print">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Order Receipt</h2>
                <p className="text-sm text-gray-500 mt-1">Order ID: {activeOrder.orderId || activeOrder._id}</p>
              </div>
              <button
                onClick={() => setShowReceipt(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 transition no-print"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body (Printable Area) */}
            <div id="receipt-content" className="flex-1 overflow-y-auto p-10 bg-white custom-scrollbar printable-receipt">

              {
                (() => {
                  const itemsSubtotal = activeOrder.items?.reduce((sum, item) => sum + (item.price * parseInt(item.quantity || 0)), 0) || 0;
                  const shipping = activeOrder.shippingPrice !== undefined ? activeOrder.shippingPrice : (activeOrder.totalPrice - itemsSubtotal);

                  return (
                    <>
                      {/* Receipt Header / Branding */}
                      <div className="text-center mb-10 border-b pb-8">
                        <h1 className="text-4xl font-extrabold tracking-tight text-black mb-2">THREADIX</h1>
                        <p className="text-gray-500 text-sm italic">Premium Streetwear & Fashion</p>
                        <div className="mt-4 text-xs text-gray-400 space-y-1">
                          <p>Date: {formatDate(activeOrder.createdAt)}</p>
                          <p>Receipt #: {activeOrder._id.toString().slice(-8).toUpperCase()}</p>
                        </div>
                      </div>

                      {/* Customer & Shipping Info */}
                      <div className="grid grid-cols-2 gap-10 mb-10">
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Billed To</h3>
                          <div className="space-y-1">
                            <p className="font-bold text-gray-900 text-base">{activeOrder.name}</p>
                            <p className="text-gray-600 text-sm underline">{activeOrder.email}</p>
                            <p className="text-gray-600 text-sm">{activeOrder.phone}</p>
                          </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Shipping To</h3>
                          <p className="text-gray-700 text-sm leading-relaxed font-medium">
                            {activeOrder.address}
                          </p>
                        </div>
                      </div>

                      {/* Order Details */}
                      <div className="mb-10">
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Order Breakdown</h3>
                        <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                          <table className="w-full text-sm">
                            <thead className="bg-black text-white">
                              <tr>
                                <th className="px-5 py-4 text-left font-bold text-xs uppercase tracking-wider">Product</th>
                                <th className="px-5 py-4 text-center font-bold text-xs uppercase tracking-wider">Qty</th>
                                <th className="px-5 py-4 text-right font-bold text-xs uppercase tracking-wider">Unit Price</th>
                                <th className="px-5 py-4 text-right font-bold text-xs uppercase tracking-wider">Amount</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 italic-rows">
                              {activeOrder.items?.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition">
                                  <td className="px-5 py-5">
                                    <p className="font-bold text-gray-900">{item.name || "Unknown Product"}</p>
                                    {(item.color || item.size) && (
                                      <div className="flex gap-2 mt-1.5">
                                        {item.color && (
                                          <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium border border-gray-200">
                                            {item.color}
                                          </span>
                                        )}
                                        {item.size && (
                                          <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium border border-gray-200">
                                            Size {item.size}
                                          </span>
                                        )}
                                      </div>
                                    )}
                                  </td>
                                  <td className="px-5 py-5 text-center text-gray-700 font-medium">x{item.quantity}</td>
                                  <td className="px-5 py-5 text-right text-gray-600 font-mono text-xs">{item.price ? `${item.price.toFixed(2)} LE` : "—"}</td>
                                  <td className="px-5 py-5 text-right font-bold text-gray-900">
                                    {item.price ? `${(item.price * parseInt(item.quantity)).toFixed(2)} LE` : "—"}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Financials & Footer */}
                      <div className="flex justify-between items-start gap-10">
                        <div className="flex-1">
                          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Notes</h3>
                          <p className="text-gray-500 text-[13px] italic leading-relaxed">
                            {activeOrder.note || "Thank you for shopping with Threadix. For support, please contact help@threadix.com"}
                          </p>
                        </div>
                        <div className="w-full max-w-[240px] space-y-4">
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 font-medium">Payment</span>
                            <span className="font-bold text-gray-900">COD</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 font-medium">Subtotal</span>
                            <span className="font-bold text-gray-900">{itemsSubtotal.toFixed(2)} LE</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-500 font-medium">Shipping</span>
                            <span className="font-bold text-gray-900">{shipping.toFixed(2)} LE</span>
                          </div>
                          <div className="flex justify-between items-center text-xl border-t-2 border-black pt-4 mt-2">
                            <span className="font-black text-black uppercase tracking-tighter text-base">Total</span>
                            <span className="font-black text-black">{activeOrder.totalPrice.toFixed(2)} LE</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-16 text-center border-t border-dashed border-gray-200 pt-8 hidden print-block">
                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em]">Authorized Threadix Receipt</p>
                      </div>
                    </>
                  );
                })()
              }

            </div>

            {/* Modal Footer */}
            <div className="px-8 py-5 bg-gray-50 border-t flex justify-end gap-3 no-print">
              <button
                onClick={() => window.print()}
                className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition shadow-sm flex items-center gap-2"
              >
                <FileText size={18} />
                Print Now
              </button>
              <button
                onClick={() => setShowReceipt(false)}
                className="px-6 py-2.5 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* GLOBAL STYLES (Moved outside conditional) */}
      <style jsx global>{`
        /* Custom scrollbar for menu and modal */
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8f8f8;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #bbb;
        }

        @media print {
          /* 1. Hide everything on the page */
          body * {
            visibility: hidden !important;
          }
          
          /* 2. Target the receipt and ALL its ancestors to be visible */
          .print-overlay, 
          .print-overlay *,
          .print-modal-shell, 
          .print-modal-shell *,
          #receipt-content, 
          #receipt-content * {
            visibility: visible !important;
          }

          /* 2b. Specifically ensure no-print items stay hidden */
          .no-print, .no-print * {
            visibility: hidden !important;
            display: none !important;
          }

          /* 3. Reset the container to take up the full paper */
          .print-overlay {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: auto !important;
            background: white !important;
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
            z-index: 99999 !important;
          }

          .print-modal-shell {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            max-width: none !important;
            border: none !important;
            box-shadow: none !important;
            overflow: visible !important;
          }

          #receipt-content {
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          @page {
            margin: 1cm;
            size: auto;
          }
        }
      `}</style>

    </div>
  );
}
