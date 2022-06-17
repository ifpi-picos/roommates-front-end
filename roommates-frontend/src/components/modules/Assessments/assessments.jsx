import React from 'react';
import { Avatar, CardHeader, Rating, Typography } from '@mui/material';

import { Flex } from '~/components';

const Assessments = ({ evaluation }) => {

  return (
    <>
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <CardHeader
          sx={{ display: 'flex', alignItems: 'center' }}
          avatar={
            <Avatar alt={`Avatar de ${evaluation.name}`}
              src={evaluation.profileImage}
              sx={{ width: 56, height: 56 }}
            />

          }

          title={evaluation.name}
          subheader={<Rating sx={{ fontSize: '1rem', alignSelf: 'flex-end' }} readOnly defaultValue={5.0} precision={0.5} />}
        />
        <Typography sx={{ fontSize: '.75rem' }}>{evaluation.publicationDate}</Typography>
      </Flex>
      <Typography sx={{ fontSize: '.85rem' }}>{evaluation.description}</Typography>
    </>
  );
}

export default Assessments;
