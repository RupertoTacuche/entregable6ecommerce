import React, { useEffect, useState } from "react";
import { axiosEcommerce, getConfig } from "../utils/configAxios";
import { PurchasesCard } from "../components/purchases/PurchasesCard";
import { Link } from "react-router-dom";


export const Purchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
  
  
    axiosEcommerce
      .get("purchases", getConfig())
      .then((res) => {
        const orderPurchases = res.data.sort((a,b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        setPurchases(orderPurchases)
  })
  }, []);
  return (
    <main className="px-2 max-w-[1000px] mx-auto">
    <section className="flex gap-2 items-center my-2">
    <Link to='/'>Home</Link>
    <div className="h-[7px] aspect-square bg-red-500 rounded-full">
    </div>
      <span className=" font-bold">My purchases</span>
      
        </section>
      <section className="grid gap-10 py-6">
        {purchases.map((purchase) => (
          <PurchasesCard key={purchase.id} purchase={purchase} />
          ))}
      </section>
    </main>
  );
};
