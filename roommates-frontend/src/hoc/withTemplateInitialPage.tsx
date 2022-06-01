import React from 'react';
import { Box, Paper } from '~/components';

const withTemplateInitialPage = Component => {
  const ExtendedComponent = props => {
    return (
      <Box>
        <Paper>
          <Component {...props} />
        </Paper>
      </Box>
    )
  };

  return ExtendedComponent;
};

export default withTemplateInitialPage;
