'use client';

import { useState, useEffect } from 'react';
import { END_POINT } from '@/config';
import { useUser } from '@/context/UserContext';
import '@/styles/track.css';

export default function Tracking() {
  const { isLoggedIn } = useUser();
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);
  const [userOrders, setUserOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingOrders, setIsLoadingOrders] = useState(false);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  // Fetch user orders if logged in
  useEffect(() => {
    if (isLoggedIn) {
      fetchUserOrders();
    }
  }, [isLoggedIn]);

  const fetchUserOrders = async () => {
    try {
      setIsLoadingOrders(true);
      const res = await fetch(END_POINT.MY_ORDERS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const json = await res.json();

      if (res.ok && json.successful) {
        setUserOrders(json.data || []);
      } else {
        console.error('Error fetching orders:', json.msg);
        setUserOrders([]);
      }
    } catch (err) {
      console.error('Error fetching user orders:', err);
      setUserOrders([]);
    } finally {
      setIsLoadingOrders(false);
    }
  };

  // Map order status to tracking steps
  const getTrackingSteps = (orderStatus) => {
    const steps = [
      { id: 'pending', label: 'Order Placed', status: 'pending' },
      { id: 'processing', label: 'Processing', status: 'pending' },
      { id: 'in delivery', label: 'In Delivery', status: 'in delivery' },
      { id: 'completed', label: 'Delivered', status: 'completed' },
    ];

    // Map order status to step completion
    const statusMap = {
      'pending': 0, // Only "Order Placed" is completed
      'in delivery': 2, // "Order Placed" and "Processing" are completed, "In Delivery" is active
      'completed': 3, // All steps completed
      'cancelled': -1, // Special case for cancelled
    };

    const currentStep = statusMap[orderStatus] || 0;

    return steps.map((step, index) => {
      if (orderStatus === 'cancelled') {
        return { ...step, completed: false, cancelled: true };
      }
      return {
        ...step,
        completed: index <= currentStep,
        active: index === currentStep && orderStatus !== 'completed',
      };
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const calculateEstimatedDelivery = (createdAt) => {
    if (!createdAt) return 'N/A';
    const orderDate = new Date(createdAt);
    // Add 5-7 business days for delivery
    const deliveryDate = new Date(orderDate);
    deliveryDate.setDate(deliveryDate.getDate() + 7);
    return formatDate(deliveryDate);
  };

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    
    if (!orderId.trim()) {
      setError('Please enter an order number');
      return;
    }

    setIsLoading(true);
    setError('');
    setOrder(null);
    setSearched(true);
    setSelectedOrderId(null);

    try {
      const res = await fetch(END_POINT.TRACK_ORDER(orderId.trim()), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const json = await res.json();

      if (res.ok && json.successful) {
        setOrder(json.data);
        setError('');
      } else {
        setError(json.msg || 'Order not found. Please check your order number.');
        setOrder(null);
      }
    } catch (err) {
      console.error('Tracking error:', err);
      setError('An error occurred while tracking your order. Please try again.');
      setOrder(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOrderClick = async (clickedOrderId) => {
    setSelectedOrderId(clickedOrderId);
    setOrderId(clickedOrderId.toString());
    setIsLoading(true);
    setError('');
    setSearched(true);

    try {
      const res = await fetch(END_POINT.TRACK_ORDER(clickedOrderId), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const json = await res.json();

      if (res.ok && json.successful) {
        setOrder(json.data);
        setError('');
      } else {
        setError(json.msg || 'Order not found.');
        setOrder(null);
      }
    } catch (err) {
      console.error('Tracking error:', err);
      setError('An error occurred while loading order details.');
      setOrder(null);
    } finally {
      setIsLoading(false);
    }
  };

  const trackingSteps = order ? getTrackingSteps(order.orderStatus) : [];

  return (
    <div className="tracking-page-container">
      <div className="tracking-main-content">
        <div className="tracking-page">
          <h1 className="title">Order Tracking</h1>

          {/* ======== Track Input ======== */}
          <form className="track-box" onSubmit={handleTrackOrder}>
            <input
              type="text"
              placeholder="Enter Order Number"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Tracking...' : 'Track Order'}
            </button>
          </form>

          {/* ======== Error Message ======== */}
          {error && searched && (
            <div className="error-message">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 15H9v-2h2v2zm0-4H9V7h2v4z" fill="#ef4444"/>
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* ======== Order Details ======== */}
          {order && (
            <>
              <div className="order-info">
                <h2>Order Details</h2>

                <div className="info-row">
                  <span>Order Number:</span>
                  <span>#{order.orderId}</span>
                </div>

                <div className="info-row">
                  <span>Customer Name:</span>
                  <span>{order.name || 'N/A'}</span>
                </div>

                <div className="info-row">
                  <span>Email:</span>
                  <span>{order.email || 'N/A'}</span>
                </div>

                {order.phone && (
                  <div className="info-row">
                    <span>Phone:</span>
                    <span>{order.phone}</span>
                  </div>
                )}

                <div className="info-row">
                  <span>Order Status:</span>
                  <span className={`status-badge status-${order.orderStatus.replace(' ', '-')}`}>
                    {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                  </span>
                </div>



                <div className="info-row">
                  <span>Payment Method:</span>
                  <span>{order.paymentMethod || 'N/A'}</span>
                </div>

                <div className="info-row">
                  <span>Total Amount:</span>
                  <span>{order.totalPrice?.toFixed(2) || '0.00'} LE</span>
                </div>

                <div className="info-row">
                  <span>Order Date:</span>
                  <span>{formatDate(order.createdAt)}</span>
                </div>

                <div className="info-row">
                  <span>Estimated Delivery:</span>
                  <span>{calculateEstimatedDelivery(order.createdAt)}</span>
                </div>

                {order.address && (
                  <div className="info-row">
                    <span>Delivery Address:</span>
                    <span>{order.address}</span>
                  </div>
                )}

                {order.items && order.items.length > 0 && (
                  <div className="order-items">
                    <h3>Order Items</h3>
                    {order.items.map((item, index) => (
                      <div key={index} className="order-item">
                        <div className="item-info">
                          <span className="item-quantity">Qty: {item.quantity}</span>
                          {item.color && <span className="item-attr">Color: {item.color}</span>}
                          {item.size && <span className="item-attr">Size: {item.size}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* ======== Tracking Steps ======== */}
              {order.orderStatus !== 'cancelled' ? (
                <div className="steps">
                  {trackingSteps.map((step, index) => (
                    <div key={step.id} className="step-wrapper">
                      <div
                        className={`step ${step.completed ? 'completed' : ''} ${step.active ? 'active' : ''}`}
                      >
                        <div className="circle">
                          {step.completed && (
                            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="white"/>
                            </svg>
                          )}
                        </div>
                        <p>{step.label}</p>
                      </div>
                      {index < trackingSteps.length - 1 && (
                        <div className={`step-line ${step.completed ? 'completed' : ''}`}></div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="cancelled-message">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#ef4444"/>
                  </svg>
                  <p>This order has been cancelled.</p>
                </div>
              )}
            </>
          )}

          {/* ======== Empty State ======== */}
          {!order && !error && searched && (
            <div className="empty-state">
              <p>Enter an order number above to track your order.</p>
            </div>
          )}
        </div>
      </div>

      {/* ======== Orders Sidebar ======== */}
      {isLoggedIn && (
        <aside className="orders-sidebar">
          <div className="sidebar-header">
            <h2>My Orders</h2>
            <span className="orders-count">{userOrders.length}</span>
          </div>

          {isLoadingOrders ? (
            <div className="sidebar-loading">
              <p>Loading orders...</p>
            </div>
          ) : userOrders.length === 0 ? (
            <div className="sidebar-empty">
              <p>No orders yet</p>
            </div>
          ) : (
            <div className="orders-list">
              {userOrders.map((orderItem) => (
                <div
                  key={orderItem._id}
                  className={`order-card ${selectedOrderId === orderItem.orderId ? 'active' : ''}`}
                  onClick={() => handleOrderClick(orderItem.orderId)}
                >
                  <div className="order-card-header">
                    <span className="order-number">#{orderItem.orderId}</span>
                    <span className={`order-status-badge status-${orderItem.orderStatus.replace(' ', '-')}`}>
                      {orderItem.orderStatus}
                    </span>
                  </div>
                  <div className="order-card-body">
                    <div className="order-card-info">
                      <span className="order-date">{formatDate(orderItem.createdAt)}</span>
                      <span className="order-total">{orderItem.totalPrice?.toFixed(2) || '0.00'} LE</span>
                    </div>
                    {/* Payment status removed as requested */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </aside>
      )}
    </div>
  );
}
