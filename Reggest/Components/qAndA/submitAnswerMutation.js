import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

import { addPoints } from '../user/actions';

const mutation = graphql`
  mutation submitAnswerMutation(
    $input: SubmitAnswerInput!
  ) {
    submitAnswer(input: $input) {
      answer {
        fitnessPlanAnswerPoints {
          points
          fitnessPlan {
            name
          }
        }
      }
    }
  }
`;

export default (id, dispatch) => {debugger
  const variables = {
    input: {
      id,
    },
  };

  return createMutation(
    mutation,
    variables,
  ).then((submitAnswer) => {debugger
    const fitnessPlanAnswerPoints = submitAnswer.answer.fitnessPlanAnswerPoint;

    dispatch(addPoints(submitAnswer.answer.fitnessPlanAnswerPoint));
  });
};
