import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { ArrowBack, Favorite, Star } from '@mui/icons-material';

import { Carousel, Flex, FavoritedButton, StarRating, TotalComments } from '~/components';
import { theme } from '~/styles';

const Post = ({ currentPost }) => {
  const { images, totalRatings, totalComments, description } = currentPost
  return (
    <Card className='card-container'>
      <CardActions className='card-container__actions' disableSpacing>
        <IconButton aria-label="add to favorites">
          <ArrowBack />
        </IconButton>
        <FavoritedButton />
      </CardActions>
      <Carousel>
        {images.map(image => {
          return (
            <CardMedia
              component="img"
              height="194"
              image={image.link}
              alt={image.alt}
            />

          )
        })}
      </Carousel>

      <CardContent>
        <Typography color={theme.palette.colors.dark} variant="body2">
          {description}
        </Typography>
      </CardContent>

      <Flex direction="row" alignItems="center">
        <StarRating totalRatings={totalRatings} />
        <TotalComments totalComments={totalComments}/>
      </Flex>
    </Card>
  );
}

export default Post;
