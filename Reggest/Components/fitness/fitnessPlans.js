import React from 'react';
import PropTypes from 'prop-types';

import styles from './fitnessPlans.less';
import convertTimeToWorkout from '../shared/utilities/convertTimeToWorkout';
import WorkoutDaysPerWeek from './workoutDaysPerWeekContainer';

const FitnessPlans = ({ fitnessPlans }) => (
  fitnessPlans.map(fitnessPlan => (
    <li key={fitnessPlan.planId} className={styles.fitnessPlan}>
      <div className={styles.name}>{fitnessPlan.name}</div>
      <div className={styles.stats}>
        <div className={styles.workoutDaysPerWeek}>
          <span className={styles.label}>
            Workouts per week:
          </span>
          <WorkoutDaysPerWeek plan={fitnessPlan} />
        </div>
        <div className={styles.timePerWorkout}>
          <span className={styles.label}>
            Time per workout:
          </span>
          <span>
            {convertTimeToWorkout(fitnessPlan.timeToWorkout)}
          </span>
        </div>
      </div>
      <div className={styles.description}>{fitnessPlan.description}</div>
    </li>
  ))
);

FitnessPlans.propTypes = {
  fitnessPlans: PropTypes.arrayOf(
    PropTypes.shape({
      planId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      timeToWorkout: PropTypes.shape({
        hours: PropTypes.number.isRequired,
        minutes: PropTypes.number.isRequired,
      }),
    }).isRequired,
  ).isRequired,
};

export default FitnessPlans;
