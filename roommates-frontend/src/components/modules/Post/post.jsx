import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { ArrowBack, Favorite, Star } from '@mui/icons-material';

import { Carousel, Flex, FavoritedButton, StarRating, TotalComments } from '~/components';
import { theme } from '~/styles';
import Link from 'next/link';

const Post = ({ currentPost }) => {
  const { images, starRating, totalComments, description } = currentPost;
  return (
    <Card className='card-container'>
      <CardActions className='card-container__actions' disableSpacing>
        <Link href="/home">
          <IconButton disableRipple sx={{background: theme.palette.background.lightest, color: theme.palette.colors.pink}} aria-label="add to favorites">
            <ArrowBack />
          </IconButton>
        </Link>
        <FavoritedButton disableRipple sx={{background: theme.palette.background.lightest}}/>
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

      <Flex direction="row" justifyContent="space-between" width="60%" alignItems="center">
        <StarRating totalRatings={starRating} />
        <TotalComments totalComments={totalComments}/>
      </Flex>
    </Card>
  );
}

export default Post;
