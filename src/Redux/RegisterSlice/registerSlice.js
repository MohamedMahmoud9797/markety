import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./../../Services/API/apiCalling";

const initialState = {
  data: [],
};

const registerUserSlice = createSlice({
  name: "registerUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.data = action.payload;
      console.log(state.data);
    });
  },
});

export const { reducer: registerUserReducer } = registerUserSlice;
