import React from "react";
import { Box } from "@mui/material";
import { theme } from "~/styles";

const BoxSx = ({children, ...props}) => {
  return (
    <Box sx={{
      backgroundColor: theme.primary.main,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>{children}</Box>
  )
}

export default BoxSx;
