import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setloading: (state) => {
      state.loading = true;
    },
    resetloading: (state) => {
      state.loading = false;
    },
  },
});

export const { reducer: loadingReducer, actions } = loadingSlice;
export const { setloading } = actions;
