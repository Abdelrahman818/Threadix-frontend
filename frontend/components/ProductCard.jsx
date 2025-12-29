'use client';

import { API_BASE_URL } from "@/config";
import { useRouter } from "next/navigation";

const ProductCard = (props) => {
  const router = useRouter();
  const route = () => {
    router.push(`/shop/item/${props.id}`)
  };
  return (
    <div className="product-card" onClick={route}>
      <div className="img-box">
        <img src={API_BASE_URL + props.image[0]} alt="Product" />
      </div>
      <div className="info">
        <h3 className="name">{ props.title }</h3>
        <p className="price">${ props.salePrice }</p>
        <button className="btn">View</button>
      </div>
    </div>
  )
}

export default ProductCard;
