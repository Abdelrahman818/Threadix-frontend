'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { END_POINT, API_BASE_URL } from '@/config';
import { useUser } from '@/context/UserContext';
import NotFound from '@/app/not-found';
import {
  addDemoCartItem,
  fetchDemoProduct,
  getDemoImageSrc,
  isDemoMode,
} from '@/lib/demoMode';

import '@/styles/item-page.css';

export default function ProductPage() {

  const router = useRouter();
  const { refreshCart } = useUser();
  const [found, setFound] = useState(true);
  const [product, setProduct] = useState(null);
  const [tempImage, setTempImage] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    if (isDemoMode) {
      fetchDemoProduct(id)
        .then((demoProduct) => {
          if (!demoProduct) {
            setFound(false);
            return;
          }
          setProduct(demoProduct);
        })
        .catch(error => console.error(error.message));
      return;
    }

    fetch(END_POINT.GET_PRODUCT(id), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status === 404)
          setFound(false);
        return res.json();
      })
      .then(json => setProduct(json.data))
      .catch(error => console.error(error.message));
  }, [id]);

  useEffect(() => {
    if (product) {
      setTempImage(product.images[0]);
    }
  }, [product]);

  const showMessage = (text, type = 'success') => {
    setMessage(text);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleAddToCart = async () => {
    // Validation: Product exists and in stock
    if (!product) {
      showMessage('Product not found', 'error');
      return;
    }

    if (!product.stock) {
      showMessage('This product is out of stock', 'error');
      return;
    }

    if (isDemoMode) {
      addDemoCartItem(product, quantity);
      showMessage('Added to cart successfully!', 'success');
      refreshCart();
      setQuantity(1);
      return;
    }

    // Send item to backend
    try {
      const response = await fetch(END_POINT.CART(''), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          productId: product._id,
          quantity: quantity,
        }),
      });

      if (response.status === 401) {
        router.push('/auth/login');
        return;
      }

      const json = await response.json();

      if (json.successful) {
        showMessage('Added to cart successfully!', 'success');
        refreshCart();
        setQuantity(1);
      } else {
        showMessage(json.msg || 'Failed to add item to cart', 'error');
      }
    } catch (error) {
      console.error('Add to cart error:', error.message);
      showMessage('Error adding item to cart', 'error');
    }
  };

  const handleBuyNow = async () => {
    // Validation: Product exists and in stock
    if (!product) {
      showMessage('Product not found', 'error');
      return;
    }

    if (!product.stock) {
      showMessage('This product is out of stock', 'error');
      return;
    }

    if (isDemoMode) {
      addDemoCartItem(product, quantity);
      await refreshCart();
      router.push('/checkout/confirm');
      return;
    }

    // Add item to cart and redirect to checkout
    try {
      const response = await fetch(END_POINT.CART(''), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          productId: product._id,
          quantity: quantity,
        }),
      });

      const json = await response.json();

      if (response.status === 401) {
        router.push('/auth/login');
        return;
      }

      if (json.successful) {
        await refreshCart();
        // Redirect to checkout page
        router.push('/checkout/confirm');
      } else {
        showMessage(json.msg || 'Failed to add item to cart', 'error');
      }
    } catch (error) {
      console.error('Buy now error:', error.message);
      showMessage('Error processing your request', 'error');
    }
  };

  return (
    <>
      {found ? (
        <div className="product-new-page">
          {product && (
            <div className="product-container">

              {/* LEFT SIDE */}
              <div className="images-section">
                <div className="main-image">
                  {product && <img src={isDemoMode ? getDemoImageSrc(tempImage) : `${API_BASE_URL}${tempImage}`} alt="Product Main" />}
                </div>

                <div className="image-slider">
                  {product && product.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={isDemoMode ? getDemoImageSrc(img) : `${API_BASE_URL}${img}`}
                      className={tempImage === img ? "active" : ""}
                      onClick={() => setTempImage(img)}
                    />
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="details-section">

                <h1 className="item-title">{product.title}</h1>

                <p className="item-price">{product.salePrice} LE</p>

                <div className="divider" />

                <div className="section">
                  <p className="label">Description</p>
                  <p className="text">
                    {product.desc}
                  </p>
                </div>

                {product.colors && product.colors.length > 0 && (
                  <div className="section">
                    <p className="label">Available Colors</p>
                    <div className="option-list">
                      {product.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className="option-chip"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {product.size && product.size.length > 0 && (
                  <div className="section">
                    <p className="label">Available Sizes</p>
                    <div className="option-list">
                      {product.size.map((size, idx) => (
                        <span
                          key={idx}
                          className="option-chip"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="section">
                  <p className="label">Quantity</p>
                  <div className="quantity-control" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      style={{
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        backgroundColor: '#f5f5f5',
                      }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      style={{
                        width: '60px',
                        padding: '8px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        textAlign: 'center',
                        fontSize: '16px',
                      }}
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      style={{
                        padding: '8px 12px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        backgroundColor: '#f5f5f5',
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="section" style={{ borderTop: '2px solid #eee', paddingTop: '16px', marginTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p className="label" style={{ margin: 0 }}>Final Price:</p>
                    <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: '#000' }}>
                      {product.salePrice * quantity} LE
                    </p>
                  </div>
                </div>

                {message && (
                  <div
                    style={{
                      padding: '12px',
                      borderRadius: '4px',
                      marginBottom: '16px',
                      backgroundColor: message.includes('error') || message.includes('Please') ? '#fee' : '#efe',
                      color: message.includes('error') || message.includes('Please') ? '#c00' : '#060',
                      border: `1px solid ${message.includes('error') || message.includes('Please') ? '#fcc' : '#0c0'}`,
                    }}
                  >
                    {message}
                  </div>
                )}

                <div className="bottom-actions">
                  <button onClick={handleAddToCart} className="btn-add">Add To Cart</button>
                  <button onClick={handleBuyNow} className="btn-buy">Buy Now</button>
                </div>

              </div>
            </div>
          )}
        </div>
      ) : (<NotFound />)}
    </>
  );
}
