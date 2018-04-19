import React from 'react';
import PropTypes from 'prop-types';

const FitnessPlansRanked = ({ rankedFitnessPlans }) => (
  <div>
    {rankedFitnessPlans.map(rankedFitnessPlan =>
      <div key={rankedFitnessPlan.id}>{rankedFitnessPlan.name}</div>
    )}
    <div>
      Subscribe to our newsletter to see the rest of your fitness plans
      and keep updated.
      It takes 10 seconds and we will never spam you.
    </div>
  </div>
);

FitnessPlansRanked.propTypes = {
  rankedFitnessPlans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FitnessPlansRanked;
