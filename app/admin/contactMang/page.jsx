'use client';

import { useState, useEffect } from "react";
import { END_POINT } from "@/config";
import { MoreVertical, X } from "lucide-react";
import dayjs from "dayjs";

export default function ContactMessagesPage() {

  const [msgs, setMsgs] = useState([]);
  const [displayMsg, setDisplayMsg] = useState(false);
  const [activeMsg, setActiveMsg] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [search, setSearch] = useState("");

  const filteredMsgs = msgs?.filter(msg => {
    const searchTerm = search.toLowerCase();
    return (
      msg.name?.toLowerCase().includes(searchTerm) ||
      msg.email?.toLowerCase().includes(searchTerm) ||
      msg.subj?.toLowerCase().includes(searchTerm)
    );
  });

  const sendReq = async (pathExt = '') => {
    setIsDisabled(true);
    try {
      const res = await fetch(`${END_POINT.CONTACT}${pathExt}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      const json = await res.json();
      setMsgs(json.data || []);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsDisabled(false);
    }
  };

  const openMsg = async (id, msg) => {
    sendReq('/' + id);
    setActiveMsg(msg);
    setDisplayMsg(true);
  };

  useEffect(() => {
    sendReq('/new');
  }, []);

  return (
    <div className="p-8 flex-1">

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Contact Messages
        </h1>
        <p className="text-gray-500 mt-1">
          Manage all customer messages sent via the contact form.
        </p>
      </div>

      <div className="bg-white p-5 rounded-xl border shadow-sm mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search by name, email or subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-72 px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-black outline-none transition"
        />

        <select
          className="w-full md:w-48 px-4 py-2.5 border rounded-xl text-gray-700 focus:ring-2 focus:ring-black outline-none transition cursor-pointer"
          defaultValue='new'
          name="contactFilter"
          id="filter"
          onChange={(e) => sendReq('/' + e.target.value)}
          disabled={isDisabled}
        >
          <option value="new">Unread Messages</option>
          <option value="read">Read Messages</option>
          <option value="">All Messages</option>
        </select>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Subject</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Message</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredMsgs?.map(msg => (
              <tr
                key={msg._id}
                className="border-b last:border-none hover:bg-gray-50 transition"
                onClick={() => openMsg(msg._id, msg)}
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {msg.name}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {msg.email}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {msg.subj}
                </td>

                <td className="px-6 py-4 text-gray-700 truncate max-w-xs">
                  {msg.msg}
                </td>

                <td className="px-6 py-4 text-gray-700">
                  {dayjs(msg.createdAt).format("DD/MM/YYYY")}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${msg.isReaded
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {msg.isReaded ? "Read" : "Unread"}
                  </span>
                </td>

                <td className="px-6 py-4 text-right">
                  <button
                    className="p-2 rounded-full hover:bg-gray-200 transition"
                  >
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {displayMsg && activeMsg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl">

            <div className="flex items-start justify-between px-6 py-4 border-b">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {activeMsg.subj}
                </h2>
                <p className="text-sm text-gray-500">
                  {activeMsg.name} · {activeMsg.email}
                </p>
              </div>

              <button
                onClick={() => setDisplayMsg(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            </div>

            <div className="px-6 py-5 text-gray-700 leading-relaxed">
              {activeMsg.msg}
            </div>

            <div className="px-6 py-4 border-t flex items-center justify-between text-sm">
              <span className="text-gray-500">
                {dayjs(activeMsg.createdAt).format("DD MMM YYYY • HH:mm")}
              </span>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
