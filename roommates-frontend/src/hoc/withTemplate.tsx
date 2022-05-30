import React from 'react';
import InitialPage from '../components/InitialPage/initialPage';

const withTemplateInitialPage = Component => {
  const ExtendedComponent = props => {
    return (
        <InitialPage>
          <Component {...props} />
        </InitialPage>
    );
  };

  return ExtendedComponent;
};

export default withTemplateInitialPage;
