'use client';

import { useUser } from "@/context/UserContext";
import { ShoppingCart, Package, LogOut } from "lucide-react";
import Link from "next/link";

import '@/styles/auth-options.css';

const Header = () => {
  const { user, isLoggedIn, logout, cartItems } = useUser();

  return (
    <>
      {!isLoggedIn ? (
        <div className="auth-btns">
          <Link href="/auth/login" className="login-btn text-center">Login</Link>
          <Link href="/auth/signup" className="signup-btn text-center btn-outline">Sign Up</Link>
        </div>
      ) : (
        <div className="flex items-center gap-6 absolute top-0 right-0 w-full justify-end bg-transparent px-10 py-7 text-white z-10">
          <Link
            href="/track"
            className="relative flex items-center gap-1 hover:text-gray-600"
          >
            <Package size={22} />
            <span className="hidden sm:block text-sm">Orders</span>
          </Link>

          {/* Cart */}
          <Link
            href="/checkout/cart"
            className="relative flex items-center gap-1 hover:text-gray-600"
          >
            <div className="relative">
              <ShoppingCart size={22} />
              {cartItems?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
            <span className="hidden sm:block text-sm">Cart</span>
          </Link>

          {/* Logout */}
          <button
            onClick={logout}
            className="flex items-center gap-1 hover:text-gray-600 transition-colors cursor-pointer"
          >
            <LogOut size={22} />
            <span className="hidden sm:block text-sm">Logout</span>
          </button>
        </div>
      )}
    </>
  )
}

export default Header;
