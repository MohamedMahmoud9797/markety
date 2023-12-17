import { configureStore } from "@reduxjs/toolkit";
import { reducer as categoriesReducer } from "../src/Redux/CategoriesSlice/categorieslice.js";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    // Add other reducers if needed
  },
});

export default store;
