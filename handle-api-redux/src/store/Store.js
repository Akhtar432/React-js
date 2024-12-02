// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./StoreSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
