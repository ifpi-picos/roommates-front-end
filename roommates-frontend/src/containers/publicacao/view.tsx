import React from 'react';
import { Typography, Box, CardHeader, Avatar, Stack, Rating, TextField} from '@mui/material';

import { DefaultButton, Flex, Post } from '~/components';
import { theme } from '~/styles'

const View = ({ currentPost }) => {
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
            <DefaultButton buttonText="Ver disponibilidade" />
          </Flex>
        </Box>
      </Box>
    </>
  )
};


export default View;
