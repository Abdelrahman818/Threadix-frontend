'use client';

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserProvider } from "@/context/UserContext";

const AdminLayout = ({ children }) => {
  const { user, loading, isAdmin } = useUser();
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push('/');
    }
  }, [isAdmin, loading, router]);

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>;
  }

  if (!isAdmin) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile drawer button */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white border rounded p-2 shadow"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open admin navigation"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      {/* Drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}
      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-white border-r shadow-lg transform transition-transform duration-200 md:static md:translate-x-0 ${drawerOpen ? 'translate-x-0' : '-translate-x-full'} md:block`}
        style={{ minHeight: '100vh' }}
      >
        <div className="p-4 font-bold text-xl flex items-center justify-between">
          Threadix Admin
          <button
            className="md:hidden p-1 ml-2"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close admin navigation"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6"/></svg>
          </button>
        </div>
        <ul className="p-4 space-y-3 text-gray-700">
          <li className="hover:text-black cursor-pointer"><Link href="/admin/dashboard" onClick={() => setDrawerOpen(false)}>Dashboard</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/admin/productMang" onClick={() => setDrawerOpen(false)}>Products</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/admin/orderMang" onClick={() => setDrawerOpen(false)}>Orders</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/admin/usersMang" onClick={() => setDrawerOpen(false)}>Users</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/admin/categoryMang" onClick={() => setDrawerOpen(false)}>Categories</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/admin/contactMang" onClick={() => setDrawerOpen(false)}>Contact</Link></li>
          <li className="hover:text-black cursor-pointer"><Link href="/" onClick={() => setDrawerOpen(false)}>Home</Link></li>
        </ul>
      </aside>
      <div className="flex-1 pt-16 md:pt-0">{children}</div>
    </div>
  )
}

export default AdminLayout;
