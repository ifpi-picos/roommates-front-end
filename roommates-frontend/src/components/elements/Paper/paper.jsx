import React from "react";
import { Paper } from "@mui/material";

const SimplePaper = ({ children }) => {
  return (
    <Paper sx={{
      width: "100%",
      maxWidth: "360px",
      padding: "2.5rem 1rem",
      borderRadius: "24px"
    }}
      elevation={4}
    >
      {children}
    </Paper>
  )
}

export default SimplePaper;
