import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const baseUrl = "https://fakestoreapi.com/products";
 
export  const FetchProduct = createAsyncThunk("shop/FetchProduct", () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));
});

const initialState = {
  productList: [],
  loading: false,
  error: {},
};

 const productSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {},
  extraReducers: {
    [FetchProduct.pending]: (state) => {
      state.loading = true;
    },
    [FetchProduct.fulfilled]: (state, action) => {
      
      console.log("action",action);
      state.loading = false;
      state.productList = action.payload;
    },
    [FetchProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer
