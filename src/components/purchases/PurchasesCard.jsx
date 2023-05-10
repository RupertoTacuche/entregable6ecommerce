import React from "react";
import { Link } from "react-router-dom";

export const PurchasesCard = ({ purchase }) => {
  console.log(purchase);
  return (
    <Link to={`../products/${purchase.product.id}`} className="border">
      <img
        className="w-[200px]"
        loading="lazy"
        src={purchase.product.images[0].url}
        alt=""
      />
      
      <h4>{purchase.product.title}</h4>
      <p>{purchase.quantity}</p>
    </Link>
  );
};