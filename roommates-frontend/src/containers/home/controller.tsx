import React from 'react';
import { withTemplateHomePage } from '~/hoc';

import View from './view';

const Controller = props => {
  return <View {...props} />;
};

export default withTemplateHomePage(Controller);
