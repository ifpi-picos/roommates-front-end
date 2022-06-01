import React from "react";
import { Box } from "@mui/material";
import { theme } from "~/styles";

const Flex = ({children, ...props}) => {
  return (
    <Box sx={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: props.alignItems || 'start',
      justifyContent: props.justifyContent || 'start',
    }}
    >
      {children}
    </Box>
  )
}

export default Flex;
