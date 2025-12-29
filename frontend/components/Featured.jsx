'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { END_POINT, API_BASE_URL } from '@/config';

const Featured = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(END_POINT.GET_FEATURED, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(json => setProducts(json.data))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <section className="featured">
      <h2>Featured Drops</h2>

      <div className="product-grid">
        {products?.map((p) => (
          <div key={p._id} onClick={() => router.push(`/shop/item/${p._id}`)} className="product-card">
            <div className="product-img">
              <img src={`${API_BASE_URL}${p.images[0]}`} alt="Product" />
            </div>
            <h3>Threadix Tee #{p.name}</h3>
            <p className="price">EGP { p.salePrice }</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Featured;
