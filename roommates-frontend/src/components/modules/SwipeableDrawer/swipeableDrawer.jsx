import React, { useEffect } from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Skeleton, SwipeableDrawer} from '@mui/material/Box';

import { theme } from '~/styles'

const drawerBleeding = 0;

const StyledDrawer = styled(Box)(() => ({
  height: '100%',
  backgroundColor:
    theme.palette.background.pink,
}));

const SwipeableEdgeDrawer = ({ open, toggleDrawer }) => {
  let container;

  useEffect(() => {
    if (window !== undefined) {
      container = window.document.body
    }
  }, [])

  const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.primary.main,
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
  }));

  return (
    <>
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
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
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
        </StyledDrawer>
        <StyledDrawer
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Skeleton variant="rectangular" height="100%" />
        </StyledDrawer>
      </SwipeableDrawer>
    </>
  );
}

export default SwipeableEdgeDrawer;
