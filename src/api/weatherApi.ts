import axios, { AxiosResponse } from "axios";
import { WeatherQueryParams, WeatherAPIResponse } from "models";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_BASE_PATH,
  headers: {
    "Content-Type": "application/json",
  },
});
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const weatherApi = {
  fetchWeather({ q }: WeatherQueryParams): Promise<WeatherAPIResponse> {
    return axiosClient.get("/current.json", {
      params: { key: process.env.REACT_APP_WEATHER_API_KEY, q },
    });
  },
};
