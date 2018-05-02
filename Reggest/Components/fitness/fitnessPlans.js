import React from 'react';
import PropTypes from 'prop-types';

import styles from './fitnessPlans.less';
import convertTimeToWorkout from '../shared/utilities/convertTimeToWorkout';
import WorkoutDaysPerWeek from './workoutDaysPerWeekContainer';

const FitnessPlans = ({ fitnessPlans }) => (
  fitnessPlans.map(fitnessPlan => (
    <li key={fitnessPlan.planId} className={styles.fitnessPlan}>
      <div>
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
        <ul className={styles.links}>
          <span className={styles.label}>
            Resources:
          </span>
          {fitnessPlan.links.map(link => (
            <li>
              <a href={link.url} className={styles.link} target="_blank" rel="noopener noreferrer">{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
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
      links: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  ).isRequired,
};

export default FitnessPlans;
