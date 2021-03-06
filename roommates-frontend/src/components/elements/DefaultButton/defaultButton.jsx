import React from "react";
import { Button } from "@mui/material";

import { theme } from "~/styles";

const DefaultButton = ({ buttonText, ...props }) => {
  return (
    <Button
      {...props}
      fullWidth={!props.size ? true : false}
      sx={{
        borderRadius: '24px',
        minHeight: props.size ?? "2.9375rem",
        color: props.colors ?? theme.palette.colors.lightest,
        background: props.bg ?? theme.palette.primary.main,
        textTransform: 'none',
        fontSize: props.fontSize ?? '1rem'
      }}
      variant={props.variant ?? "contained"}
      endIcon={props.endIcon}
      startIcon={props.startIcon}
    >
      {buttonText}
    </Button>
  )
}

export default DefaultButton;
