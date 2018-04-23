/* eslint-disable import/prefer-default-export */
import { graphql } from 'react-relay';
import { RedirectException } from 'found';

import { showEmailConfirmationPopup } from './actions';
import withRouteValidation from '../app/routing/withRouteValidation';

const query = graphql`
  query confirmEmailContainerQuery(
    $userId: String!
    $token: String!
  ) {
    confirmEmail(userId: $userId, token: $token)
  }
`;

const render = (route) => {
  if (route.props) {
    route.props.context.store.dispatch(showEmailConfirmationPopup());

    throw new RedirectException('/');
  }

  return null;
};

export const routeConfig = {
  query,
  prepareVariables: ({ userId, token }) => ({ userId, token }),
  render: route => withRouteValidation(route)(render),
};
