import React from 'react';
import Paper from '@mui/material/Paper';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { theme } from '~/styles';
import './index'

const SearchBar = () => {
  return (
    <Paper
      className='searchBar'
      component="form"
      sx={{
        p: '2px 4px', display: 'flex', alignItems: 'center', width: '90%',
        background: theme.palette.background.disabled,
        borderRadius: '24px',
        position: 'absolute',
        top: '1rem'
      }}
    >
      <IconButton
        type="submit"
        sx={
          { p: '10px',
            color: theme.palette.primary.main,
          }
        }
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Procure por um lugar para ficar"
        inputProps={{ 'aria-label': 'Look for a place to stay' }}
      />
    </Paper>
  );
}

export default SearchBar;
