import { graphql } from 'react-relay';
import { createMutation } from 'relay-compose';

import { addPoints } from '../user/actions';

const mutation = graphql`
  mutation submitAnswerMutation(
    $input: SubmitAnswerInput!
  ) {
    submitAnswer(input: $input) {
      answer {
        points
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
    const { fitnessPlanAnswerPoints, points } = submitAnswer.answer;
    const fitnessPlansPoints = fitnessPlanAnswerPoints.map(x => ({
      name: x.fitnessPlan.name,
      points: x.points,
    }));

    dispatch(addPoints(fitnessPlansPoints, points));
  });
};
