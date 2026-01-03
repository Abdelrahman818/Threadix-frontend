'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { END_POINT, API_BASE_URL } from '@/config';
import { useUser } from '@/context/UserContext';
import NotFound from '@/app/not-found';

import '@/styles/item-page.css';

export default function ProductPage() {

  const router = useRouter();
  const { refreshCart } = useUser();
  const [found, setFound] = useState(true);
  const [product, setProduct] = useState(null);
  const [tempImage, setTempImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');
  const { id } = useParams();

  useEffect(() => {
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
  }, []);

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

    // Validation: Check if color is required and selected
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      showMessage('Please select a color', 'error');
      return;
    }

    // Validation: Check if size is required and selected
    if (product.size && product.size.length > 0 && !selectedSize) {
      showMessage('Please select a size', 'error');
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
          ...(product.colors && product.colors.length > 0 && { color: selectedColor }),
          ...(product.size && product.size.length > 0 && { size: selectedSize }),
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

        // Reset selections
        setSelectedColor(null);
        setSelectedSize(null);
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

    // Validation: Check if color is required and selected
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      showMessage('Please select a color', 'error');
      return;
    }

    // Validation: Check if size is required and selected
    if (product.size && product.size.length > 0 && !selectedSize) {
      showMessage('Please select a size', 'error');
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
          ...(product.colors && product.colors.length > 0 && { color: selectedColor }),
          ...(product.size && product.size.length > 0 && { size: selectedSize }),
        }),
      });

      const json = await response.json();

      if (response.status === 401) {
        router.push('/auth/login');
        return;
      }

      if (json.successful) {
        refreshCart();
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
                  {product && <img src={`${API_BASE_URL}${tempImage}`} alt="Product Main" />}
                </div>

                <div className="image-slider">
                  {product && product.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={`${API_BASE_URL}${img}`}
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
                    <div className="colors-group" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {product.colors.map((color, idx) => (
                        <span
                          key={idx}
                          className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                          onClick={() => setSelectedColor(color)}
                          style={{
                            padding: '8px 16px',
                            border: selectedColor === color ? '2px solid #000' : '1px solid #ccc',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            backgroundColor: selectedColor === color ? '#000' : '#fff',
                            color: selectedColor === color ? '#fff' : '#000',
                            transition: 'all 0.2s',
                          }}
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
                    <div className="sizes-group" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {product.size.map((size, idx) => (
                        <span
                          key={idx}
                          className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                          onClick={() => setSelectedSize(size)}
                          style={{
                            padding: '8px 16px',
                            border: selectedSize === size ? '2px solid #000' : '1px solid #ccc',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            backgroundColor: selectedSize === size ? '#000' : '#fff',
                            color: selectedSize === size ? '#fff' : '#000',
                            transition: 'all 0.2s',
                          }}
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
                      −
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
