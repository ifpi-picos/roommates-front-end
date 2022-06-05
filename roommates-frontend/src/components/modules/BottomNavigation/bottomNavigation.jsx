import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Search, MapsHomeWork, FavoriteBorder, Person } from '@mui/icons-material';
import { theme } from '~/styles';

const SimpleBottomNavigation = () => {
  return (
    <BottomNavigation showLabels sx={{position: 'absolute', bottom: 0, left: 0, right: 0, minHeight: '8%', borderTop: '1px solid', borderColor: theme.palette.borders.gray}}>
      <BottomNavigationAction
        sx={{justifyContent: 'space-evenly'}}
        label="Pesquisar"
        value="search"
        icon={<Search />}
      />
      <BottomNavigationAction
        sx={{justifyContent: 'space-evenly'}}
        label="Imóveis"
        value="properties"
        icon={<MapsHomeWork/>}
      />
      <BottomNavigationAction
        sx={{justifyContent: 'space-evenly'}}
        label="Favoritos"
        value="favorites"
        icon={<FavoriteBorder />}
      />
      <BottomNavigationAction sx={{justifyContent: 'space-evenly'}} label="Perfil" value="profile" icon={<Person />} />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
