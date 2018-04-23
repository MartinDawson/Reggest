import React from 'react';
import { graphql } from 'react-relay';
// import { renderEmail } from 'react-html-email-browser';
import { createMutation } from 'relay-compose';

const mutation = graphql`
  mutation generateResetPasswordTokenMutation(
    $input: GenerateResetPasswordTokenInput!
  ) {
    generateResetPasswordToken(input: $input) {
      user {
        userId,
      },
      passwordResetToken
    }
  }
`;

export default ({ email }) => {
  const variables = {
    input: {
      email,
    },
  };

  return createMutation(
    mutation,
    variables,
  ).then(({ generateResetPasswordToken }) => {
    // const emailMessage = renderEmail(
    //   <ResetPasswordEmail
    //     resetPasswordLink={`${window.location.origin}/account/ResetPassword?token=${generateResetPasswordToken.passwordResetToken}
    //       &userId=${generateResetPasswordToken.user.userId}`}
    //   />,
    // );
    // const subject = 'Reset your password';

    // return sendEmailMutation(email, subject, emailMessage)
    //   .catch(() => Promise.reject({
    //     _error: ['We could\'t send you an email for you to reset your password.'],
    //   }));
  });
};
