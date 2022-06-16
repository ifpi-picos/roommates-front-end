import React from "react";
import { useRouter } from "next/router";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Typography } from "@mui/material";

import { Flex, DefaultButton, Form, Input } from "~/components";
import { theme } from "~/styles";

const SignIn = () => {
  const router = useRouter();

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

  const handleClick = () => {
    router.push('/home')
  }

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

        <DefaultButton onClick={() => handleClick()} buttonText="Continuar" endIcon={<ArrowForwardIosIcon />}/>
      </Form>
    </Flex>
  )
}

export default SignIn
