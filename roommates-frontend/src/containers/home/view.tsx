import { Box } from '@mui/material';
import React from 'react';

import { Feed } from '~/components';

const View = ({ posts }) => {
  return (
    <Box sx={{margin: '5rem 0'}}>
      <Feed posts={posts}/>
    </Box>
  )
};


export default View;
