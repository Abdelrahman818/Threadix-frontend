'use client';

import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { END_POINT } from "@/config";
import "@/styles/shop.css";

export default function Shop() {
  
  const [products, setProducts] = useState([]);
  const [target, setTarget] = useState("");
  const [sort, setSort] = useState("");
  const { category } = useParams();

  const getProducts = () => {
    fetch(`${END_POINT.PRODUCTS}/${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(json => {setProducts(json.data)})
      .catch(error => console.log(error.message));
  };

  const getMatchedProducts = () => {
    fetch(`${END_POINT.SEARCH}/${target}`)
      .then(res => res.json())
      .then(json => {setProducts(json.data)})
      .catch(error => console.log(error.message));
  };

  useEffect(() => {
    if (target.length > 0) {
      const timeHandler = setTimeout(() => {
        getMatchedProducts();
      }, 500);
      return () => clearTimeout(timeHandler)
    } else {
      getProducts();
    }
  }, [target]);

  useEffect(() => {
    if (sort === "assending")
      products.sort((a, b) => a.salePrice - b.salePrice);
    else if (sort === "dessending")
      products.sort((a, b) => b.salePrice - a.salePrice);
    else if (sort === "new")
      products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setProducts([...products]);
  }, [sort]);

  useEffect(() => getProducts(), []);

  return (
    <div className="shop-page">
      <section className="shop-hero">
        <h1 className="title">Shop</h1>
        <p className="subtitle">Explore our latest collections</p>
      </section>

      <Filters target={target} getTarget={setTarget} getSort={setSort} />

      <div className="products-grid">
        {products && products.length > 0 && products.map((product, idx) => (
          <ProductCard
            key={idx}
            id={product._id}
            title={product.title}
            price={product.price}
            salePrice={product.salePrice}
            image={product.images}
            disc={product.disc}
            category={product.category}
            size={product.size}
            colors={product.colors}
            stock={product.stock}
          />
        ))}
      </div>
    </div>
  );
}
