import React from "react";
import { Paper } from "@mui/material";

const SimplePaper = ({children, ...props}) => {
  return (
    <Paper sx={{
      width: "100%",
      maxWidth: "360px",
      minHeight: "50vh",
      padding: "2rem 1rem"
    }}
    >
      {children}
    </Paper>
  )
}

export default SimplePaper;
