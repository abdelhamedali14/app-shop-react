import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  cartCount: 0,
  totalRevenue: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartCount += 1;
      console.log("one");
      state.cartList = [...state.cartList, action.payload];
      console.log("two");
      state.cartList[state.cartList.length - 1].quantity = 1;
      console.log("three");
      console.log(state.cartList);
    },
    deleteFromCart: (state, action) => {
      if (state.cartCount === 0) {
      } else {
        console.log("before", state.cartList.length);
        state.cartList.forEach((item, index) => {
          if (item.id === action.payload.id) {
            state.cartList.splice(index, 1);
            console.log("after", state.cartList.length);
            state.cartCount -= 1;
          }
        });
      }
    },
    increaseQuantity: (state, action) => {
      state.cartList.forEach((item, index) => {
        if (item.id === action.payload.id) {
          item.quantity += 1;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      state.cartList.forEach((item) => {
        if (item.id === action.payload.id) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            // state.cartCount -= 1;
          }
        }
      });
    },
  },
});

console.log(cartSlice);
export default cartSlice.reducer;
export const { addToCart, deleteFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
