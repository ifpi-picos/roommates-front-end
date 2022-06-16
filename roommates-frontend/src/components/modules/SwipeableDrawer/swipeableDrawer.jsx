import React, { useEffect } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Box, Typography, SwipeableDrawer, CardHeader, Avatar, CssBaseline } from '@mui/material';

import { theme } from '~/styles'
import { DefaultButton, Flex } from '~/components/elements';
import Card from '../Card';
import { formatToMoney } from '~/services/masks';

const drawerBleeding = 0;

const StyledDrawer = styled(Box)(() => ({
  height: '100%',
  backgroundColor:
    theme.palette.background.lightest,
    padding: '0 1.5rem  '
}));

const SwipeableEdgeDrawer = ({ open, toggleDrawer, currentPost, ...props }) => {
  let container;

  useEffect(() => {
    if (window !== undefined) {
      container = window.document.body
    }

    console.log(currentPost)
  }, [])

  return (
    <>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(70% - ${drawerBleeding}px)`,
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
            height: 'auto',
            padding: '1.5rem 1.5rem',
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
          }}
        >
          {props.swipeableDrawerHeader}

        </StyledDrawer>
        <StyledDrawer
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem 0'
          }}
        >
          {props.swipeableDrawerMain}
        </StyledDrawer>

        <StyledDrawer sx={{
          margin: '1.5rem 1rem'
        }}>
          {props.swipeableDrawerFooter}
        </StyledDrawer>
      </SwipeableDrawer>
    </>
  );
}

export default SwipeableEdgeDrawer;
