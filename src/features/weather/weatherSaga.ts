import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { weatherActions } from "./weatherSlice";
import { WeatherAPIResponse, WeatherQueryParams } from "models";
import { weatherApi } from "api/weatherApi";

function* handleGetWeather(action: PayloadAction<WeatherQueryParams>) {
  try {
    const response: WeatherAPIResponse = yield call(
      weatherApi.fetchWeather,
      action.payload
    );
    yield put(weatherActions.setWeather(response));
  } catch (error) {
    console.log("Failed to fetch weather data. Error:", error);
    yield put(weatherActions.fetchFailed());
  }
}

export default function* weatherSaga() {
  yield takeLatest(weatherActions.getWeather.type, handleGetWeather);
}
