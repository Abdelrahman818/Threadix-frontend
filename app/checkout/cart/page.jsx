"use client";

import { Minus, Plus, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API_BASE_URL, END_POINT } from "@/config";
import { useUser } from '@/context/UserContext';
import Link from "next/link";
import '@/styles/cart.css';

export default function CartPage() {

  const router = useRouter();
  const { cartItems: ctxCartItems, loading, refreshCart } = useUser();
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [toast, setToast] = useState({ show: false, message: '', type: 'error' });

  useEffect(() => {
    if (ctxCartItems) {
      setCartItems(ctxCartItems);
    }
  }, [ctxCartItems]);

  const updateQtyOnServer = async (id, newQty) => {
    try {
      const res = await fetch(END_POINT.CART(`item/${id}`), {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quantity: newQty }),
        credentials: 'include',
      });
      const json = await res.json();
      if (res.status === 401) {
        router.replace('/auth/login');
        return;
      }
      if (!json.successful) {
        setToast({ show: true, message: json.msg || 'Failed to update quantity', type: 'error' });
        return false;
      }
      refreshCart();
      return true;
    } catch (err) {
      console.error(err.message);
      setToast({ show: true, message: 'Connection error. Quantity not saved.', type: 'error' });
      return false;
    }
  };

  const increaseQty = async (id) => {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;
    const newQty = item.quantity + 1;

    // Optimistic update
    setCartItems(items => items.map(i => i.id === id ? { ...i, quantity: newQty } : i));

    const success = await updateQtyOnServer(id, newQty);
    if (!success) {
      // Rollback
      setCartItems(items => items.map(i => i.id === id ? { ...i, quantity: item.quantity } : i));
    }
  };

  const decreaseQty = async (id) => {
    const item = cartItems.find(i => i.id === id);
    if (!item || item.quantity <= 1) return;
    const newQty = item.quantity - 1;

    // Optimistic update
    setCartItems(items => items.map(i => i.id === id ? { ...i, quantity: newQty } : i));

    const success = await updateQtyOnServer(id, newQty);
    if (!success) {
      // Rollback
      setCartItems(items => items.map(i => i.id === id ? { ...i, quantity: item.quantity } : i));
    }
  };

  const removeItem = async (id) => {
    try {
      const res = await fetch(END_POINT.CART(`item/${id}`), {
        method: 'DELETE',
        credentials: 'include',
      });
      const json = await res.json();
      if (res.status === 401) {
        router.replace('/auth/login');
        return;
      }
      if (json.successful) {
        setCartItems((items) => items.filter((item) => item.id !== id));
        refreshCart();
      } else {
        setToast({ show: true, message: json.msg || 'Failed to remove item', type: 'error' });
      }
    } catch (err) {
      console.error(err.message);
      setToast({ show: true, message: 'An error occurred while removing the item', type: 'error' });
    }
  };

  useEffect(() => {
    const total = cartItems?.reduce(
      (acc, item) => acc + (item.salePrice * item.quantity),
      0
    );
    setSubTotal(total);
  }, [cartItems]);

  // Format item name with color and size in brackets
  const formatItemName = (item) => {
    const parts = [];
    if (item.color) parts.push(item.color);
    if (item.size) parts.push(item.size);
    
    if (parts.length > 0) {
      return `${item.name} (${parts.join(', ')})`;
    }
    return item.name;
  };

  if (loading && cartItems?.length === 0) {
    return (
      <section className="cart-page flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h1>Your Cart</h1>
      { }
      {cartItems?.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link href="/shop">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {cartItems?.length > 0 && cartItems?.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  className="rounded-md"
                  src={API_BASE_URL + item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                />

                <div className="item-info">
                  <h3>{formatItemName(item)}</h3>
                  <p className="price">{item.salePrice} LE</p>

                  <div className="quantity">
                    <button onClick={() => decreaseQty(item.id)}>
                      <Minus size={16} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <button
                  className="remove"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="summary">
            <h2>Order Summary</h2>

            <div className="row">
              <span>Subtotal</span>
              <span>{subTotal} LE</span>
            </div>

            <button className="checkout-btn">
              <Link href='/checkout/confirm'>
                Proceed to Checkout
              </Link>
            </button>
          </div>
        </div>
      )}
      {/* TOAST NOTIFICATION */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg ${toast.type === 'error' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
          }`}>
          <span>{toast.message}</span>
          <button onClick={() => setToast({ ...toast, show: false })} className="hover:opacity-80">
            <X size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
