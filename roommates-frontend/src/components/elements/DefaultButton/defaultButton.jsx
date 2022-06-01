import React from "react";
import { Button } from "@mui/material";

import { theme } from "~/styles";
import { textTransform } from "@mui/system";

const DefaultButton = ({buttonText, ...props}) => {
  return (
    <Button
      fullWidth
      sx={{
        borderRadius: '24px',
        minHeight: "2.9375rem",
        color: theme.palette.colors.lightest,
        background: theme.palette.primary.main,
        textTransform: 'capitalize',
        fontSize: '1rem'
      }}
      variant="contained"
      endIcon={props.endIcon}
      startIcon={props.startIcon}
      >
        {buttonText}
      </Button>
  )
}

export default DefaultButton;
