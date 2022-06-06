import React from "react";
import { Box, Typography } from "@mui/material";

const TotalComments = ({ totalComments }) => {
  return (
    <Box>
      <Typography variant='span' sx={{ fontSize: '.85rem', marginRight: '5px' }}>Comentários</Typography>
      <Typography variant='span' sx={{ fontSize: '.85rem' }}>{totalComments}</Typography>
    </Box>
  )
}

export default TotalComments;
