import React from 'react';

const withTemplateInitialPage = Component => {
  const ExtendedComponent = props => {
    return <Component {...props} />
  };

  return ExtendedComponent;
};

export default withTemplateInitialPage;
