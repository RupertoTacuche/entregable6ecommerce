import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeIsShowCart, getCartProducts } from "../../store/slices/cart.slices";


export const Cart = () => {
  const { isShowCart, products } = useSelector((store) => store.cart);
  const { token } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();

  const totalPrice = products.reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0)


  useEffect(() => {
    if (isShowCart) {
      dispatch(getCartProducts());
    }
  }, [isShowCart]);

  
  return (
    <>
      {isShowCart ? (
        <div className="fixed top-0 right-0 min-h-screen w-[300px] bg-white flex flex-col">
          <div className="flex justify-between">
            <h3 className=" font-bold">Shopping Cart</h3>{" "}
            <p
              className=" text-3xl cursor-pointer"
              onClick={() => dispatch(changeIsShowCart())}
            >
              <i className="bx bx-x hover:text-red-500"></i>
            </p>
          </div>
{/*productos de carrito */}
          <div>
            {products.map((product) => (
              <div key={product.id} className="border flex p-3 gap-1">
                <img
                  className="w-[150px] h-[130px] object-contain"
                  src={product.product.images[0].url}
                  alt=""
                />
                <div className=" relative" >
                  <p>{product.product.title}</p>
                  <p>price: {product.product.price} </p>
                  <div className="flex">
                    <button className="border px-3 py-1">-</button>
                    <p className="border px-3 py-1">{product.quantity}</p>
                    <button className="border px-3 py-1">+</button>
                  </div>
                  <button className=" absolute text-black px-1  -top-3 -right-4 hover:translate-y-1 hover:text-red-500">
                    <i className="bx bx-trash "></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 p-3 w-full">
            <hr />
            <p className="flex justify-end font-extrabold text-gray-600">TOTAL: ${totalPrice}</p>
            <button className=" font-extrabold bg-red-600 text-white px-3 py-2 w-full hover:text-black">
              Checkout <i className="bx bx-cart"></i>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
