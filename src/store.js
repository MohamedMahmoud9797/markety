import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "../src/Redux/CategoriesSlice/categorieslice.js";
import { productsReducer } from "../src/Redux/ProductsSlice/productsSlice.js";
import { registerUserReducer } from "../src/Redux/RegisterSlice/registerSlice.js";
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    registerUser: registerUserReducer,
  },
});

export default store;
