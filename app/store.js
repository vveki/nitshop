import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "../redux/shopSlice";
import productsSlice from "../redux/productsSlice";

export default configureStore({
  reducer: {
    shop: shopReducer,
    products: productsSlice,
  },
});
