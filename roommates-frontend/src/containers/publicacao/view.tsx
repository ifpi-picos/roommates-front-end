import React, { useState } from 'react';
import { Typography, Box, CardHeader, Avatar, Stack, Rating, TextField, CardActions } from '@mui/material';

import { Assessments, BottomNavigation, Card, DefaultButton, BottomNavigationContact, ModalToGetInTouch, StarRating, Flex, Post } from '~/components';
import { theme } from '~/styles'


const View = ({ currentPost }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Post currentPost={currentPost} />
      <Box sx={{ padding: '2rem 1rem' }}>
        <Typography variant='h1' sx={{ fontSize: '22px', color: theme.palette.primary.main }}>Localização</Typography>
        <Typography>{currentPost.localization}</Typography>

        <Box sx={{ padding: '2rem 0' }}>
          <Typography variant='h1' sx={{ fontSize: '22px', color: theme.palette.primary.main }}>Quem está alugando</Typography>
          <CardHeader
            avatar={
              <Avatar alt="Remy Sharp"
                src={currentPost.host.image}
                sx={{ width: 56, height: 56 }}
              />

            }
            title={currentPost.host.name}
            subheader={currentPost.publicationDate}
          />
          <Typography>{currentPost.host.description}</Typography>
        </Box>

        <Box sx={{ padding: '2rem 0' }}>
          <Typography variant='h1' sx={{ fontSize: '22px', color: theme.palette.primary.main }}>Feedback</Typography>
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>

          <TextField
            sx={{ marginTop: '1rem' }}
            id="outlined-multiline-static"
            label="Multiline"
            fullWidth
            multiline
            rows={4}
            defaultValue="Faça um comentário sobre sua experiência aqui"
          />
        </Box>
        <Box sx={{ marginBottom: '5rem' }}>
          {
            currentPost.assessments.map(evaluation => {
              return (
                <Assessments evaluation={evaluation}/>
              )
            })
          }

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
