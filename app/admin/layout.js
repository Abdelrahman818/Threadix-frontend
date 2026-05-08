'use client';

import Link from "next/link";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { 
  LayoutDashboard, 
  ShoppingBag, 
  ClipboardList, 
  Users, 
  Layers, 
  MessageCircle, 
  Home,
  LogOut,
  Menu,
  X
} from "lucide-react";

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
        className="fixed top-4 left-4 z-50 md:hidden bg-white border rounded p-2 shadow-sm hover:bg-gray-50 transition-colors"
        onClick={() => setDrawerOpen(true)}
        aria-label="Open admin navigation"
      >
        <Menu size={24} color="#111" />
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
        <div className="p-6 font-bold text-2xl flex items-center justify-between border-b bg-gray-50/50">
          <span className="tracking-tighter">THREADIX</span>
          <button
            className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close admin navigation"
          >
            <X size={20} color="#111" />
          </button>
        </div>
        <div className="py-6 px-4">
          <ul className="space-y-1 text-gray-600">
            <li>
              <Link 
                href="/admin/dashboard" 
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-all duration-200 group"
              >
                <LayoutDashboard size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/productMang" 
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-all duration-200 group"
              >
                <ShoppingBag size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Products</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/orderMang" 
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-all duration-200 group"
              >
                <ClipboardList size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Orders</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/usersMang" 
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-all duration-200 group"
              >
                <Users size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Users</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/categoryMang" 
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-all duration-200 group"
              >
                <Layers size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Categories</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/contactMang" 
                onClick={() => setDrawerOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-black hover:text-white transition-all duration-200 group"
              >
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                <span className="font-medium">Contact</span>
              </Link>
            </li>
            
            <div className="pt-4 mt-4 border-t border-gray-100">
              <li>
                <Link 
                  href="/" 
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-100 text-gray-500 hover:text-black transition-all"
                >
                  <Home size={20} />
                  <span className="font-medium">View Store</span>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </aside>
      <div className="flex-1 pt-16 md:pt-0">{children}</div>
    </div>
  )
}

export default AdminLayout;
