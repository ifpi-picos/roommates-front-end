import React from 'react';
import { BottomNavigation, Container, Flex, SearchBar } from '~/components';

const withTemplateHomePage = Component => {
  const ExtendedComponent = props => {
    return (
      <Flex justifyContent="space-between" alignItems="center">
        <Container>
          <SearchBar />
          <Component {...props} />
        </Container>
        <BottomNavigation />
      </Flex>
    )
  };

  return ExtendedComponent;
};

export default withTemplateHomePage;
