import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Search, MapsHomeWork, FavoriteBorder, Person } from '@mui/icons-material';

import { theme } from '~/styles';

const SimpleBottomNavigation = () => {
  const actions = [
    {
      label: 'Pesquisar',
      value: 'search',
      icon: <Search sx={{color: theme.palette.primary.main}} />
    },
    {
      label: 'Imóveis',
      value: 'properties',
      icon: <MapsHomeWork sx={{color: theme.palette.primary.main}}/>
    },
    {
      label: 'Favoritos',
      value: 'favorites',
      icon: <FavoriteBorder sx={{color: theme.palette.primary.main}}/>
    },
    {
      label: 'Perfil',
      value: 'profile',
      icon: <Person sx={{color: theme.palette.primary.main}}/>
    }
  ]
  return (
    <BottomNavigation
      showLabels
      sx={
        {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          minHeight: '8%',
          borderTop: '1px solid',
          borderColor: theme.palette.borders.gray
        }
      }
    >
      {
        actions.map((action, index) => {
          return (
            <BottomNavigationAction
              key={index}
              sx={{ justifyContent: 'space-evenly' }}
              label={action.label}
              value={action.value}
              icon={action.icon}
            />
          )
        })
      }
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
