import React from "react";
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { theme } from "~/styles";
import { Flex, DefaultButton, Form, Input } from "~/components";

const SignIn = () => {
  const actions = [
    {
      id: 'email',
      label: 'E-mail'
    },
    {
      id: 'password',
      label: 'Senha'
    },
  ]
  return (
    <Flex>
       <Typography
        variant="h1"
        fontSize="36px"
        fontWeight="500"
        color={theme.palette.primary.main}
      >
        Entrar
      </Typography>
      <Form height="40vh">
        {
          actions.map(action => {
            return (
              <Input key={action.id} label={action.label} id={action.id} />
            )
          })
        }

        <DefaultButton buttonText="Continuar" endIcon={<ArrowForwardIosIcon />}/>
      </Form>
    </Flex>
  )
}

export default SignIn
