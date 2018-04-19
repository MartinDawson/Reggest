import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

const mutation = graphql`
  mutation resetPasswordMutation(
    $input: ResetPasswordInput!
  ) {
    resetPassword(input: $input) {
      clientMutationId,
    }
  }
`;

export default ({ password, userId, token }) => {
  const variables = {
    input: {
      password,
      userId,
      token,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
