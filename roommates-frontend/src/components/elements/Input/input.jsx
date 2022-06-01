import React from "react";
import { TextField } from "@mui/material";

const Input = ({children, ...props}) => {
  return (
    <TextField fullWidth id={props.id} label={props.label} variant="standard" />
  )
}

export default Input;
