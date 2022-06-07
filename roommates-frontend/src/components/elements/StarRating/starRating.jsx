import React from "react";

import { IconButton, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";

import { theme } from "~/styles";

const StarRating = ({ totalRatings }) => {
  console.log('TOTAL', totalRatings)
  return (
    <IconButton aria-label="star rating">
      <Star sx={{fontSize: '1rem', marginRight: '5px', color: theme.palette.warning.main }}/>
      <Typography variant='span' textAlign="center" sx={{fontSize: '.85rem'}}>({ totalRatings })</Typography>
    </IconButton>
  )
}

export default StarRating;
