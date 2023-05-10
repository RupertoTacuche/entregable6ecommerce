import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce, getConfig } from "../../utils/configAxios";

const initialState = {
  products: [],
  isShowCart: false,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    changeIsShowCart: (state) => {
      state.isShowCart = !state.isShowCart;
    },
    setProducts: (state, action) => {
      const newProducts = action.payload;
      state.products = newProducts;
    },
  },
});

export const { changeIsShowCart, setProducts } = cartSlice.actions;

export const getCartProducts = () => (dispatch) => {
  axiosEcommerce
    .get("cart", getConfig())
    .then((res) => dispatch(setProducts(res.data)));
};

export default cartSlice.reducer;