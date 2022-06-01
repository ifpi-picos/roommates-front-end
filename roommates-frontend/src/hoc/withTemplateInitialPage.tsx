import React from 'react';
import { Container, Paper } from '~/components';

const withTemplateInitialPage = Component => {
  const ExtendedComponent = props => {
    return (
      <Container>
        <Paper>
          <Component {...props} />
        </Paper>
      </Container>
    )
  };

  return ExtendedComponent;
};

export default withTemplateInitialPage;
