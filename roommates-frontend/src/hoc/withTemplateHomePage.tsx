import React from 'react';
import { BottomNavigation, BottomNavigationAction, Container, Flex, SearchBar } from '~/components';

const withTemplateHomePage = Component => {
  const ExtendedComponent = props => {
    return (
      <Flex justifyContent="space-between" alignItems="center">
        <Container>
          <SearchBar />
            <Component {...props} />
        </Container>
        <BottomNavigation>
          <BottomNavigationAction />
        </BottomNavigation>
      </Flex>
    )
  };

  return ExtendedComponent;
};

export default withTemplateHomePage;
