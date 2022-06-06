import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';

import { Carousel, Flex } from '~/components';
import { ArrowBack, Favorite, Star } from '@mui/icons-material';
import { theme } from '~/styles';

const Post = ({ currentPost }) => {
  const { image, startRating, comments, description, amen } = currentPost
  return (
    <Card className='card-container'>
      <CardActions className='card-container__actions' disableSpacing>
        <IconButton aria-label="add to favorites">
          <ArrowBack />
        </IconButton>
        <IconButton aria-label="share">
          <Favorite />
        </IconButton>
      </CardActions>
      <Carousel>
        <CardMedia
          component="img"
          height="224"
          image={image}
        />
        <CardMedia
          component="img"
          height="224"
          image={image}
        />

      </Carousel>

      <CardContent>
        <Typography color={theme.palette.colors.dark} variant="body2">
          {description}
        </Typography>
      </CardContent>

      <Flex direction="row" alignItems="center">
      <IconButton aria-label="star rating">
        <Star sx={{ fontSize: '1rem', marginRight: '5px', color: theme.palette.warning.main }} />
        <Typography variant='span' textAlign="center" sx={{ fontSize: '.85rem' }}>({startRating})</Typography>
      </IconButton>
      <Box sx={{marginLeft: '1rem'}}>
        <Typography variant='span' sx={{ fontSize: '.85rem', marginRight: '5px' }}>Comentários</Typography>
        <Typography variant='span' sx={{ fontSize: '.85rem' }}>{comments}</Typography>
      </Box>
      </Flex>
    </Card>
  );
}

export default Post;
