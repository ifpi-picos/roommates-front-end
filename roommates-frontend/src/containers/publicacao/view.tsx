import React, { useState } from 'react';
import { Typography, Box, CardHeader, Avatar, Stack, Rating, TextField } from '@mui/material';

import { Card, DefaultButton, Flex, Post, SwipeableDrawer } from '~/components';
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
                <>
                  <CardHeader
                    avatar={
                      <Avatar alt="Remy Sharp"
                        src={evaluation.profileImage}
                        sx={{ width: 56, height: 56 }}
                      />

                    }
                    title={evaluation.name}
                    subheader={currentPost.publicationDate}
                  />
                  <Typography>{evaluation.description}</Typography>
                </>
              )
            })
          }
        </Box>

        <Box sx={{ background: theme.palette.background.lightest, position: 'fixed', bottom: 0, right: '1rem', left: '1rem', padding: '1rem 0' }}>
          <Flex direction="row" alignItems="center" justifyContent="space-between" width="100%">
            <Typography sx={{ width: '100%' }} >R$ 250,00 /mês</Typography>
            <DefaultButton onClick={toggleDrawer(true)} buttonText="Ver disponibilidade" />
          </Flex>
        </Box>

        <SwipeableDrawer currentPost={currentPost} open={open} toggleDrawer={toggleDrawer}
          swipeableDrawerHeader={(
            <>
              <Typography sx={{ color: theme.palette.primary.main, fontSize: '1.125rem' }}>Ficamos feliz por ter encontrado um lugar para ficar</Typography>
              <Flex alignItems="flex-end">
                <DefaultButton size="small" fontSize=".85rem" buttonText='R$ 100,00' />
              </Flex>
            </>
          )}
          swipeableDrawerMain={
            <>
              <Card
                images={currentPost.images}
                starRating={currentPost.starRating}
                totalComments={currentPost.totalComments}
              >
                <Flex direction='row' alignItems="center">
                  {currentPost.description}
                  <CardHeader
                  sx={{ padding: '0 0 0 .5rem' }}
                    avatar={
                      <Avatar alt="Remy Sharp"
                        src={currentPost.host.image}
                        sx={{ width:48, height:48 }}
                      />

                    }
                  />
                </Flex>
              </Card>
            </>
          }

          swipeableDrawerFooter={
            <>
              <DefaultButton buttonText='Entrar em contato com o anfitrião' />
            </>
          }
        />
      </Box>
    </>
  )
};


export default View;
