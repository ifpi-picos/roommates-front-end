import React, { useState } from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Favorite, Star } from '@mui/icons-material';

import { Carousel, Flex } from '~/components';
import { theme } from '~/styles';

import Link from 'next/link';


const RecipeReviewCard = ({ id, image, startRating, comments, children }) => {
  const [favorited, setFavorited] = useState(false)

  return (
    <Link href={`/publicacao/${id}`} sx={{padding: '1rem 0'}}>
      <Card sx={{ maxWidth: 345 }}>
        <Carousel>
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
          />
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
          />
        </Carousel>
        <CardActions disableSpacing>
        <Flex direction="row" justifyContent="space-between" alignItems="center">
          <IconButton aria-label="star rating">
              <Star sx={{fontSize: '1rem', marginRight: '5px', color: theme.palette.warning.main }}/>
              <Typography variant='span' textAlign="center" sx={{fontSize: '.85rem'}}>({ startRating })</Typography>
            </IconButton>
            <Box>
            <Typography variant='span' sx={{fontSize: '.85rem', marginRight: '5px'}}>Comentários</Typography>
            <Typography variant='span' sx={{fontSize: '.85rem'}}>{ comments }</Typography>
            </Box>
            <IconButton aria-label="add to favorites" onClick={() => setFavorited(!favorited)}>
              <Favorite sx={{fontSize: '1.5rem', color: favorited ? theme.palette.colors.pink : 'inherit'}}/>
            </IconButton>
        </Flex>
        </CardActions>
        <CardContent>
          <Typography color={theme.palette.colors.dark} variant="body2">
            { children }
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default RecipeReviewCard;
