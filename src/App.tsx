import React, { useEffect } from "react";
import "./App.css";
import { selectWeather, weatherActions } from "features/weather/weatherSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { Weather } from "models";

const App = () => {
  const dispatch = useAppDispatch();
  const weatherData = useAppSelector(selectWeather);

  useEffect(() => {
    dispatch(
      weatherActions.getWeather({
        q: "Kuala Lumpur",
      })
    );
  }, [dispatch]);

  const renderWeatherInfo = ({
    cityName,
    temperature: { celsius, fahrenheit },
  }: Weather) => (
    <>
      <h1>{cityName}</h1>
      <h2>{`Celsius: ${celsius}`}</h2>
      <h2>{`Fahrenheit: ${fahrenheit}`}</h2>
    </>
  );

  return (
    <div className="App">{!!weatherData && renderWeatherInfo(weatherData)}</div>
  );
};

export default App;
