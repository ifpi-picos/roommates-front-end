import React from "react";
import { useRouter } from "next/router";
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { ArrowForwardIos } from '@mui/icons-material';

import { theme } from "~/styles";
import { Flex, DefaultButton, Form, Input } from "~/components";

const SignUp = () => {
  const router = useRouter();

  const handleClick = () => {
    return router.push('/login')
  }

  const actions = [
    {
      id: 'full-name',
      label: 'Nome completo'
    },
    {
      id: 'email',
      label: 'E-mail'
    },
    {
      id: 'password',
      label: 'Senha'
    },
    {
      id: 'confirm-password',
      label: 'Confirmar senha'
    }
  ]
  return (
    <Flex>
      <Typography
        variant="h1"
        fontSize="24px"
        fontWeight="500"
        color={theme.palette.primary.main}
      >
        Agora preencha os dados abaixo para criar um perfil no Roommates
      </Typography>
      <Form height="70vh">
        {
          actions.map(action => {
            return (
              <Input key={action.id} label={action.label} id={action.id} />
            )
          })
        }

        <FormControlLabel
          control={
            <Checkbox checked={true} name={true} />
          }
          label="Declaro que li e concordo com o Termo de Uso e a Política de Privacidade"
          sx={{
            fontSize: "1px"
          }}
        />

        <DefaultButton onClick={() => handleClick()} buttonText="Continuar" endIcon={<ArrowForwardIos />} />
      </Form>
    </Flex>
  )
}

export default SignUp
