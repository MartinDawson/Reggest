import { connect } from 'react-redux';
import { graphql } from 'react-relay';
import { queryRenderer, fragment } from 'relay-compose';
import { compose } from 'recompose';

import fitnessPlansRanked from './fitnessPlansRaked';

const mapStateToProps = ({ user }) => ({
  rankedFitnessPlans: user.rankedFitnessPlans,
});

export default compose(
  connect(mapStateToProps),
)(fitnessPlansRanked);
