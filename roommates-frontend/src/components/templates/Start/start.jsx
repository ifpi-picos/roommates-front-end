import React from "react";
import { useRouter } from "next/router";
import { Typography } from "@mui/material";
import { ArrowForwardIos } from '@mui/icons-material';

import { Flex, DefaultButton, Form, Input } from "~/components";
import { theme } from "~/styles";

const Start = () => {
  const router = useRouter();

  const handleClick = () => {
    return router.push('/cadastrar')
  }

  return (
    <Flex>
      <Typography
        variant="h1"
        fontSize="36px"
        fontWeight="500"
        color={theme.palette.primary.main}
      >
        Iniciar
      </Typography>
      <Form>
        <Input label="Digite o número da sua matrícula" id="registration-number"/>
        <DefaultButton onClick={() => handleClick()} buttonText="Continuar" endIcon={<ArrowForwardIos />}/>
      </Form>
    </Flex>
  )
}

export default Start
