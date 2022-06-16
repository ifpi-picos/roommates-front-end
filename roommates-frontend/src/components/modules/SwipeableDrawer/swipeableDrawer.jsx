import React, { useEffect } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Box, Typography, SwipeableDrawer, CardHeader, Avatar } from '@mui/material';

import { theme } from '~/styles'
import { DefaultButton, Flex } from '~/components/elements';
import Card from '../Card';

const drawerBleeding = 0;

const StyledDrawer = styled(Box)(() => ({
  height: '100%',
  backgroundColor:
    theme.palette.background.lightest,
}));

const SwipeableEdgeDrawer = ({ open, toggleDrawer, currentPost }) => {
  let container;

  useEffect(() => {
    if (window !== undefined) {
      container = window.document.body
    }

    console.log(currentPost)
  }, [])

  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            padding: '1rem 0',
            height: 'auto',
            overflow: 'visible',
          },
        }}
      />

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledDrawer
          sx={{
            padding: '1.5rem 1rem',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
          }}
        >
          <Typography sx={{ color: theme.palette.primary.main }}>Ficamos feliz por ter encontrado um lugar para ficar</Typography>
          <Flex alignItems="flex-end">
            <DefaultButton size='small' buttonText='R$ 100,00' />
          </Flex>

        </StyledDrawer>
        <StyledDrawer
          sx={{
            padding: '0 1rem',
          }}
        >
          <Card
            images={currentPost.images}
            starRating={currentPost.starRating}
            totalComments={currentPost.totalComments}
          >
            <Flex direction='row' alignItems="center">
              {currentPost.description}
              <CardHeader
                avatar={
                  <Avatar alt="Remy Sharp"
                    src={currentPost.host.image}
                    sx={{ width: 56, height: 56 }}
                  />

                }
              />
            </Flex>
          </Card>

          <DefaultButton buttonText='Entrar em contato com o anfitrião' />
        </StyledDrawer>
      </SwipeableDrawer>
    </>
  );
}

export default SwipeableEdgeDrawer;
