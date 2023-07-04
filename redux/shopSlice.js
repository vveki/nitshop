import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: [],
  },

  reducers: {
    addToCart: (state, payload) => {
      let id;
      const fast = payload.payload.forEach((element) => {
        id = element.id;
      });
      const existingProduct = state.value.find((product) => product.id === id);
      if (existingProduct) {
        existingProduct.qty += 1;
      } else {
        state.value = [...state.value, ...payload.payload];
      }
    },
    removeToCart: (state, payload) => {
      state.value = state.value.filter((el) => el.id !== payload.payload);
    },
    increment: (state, payload) => {
      state.value = state.value.map((el) =>
        el.id === payload.payload ? { ...el, qty: el.qty + 1 } : el
      );
    },
    decrement: (state, payload) => {
      state.value = state.value.map((el) =>
        el.id === payload.payload ? { ...el, qty: el.qty - 1 } : el
      );
    },
  },
});

export const { addToCart, removeToCart, increment, decrement } =
  shopSlice.actions;

export default shopSlice.reducer;
