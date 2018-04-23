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
              description
              daysPerWeek
              timeToWorkout {
                hours
                minutes
              }
              ...variationPlansContainer_fitnessPlan
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
    const fitnessPlansPoints = question.fitnessPlanAnswerPoints
      .filter(x => x.fitnessPlan.name)
      .map(x => ({
        points: x.points,
        ...x.fitnessPlan,
      }));

    dispatch(rankFitnessPlans(fitnessPlansPoints, points));
  });
};
