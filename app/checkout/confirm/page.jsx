"use client";

import { useEffect, useState, useRef } from "react";
import { END_POINT } from "@/config";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import styles from '@/styles/checkout.module.css';

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
  const { user, loading: userLoading, cartItems: ctxCartItems, refreshCart } = useUser();
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

  const validatePhoneOnly = () => {
    if (!formData.phone.trim()) {
      setErrors({ phone: 'Phone Number is required' });
      return false;
    }
    setErrors({});
    return true;
  };

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

  const handleProceedToConfirmation = (e) => {
    e.preventDefault();
    if (validatePhoneOnly()) {
      setShowConfirmModal(true);
    }
  };

  const confirmOrder = async () => {
    if (!validateFullForm()) {
      showNotification('error', 'Please fill in all details correctly.');
      return;
    }

    setIsPlacingOrder(true);

    try {
      if (ctxCartItems.length === 0) {
        showNotification('error', 'Your cart is empty.');
        setIsPlacingOrder(false);
        return;
      }

      const cartItemsForOrder = ctxCartItems;

      // Calculate total price from cart items
      const itemsTotal = cartItemsForOrder.reduce((acc, item) => acc + (item.salePrice * item.quantity), 0);
      const totalOrderPrice = itemsTotal + shippingCost;

      // 2. Prepare Order Payload
      const orderPayload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        items: cartItemsForOrder.map(item => ({
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

        // 4. Update User Data if Changed (only update fields that exist in the schema)
        const initialUser = initialUserData.current;
        if (initialUser && (
          initialUser.phone !== formData.phone ||
          initialUser.address !== formData.detailedAddress ||
          initialUser.name !== formData.fullName
        )) {
          // Construct update payload - only send fields that exist in Users model
          const userUpdatePayload = {
            name: formData.fullName,
            phone: formData.phone,
            address: formData.detailedAddress,
          };

          try {
            const userUpdateResponse = await fetch(`${END_POINT.USERS}/profile`, {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              credentials: 'include',
              body: JSON.stringify(userUpdatePayload)
            });
            
            // Don't fail the order if profile update fails
            if (!userUpdateResponse.ok) {
              console.warn('Profile update failed, but order was placed successfully');
            }
          } catch (updateError) {
            // Silently fail - order is already placed
            console.warn('Profile update error:', updateError);
          }
        }

        // 5. Clear Cart & Refresh
        await fetch(END_POINT.CART(''), {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });
        refreshCart();

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

  useEffect(() => {
    if (!userLoading && !user) {
      router.replace('/auth/login');
      return;
    }

    if (user) {
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
      setIsLoading(false);
    }
  }, [user, userLoading, router]);

  // Sync local cartItems for subtotal calculation
  useEffect(() => {
    if (ctxCartItems) {
      setCartItems(ctxCartItems);
      const total = ctxCartItems.reduce((acc, item) => acc + (item.salePrice * item.quantity), 0);
      setSubTotal(total);
    }
  }, [ctxCartItems]);

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

  const total = shippingMessage ? subTotal : subTotal + shippingCost;

  return (
    <div className={styles['checkout-page']}>
      <h1 className={styles.title}>Checkout</h1>

      {notification && (
        <div className={`${styles['notification-toast']} ${notification.type === 'success' ? styles['notification-success'] : styles['notification-error']}`}>
          {notification.message}
        </div>
      )}

      {/* Phone Number Only */}
      <section className={styles.section}>
        <h2 className={styles['section-title']}>Contact Info</h2>
        <div className={styles['inputs-grid']}>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              className={errors.phone ? styles['error-input'] : ''}
            />
            {errors.phone && <small className={styles['error-text']}>{errors.phone}</small>}
          </div>
        </div>
      </section>

      {/* Static Shipping Info Display */}
      {(formData.government || formData.city || formData.detailedAddress) && (
        <section className={styles.section}>
          <h2 className={styles['section-title']}>Shipping To</h2>
          <div style={{ padding: '10px 0', fontSize: '16px', color: '#555' }}>
            <p style={{ margin: '0 0 5px' }}>
              <strong>{formData.government}</strong>{formData.city ? `, ${formData.city}` : ''}
            </p>
            <p style={{ margin: 0 }}>{formData.detailedAddress}</p>
          </div>
        </section>
      )}

      {/* Payment Method */}
      <section className={styles.section}>
        <h2 className={styles['section-title']}>Payment Method</h2>
        <div className={styles['payment-box']}>
          <label>
            <input type="radio" name="payment" defaultChecked readOnly />
            Cash on Delivery
          </label>
        </div>
      </section>

      {/* Order Summary */}
      <section className={`${styles.section} ${styles.summary}`}>
        <h2 className={styles['section-title']}>Order Summary</h2>

        {/* Items List */}
        <div style={{ marginBottom: '20px', borderBottom: '1px solid #f0f0f0', paddingBottom: '10px' }}>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '15px', color: '#555' }}>
              <span>{item.name} x {item.quantity}</span>
              <span>{(item.salePrice * item.quantity).toFixed(2)} LE</span>
            </div>
          ))}
        </div>

        <div className={styles['summary-item']}>
          <span>Subtotal</span>
          <span>{subTotal.toFixed(2)} LE</span>
        </div>
        <div className={styles['summary-item']}>
          <span>Shipping</span>
          <span style={{ fontSize: shippingMessage ? '14px' : '18px', color: shippingMessage ? '#e67e22' : 'inherit' }}>
            {shippingMessage ? shippingMessage : `${shippingCost.toFixed(2)} LE`}
          </span>
        </div>

        <div className={styles['summary-total']}>
          <span>Total</span>
          <span>{total.toFixed(2)} LE</span>
        </div>
      </section>

      {/* Initial Place Order Button */}
      <button
        className={styles['place-order-btn']}
        onClick={handleProceedToConfirmation}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Checkout'}
      </button>

      {/* ========= Confirmation Modal ========= */}
      {showConfirmModal && (
        <div className={styles['modal-overlay']}>
          <div className={styles['modal-content']}>
            <div className={styles['modal-header']}>
              <h3 className={styles['modal-title']}>Confirm Your Details</h3>
              <button className={styles['close-modal-btn']} onClick={() => setShowConfirmModal(false)}>&times;</button>
            </div>

            <p style={{ marginBottom: '20px', color: '#666' }}>
              Please review your information before placing the order.
            </p>

            {/* Modal Form */}
            <div className={styles['inputs-grid']} style={{ gap: '15px' }}>

              {/* Full Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={errors.fullName ? styles['error-input'] : ''}
                  />
                  {errors.fullName && <small className={styles['error-text']}>{errors.fullName}</small>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    className={errors.email ? styles['error-input'] : ''}
                    disabled
                  />
                  {errors.email && <small className={styles['error-text']}>{errors.email}</small>}
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
                  className={errors.phone ? styles['error-input'] : ''}
                />
                {errors.phone && <small className={styles['error-text']}>{errors.phone}</small>}
              </div>

              {/* Governorate Selection */}
              <div className={styles['gov-select-wrapper']} ref={govDropdownRef}>
                <input
                  type="text"
                  name="government"
                  placeholder="Government"
                  value={govSearchTerm}
                  onChange={handleGovSearch}
                  onFocus={() => setShowGovDropdown(true)}
                  className={`${styles['gov-search-input']} ${errors.government ? styles['error-input'] : ''}`}
                />
                {errors.government && <small className={styles['error-text']}>{errors.government}</small>}
                {showGovDropdown && filteredGovernorates.length > 0 && (
                  <div className={styles['gov-dropdown']}>
                    {filteredGovernorates.map((governorate) => (
                      <div
                        key={governorate}
                        className={styles['gov-option']}
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
                  className={errors.city ? styles['error-input'] : ''}
                />
                {errors.city && <small className={styles['error-text']}>{errors.city}</small>}
              </div>

              {/* Address */}
              <textarea
                name="detailedAddress"
                placeholder="Detailed Address"
                value={formData.detailedAddress}
                onChange={handleInputChange}
                className={`${styles['detailed-address-textarea']} ${errors.detailedAddress ? styles['error-input'] : ''}`}
                style={{ minHeight: '80px' }}
              />
              {errors.detailedAddress && <small className={styles['error-text']}>{errors.detailedAddress}</small>}
            </div>

            {/* Modal Summary */}
            <div className={styles.summary} style={{ marginTop: '20px', background: '#fafafa', padding: '15px', borderRadius: '12px' }}>
              <div className={`${styles['summary-item']} flex flex-col`} style={{ fontSize: '16px' }}>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <strong>{shippingCost.toFixed(2)} LE</strong>
                </div>
                <div className="flex justify-between">
                  <span>Total with Shipping:</span>
                  <strong>{total.toFixed(2)} LE</strong>
                </div>
              </div>
              {shippingMessage && <small style={{ color: '#e67e22' }}>{shippingMessage}</small>}
            </div>

            <div className={styles['modal-actions']}>
              <button className={styles['btn-secondary']} onClick={() => setShowConfirmModal(false)}>
                Cancel
              </button>
              <button
                className={styles['btn-primary']}
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
