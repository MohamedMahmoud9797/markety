import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../Utils/baseUrl";
import { fetchData } from "./genericAsyncThunk.JS";

export const getCateogries = createAsyncThunk(
  "categories/getAllCategories",
  async (_, thunkAPI) => {
    return fetchData(`${baseUrl}/api/v1/categories`, thunkAPI);
  }
);

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    return fetchData(`${baseUrl}/api/v1/products`, thunkAPI);
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (values, thunkAPI) => {
    try {
      const res = await fetch(`${baseUrl}/api/v1/auth/signup`, {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (values, thunkAPI) => {
    try {
      const res = await fetch(`${baseUrl}/api/v1/auth/signin`, {
        method: "POST",
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
