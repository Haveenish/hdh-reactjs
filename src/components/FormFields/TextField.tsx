import * as React from "react";
import { TextField as MUITextField } from "@material-ui/core";
import { InputHTMLAttributes } from "react";
import { Control, useController } from "react-hook-form";

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  control: Control<any>;
  label?: string;
}

export const TextField = ({
  name,
  control,
  label,
  ...inputProps
}: TextFieldProps) => {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <MUITextField
      fullWidth
      size="small"
      margin="normal"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      inputRef={ref}
      error={invalid}
      helperText={error?.message}
      inputProps={inputProps}
    />
  );
};
