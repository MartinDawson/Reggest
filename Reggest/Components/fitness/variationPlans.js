import React from 'react';
import PropTypes from 'prop-types';

import styles from './fitnessPlans.less';

const VariationPlans = ({ variationPlans }) => (
  <div>
    <div className={styles.daysPerWeek}>
      <span className={styles.label}>
        Alternative workouts per week:
      </span>
      <span className={styles.answers}>
        {variationPlans.map((variationPlan, i) => (
          <span key={variationPlan.fitnessPlanId} className={styles.answer}>
            {variationPlan.daysPerWeek}{i < (variationPlans.length - 1) ? '/' : null}
          </span>
        ))}
      </span>
      days
    </div>
  </div>
);

VariationPlans.propTypes = {
  variationPlans: PropTypes.arrayOf(
    PropTypes.shape({
      daysPerWeek: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default VariationPlans;
