'use client';

import { useEffect, useState } from "react";
import { END_POINT } from "@/config";
import { ShoppingCart, Package, LogOut } from "lucide-react";
import Link from "next/link";

import '@/styles/auth-options.css';

const Header = () => {

  // const router = Navigation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    fetch(END_POINT.LOGOUT, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => json.successful ? window.location.reload() : '')
      .catch(error => console.log(error.message));
  };

  useEffect(() => {
    fetch(END_POINT.VERIFY_TOKEN, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(json => {
        json.successful ? setIsLoggedIn(true) : setIsLoggedIn(false);
      })
      .catch(error => console.log(error.message));
  }, []);

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
            <ShoppingCart size={22} />
            {/* {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs rounded-full px-1.5">
                {cartCount}
              </span>
            )} */}
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
