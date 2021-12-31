import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import weatherReducer from "features/weather/weatherSlice";
import citiesReducer from "features/cities/citiesSlice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  weather: weatherReducer,
  cities: citiesReducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
