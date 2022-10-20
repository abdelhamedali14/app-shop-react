import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./addToCartSlice";
import cartSlice from "./cartSlice";
export const store = configureStore({
  reducer: {
    cart: CounterSlice,
    cartStore: cartSlice,
  },
});
