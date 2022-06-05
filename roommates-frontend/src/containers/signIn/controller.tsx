import React from 'react';
import { withTemplateInitialPage } from '~/hoc';

import View from './view';

const Controller = props => {
  return <View {...props} />;
};

export default withTemplateInitialPage(Controller);
