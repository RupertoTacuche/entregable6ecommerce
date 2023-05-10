import React, { useEffect, useState } from "react";
import { axiosEcommerce, getConfig } from "../utils/configAxios";
import { PurchasesCard } from "../components/purchases/PurchasesCard";


export const Purchases = () => {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    axiosEcommerce
      .get("purchases", getConfig())
      .then((res) => setPurchases(res.data));
  }, []);
  return (
    <div>
      <h2 className=" text-3xl">My purchases</h2>
      <div>
        {purchases.map((purchase) => (
          <PurchasesCard key={purchase.id} purchase={purchase} />
        ))}
      </div>
    </div>
  );
};
