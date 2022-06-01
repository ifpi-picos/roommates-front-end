import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { theme } from "~/styles";
import { Flex, DefaultButton, Form, Input } from "~/components";

const Start = () => {
  return (
    <Flex>
      <Typography
        variant="h1"
        fontSize="36px"
        fontWeight="500"
        color={theme.primary.main}
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
