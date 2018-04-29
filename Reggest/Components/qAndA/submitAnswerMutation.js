import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

import { rankFitnessPlans } from '../user/actions';

const mutation = graphql`
  mutation submitAnswerMutation(
    $input: SubmitAnswerInput!
  ) {
    submitAnswer(input: $input) {
      answer {
        points
        question {
          planAnswerPoints {
            points
            fitnessPlan {
              planId
            }
          }
        }
      }
    }
  }
`;

export default (id, dispatch) => {
  const variables = {
    input: {
      id,
    },
  };

  return createMutation(
    mutation,
    variables,
  ).then(({ submitAnswer }) => {
    const { question, points } = submitAnswer.answer;

    dispatch(rankFitnessPlans(question, points));
  });
};
