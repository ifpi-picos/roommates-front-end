import React from 'react';
import { BottomNavigation } from '@mui/material';

import { theme } from '~/styles';

const SimpleBottomNavigation = ({ children }) => {

  return (
    <BottomNavigation
      showLabels
      sx={
        {
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          minHeight: '8%',
          borderTop: '1px solid',
          borderColor: theme.palette.borders.gray
        }
      }
    >
      { children }
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
