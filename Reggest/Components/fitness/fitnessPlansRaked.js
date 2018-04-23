import React from 'react';
import PropTypes from 'prop-types';

import styles from './fitnessPlans.less';
import convertTimeToWorkout from '../shared/utilities/convertTimeToWorkout';
import VariationPlans from './variationPlansContainer';

const FitnessPlansRanked = ({ rankedFitnessPlans }) => (
  <div className={styles.fitnessPlans}>
    <ol>
      {rankedFitnessPlans.map(fitnessPlan => (
        <li key={fitnessPlan.fitnessPlanId} className={styles.fitnessPlanRanked}>
          <div>
            <div className={styles.name}>{fitnessPlan.name}</div>
            <div className={styles.stats}>
              <div className={styles.daysPerWeek}>
                <span className={styles.label}>
                  Workouts per week:
                </span>
                <span className={styles.answer}>
                  {fitnessPlan.daysPerWeek} days
                </span>
                {/* <VariationPlans fitnessPlan={fitnessPlan} /> */}
              </div>
              <div className={styles.timePerWorkout}>
                <span className={styles.label}>
                  Time per workout:
                </span>
                <span className={styles.answer}>
                  {convertTimeToWorkout(fitnessPlan.timeToWorkout)}
                </span>
              </div>
            </div>
            <div className={styles.description}>{fitnessPlan.description}</div>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

FitnessPlansRanked.propTypes = {
  rankedFitnessPlans: PropTypes.arrayOf(
    PropTypes.shape({
      fitnessPlanId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      daysPerWeek: PropTypes.number.isRequired,
      timeToWorkout: PropTypes.shape({
        hours: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
      }),
    }).isRequired,
  ).isRequired,
};

export default FitnessPlansRanked;
