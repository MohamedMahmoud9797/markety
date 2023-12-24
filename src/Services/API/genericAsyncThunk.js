export const fetchData = async (url, thunkAPI) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
