import React from 'react';
import { Typography, CardHeader, Avatar } from '@mui/material';

import { Card, DefaultButton, Flex, SwipeableDrawer } from '~/components';
import { theme } from '~/styles';

const ModalToGetInTouch = ({ currentPost, open, toggleDrawer }) => {
  return (
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
                  <Avatar alt={`Avatar de ${currentPost.host.name}`}
                    src={currentPost.host.image}
                    sx={{ width: 48, height: 48 }}
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
  );
}

export default ModalToGetInTouch;
