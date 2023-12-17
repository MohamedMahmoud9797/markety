import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../Utils/baseUrl";

export const getCaogries = createAsyncThunk(
  "categories/getAllCategories",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/v1/categories`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
