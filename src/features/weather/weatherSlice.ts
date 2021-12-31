import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Weather, WeatherAPIResponse, WeatherQueryParams } from "models";

export interface WeatherState {
  loading: boolean;
  data?: Weather;
}

const initialState: WeatherState = {
  loading: false,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    getWeather(state, action: PayloadAction<WeatherQueryParams>) {
      state.loading = true;
    },
    setWeather(state, action: PayloadAction<WeatherAPIResponse>) {
      const { current, location } = action.payload;

      state.data = {
        cityName: location.name,
        temperature: {
          celsius: current.temp_c,
          fahrenheit: current.temp_f,
        },
      };
      state.loading = false;
    },
    fetchFailed(state) {
      state.loading = false;
    },
  },
});

// Actions
export const weatherActions = weatherSlice.actions;

// Selectors
export const selectWeather = (state: RootState) => state.weather.data;
export const selectWeatherLoading = (state: RootState) => state.weather.loading;

// Reducer
export default weatherSlice.reducer;
