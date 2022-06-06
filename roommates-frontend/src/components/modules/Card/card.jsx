import Link from 'next/link';

import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

import { Carousel, Flex, FavoritedButton, StarRating, TotalComments } from '~/components';
import { theme } from '~/styles';

const RecipeReviewCard = ({ id, images, starRating, totalComments, children }) => {
  return (
    <Link href={`/publicacao/${id}`} sx={{ padding: '1rem 0' }}>
      <Card sx={{ maxWidth: 345 }}>
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
        <CardActions disableSpacing>
          <Flex direction="row" justifyContent="space-between" alignItems="center">
            <StarRating totalRating={starRating} />
            <TotalComments totalComments={totalComments}/>
            <FavoritedButton />
          </Flex>
        </CardActions>
        <CardContent>
          <Typography color={theme.palette.colors.dark} variant="body2">
            {children}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default RecipeReviewCard;
