"use client";

import { useEffect, useState } from "react";
import { END_POINT } from "@/config";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    totalProducts: 0,
    totalRevenue: 0,
    latestOrders: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(END_POINT.ADMIN_STATS, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
      .then(res => res.json())
      .then(json => {
        if (json.successful) {
          setStats(json.data);
        }
      })
      .catch(err => console.error("Error fetching stats:", err))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  return (
    <div className="flex-1 p-4">

      {/* TOP NAV FOR MOBILE */}
      <div className="md:hidden mb-4">
        <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow">
          <div className="font-bold">Threadix Admin</div>
          <button className="text-gray-600 text-xl">☰</button>
        </div>
      </div>

      {/* TITLE */}
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-gray-500">Total Users</div>
          <div className="text-3xl font-bold mt-2">{loading ? "..." : stats.totalUsers}</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-gray-500">Total Orders</div>
          <div className="text-3xl font-bold mt-2">{loading ? "..." : stats.totalOrders}</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-gray-500">Total Products</div>
          <div className="text-3xl font-bold mt-2">{loading ? "..." : stats.totalProducts}</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <div className="text-gray-500">Total Revenue</div>
          <div className="text-xl font-bold mt-2">{loading ? "..." : `${stats.totalRevenue.toFixed(2)}`}</div>
        </div>

      </div>

      {/* LATEST ORDERS */}
      <div className="bg-white p-5 rounded-xl shadow mb-6 overflow-hidden">
        <div className="text-xl font-semibold mb-4">Latest Orders</div>
        {loading ? (
          <div className="text-gray-500 text-center py-4">Loading orders...</div>
        ) : stats.latestOrders && stats.latestOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b">
                <tr>
                  <th className="pb-3 font-semibold text-gray-600">Customer</th>
                  <th className="pb-3 font-semibold text-gray-600">Date</th>
                  <th className="pb-3 font-semibold text-gray-600">Total</th>
                  <th className="pb-3 font-semibold text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {stats.latestOrders.map((order) => (
                  <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 text-sm">
                      <div className="font-medium text-gray-900">{order.customerName || order.name || "N/A"}</div>
                      <div className="text-xs text-gray-500">{order.customerEmail || order.email}</div>
                    </td>
                    <td className="py-4 text-sm text-gray-600">{formatDate(order.createdAt)}</td>
                    <td className="py-4 text-sm font-semibold text-gray-900">{order.totalPrice?.toFixed(2) || "0.00"} EGP</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider ${order.orderStatus === 'completed' ? 'bg-green-100 text-green-700' :
                        order.orderStatus === 'in delivery' ? 'bg-blue-100 text-blue-700' :
                          order.orderStatus === 'cancelled' ? 'bg-red-100 text-red-700' :
                            'bg-yellow-100 text-yellow-700'
                        }`}>
                        {order.orderStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-gray-500 text-center py-4">No orders yet.</div>
        )}
      </div>

      {/* BEST SELLING PRODUCTS */}
      <div className="bg-white p-5 rounded-xl shadow mb-6">
        <div className="text-xl font-semibold mb-4">Best Selling Products</div>
        <div className="text-gray-500 text-center py-4 italic">Available in future updates.</div>
      </div>



    </div>
  );
}
