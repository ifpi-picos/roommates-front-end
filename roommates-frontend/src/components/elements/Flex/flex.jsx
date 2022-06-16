import React from "react";
import { Box } from "@mui/material";

const Flex = ({ children, ...props }) => {
  return (
    <Box sx={{
      width: props.width || "100%",
      height: "100%",
      minHeight: props.minHeight || 'auto',
      display: "flex",
      flexDirection: props.direction || "column",
      alignItems: props.alignItems || 'start',
      justifyContent: props.justifyContent || 'start',
    }}
      {...props}
    >
      {children}
    </Box>
  )
}

export default Flex;
