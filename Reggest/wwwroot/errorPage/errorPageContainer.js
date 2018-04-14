import React from 'react';
import { compose, withProps, flattenProp } from 'recompose';

import ErrorPage from './errorPage';

const createProps = ({ status, error }) => {
  switch (status) {
    case 404:
      return { error: 'The page could not be found.' };
    default:
      return { error };
  }
};

const enhance = compose(
  withProps(createProps),
);

const ErrorPageContainer = enhance(ErrorPage);

export const routeConfig = {
  render: ({ props }) => props && (
    <ErrorPageContainer
      status={parseInt(props.params.status, 10)}
      error={props.location.state.error}
    />
  ),
};

export default ErrorPageContainer;
