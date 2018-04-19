import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

const mutation = graphql`
  mutation loginMutation(
    $input: LoginInput!
  ) {
    login(input: $input) {
      user {
        userId,
        userName
      }
    }
  }
`;

export default ({ username, password, rememberMe }) => {
  const variables = {
    input: {
      username,
      password,
      rememberMe,
    },
  };

  return createMutation(
    mutation,
    variables,
    null,
    null,
    (store) => {
      const login = store.getRootField('login');

      if (login !== null) {
        const user = login.getLinkedRecord('user');
        const root = store.getRoot();

        root.setLinkedRecord(user, 'user');
      }
    },
  );
};
