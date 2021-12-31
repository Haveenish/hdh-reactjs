import React from "react";
import { Button, CircularProgress, Grid } from "@material-ui/core";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { SelectField, TextField } from "components/FormFields";
import {
  selectWeatherLoading,
  weatherActions,
} from "features/weather/weatherSlice";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { selectCities } from "features/cities/citiesSlice";

interface formValues {
  apiKey: string;
  cityName: string;
}
const schema = yup.object().shape({
  apiKey: yup.string().required("API Key is required"),
  cityName: yup.string().required("City Name is required"),
});

export const FormPage = () => {
  const dispath = useAppDispatch();
  const weatherLoading = useAppSelector(selectWeatherLoading);
  const cities = useAppSelector(selectCities);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      apiKey: process.env.REACT_APP_WEATHER_API_KEY,
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (formValues: formValues) => {
    dispath(
      weatherActions.getWeather({
        q: formValues.cityName,
        key: formValues.apiKey,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <TextField name="apiKey" label="Your API Key" control={control} />
      <SelectField
        name="cityName"
        label="City Name"
        control={control}
        options={cities.map((value) => ({ value }))}
      />
      <Grid container justify="center" style={{ marginTop: "16px" }}>
        {weatherLoading ? (
          <CircularProgress color="primary" />
        ) : (
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        )}
      </Grid>
    </form>
  );
};
