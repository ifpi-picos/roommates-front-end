import React from 'react';
import { Box, Typography } from '@mui/material';

import { DefaultButton, Flex } from '~/components';
import { formatToMoney } from '~/services';
import { theme } from '~/styles';

const BottomNavigationContact = ({ currentPost, toggleDrawer }) => {

  return (
    <Box sx={{ background: theme.palette.background.lightest, position: 'fixed', bottom: 0, right: '1rem', left: '1rem', padding: '1rem 0' }}>
      <Flex direction="row" alignItems="center" justifyContent="space-between" width="100%">
        <Typography sx={{ width: '100%' }} >{formatToMoney(currentPost.propertyValue)} /mês</Typography>
        <DefaultButton onClick={toggleDrawer(true)} buttonText="Ver disponibilidade" />
      </Flex>
    </Box>
  );
}

export default BottomNavigationContact;
