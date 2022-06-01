import React from "react";
import { Box } from "@mui/material";

import { theme } from "~/styles";

const Form = ({children, ...props}) => {
  return (
    <Box component="form" width="100%" minHeight="30vh" sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      ...props
    }}>
      {children}
    </Box>
  )
}

export default Form;
