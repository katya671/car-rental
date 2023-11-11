import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://654f52d5358230d8f0cd3548.mockapi.io";

export const fetchAdverts = createAsyncThunk(
  "advert/fetchAll",
  async (page, thunkAPI) => {
    try {
      const response = await axios.get("/advert", {
        params: {
          page,
          limit: 12,
        },
      });
      return { newAdverts: response.data, page };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const clearAdverts = createAsyncThunk(
  "advert/clearAll",
  async (_, thunkAPI) => {
    try {
      return [];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
