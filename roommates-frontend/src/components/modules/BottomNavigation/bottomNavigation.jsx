import React from 'react';
import { BottomNavigation } from '@mui/material';

import { theme } from '~/styles';

const SimpleBottomNavigation = ({ children, ...props }) => {

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
          borderTop: props.border || '1px solid',
          borderColor: theme.palette.borders.gray,
          zIndex: 30
        }
      }
    >
      { children }
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
