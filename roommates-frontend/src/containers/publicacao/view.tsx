import React, { useState } from 'react';
import { Typography, Box,  Avatar, Stack, Rating, TextField, CardActions } from '@mui/material';

import { Assessments, BottomNavigation, CardHeader, DefaultButton, BottomNavigationContact, ModalToGetInTouch, StarRating, Flex, Post, Comments } from '~/components';
import { theme } from '~/styles'


const View = ({ currentPost }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Post currentPost={currentPost} boxShadow="none"/>
      <Box sx={{ padding: '2rem 1rem' }}>
        <Typography variant='h1' sx={{ fontSize: '22px', color: theme.palette.primary.main, marginBottom: '1rem' }}>Localização</Typography>
        <Typography>{currentPost.localization}</Typography>

        <Box sx={{ padding: '2rem 0' }}>
          <Typography variant='h1' sx={{ fontSize: '22px', color: theme.palette.primary.main, marginBottom: '1rem' }}>Quem está alugando</Typography>

          <CardHeader currentPost={currentPost}/>
          <Typography>{currentPost.host.description}</Typography>
        </Box>

        <Comments />

        <Box sx={{ marginBottom: '5rem' }}>
          <Assessments currentPost={currentPost} />

          <Box sx={{ padding: '1rem 2rem 2rem' }}>
            <DefaultButton variant="text" colors={theme.palette.primary.main} bg={theme.palette.background.lightest} buttonText="Ver mais feedbacks" />
          </Box>
        </Box>

        <BottomNavigation border="none">
          <BottomNavigationContact currentPost={currentPost} toggleDrawer={toggleDrawer} />
        </BottomNavigation>


        <ModalToGetInTouch currentPost={currentPost} open={open} toggleDrawer={toggleDrawer} />
      </Box>
    </>
  )
};


export default View;
