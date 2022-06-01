import React from "react";
import { Box } from "@mui/material";

import { theme } from "~/styles";

const Form = ({children, ...props}) => {
  return (
    <Box component="form" width="100%" minHeight="30vh" sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly"
    }}>
      {children}
    </Box>
  )
}

export default Form;
