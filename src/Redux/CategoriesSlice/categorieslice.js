import { createSlice } from "@reduxjs/toolkit";
import { getCateogries } from "./../../Services/API/apiCalling";

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "catogries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCateogries.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { reducer: categoriesReducer } = categoriesSlice;
