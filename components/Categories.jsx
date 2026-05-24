'use client';

import { END_POINT, API_BASE_URL } from "@/config";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { fetchDemoCategories, getDemoImageSrc, isDemoMode } from "@/lib/demoMode";

const Categories = () => {

  const router = useRouter();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (isDemoMode) {
      fetchDemoCategories()
        .then(setCategories)
        .catch(error => console.error(error.message));
      return;
    }

    fetch(END_POINT.CATEGORIES(''), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(json => setCategories(json.data))
      .catch(error => console.error(error.message));
  }, []);

  return (
    <section id="collections" className="categories">
      <h2>Shop by Category</h2>

      <div className="categories-grid">
        {categories
          ?.filter((cat) => cat.isActive)
          .map((cat, i) => (
            <div onClick={() => router.push(`/shop/${encodeURIComponent(cat.name)}`)} key={cat._id || i} className="category-card">
              <div className="category-img">
                <img src={isDemoMode ? getDemoImageSrc(cat.imgUrl) : `${API_BASE_URL}${cat.imgUrl}`} alt={cat.name || "Category"} />
              </div>
              <h3>{cat.name && cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}</h3>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Categories;
