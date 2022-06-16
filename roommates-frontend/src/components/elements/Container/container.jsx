import React from "react";
import { Container } from "@mui/material";

import { theme } from "~/styles";

const SimpleContainer = ({ children, ...props }) => {
  return (
    <Container maxWidth="100%" className="container" sx={{
      backgroundColor: props.bg || theme.palette.background.lightest,
      minHeight: "100vh",
      padding: "0 .8375rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "100%"
    }}
    >
      {children}
    </Container>
  )
}

export default SimpleContainer;
