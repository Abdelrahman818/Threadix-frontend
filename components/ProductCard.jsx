'use client';

import { API_BASE_URL } from "@/config";
import { getDemoImageSrc, isDemoMode } from "@/lib/demoMode";
import { useRouter } from "next/navigation";

const ProductCard = (props) => {
  const router = useRouter();
  const route = () => {
    router.push(`/shop/item/${props.id}`)
  };
  const imageSrc = getDemoImageSrc(props.image);

  return (
    <div className="product-card" onClick={route}>
      <div className="img-box">
        <img src={isDemoMode ? imageSrc : API_BASE_URL + imageSrc} alt="Product" />
      </div>
      <div className="info">
        <h3 className="name">{props.title && props.title.charAt(0).toUpperCase() + props.title.slice(1)}</h3>
        <p className="price">{ props.salePrice } LE</p>
        <button className="btn">View</button>
      </div>
    </div>
  )
}

export default ProductCard;
