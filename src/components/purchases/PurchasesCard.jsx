import React from "react";
import { Link } from "react-router-dom";
import { formatDateDDMMYYYY } from "../../utils/date"

export const PurchasesCard = ({ purchase }) => {

  return (
    <Link to={`../products/${purchase.product.id}`} className="grid grid-cols-2 gap-2 text-sm sm:text-base">
    <section className="flex gap-2 items-center">
    <div className="h-[50px] sm:[80px] aspect-square">
      <img
        className="w-full h-full object-contain"
        loading="lazy"
        src={purchase.product.images[0].url}
        alt=""
        />
      
        </div>
      <h4 >{purchase.product.title}</h4>
        </section>
        <section className="grid text-center gap-3 sm:grid-cols-3">
        <span className="text-gray-400">{formatDateDDMMYYYY(purchase.createdAt)}</span>
        <div>
      <span className="p-2 border-[1px] border-gray-300">{purchase.quantity}</span>
      
        </div>
        <h4 className="font-bold">$ {(purchase.quantity*purchase.product.price).toFixed(1)}</h4>
        </section>
    </Link>
  );
};