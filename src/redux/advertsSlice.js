import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const initialState = {
  adverts: [],
  filters: {
    carBrand: "",
    priceTo: "",
    mileageFrom: "",
    mileageTo: "",
  },
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAdverts.fulfilled, (state, action) => {
      state.adverts =
        action.payload.page === 1
          ? [...action.payload.newAdverts]
          : [...state.adverts, ...action.payload.newAdverts];
    });
  },
});

export const { setFilters } = advertsSlice.actions;

export default advertsSlice.reducer;
