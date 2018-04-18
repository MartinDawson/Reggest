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
          fitnessPlanAnswerPoints {
            points
            fitnessPlan {
              fitnessPlanId
              name
              parentFitnessPlan {
                id
              }
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
    const fitnessPlansPoints = question.fitnessPlanAnswerPoints.filter(x => x.fitnessPlan.name).map(x => ({
      name: x.fitnessPlan.name,
      id: x.fitnessPlan.fitnessPlanId,
      points: x.points,
    }));

    dispatch(rankFitnessPlans(fitnessPlansPoints, points));
  });
};
