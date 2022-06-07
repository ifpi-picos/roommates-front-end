import React from "react";
import { Box, Typography } from "@mui/material";

const TotalComments = ({ totalComments }) => {
  return (
    <Box>
      <Typography variant='span' sx={{ fontSize: '.85rem', marginRight: '5px' }}>{totalComments}</Typography>
      <Typography variant='span' sx={{ fontSize: '.85rem' }}>Comentários</Typography>
    </Box>
  )
}

export default TotalComments;
