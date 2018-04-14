import React from 'react';
import { setDisplayName, wrapDisplayName, compose } from 'recompose';

import DisplayType from './displayType';

const withDisplayType = (Component) => {
  const DisplayTypeWrapper = props => (
    <DisplayType>
      {displayType => <Component {...props} displayType={displayType} />}
    </DisplayType>
  );

  return compose(
    setDisplayName(wrapDisplayName(Component, 'withDisplayType')),
  )(DisplayTypeWrapper);
};

export default withDisplayType;
