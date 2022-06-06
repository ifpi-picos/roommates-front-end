import React from "react";
import { Typography } from "@mui/material";
import { ArrowForwardIosIcon } from '@mui/icons-material';

import { Flex, DefaultButton, Form, Input } from "~/components";
import { theme } from "~/styles";

const Start = () => {
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
        <DefaultButton buttonText="Continuar" endIcon={<ArrowForwardIosIcon />}/>
      </Form>
    </Flex>
  )
}

export default Start
