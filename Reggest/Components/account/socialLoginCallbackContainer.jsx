/* eslint-disable import/prefer-default-export */
import React from 'react';
import { graphql } from 'react-relay';
import { RedirectException } from 'found';

import withRouteValidation from '../app/routing/withRouteValidation';
import SocialLoginConfrimationContainer from './socialLoginConfirmationContainer';

const query = graphql`
  query socialLoginCallbackContainerQuery {
    externalLoginCallback {
      loginProvider,
      userName
      user {
        userName
      }
    }
  }
`;

const render = (route) => {
  if (route.props) {
    // User already has an account that is logged in
    if (route.props.externalLoginCallback.user) {
      throw new RedirectException({
        pathname: route.props.params.returnUrl,
        state: { loggedInUserName: route.props.externalLoginCallback.user.userName },
      });
    } else {
      // associate the users account
      return (
        <SocialLoginConfrimationContainer
          userName={route.props.externalLoginCallback.userName}
          loginProvider={route.props.externalLoginCallback.loginProvider}
          returnUrl={route.props.params.returnUrl}
        />
      );
    }
  }

  return null;
};

export const routeConfig = {
  query,
  prepareVariables: ({ returnUrl }) => ({ returnUrl }),
  render: (route) => {
    if (route.match.params.remoteError) {
      // eslint-disable-next-line no-param-reassign
      route.error = {
        _error: ['An error has occured with the social login.'],
      };
    }

    return withRouteValidation(route)(render);
  },
};
