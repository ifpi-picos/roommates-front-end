import React from 'react';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Favorite, Share, Star } from '@mui/icons-material';

const RecipeReviewCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image='
          https://images.unsplash.com/photo-1570129477492-45c003edd2be?
          ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8
          &auto=format&fit=crop&w=870&q=80'
        alt="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="star rating">
          <Star />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
  </Card>
  );
}

export default RecipeReviewCard;
