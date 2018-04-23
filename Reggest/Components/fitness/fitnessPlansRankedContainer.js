import { connect } from 'react-redux';
import { compose } from 'recompose';

import fitnessPlansRanked from './fitnessPlansRaked';

const mapStateToProps = ({ user }) => ({
  rankedFitnessPlans: user.rankedFitnessPlans,
});

export default compose(
  connect(mapStateToProps),
)(fitnessPlansRanked);
