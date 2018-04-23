import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

const mutation = graphql`
  mutation subscribeNewsletterMutation(
    $input: SubscribeNewsletterInput!
  ) {
    subscribeNewsletter(input: $input) {
      clientMutationId
    }
  }
`;

export default ({ email, recaptcha }) => {
  const variables = {
    input: {
      email,
      recaptcha,
    },
  };

  return createMutation(
    mutation,
    variables,
  );
};
