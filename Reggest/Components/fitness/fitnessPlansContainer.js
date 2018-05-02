import { compose, flattenProp } from 'recompose';
import { fragment } from 'relay-compose';
import { graphql } from 'react-relay';

import FitnessPlans from './fitnessPlans';

const fragments = graphql`
  fragment fitnessPlansContainer on Query {
    fitnessPlans(
      order: $order
    ) {
      planId
      name
      description
      timeToWorkout {
        hours
        minutes
      }
      links {
        title
        url
      }
      ...workoutDaysPerWeekContainer_plan
    }
  }
`;

export default compose(
  fragment(fragments),
  flattenProp('data'),
)(FitnessPlans);
