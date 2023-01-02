import { FormControl, Input, InputLabel } from "@mui/material";
import React from "react";

function FormInput(props: any) {
  const { id, values, title, onChange } = props;
  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="standard" focused>
      <InputLabel>{title}</InputLabel>
      <Input id={id} onChange={onChange} value={values?.title} />
    </FormControl>
  );
}

export default FormInput;
