"use client";

import { useEffect, useState, useRef } from "react";
import { END_POINT } from "@/config";
import '@/styles/checkout.css';

const EGYPTIAN_GOVERNORATES = [
  'Cairo',
  'Giza',
  'Alexandria',
  'Dakahlia',
  'Sharqia',
  'Qalyubia',
  'Kafr El Sheikh',
  'Gharbia',
  'Monufia',
  'Beheira',
  'Ismailia',
  'Port Said',
  'Suez',
  'North Sinai',
  'South Sinai',
  'Damietta',
  'New Valley',
  'Matruh',
  'Qena',
  'Sohag',
  'Aswan',
  'Luxor',
  'Red Sea',
  'Beni Suef',
  'Faiyum',
  'Minya',
  'Asyut'
];

import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    government: '',
    detailedAddress: '',
  });

  const [shippingCost, setShippingCost] = useState(0);
  const [shippingMessage, setShippingMessage] = useState('will be determined in the next step');
  const [errors, setErrors] = useState({});
  const [notification, setNotification] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const [isLoading, setIsLoading] = useState(true);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  // Modal State
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const initialUserData = useRef(null);

  // Governorate Search State
  const [govSearchTerm, setGovSearchTerm] = useState('');
  const [showGovDropdown, setShowGovDropdown] = useState(false);
  const govDropdownRef = useRef(null);

  useEffect(() => {
    // Fetch current user data from backend
    fetch(END_POINT.GET_CURRENT_USER, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(json => {
        if (json.successful && json.data) {
          const user = json.data;
          const government = user.government || '';
          setFormData(prevData => ({
            ...prevData,
            fullName: user.name || '',
            email: user.email || '',
            phone: user.phone || '',
            government: government,
            city: user.city || '',
            detailedAddress: user.address || '',
          }));
          initialUserData.current = user;
          setGovSearchTerm(government);
          calculateShipping(government);
        }
      })
      .catch(error => {
        console.log('Error fetching user data:', error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    // Fetch cart items for summary
    fetch(END_POINT.CART(''), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(json => {
        if (json.successful && json.data) {
          setCartItems(json.data);
          const total = json.data.reduce((acc, item) => acc + (item.salePrice * item.quantity), 0);
          setSubTotal(total);
        }
      })
      .catch(error => console.log('Error fetching cart:', error.message));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (govDropdownRef.current && !govDropdownRef.current.contains(event.target)) {
        setShowGovDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const calculateShipping = (gov) => {
    if (!gov) {
      setShippingCost(0);
      setShippingMessage('');
      return;
    }

    const normalizedGov = gov.toLowerCase().trim();

    if (normalizedGov === 'cairo' || normalizedGov === 'giza') {
      setShippingCost(50);
      setShippingMessage('');
    } else if (normalizedGov === 'qalyubia' || normalizedGov === 'qalubia') {
      setShippingCost(75);
      setShippingMessage('');
    } else if (normalizedGov === '') {
      setShippingCost(0);
      setShippingMessage('will be determined in the next step');
    } else {
      setShippingCost(0);
      setShippingMessage('Arrange via external courier');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGovSearch = (e) => {
    const value = e.target.value;
    setGovSearchTerm(value);
    setShowGovDropdown(true);
    // Update formData if user is typing a valid governorate
    if (value && EGYPTIAN_GOVERNORATES.includes(value)) {
      setFormData(prevData => ({
        ...prevData,
        government: value,
      }));
      calculateShipping(value);
    } else if (!value) {
      setFormData(prevData => ({
        ...prevData,
        government: '',
      }));
      calculateShipping('');
    }
  };

  const handleGovSelect = (governorate) => {
    setFormData(prevData => ({
      ...prevData,
      government: governorate,
    }));
    setGovSearchTerm(governorate);
    setShowGovDropdown(false);
    calculateShipping(governorate);
  };

  // Validate only Phone for the initial view
  const validatePhoneOnly = () => {
    if (!formData.phone.trim()) {
      setErrors({ phone: 'Phone Number is required' });
      return false;
    }
    setErrors({});
    return true;
  };

  // Validate Full Form (for Modal)
  const validateFullForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.government.trim()) newErrors.government = 'Governorate is required';
    if (!formData.detailedAddress.trim()) newErrors.detailedAddress = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 4000);
  };

  // Step 1: Open Modal
  const handleProceedToConfirmation = (e) => {
    e.preventDefault();
    if (validatePhoneOnly()) {
      setShowConfirmModal(true);
    }
  };

  // Step 2: Final Place Order (Inside Modal)
  const confirmOrder = async () => {
    if (!validateFullForm()) {
      showNotification('error', 'Please fill in all details correctly.');
      return;
    }

    setIsPlacingOrder(true);

    try {
      // 1. Fetch current cart items to calculate real total and get items
      const cartRes = await fetch(END_POINT.CART(''), {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      const cartJson = await cartRes.json();

      if (!cartRes.ok || !cartJson.successful || !cartJson.data || cartJson.data.length === 0) {
        showNotification('error', 'Your cart is empty or could not be retrieved.');
        setIsPlacingOrder(false);
        return;
      }

      const cartItems = cartJson.data;

      // Calculate total price from cart items
      const itemsTotal = cartItems.reduce((acc, item) => acc + (item.salePrice * item.quantity), 0);
      const totalOrderPrice = itemsTotal + shippingCost;

      // 2. Prepare Order Payload
      const orderPayload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        items: cartItems.map(item => ({
          productId: item.productId,
          quantity: item.quantity,
          color: item.color,
          size: item.size
        })),
        totalPrice: totalOrderPrice,
        paymentMethod: 'Cash on Delivery',
        paymentStatus: 'unpaid',
        orderStatus: 'pending',
        address: `${formData.detailedAddress}, ${formData.city}, ${formData.government}`, // Combine for single string schema
      };

      // 3. Create Order
      const response = await fetch(END_POINT.ORDERS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(orderPayload),
      });

      const json = await response.json();

      if (response.ok && json.successful) {

        // 4. Update User Data if Changed
        const initialUser = initialUserData.current;
        if (initialUser && (
          initialUser.phone !== formData.phone ||
          initialUser.government !== formData.government ||
          initialUser.city !== formData.city ||
          initialUser.address !== formData.detailedAddress ||
          initialUser.name !== formData.fullName
        )) {
          // Construct update payload - only send what changed or full profile? 
          // Sending full profile is safer for simpler logic
          const userUpdatePayload = {
            name: formData.fullName,
            phone: formData.phone,
            government: formData.government,
            city: formData.city,
            address: formData.detailedAddress,
          };

          await fetch(`${END_POINT.USERS}/profile`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(userUpdatePayload)
          });
        }

        // 5. Clear Cart
        await fetch(END_POINT.CART(''), {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        setShowConfirmModal(false);
        showNotification('success', 'Order placed successfully! Redirecting...');
        setTimeout(() => {
          router.push('/');
        }, 1500);
      } else {
        showNotification('error', json.message || 'Failed to place order. Please try again.');
        setIsPlacingOrder(false); // Re-enable button on error
      }
    } catch (error) {
      console.error('Error placing order:', error);
      showNotification('error', 'An error occurred. Please try again.');
      setIsPlacingOrder(false); // Re-enable button on error
    }
  };

  const filteredGovernorates = EGYPTIAN_GOVERNORATES.filter(gov =>
    gov.toLowerCase().includes(govSearchTerm.toLowerCase())
  );

  const total = shippingMessage ? subTotal : subTotal + shippingCost;

  return (
    <div className="checkout-page">
      <h1 className="title">Checkout</h1>

      {notification && (
        <div className={`notification-toast ${notification.type === 'success' ? 'notification-success' : 'notification-error'}`}>
          {notification.message}
        </div>
      )}

      {/* ========= Simplified Main View ========= */}

      {/* Phone Number Only */}
      <section className="section">
        <h2 className="section-title">Contact Info</h2>
        <div className="inputs-grid">
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? 'error-input' : ''}
            />
            {errors.phone && <small className="error-text">{errors.phone}</small>}
          </div>
        </div>
      </section>

      {/* Static Shipping Info Display */}
      {(formData.government || formData.city || formData.detailedAddress) && (
        <section className="section">
          <h2 className="section-title">Shipping To</h2>
          <div style={{ padding: '10px 0', fontSize: '16px', color: '#555' }}>
            <p style={{ margin: '0 0 5px' }}>
              <strong>{formData.government}</strong>{formData.city ? `, ${formData.city}` : ''}
            </p>
            <p style={{ margin: 0 }}>{formData.detailedAddress}</p>
          </div>
        </section>
      )}

      {/* Payment Method */}
      <section className="section">
        <h2 className="section-title">Payment Method</h2>
        <div className="payment-box">
          <label>
            <input type="radio" name="payment" defaultChecked readOnly />
            Cash on Delivery
          </label>
        </div>
      </section>

      {/* Order Summary */}
      <section className="section summary">
        <h2 className="section-title">Order Summary</h2>

        {/* Items List */}
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '15px', color: '#555' }}>
              <span>{item.name} x {item.quantity}</span>
              <span>{(item.salePrice * item.quantity).toFixed(2)} EGP</span>
            </div>
          ))}
        </div>

        <div className="summary-item">
          <span>Subtotal</span>
          <span>{subTotal.toFixed(2)} EGP</span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span style={{ fontSize: shippingMessage ? '14px' : '18px', color: shippingMessage ? '#e67e22' : 'inherit' }}>
            {shippingMessage ? shippingMessage : `${shippingCost.toFixed(2)} EGP`}
          </span>
        </div>

        <div className="summary-total">
          <span>Total</span>
          <span>{total.toFixed(2)} EGP</span>
        </div>
      </section>

      {/* Initial Place Order Button */}
      <button
        className="place-order-btn"
        onClick={handleProceedToConfirmation}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Checkout'}
      </button>

      {/* ========= Confirmation Modal ========= */}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Confirm Your Details</h3>
              <button className="close-modal-btn" onClick={() => setShowConfirmModal(false)}>&times;</button>
            </div>

            <p style={{ marginBottom: '20px', color: '#666' }}>
              Please review your information before placing the order.
            </p>

            {/* Modal Form */}
            <div className="inputs-grid" style={{ gap: '15px' }}>

              {/* Full Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={errors.fullName ? 'error-input' : ''}
                  />
                  {errors.fullName && <small className="error-text">{errors.fullName}</small>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error-input' : ''}
                  />
                  {errors.email && <small className="error-text">{errors.email}</small>}
                </div>
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'error-input' : ''}
                />
                {errors.phone && <small className="error-text">{errors.phone}</small>}
              </div>

              {/* Governorate Selection */}
              <div className="gov-select-wrapper" ref={govDropdownRef}>
                <input
                  type="text"
                  name="government"
                  placeholder="Government"
                  value={govSearchTerm}
                  onChange={handleGovSearch}
                  onFocus={() => setShowGovDropdown(true)}
                  className={`gov-search-input ${errors.government ? 'error-input' : ''}`}
                />
                {errors.government && <small className="error-text">{errors.government}</small>}
                {showGovDropdown && filteredGovernorates.length > 0 && (
                  <div className="gov-dropdown">
                    {filteredGovernorates.map((governorate) => (
                      <div
                        key={governorate}
                        className="gov-option"
                        onClick={() => handleGovSelect(governorate)}
                      >
                        {governorate}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* City */}
              <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={errors.city ? 'error-input' : ''}
                />
                {errors.city && <small className="error-text">{errors.city}</small>}
              </div>

              {/* Address */}
              <textarea
                name="detailedAddress"
                placeholder="Detailed Address"
                value={formData.detailedAddress}
                onChange={handleInputChange}
                className={`detailed-address-textarea ${errors.detailedAddress ? 'error-input' : ''}`}
                style={{ minHeight: '80px' }}
              />
              {errors.detailedAddress && <small className="error-text">{errors.detailedAddress}</small>}
            </div>

            {/* Modal Summary */}
            <div className="summary" style={{ marginTop: '20px', background: '#fafafa', padding: '15px', borderRadius: '12px' }}>
              <div className="summary-item" style={{ fontSize: '16px' }}>
                <span>Total with Shipping:</span>
                <strong>{total.toFixed(2)} EGP</strong>
              </div>
              {shippingMessage && <small style={{ color: '#e67e22' }}>{shippingMessage}</small>}
            </div>

            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setShowConfirmModal(false)}>
                Cancel
              </button>
              <button
                className="btn-primary"
                onClick={confirmOrder}
                disabled={isPlacingOrder}
              >
                {isPlacingOrder ? 'Confirming...' : 'Save & Confirm Order'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
