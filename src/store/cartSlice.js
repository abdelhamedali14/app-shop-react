import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartList: [],
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartCount += 1;
      state.cartList.push(action.payload);
    },
    deleteFromCart: (state, action) => {
      if (state.cartCount === 0) {
   
      } else {
        state.cartCount -= 1;
        state.cartList.forEach((item, index) => {
            console.log("index", index);
            state.cartList.splice(index, 1);
        
        });


        
      }
    },
  },
});

console.log(cartSlice);

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
export const { deleteFromCart } = cartSlice.actions;
