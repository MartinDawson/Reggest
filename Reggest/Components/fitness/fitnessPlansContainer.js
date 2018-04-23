import { compose, flattenProp } from 'recompose';
import { fragment } from 'relay-compose';
import { graphql } from 'react-relay';

import FitnessPlans from './fitnessPlans';

const fragments = graphql`
  fragment fitnessPlansContainer on Query {
    fitnessPlans {
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
`;

export default compose(
  fragment(fragments),
  flattenProp('data'),
)(FitnessPlans);
