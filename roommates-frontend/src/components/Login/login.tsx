import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import theme from "../../styles/theme";

type Inputs = {
  enrollment: string,
};

const Login = () => {
  const { handleSubmit, register, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const PrimaryButton = styled(Button)({
    width: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: '24px',
    minHeight: '2.25rem',

    fontSize: '.9375rem',
    fontFamily: 'Roboto, sans-serif',
    textTransform: 'capitalize',
    color: theme.colors.lightest,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField fullWidth {...register("enrollment")} label="Digite o número da sua matrícula" variant="standard" />
      <PrimaryButton sx={{margin: '2rem 0 1rem 0'}} type="submit" endIcon={<ArrowForwardIcon />}>Continuar</PrimaryButton>
    </form>
  )
}

export default Login
