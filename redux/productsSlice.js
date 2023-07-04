import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
  },
  reducers: {
    addProducts: (state, payload) => {
      state.value = payload;
    },
  },
});

export const { addProducts } = productsSlice.actions;

export default productsSlice.reducer;
