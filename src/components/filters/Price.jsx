import React from "react";

export const Price = () => {
  return (
    <div>
      <h3 className=" font-bold">Price</h3>
      <div className="flex">
        <p className=" w-10">From</p>
        <input className="border" type="text" />
      </div>
      <div className="flex">
        <p className=" w-10">To</p>
        <input className="border" type="text" />
      </div>
      <button className=" bg-red-600 px-3 py-2">Filter Price</button>
    </div>
  );
};
