'use client';

import { useState, useEffect } from "react";
import { END_POINT } from "@/config";
import { MoreVertical, Shield, UserCheck, UserX, Ban } from "lucide-react";
import '@/styles/admin.css';

export default function UsersPage() {

  const [users, setUsers] = useState([]);
  const [targetUser, setTargetUser] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Action menu state (portal-like)
  const [menuPosition, setMenuPosition] = useState(null);
  // { userId, x, y }

  /* =======================
      FETCH USERS
  ======================= */
  const getUsers = () => {
    fetch(END_POINT.USERS, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(json => setUsers(json.data || []))
      .catch(err => console.log(err.message));
  };

  /* =======================
      SEARCH USERS (DEBOUNCE)
  ======================= */
  useEffect(() => {
    const handler = setTimeout(() => {
      if (targetUser.trim()) {
        fetch(`${END_POINT.SEARCH('users')}/${targetUser}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        })
          .then(res => res.json())
          .then(json => setUsers(json.data || []))
          .catch(err => console.log(err.message));
      } else {
        getUsers();
      }
    }, 500);

    return () => clearTimeout(handler);
  }, [targetUser]);

  /* =======================
      FILTER USERS
  ======================= */
  useEffect(() => {
    if (!roleFilter && !statusFilter) {
      getUsers();
      return;
    }

    const params = new URLSearchParams();
    if (roleFilter) params.append('roleFilter', roleFilter);
    if (statusFilter) params.append('statusFilter', statusFilter);

    fetch(`${END_POINT.USERS}/filter?${params.toString()}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(json => setUsers(json.data || []))
      .catch(err => console.log(err.message));
  }, [roleFilter, statusFilter]);

  /* =======================
      UPDATE USER
  ======================= */
  const updateUser = (id, payload) => {
    fetch(`${END_POINT.USERS}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(payload),
    })
      .then(res => res.json())
      .then(() => getUsers())
      .catch(err => console.log(err.message));
  };

  const handleAction = (action, userId) => {
    switch (action) {
      case 'makeAdmin':
        updateUser(userId, { isAdmin: true });
        break;
      case 'restore':
        updateUser(userId, { isAdmin: false });
        break;
      case 'activate':
        updateUser(userId, { isActive: true });
        break;
      case 'suspend':
        updateUser(userId, { isActive: false });
        break;
      default:
        break;
    }
    setMenuPosition(null);
  };

  /* =======================
      CLOSE MENU ON SCROLL / ESC
  ======================= */
  useEffect(() => {
    const close = () => setMenuPosition(null);

    window.addEventListener('scroll', close);
    window.addEventListener('resize', close);

    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('resize', close);
    };
  }, []);

  /* =======================
      INITIAL LOAD
  ======================= */
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="p-8 flex-1">

      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Users</h1>
        <p className="text-gray-500 mt-1">
          Manage all users in the Threadix platform
        </p>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-5 rounded-xl border shadow-sm mb-8 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          value={targetUser}
          onChange={(e) => setTargetUser(e.target.value)}
          placeholder="Search users by name or email..."
          className="w-full md:w-72 px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-black outline-none"
        />

        <div className="flex gap-3">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="px-4 py-2.5 border rounded-xl"
          >
            <option value="">All Roles</option>
            <option value="admin">Admin</option>
            <option value="customer">Customer</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 border rounded-xl"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Suspended</option>
          </select>
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left">User</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Phone</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map(u => (
              <tr
                key={u._id}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-semibold">{u.name}</td>
                <td className="px-6 py-4">{u.email}</td>
                <td className="px-6 py-4">{u.phone ?? '—'}</td>

                <td className="px-6 py-4">
                  <span className="px-2 py-1 text-xs bg-gray-200 rounded">
                    {u.isAdmin ? 'Admin' : 'Customer'}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs rounded ${u.isActive
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                      }`}
                  >
                    {u.isActive ? 'Active' : 'Suspended'}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <button
                    onClick={(e) => {
                      if (!menuPosition) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setMenuPosition({
                          userId: u._id,
                          x: rect.right - 160,
                          y: rect.bottom + 8,
                        });
                      } else {
                        setMenuPosition(null);
                      }
                    }}
                    className="p-2 hover:bg-gray-200 rounded-full"
                  >
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ACTION MENU (FIXED / PORTAL STYLE) */}
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
            onClick={() => handleAction('makeAdmin', menuPosition.userId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <Shield size={16} className="text-purple-600" />
            Make Admin
          </button>

          <button
            onClick={() => handleAction('restore', menuPosition.userId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <UserCheck size={16} className="text-blue-600" />
            Restore Customer
          </button>

          <hr className="my-1" />

          <button
            onClick={() => handleAction('activate', menuPosition.userId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            <UserX size={16} className="text-green-600" />
            Activate
          </button>

          <button
            onClick={() => handleAction('suspend', menuPosition.userId)}
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-red-50 text-red-600"
          >
            <Ban size={16} />
            Suspend
          </button>
        </div>
      )}

    </div>
  );
}
