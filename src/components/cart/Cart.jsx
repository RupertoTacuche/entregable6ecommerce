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

 console.log(products);
  return (
    <>
      {isShowCart ? (
        <div className="fixed top-0 right-0 min-h-screen w-[300px] bg-white flex flex-col">
          <div className="flex justify-between">
            <h3 className=" font-bold">Carrito de compras</h3>{" "}
            <p
              className=" text-4xl cursor-pointer"
              onClick={() => dispatch(changeIsShowCart())}
            >
              X
            </p>
          </div>

          <div>
            {products.map((product) => (
              <div key={product.id} className="border flex p-3 gap-1">
                <img
                  className="w-[150px] h-[130px] object-contain"
                  src={product.product.images[0].url}
                  alt=""
                />
                <div >
                  <p>{product.product.title}</p>
                  <p>price: {product.product.price} </p>
                  <div className="flex">
                    <button className="border px-3 py-1">-</button>
                    <p className="border px-3 py-1">{product.quantity}</p>
                    <button className="border px-3 py-1">+</button>
                  </div>
                  <button className=" bg-red-700 text-white px-3">
                    Borrar
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 p-3 w-full">
            <hr />
            <p>TOTAL: ${totalPrice}</p>
            <button className=" bg-red-600 text-white px-3 py-2 w-full">
              checkout
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};
