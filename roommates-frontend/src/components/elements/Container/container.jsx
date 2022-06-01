import React from "react";
import { Container } from "@mui/material";
import { theme } from "~/styles";

const SimpleContainer = ({children, ...props}) => {
  return (
    <Container sx={{
      backgroundColor: theme.primary.main,
      minHeight: "100vh",
      padding: "0 .8375rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
    >
      {children}
    </Container>
  )
}

export default SimpleContainer;
