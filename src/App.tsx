import React from "react";
import "./App.css";
import { WeatherDataPage, WeatherFormPage } from "pages/Weather";
import AppContainer from "components/Common/AppContainer";
import { useAppSelector } from "app/hooks";
import { selectWeather } from "features/weather/weatherSlice";

const App = () => {
  const weatherData = useAppSelector(selectWeather);

  return (
    <AppContainer>
      {!!weatherData ? <WeatherDataPage /> : <WeatherFormPage />}
    </AppContainer>
  );
};

export default App;
