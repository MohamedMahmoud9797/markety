import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "./../../Services/API/apiCalling";

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export const { reducer: productsReducer } = productsSlice;
