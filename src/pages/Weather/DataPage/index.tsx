import React from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { TextField } from "components/FormFields";
import { selectWeather, weatherActions } from "features/weather/weatherSlice";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";

export const DataPage = () => {
  const dispatch = useAppDispatch();
  const weatherData = useAppSelector(selectWeather);
  const { control } = useForm({
    defaultValues: { ...weatherData?.temperature },
  });

  return (
    <>
      <TextField name="celsius" label="Celsius" control={control} disabled />
      <TextField
        name="fahrenheit"
        label="Fahrenheit"
        control={control}
        disabled
      />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          dispatch(weatherActions.clearWeather());
        }}
        style={{ marginTop: "16px" }}
      >
        Back
      </Button>
    </>
  );
};
