import React from "react";

import { BottomNavigationAction } from '@mui/material';
import { Search, MapsHomeWork, FavoriteBorder, Person } from '@mui/icons-material';

import { theme } from "~/styles";

const SimpleBottomNavigationAction = () => {
  const actions = [
    {
      label: 'Pesquisar',
      value: 'search',
      icon: <Search sx={{ color: theme.palette.primary.main }} />
    },
    {
      label: 'Imóveis',
      value: 'properties',
      icon: <MapsHomeWork sx={{ color: theme.palette.primary.main }} />
    },
    {
      label: 'Favoritos',
      value: 'favorites',
      icon: <FavoriteBorder sx={{ color: theme.palette.primary.main }} />
    },
    {
      label: 'Perfil',
      value: 'profile',
      icon: <Person sx={{ color: theme.palette.primary.main }} />
    }
  ]
  return (
    <>
      {
        actions.map((action, index) =>
          <BottomNavigationAction
            key={index}
            showLabel
            sx={{ justifyContent: 'space-evenly' }}
            label={action.label}
            value={action.value}
            icon={action.icon}
          />
        )
      }
    </>
  )
}

export default SimpleBottomNavigationAction;
