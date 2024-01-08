import { configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "../src/Redux/CategoriesSlice/categorieslice.js";
import { productsReducer } from "../src/Redux/ProductsSlice/productsSlice.js";
import { registerUserReducer } from "../src/Redux/RegisterSlice/registerSlice.js";
import { loadingReducer } from "./Redux/Loading/loading.js";
import { cartreducer } from "./Redux/cart/cart.js";
const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    registerUser: registerUserReducer,
    loading: loadingReducer,
    cart: cartreducer,
  },
});

export default store;
