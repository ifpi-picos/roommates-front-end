import React from 'react';
import { Box, Rating, Stack, TextField, Typography } from '@mui/material';

import { theme } from '~/styles';

const Comments = () => {
  return (
    <Box sx={{ padding: '2rem 0' }}>
      <Typography variant='h1' sx={{ fontSize: '22px', color: theme.palette.primary.main, marginBottom: '1.5rem' }}>Conte-nos sua experiência</Typography>
      <Stack spacing={1}>
        <Rating sx={{ fontSize: '1.5rem', alignSelf: 'flex-end' }} defaultValue={2.5} precision={0.5} />
      </Stack>

      <TextField
        sx={{ marginTop: '1rem' }}
        id="outlined-multiline-static"
        label="Registre sua experiência"
        fullWidth
        multiline
        rows={4}
        defaultValue="Faça um comentário sobre sua experiência aqui"
      />
    </Box>
  );
}

export default Comments;
