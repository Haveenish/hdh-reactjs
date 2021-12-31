import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

const initialState: string[] = ["Kuala Lumpur", "Singapore"];

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    getCities(state) {
      return state;
    },
  },
});

// Actions
export const citiesActions = citiesSlice.actions;

// Selectors
export const selectCities = (state: RootState) => state.cities;

// Reducer
export default citiesSlice.reducer;
