import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "../src/Redux/CategoriesSlice/categorieslice.js";
import { productsReducer } from "../src/Redux/ProductsSlice/productsSlice.js";
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    // Add other reducers if needed
  },
});

export default store;
