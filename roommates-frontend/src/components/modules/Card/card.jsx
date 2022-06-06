import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Favorite, Star } from '@mui/icons-material';
import { Flex } from '~/components/elements';
import { theme } from '~/styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const RecipeReviewCard = ({ image, startRating, comments, children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots
      >
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
            <Star sx={{fontSize: '1rem', marginRight: '5px'}}/>
            <Typography variant='span' textAlign="center" sx={{fontSize: '.85rem'}}>({ startRating })</Typography>
          </IconButton>
          <Box>
          <Typography variant='span' sx={{fontSize: '.85rem', marginRight: '5px'}}>Comentários</Typography>
          <Typography variant='span' sx={{fontSize: '.85rem'}}>{ comments }</Typography>
          </Box>
          <IconButton aria-label="add to favorites">
            <Favorite sx={{fontSize: '1.5rem'}}/>
          </IconButton>
       </Flex>
      </CardActions>
      <CardContent>
        <Typography color={theme.palette.colors.dark} variant="body2">
          { children }
        </Typography>
      </CardContent>
  </Card>
  );
}

export default RecipeReviewCard;