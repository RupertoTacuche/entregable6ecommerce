import React, { useEffect, useMemo, useState } from "react";

import { axiosEcommerce } from "../utils/configAxios";
import { Sidebar } from "../components/filters/Sidebar";
import ProductCard from "../components/home/ProductCard";
import { useDispatch, useSelector } from "react-redux";

import Modalfilter from "../components/filters/Modalfilter";

const Home = () => {

  const { token } = useSelector((store) => store.userInfo)
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const { changeIsShowCart } = useSelector((store) => store.cart);
  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setProductName(e.target.nameProduct.value);
    e.target.nameProduct.value = "";
  };



  const handleClickCategory = (e) => {
    if (e.target.dataset.category == 0) {
    
      axiosEcommerce.get("products").then((res) => setProducts(res.data));
    } else {
      axiosEcommerce
        .get(`products?categoryId=${e.target.dataset.category}`)
        .then((res) => setProducts(res.data));
    }
    
  };

  const productByName = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(productName.toLowerCase())
    );
  }, [products, productName]);

  useEffect(() => {
    axiosEcommerce.get("products").then((res) => setProducts(res.data));
  }, []);
  
  
  const handleOpenCart = () => {

    
    dispatch(changeIsShowCart())
  }

  return (
    <main className="flex gap-5 mt-5  max-w-[1000px] mx-auto">
      <div>
        <Sidebar handleClickCategory={handleClickCategory}/>
      </div>
      <div className="w-full flex flex-col gap-5">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            className="border h-10 w-[70%]"
            id="nameProduct"
            type="text"
            placeholder="What are you looking for ?"
          />
          <button className="px-4 py-2 bg-red-700 text-white w-[30%]">
            {" "}
            <i className="bx bx-search"></i>
          </button>
        </form>
        <div   className=" md:hidden lg:hidden sm:block flex justify-end px-4 cursor-pointer">
        <Modalfilter  />
        <i className="bx bx-filter"></i>
        <span className="font-bold text-gray-400">Filter</span>
        
      
        </div>
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-3 py-6">
          {productByName.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </main>
  );
};
export default Home;
