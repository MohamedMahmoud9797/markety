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
