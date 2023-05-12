import React from "react";

export const Price = () => {
  return (
    <div className="hidden sm:block ">
      <h3 className="   font-bold text-center">Price</h3>
      <i className="bx bx-+"></i>
      <div className="flex">
        <p className=" w-10">From</p>
        <input className="border" type="text" />
      </div>
      <div className="flex">
        <p className=" w-10">To</p>
        <input className="border" type="text" />
      </div>
      <button className=" bg-red-600 px-3 py-2 w-full rounded-full ">Filter Price</button>
    </div>
  );
};
