'use client';

import { END_POINT } from "@/config";
import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const UserContext = createContext(null);

export function UserProvider({ children }) {

  const router = useRouter();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(END_POINT.GET_CURRENT_USER, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (res.status === 401) return;
      const json = await res.json();
      if (json.successful) {
        setUser(json.data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Error fetching user:", error.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchCart = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(END_POINT.CART(''), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      const json = await res.json();
      setCart(json.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = async () => {
    try {
      const res = await fetch(END_POINT.LOGOUT, {
        method: 'GET',
        credentials: 'include',
      });
      const json = await res.json();
      if (json.successful) {
        setUser(null);
        router.push('/');
      }
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchCart();
  }, [fetchUser, fetchCart]);

  const value = {
    user,
    cartItems: cart,
    loading,
    isLoggedIn: !!user,
    isAdmin: user?.isAdmin || false,
    isCustomer: user && !user.isAdmin,
    logout,
    refreshUser: fetchUser,
    refreshCart: fetchCart,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
