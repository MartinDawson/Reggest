import React from 'react';
import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

// import ConfirmEmail from '../../email/confirmEmail/confirmEmail';
// import sendEmailMutation from '../../email/sendEmailMutation';
import loginMutation from './loginMutation';

const mutation = graphql`
  mutation registerMutation(
    $input: RegisterInput!
  ) {
    register(input: $input) {
      user {
        userId,
      },
      emailConfirmationToken
    }
  }
`;

export default ({ username, password, email }) => {
  const variables = {
    input: {
      username,
      password,
      email,
    },
  };

  return createMutation(
    mutation,
    variables,
  ).then(({ register }) => {
    // const emailMessage = renderEmail(
    //   <ConfirmEmail confirmEmailLink={`${window.location.origin}/account/confirmEmail/${register.user.userId}/${register.emailConfirmationToken}`} />,
    // );
    // const subject = 'Confirm your email';

    // const loginPromise = loginMutation({ username, password, rememberMe: true });
    // const sendEmailPromise = sendEmailMutation(email, subject, emailMessage)
    //   .catch(() => Promise.reject({
    //     _error: ['We could\'t send you an email to confirm your account registration.'],
    //   }));

    // return Promise.all([loginPromise, sendEmailPromise]);
  });
};
