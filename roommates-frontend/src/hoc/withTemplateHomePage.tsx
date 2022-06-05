import React from 'react';
import { Container } from '~/components';

const withTemplateHomePage = Component => {
  const ExtendedComponent = props => {
    return (
     <Container>
      <Component {...props} />
     </Container>
    )
  };

  return ExtendedComponent;
};

export default withTemplateHomePage;
