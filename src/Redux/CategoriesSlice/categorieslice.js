import { createSlice } from "@reduxjs/toolkit";
import { getCaogries } from "./../../Services/getCategories";

const initialState = {
  categories: [],
};

const categories = createSlice({
  name: "catogries",
  initialState,
  reducers: {
    // Define your reducer actions here
  },
  extraReducers: (builder) => {
    builder.addCase(getCaogries.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export const { actions, reducer } = categories;
