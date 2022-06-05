import React from 'react';

import { Container, Paper } from '~/components';
import { theme } from '~/styles';

const withTemplateInitialPage = Component => {
  const ExtendedComponent = props => {
    return (
      <Container bg={theme.palette.primary.main}>
        <Paper>
          <Component {...props} />
        </Paper>
      </Container>
    )
  };

  return ExtendedComponent;
};

export default withTemplateInitialPage;
