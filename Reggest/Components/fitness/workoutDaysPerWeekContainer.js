import { compose, flattenProp } from 'recompose';
import { fragment } from 'relay-compose';
import { graphql } from 'react-relay';

import WorkoutDaysPerWeek from './workoutDaysPerWeek';

const fragments = graphql`
  fragment workoutDaysPerWeekContainer_plan on Plan {
    workoutDaysPerWeek
  }
`;

export default compose(
  fragment(fragments),
  flattenProp('plan'),
)(WorkoutDaysPerWeek);
